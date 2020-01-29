<?php

use Illuminate\Http\Request;

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('login', 'UserController@login');
Route::post('logout', 'UserController@logout');
Route::post('register', 'UserController@register');

Route::group(['middleware' => 'auth:api'], function() {
    // Route::get('/category/{category}/tasks', 'CategoryController@tasks');
    Route::resource('/category', 'CategoryController');
    Route::delete('/category/{id}', 'CategoryController@destroy');
    Route::get('/category/{id}', 'CategoryController@show');
    // Route::resource('/task', 'TaskController');
});
