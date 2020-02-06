<?php

namespace App\Http\Controllers;

use App\Stock;
use Illuminate\Http\Request;

class StockController extends Controller
{
    public function index()
    {
      return response()->json(
        Stock::join('item_skus', 'stocks.item_sku_id', '=', 'item_skus.id')
            ->join('items', 'item_skus.id', '=', 'items.id')
            ->join('stores', 'stocks.store_id', '=', 'stores.id')
            ->select(
                'stocks.quantity as quantity',
                'items.name as item_name',
                'item_skus.id as sku_id',
                'item_skus.name as sku_name',
                'stores.name as store_name'
                )
            ->getQuery()
            ->get()
            ->toArray()
          );
    }

    public function store(Request $request)
    {
      $stock = Stock::create([
        'item_sku_id' => $request->item_sku_id,
        'store_id' => $request->store_id,
        'quantity' => $request->quantity
      ]);

      return response()->json([
        'status' => (bool) $stock,
        'data'   => $stock,
        'message' => $stock ? 'Stock Created!' : 'Error Creating Stock'
      ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Stock  $stock
     * @return \Illuminate\Http\Response
     */
    public function show(Stock $stock)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Stock  $stock
     * @return \Illuminate\Http\Response
     */
    public function edit(Stock $stock)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Stock  $stock
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Stock $stock)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Stock  $stock
     * @return \Illuminate\Http\Response
     */
    public function destroy(Stock $stock)
    {
        //
    }
}
