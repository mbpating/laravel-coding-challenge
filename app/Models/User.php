<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'referral_token'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * The accessors to append to the model's array form.
     * 
     * @var array
     */
    protected $appends = [
        'referral_link',
        'referral_count'
    ];

    /** 
     * Get the user's referral link.
     * 
     * @return string
     */
    public function getReferralLinkAttribute() {
        return $this->referral_link = route('root');
    }

    /**
     * Get the user's referral points/count
     * 
     * @return integer
     */
    public function getReferralCountAttribute() {
        return $this->referrals->count();
    }

    /**
     * A user has many referrals
     * 
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function referrals() {
        return $this->hasMany(Referral::class,'referrer_id');
    }
}
