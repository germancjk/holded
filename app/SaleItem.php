<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SaleItem extends Model
{
  use SoftDeletes;

  protected $fillable = ['sale_id', 'item_sku_id', 'quantity', 'cost', 'taxes', 'discount', 'subtotal', 'total', 'profit'];
}
