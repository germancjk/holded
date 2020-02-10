<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Stock extends Model
{
  use SoftDeletes;

  protected $fillable = ['item_sku_id', 'store_id', 'quantity', 'user_id'];
}
