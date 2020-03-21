<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMovementItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('movement_items', function (Blueprint $table) {
          $table->increments('id');
          $table->unsignedInteger('movement_id');
          $table->unsignedInteger('item_sku_id');
          $table->unsignedInteger('quantity');
          $table->timestamps();

          $table->foreign('movement_id')->references('id')->on('movements');
          $table->foreign('item_sku_id')->references('id')->on('item_skus');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('movement_items');
    }
}
