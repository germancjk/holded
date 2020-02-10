<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Item;

class ItemSku extends Model
{
  use SoftDeletes;

  protected $fillable = ['item_id', 'name', 'cost', 'sale_price', 'user_id'];

  public function item() {
    return $this->hasOne(Item::class);
  }
}
