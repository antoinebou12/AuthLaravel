<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Validation\Rules;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
        Rules\Password::defaults(function () {
            return [
                'min' => 8,
                'mixed_case' => true,
                'numbers' => true,
                'letters' => true,
                'symbols' => true,
                'uncompromised' => true,
            ];
        });
    }
}
