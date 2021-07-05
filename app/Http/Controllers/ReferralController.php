<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\Referral;
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
        ])->after(function ($validator) use ($input) {
            if (array_key_exists('emails',$input)) {
                $emails = json_decode($input['emails']);
                $duplicate_emails = array();
                foreach ($emails as $email) {
                    $referral = Referral::where('email',$email)->first();
                    if (is_null($referral)) {
                        continue;
                    } else {
                        $duplicate_emails[] = $email;
                        break;
                    }
                }
                if (!empty($duplicate_emails)) {
                    $validator->errors()->add('emails', __('There are duplicate emails in the list. (' . str_replace(']','',str_replace('['
                    ,'',str_replace('"','',json_encode($duplicate_emails)))) . ')'));
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

        return redirect()->route('referrals');
    }
}
