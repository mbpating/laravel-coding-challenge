<?php

namespace App\Observers;

use App\Models\Referral;
use Illuminate\Support\Facades\Mail;
use App\Mail\ReferralEmail;

class ReferralObserver
{
    /**
     * Handle the Referral "created" event.
     *
     * @param  \App\Models\Referral  $referral
     * @return void
     */
    public function created(Referral $referral)
    {
        //
        $this->sendMailable($referral,ReferralEmail::class);
    }

    /**
     * Handle the Referral "updated" event.
     *
     * @param  \App\Models\Referral  $referral
     * @return void
     */
    public function updated(Referral $referral)
    {
        //
    }

    /**
     * Handle the Referral "deleted" event.
     *
     * @param  \App\Models\Referral  $referral
     * @return void
     */
    public function deleted(Referral $referral)
    {
        //
    }

    /**
     * Handle the Referral "restored" event.
     *
     * @param  \App\Models\Referral  $referral
     * @return void
     */
    public function restored(Referral $referral)
    {
        //
    }

    /**
     * Handle the Referral "force deleted" event.
     *
     * @param  \App\Models\Referral  $referral
     * @return void
     */
    public function forceDeleted(Referral $referral)
    {
        //
    }

    /**
     * Handle sending of emails 
     *  
     * */

    private function sendMailable(Referral $referral, $mailable)
    {
        $referrer = $referral->referrer;
        Mail::to($referral->email)->send(
            new $mailable($referral, $referrer)
        );
    }
}
