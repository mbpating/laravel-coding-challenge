<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Referral;
use App\Providers\RouteServiceProvider;
use App\Models\User;
use App\Notifications\ReferralSuccessful;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Notification;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Show the application registration form.
     * 
     * @return \Illuminate\Http\Response
     */
    public function showRegistrationForm(Request $request)
    {
        $referral_token = session()->pull('referrer',null);
        $referral_email = '';

        if (!is_null($referral_token)) {
            $referral_id = substr($referral_token,6);
            $referral = Referral::find($referral_id);
            if ($referral->status=='Registered')
                return view('auth.registered');
            else
                $referral_email = $referral->email;
        }
        return view('auth.register',['email'=>$referral_email]);
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\Models\User
     */
    protected function create(array $data)
    {
        do {
            $referral_token = Str::random(6);
            $user = User::where('referral_token',$referral_token)->first();
        } while (!is_null($user));
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'referral_token' => $referral_token
        ]);
    }

    public function registered(Request $request, $user) {
        if ($user->referrer !== null) {
            $referral = Referral::where('email',$user->email)->first();
            $referral->status = 'Registered';
            $referral->save();
        }
        return redirect($this->redirectPath());
    }
}
