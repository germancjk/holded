<?php

namespace App\Http\Controllers;

use App\Stock;
use Illuminate\Http\Request;

class StockController extends Controller
{
    public function index(Request $request)
    {
      return response()->json(
        Stock::join('item_skus', 'stocks.item_sku_id', '=', 'item_skus.id')
            ->join('items', 'item_skus.item_id', '=', 'items.id')
            ->join('stores', 'stocks.store_id', '=', 'stores.id')
            ->select(
                'stocks.quantity as quantity',
                'items.name as item_name',
                'item_skus.id as sku_id',
                'item_skus.name as sku_name',
                'stores.name as store_name'
                )
            ->where('stocks.user_id', '=', $request->user_id)
            ->byStore($request->store_id)
            ->bySearchItem($request->search)
            ->getQuery()
            ->get()
            ->toArray()
          );
    }

    public function store(Request $request)
    {
      $stock = Stock::create([
        'user_id' => $request->user_id,
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

    public function update($array)
    {
      $stock = Stock::updateOrInsert([
          'user_id' => $array->user_id,
          'item_sku_id' => $array->sku_id,
          'store_id' => $array->store_id,
        ],[
          'quantity' => \DB::raw("stock.quantity + {$array->quantity}"),
      ]);

      return response()->json([
        'status' => (bool) $stock,
        'data'   => $stock,
        'message' => $stock ? 'Stock Created!' : 'Error Creating Stock'
      ]);
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

    public function stock(Request $request)
    {
      return response()->json(
        Stock::select('quantity')
            ->where('store_id', '=', $request->store_id)
            ->where('item_sku_id', '=', $request->item_sku_id)
            ->getQuery()
            ->get()
            ->toArray()
          );
    }
}
