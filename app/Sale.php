<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Sale extends Model
{
  use SoftDeletes;

  protected $fillable = ['user_id', 'store_id', 'cart', 'taxes', 'total', 'profit', 'cost', 'subtotal'];
}
