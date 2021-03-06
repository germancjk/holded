<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Movement extends Model
{
  use SoftDeletes;

  protected $fillable = ['user_id', 'from', 'to', 'cart', 'comments', 'status'];
}
