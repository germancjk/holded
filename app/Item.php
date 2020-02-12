<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\{ ItemSku, Category };

class Item extends Model
{
  use SoftDeletes;

  protected $fillable = ['name', 'category_id', 'supplier_id', 'tax_id', 'user_id'];

  // public function category()
  // {
  //   return $this->belongsTo(Category::class)
  //     ->withDefault();
  // }
  //
  // public function item()
  // {
  //   return $this->belongsTo(Item::class)
  //     ->withDefault();
  // }
  //
  // public function itemSku()
  // {
  //   return $this->hasMany(ItemSku::class)
  //     ->withDefault();
  // }
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
