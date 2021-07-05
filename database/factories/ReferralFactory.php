<?php

namespace Database\Factories;

use App\Models\Referral;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;

class ReferralFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Referral::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $user = User::inRandomOrder()->first();
        return [
            'referrer_id' => $user->id,
            'status' => $this->faker->randomElement(['Referred','Registered']),
            'email' => $this->faker->unique()->safeEmail()
        ];
    }
}
