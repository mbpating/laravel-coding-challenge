<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\Referral;
use App\Models\User;
use Illuminate\Support\Facades\Validator;

class ReferralController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        // $user = Auth::user();
        // $referrals = $user->referrals;
        $referrals = Referral::with('referrer')->get();
        return Inertia::render('Admin/index',[
            'referrals' => $referrals
        ]);
    }

    public function refer() {
        return Inertia::render('Referrals/index');
    }

    public function createReferrals(Request $request) {
        $user = $request->user();
        $input = $request->all();
        Validator::make($input, [
            'emails' => 'required'
        ])->after(function ($validator) use ($input, $user) {
            if (array_key_exists('emails',$input)) {
                $emails = json_decode($input['emails']);
                $duplicate_emails = array();
                //Checking if email in emails list has already been 'Referred' or 'Registered'
                foreach ($emails as $email) {
                    $referrals = Referral::where('email',$email)->first();
                    $users = User::where('email',$email)->first();
                    if (is_null($referrals) && is_null($users)) {
                        continue;
                    } else {
                        $duplicate_emails[] = $email;
                        break;
                    }
                }
                if (!empty($duplicate_emails)) {
                    $validator->errors()->add('emails', __('These emails has already been referred or registered. (' . str_replace(']','',str_replace('['
                    ,'',str_replace('"','',json_encode($duplicate_emails)))) . ')'));
                }
                //Check if emails list has duplicates
                $unique = array_unique($emails);
                $duplicates = array_diff_assoc($emails,$unique);
                if (!empty($duplicates)) {
                    $validator->errors()->add('emails', __('There are duplicate emails in this list. (' . str_replace(']','',str_replace('['
                    ,'',str_replace('"','',json_encode($duplicate_emails)))) . ')'));
                }
                //Check if user has already reached the maximum # of allowed referrals
                $referral_count = $user->referrals->count();
                if (($referral_count + count($emails))>10) {
                    $validator->errors()->add('emails', __('You have reached the maximum referral count.'));
                }
            }
        })->validateWithBag('referForm');
    
        foreach (json_decode($input['emails']) as $email) {
            Referral::create([
                'referrer_id' => $user->id,
                'status' => 'Referred',
                'email' => $email
            ]);
        }

        return Inertia::render('Referrals/success');
    }
}
