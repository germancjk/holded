<?php

namespace App\Http\Controllers;

use App\Stock;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
                'item_skus.id as sku_id',
                'stores.name as store_name',
                DB::raw("CONCAT(items.name,' ',item_skus.name) as name")
                )
            ->where('stocks.user_id', '=', $request->user_id)
            ->byStore($request->store_id)
            ->bySearchItem($request->search)
            ->orderBy('name')
            ->getQuery()
            ->get()
            ->toArray()
          );
    }

    public function update(Stock $stock)
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
