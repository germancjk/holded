<?php

namespace App\Http\Controllers;

use App\{ Item, ItemSku };
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ItemController extends Controller
{
  public function index(Request $request)
  {
    return response()->json(
      Item::join('item_skus', 'items.id', '=', 'item_skus.item_id')
          ->join('categories', 'items.category_id', '=', 'categories.id')
          ->select(
              'items.id as item_id',
              'items.name as item_name',
              'item_skus.id as sku_id',
              'item_skus.name as sku_name',
              'item_skus.sale_price as sku_sale_price',
              'categories.name as category_name',
              DB::raw("CONCAT(items.name,' ',item_skus.name) as name")
              )
          ->where('items.user_id', '=', $request->user_id)
          ->byCategory($request->category_id)
          ->bySearchItem($request->search)
          ->orWhere->bySearchItemSku($request->search)
          ->getQuery()
          ->get()
          ->toArray()
        );
  }

  public function store(Request $request)
  {
    $item = Item::create([
      'user_id' => $request->user_id,
      'name' => $request->name,
      'category_id' => $request->category_id,
      'supplier_id' => $request->supplier_id,
      'tax_id' => $request->tax_id
    ]);

    return response()->json([
      'status' => (bool) $item,
      'data'   => $item,
      'message' => $item ? 'Item Created!' : 'Error Creating Item'
    ]);
  }

  public function show(Item $item)
  {
    return response()->json($item);
  }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function edit(Item $item)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Item $item)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function destroy(Item $item)
    {
        //
    }
}
