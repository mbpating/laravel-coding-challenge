@component('mail::message')

{{ $referrer->name }} has been using ContactOut, and thinks it could be of use for you.  
  
Here’s their invitation link for you:  
@component('mail::button',['url' => $referrer->referral_link . '/?refer=' . $referrer->referral_token . $referral->id])
    Referral Link
@endcomponent
  
ContactOut gives you access to contact details for about 75% of the world’s professionals.  
  
Great for recruiting, sales, and marketing outreach.  
  
It’s an extension that works right on top of LinkedIn.  
  
Here’s their invitation link again:  
@component('mail::button',['url' => $referrer->referral_link . '/?refer=' . $referrer->referral_token . $referral->id])
    Referral Link
@endcomponent

@endcomponent