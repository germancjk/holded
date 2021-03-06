<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\{ ItemSku, Category };

class Item extends Model
{
  use SoftDeletes;

  protected $fillable = ['item_id', 'name', 'barcode', 'category_id', 'supplier_id', 'tax_id', 'user_id', 'sku_id'];

  public function scopeByCategory($query, $search)
  {
    if (empty($search)) {
      return;
    }

    return $query->where('category_id', '=', $search);
  }

  public function scopeBySearchItem($query, $search)
  {
    if (empty($search)) {
      return;
    }

    return $query->where('items.name', 'like', "%{$search}%");
  }

  public function scopeBySearchItemSku($query, $search)
  {
    if (empty($search)) {
      return;
    }

    return $query->where('item_skus.name', 'like', "%{$search}%");
  }
}
