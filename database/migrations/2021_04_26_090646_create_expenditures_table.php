<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExpendituresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('expenditures', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('controller_id')->unsigned();
            $table->foreign('controller_id')->references('id')->on('users')->onDelete('cascade');
            $table->bigInteger('sub_budget_head_id')->unsigned();
            $table->foreign('sub_budget_head_id')->references('id')->on('sub_budget_heads')->onDelete('cascade');
            $table->bigInteger('batch_id')->default(0);
            $table->string('reference_no')->unique()->nullable();
            $table->string('beneficiary');
            $table->text('description');
            $table->string('additional_info')->nullable();
            $table->enum('payment_type', ['staff-payment', 'third-party'])->default('staff-payment');
            $table->enum('type', ['staff-claim', 'touring-advance', 'others'])->default('others');
            $table->decimal('amount', $precision = 30, $scale = 2)->default(0);
            $table->enum('status', ['cleared', 'batched'])->default('cleared');
            $table->boolean('trackable')->default(true);
            $table->boolean('closed')->default(false);
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
        Schema::dropIfExists('expenditures');
    }
}
