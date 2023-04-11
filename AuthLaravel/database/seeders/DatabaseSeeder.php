<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use \App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Administrator',
            'username' => 'admin',
            'email' => 'admin@example.com',
            'phone' => '1234567890',
            'roles' => 'roles:admin',
            'permissions' => 'permissions:admin',
            'password' => bcrypt('password'),
            'login_attempts' => 0,
        ]);

        User::factory()->create([
            'name' => 'DefaultUser',
            'username' => 'defaultuser',
            'phone' => '2345678901',
            'email' => 'user@example.com',
            'roles' => 'roles:user',
            'permissions' => 'permissions:user',
            'password' => bcrypt('password'),
            'login_attempts' => 0,
        ]);

        User::factory()->create([
            'name' => 'Residential',
            'username' => 'residential',
            'email' => 'residential@example.com',
            'phone' => '3456789012',
            'roles' => 'roles:residential',
            'permissions' => 'permissions:user',
            'password' => bcrypt('password'),
            'login_attempts' => 0,
        ]);

        User::factory()->create([
            'name' => 'Business',
            'username' => 'business',
            'email' => 'business@example.com',
            'phone' => '4567890123',
            'roles' => 'roles:business',
            'permissions' => 'permissions:user',
            'password' => bcrypt('password'),
            'login_attempts' => 0,
        ]);

    }
}
