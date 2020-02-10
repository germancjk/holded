<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\ItemSku;

class Item extends Model
{
  use SoftDeletes;

  protected $fillable = ['name', 'category_id', 'supplier_id', 'store_id', 'tax_id', 'user_id'];

  public function itemSkus() {
    return $this->hasMany(ItemSku::class);
  }
}
