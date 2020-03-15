<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class MovementItem extends Model
{
  use SoftDeletes;

  protected $fillable = ['item_sku_id', 'quantity'];
}
