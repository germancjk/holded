<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
  use SoftDeletes;

  protected $fillable = ['name', 'user_id'];

  // public function tasks() {
  //     return $this->hasMany(Task::class);
  // }
}
