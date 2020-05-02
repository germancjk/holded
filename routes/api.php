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

  // Taxes
  Route::resource('/tax', 'TaxController');
  Route::get('/tax/{id}', 'TaxController@show');
  Route::patch('/tax/{id}', 'TaxController@update');
  Route::delete('/tax/{id}', 'TaxController@destroy');

  // Supplier
  Route::resource('/supplier', 'SupplierController');
  Route::get('/supplier/{id}', 'SupplierController@show');
  Route::patch('/supplier/{id}', 'SupplierController@update');
  Route::delete('/supplier/{id}', 'SupplierController@destroy');

  // Item
  Route::resource('/item', 'ItemController');
  Route::get('/items', 'ItemController@index');
  Route::get('/item/{id}', 'ItemController@show');
  Route::get('/item/sku/{id}', 'ItemSkuController@show');
  Route::patch('/item/{id}', 'ItemController@update');
  Route::delete('/item/{id}', 'ItemController@destroy');

  // Item SKU
  Route::resource('/itemsku', 'ItemSkuController');
  Route::get('/itemsku/{id}', 'ItemSkuController@show');
  Route::patch('/itemsku/{id}', 'ItemSkuController@update');
  Route::delete('/itemsku/{id}', 'ItemSkuController@destroy');

  // Stocks
  Route::resource('/stock', 'StockController');
  Route::get('/stock/{id}', 'StockController@show');
  Route::patch('/stock/{id}', 'StockController@update');
  Route::delete('/stock/{id}', 'StockController@destroy');
  Route::post('/stock/item', 'StockController@stock');

  // Searches
  Route::post('/search', 'ItemController@index');
  Route::post('/stock/search', 'StockController@index');

  // Movements
  Route::post('/movements', 'MovementController@index');
  Route::post('/movement.new', 'MovementController@store');
  Route::post('/movement', 'MovementController@show');
  Route::post('/movement/items', 'MovementController@items');

  // Sales
  Route::post('/sales', 'SaleController@index');
  Route::post('/sales.new', 'SaleController@store');
  Route::post('/sale', 'SaleController@show');
  Route::post('/sale/items', 'SaleController@items');

  // Board
  Route::post('/board/today', 'SaleController@boardToday');
  Route::post('/board/month', 'SaleController@boardMonth');
  Route::post('/board/stats', 'SaleController@boardStats');

  // User
  Route::post('/user/info', 'UserController@info');
  Route::patch('/user/update', 'UserController@update');
  Route::patch('/user/updatePassword', 'UserController@updatePassword');
});
