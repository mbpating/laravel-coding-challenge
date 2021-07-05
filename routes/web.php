<?php

use App\Http\Controllers\ReferralController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

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

Route::get('/', function (Request $request) {
    if ($request->has('refer')) {
        session(['referrer' => $request->query('refer')]);
        return redirect('register');
    }
    return view('welcome');
})->name('root');

Auth::routes();

Route::group(['middleware' => ['auth']], function() {
    Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
    
    Route::get('/admin/referrals', [ReferralController::class, 'index'])->name('admin.referrals');

    Route::get('/referrals',[ReferralController::class,'refer'])->name('referrals');

    Route::post('/refer',[ReferralController::class,'createReferrals'])->name('refer');
});

