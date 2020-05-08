<?php

namespace App\Http\Controllers;

use App\{ ItemSku, Stock };
use Illuminate\Http\Request;

class ItemSkuController extends Controller
{
    public function show(Request $request)
    {
      return response()->json(
        ItemSku::where('item_id', $request->id)
                  ->get()
                  ->toArray()
                );
    }

    public function destroy($itemSku)
    {
      $status = ItemSku::where('id', $itemSku)->delete();
      $status = Stock::where('item_sku_id', $itemSku)->delete();

      return response()->json([
          'status' => $status,
          'message' => $status ? 'ItemSku Deleted' : 'Error Deleting ItemSku'
      ]);
    }
}
