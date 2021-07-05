<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ReferralEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $referral;
    public $referrer;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($referral,$referrer)
    {
        //
        $this->referral = $referral;
        $this->referrer = $referrer;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject($this->referrer->name . ' recommends ContactOut')->markdown('emails.referral');
    }
}
