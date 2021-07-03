<?php

use App\Http\Controllers\ReferralsController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect('/admin/referrals');
});

Auth::routes();

Route::get('/admin/referrals', [ReferralsController::class, 'index'])->name('admin.referrals');

Route::get('/referrals',[ReferralsController::class,'refer'])->name('referrals');
