<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddLogsColumnToUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->integer('login_attempts')->default(0);
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent();
            $table->timestamp('login_at')->nullable();
            $table->string('login_ip')->nullable();
            $table->timestamp('logout_at')->nullable();
            $table->string('logout_ip')->nullable();
            $table->timestamp('last_login_at')->nullable();
            $table->string('last_login_ip')->nullable();
            $table->string('browser')->nullable();
            $table->string('os')->nullable();
            $table->string('device')->nullable();

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
            $table->dropColumn('created_at');
            $table->dropColumn('updated_at');
            $table->dropColumn('login_at');
            $table->dropColumn('login_ip');
            $table->dropColumn('logout_at');
            $table->dropColumn('logout_ip');
            $table->dropColumn('last_login_at');
            $table->dropColumn('last_login_ip');
            $table->dropColumn('browser');
            $table->dropColumn('os');
            $table->dropColumn('device');
        });
    }
};