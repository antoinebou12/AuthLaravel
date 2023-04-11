<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Socialite\Facades\Socialite;

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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/admin_dashboard', function () {
    return Inertia::render('AdminDashboard');
})->middleware(['auth', 'hasrole:admin'])->name('admin_dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::group(['middleware' => ['auth', 'user'], 'prefix' => 'user'], function () {
    Route::get('/', 'HomeController@index')->name('user_dashboard');
    Route::get('/list', 'UserController@list')->name('user_list');
});

// admin protected routes
Route::group(['middleware' => ['auth', 'hasrole:admin'], 'prefix' => 'admin'], function () {
    Route::get('/', 'HomeController@index')->name('admin_dashboard');
    Route::get('/users', 'AdminUserController@list')->name('admin_users');
});

// Route::get('/forgot-password', function () {
//     return Inertia::render('Auth/ForgotPassword');
// })->middleware('guest')->name('password.request');

// Route::post('/forgot-password', function (Request $request) {
//     $request->validate(['email' => 'required|email']);

//     $status = Password::sendResetLink(
//         $request->only('email')
//     );

//     return $status === Password::RESET_LINK_SENT
//                 ? back()->with(['status' => __($status)])
//                 : back()->withErrors(['email' => __($status)]);
// })->middleware('guest')->name('password.email');


// Route::get('/auth/redirect', function () {
//     return Socialite::driver('github')->redirect();
// });

// Route::get('/auth/callback', function () {
//     $githubUser = Socialite::driver('github')->user();

//     $user = User::updateOrCreate([
//         'github_id' => $githubUser->id,
//     ], [
//         'name' => $githubUser->name,
//         'email' => $githubUser->email,
//         'github_token' => $githubUser->token,
//         'github_refresh_token' => $githubUser->refreshToken,
//     ]);

//     Auth::login($user);

//     return redirect('/dashboard');
// });

// Route::get('/reset-password/{token}', function (string $token) {
//     return view('auth.reset-password', ['token' => $token]);
// })->middleware('guest')->name('password.reset');

// Route::post('/reset-password', function (Request $request) {
//     $request->validate([
//         'token' => 'required',
//         'email' => 'required|email',
//         'password' => 'required|min:8|confirmed',
//     ]);

//     $status = Password::reset(
//         $request->only('email', 'password', 'password_confirmation', 'token'),
//         function (User $user, string $password) {
//             $user->forceFill([
//                 'password' => Hash::make($password)
//             ])->setRememberToken(Str::random(60));

//             $user->save();

//             event(new PasswordReset($user));
//         }
//     );

//     return $status === Password::PASSWORD_RESET
//                 ? redirect()->route('login')->with('status', __($status))
//                 : back()->withErrors(['email' => [__($status)]]);
// })->middleware('guest')->name('password.update');


require __DIR__.'/auth.php';
