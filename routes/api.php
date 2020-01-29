<?php

use Illuminate\Http\Request;

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('login', 'UserController@login');
Route::post('logout', 'UserController@logout');
Route::post('register', 'UserController@register');

Route::group(['middleware' => 'auth:api'], function() {
  // Categories
  Route::resource('/category', 'CategoryController');
  Route::get('/category/{id}', 'CategoryController@show');
  Route::patch('/category/{id}', 'CategoryController@update');
  Route::delete('/category/{id}', 'CategoryController@destroy');
});
