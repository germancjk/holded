<?php

namespace App\Http\Controllers;

use App\ItemSku;
use Illuminate\Http\Request;

class ItemSkuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
     public function store(Request $request)
     {
       $itemSku = ItemSku::create([
         'user_id' => $request->user_id,
         'item_id' => $request->item_id,
         'name' => $request->name,
         'cost' => $request->cost,
         'sale_price' => $request->sale_price
       ]);

       return response()->json([
         'status' => (bool) $itemSku,
         'data'   => $itemSku,
         'message' => $itemSku ? 'ItemSku Created!' : 'Error Creating ItemSku'
       ]);
     }

    public function show(Request $request)
    {
      return response()->json(ItemSku::where('item_id', $request->id)
                                      ->get()
                                      ->toArray()
                                    );
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
