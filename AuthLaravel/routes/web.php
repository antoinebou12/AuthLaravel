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
    if (Auth::user()->hasRoles('admin')) {
        $users = \App\Models\User::all();
        return Inertia::render('AdminDashboard', ['users' => $users]);
    } else {
        return Inertia::render('Dashboard');
    }
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/forgot-password', function () {
    return Inertia::render('Auth/ForgotPassword');
})->middleware('guest')->name('password.request');

Route::get('/admin', function () {
    if (Auth::user()->hasRoles('admin')) {
        // PASS ALL USERS TO REQUEST
        $users = \App\Models\User::all();
        return Inertia::render('AdminDashboard', ['users' => $users]);
    } else {
        return redirect()->route('dashboard');
    }
    return redirect()->route('dashboard');
})->middleware(['admin'])->name('admin');

Route::post('/forgot-password', function (Request $request) {
    $request->validate(['email' => 'required|email']);

    $status = Password::sendResetLink(
        $request->only('email')
    );

    return $status === Password::RESET_LINK_SENT
                ? back()->with(['status' => __($status)])
                : back()->withErrors(['email' => __($status)]);
})->middleware('guest')->name('password.email');


Route::get('/reset-password/{token}', function (string $token) {
    return view('auth.reset-password', ['token' => $token]);
})->middleware('guest')->name('password.reset');

Route::post('/reset-password', function (Request $request) {
    $request->validate([
        'token' => 'required',
        'email' => 'required|email',
        'password' => 'required|min:8|confirmed',
    ]);

    $status = Password::reset(
        $request->only('email', 'password', 'password_confirmation', 'token'),
        function (User $user, string $password) {
            $user->forceFill([
                'password' => Hash::make($password)
            ])->setRememberToken(Str::random(60));

            $user->save();

            event(new PasswordReset($user));
        }
    );

    return $status === Password::PASSWORD_RESET
                ? redirect()->route('login')->with('status', __($status))
                : back()->withErrors(['email' => [__($status)]]);
})->middleware('guest')->name('password.update');



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

require __DIR__.'/auth.php';
