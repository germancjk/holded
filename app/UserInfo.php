<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserInfo extends Model
{
  protected $fillable = [
      'business_name', 'business_ruc', 'business_address'
  ];
}
