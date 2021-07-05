<?php

namespace Database\Seeders;

use App\Models\Referral;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Schema;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Schema::disableForeignKeyConstraints();
        Referral::truncate();
        User::truncate();
        User::factory(10)->create();
        Referral::factory(30)->create();
        Schema::enableForeignKeyConstraints();
    }
}
