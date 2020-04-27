<?php

namespace App\Http\Controllers;

use App\ItemSku;
use Illuminate\Http\Request;

class ItemSkuController extends Controller
{
  public function index()
  {
    
  }

    public function show(Request $request)
    {
      return response()->json(ItemSku::where('item_id', $request->id)
                                      ->get()
                                      ->toArray()
                                    );
    }

    public function search(Request $request)
    {
      // Route::post('/search/', 'ItemSkuController@search');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\ItemSku  $itemSku
     * @return \Illuminate\Http\Response
     */
    public function edit(ItemSku $itemSku)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ItemSku  $itemSku
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ItemSku $itemSku)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ItemSku  $itemSku
     * @return \Illuminate\Http\Response
     */
    public function destroy(ItemSku $itemSku)
    {
        //
    }
}
