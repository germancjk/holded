<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ItemSku extends Model
{
  use SoftDeletes;

  protected $fillable = ['item_id', 'name', 'cost', 'sale_price'];
}
