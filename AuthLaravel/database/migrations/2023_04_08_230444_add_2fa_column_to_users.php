<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Add2FAColumnToUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->enum('2fa', ['enabled','disabled'])->default('disabled');
            $table->string('2fa_code')->nullable();
            $table->timestamp('2fa_expires_at')->nullable();
            $table->string('recover_code')->default('1234567890');
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
            $table->dropColumn('2fa');
            $table->dropColumn('2fa_code');
            $table->dropColumn('2fa_expires_at');
            $table->dropColumn('recover_code');
        });
    }
};