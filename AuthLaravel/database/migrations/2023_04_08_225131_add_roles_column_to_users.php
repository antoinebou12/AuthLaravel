<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRolesColumnToUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->enum('roles', ['roles:admin', 'roles:user', 'roles:residential', 'roles:business'])->default('roles:user');
            $table->enum('permissions', ['permissions:admin', 'permissions:user'])->default('permissions:user');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('roles');
            $table->dropColumn('permissions');
        });
    }
};
