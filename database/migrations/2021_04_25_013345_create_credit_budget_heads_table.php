<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCreditBudgetHeadsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('credit_budget_heads', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('sub_budget_head_id')->unsigned();
            $table->foreign('sub_budget_head_id')->references('id')->on('sub_budget_heads')->onDelete('cascade');
            $table->text('description');
            $table->decimal('approved_amount', $precision = 30, $scale = 2)->default(0);
            $table->decimal('booked_expenditure', $precision = 30, $scale = 2)->default(0);
            $table->decimal('actual_expenditure', $precision = 30, $scale = 2)->default(0);
            $table->decimal('booked_balance', $precision = 30, $scale = 2)->default(0);
            $table->decimal('actual_balance', $precision = 30, $scale = 2)->default(0);
            $table->bigInteger('expected_performance')->default(0);
            $table->bigInteger('actual_performance')->default(0);
            $table->boolean('exhausted')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('credit_budget_heads');
    }
}
