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

  // Stores
  Route::resource('/store', 'StoreController');
  Route::get('/store/{id}', 'StoreController@show');
  Route::patch('/store/{id}', 'StoreController@update');
  Route::delete('/store/{id}', 'StoreController@destroy');

  // Stores
  Route::resource('/tax', 'TaxController');
  Route::get('/tax/{id}', 'TaxController@show');
  Route::patch('/tax/{id}', 'TaxController@update');
  Route::delete('/tax/{id}', 'TaxController@destroy');

  // Supplier
  Route::resource('/supplier', 'SupplierController');
  Route::get('/supplier/{id}', 'SupplierController@show');
  Route::patch('/supplier/{id}', 'SupplierController@update');
  Route::delete('/supplier/{id}', 'SupplierController@destroy');
});
