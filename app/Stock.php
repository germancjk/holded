<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Stock extends Model
{
  use SoftDeletes;

  protected $fillable = ['item_sku_id', 'store_id', 'quantity', 'user_id'];

  public function scopeByStore($query, $search)
  {
    if (empty($search)) {
      return;
    }

    return $query->where('store_id', '=', $search);
  }

  public function scopeBySearchItem($query, $search)
  {
    if (empty($search)) {
      return;
    }

    return $query->where('items.name', 'like', "%{$search}%");
  }
}
