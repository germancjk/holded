<?php

namespace App\Http\Controllers;

use App\{ Item, ItemSku, Stock };
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ItemController extends Controller
{
  public function index(Request $request)
  {
    return response()->json(
      Item::join('item_skus', 'items.id', '=', 'item_skus.item_id')
          ->join('categories', 'items.category_id', '=', 'categories.id')
          ->join('taxes', 'items.tax_id', '=', 'taxes.id')
          ->select(
              'items.id as item_id',
              'items.name as item_name',
              'item_skus.id as sku_id',
              'item_skus.name as sku_name',
              'item_skus.cost',
              'item_skus.barcode',
              'item_skus.sale_price as sku_sale_price',
              'categories.name as category_name',
              'taxes.percent',
              DB::raw("CONCAT(items.name,' ',item_skus.name) as name")
              )
          ->where('items.user_id', '=', $request->user_id)
          ->byCategory($request->category_id)
          ->bySearchItem($request->search)
          ->orWhere->bySearchItemSku($request->search)
          ->whereNull('items.deleted_at')
          ->whereNull('item_skus.deleted_at')
          ->get()
          ->toArray()
        );
  }

  public function items(Request $request)
  {
    $items = Item::join('item_skus', 'items.id', '=', 'item_skus.item_id')
        ->join('categories', 'items.category_id', '=', 'categories.id')
        ->select(
            'items.id as item_id',
            'items.name as item_name',
            'item_skus.id as sku_id',
            'item_skus.name as sku_name',
            'item_skus.sale_price as sku_sale_price',
            'categories.name as category_name'
            )
        ->byCategory($request->category_id)
        ->bySearchItem($request->search)
        ->orWhere->bySearchItemSku($request->search)
        ->whereNull('items.deleted_at')
        ->whereNull('item_skus.deleted_at')
        ->where('items.user_id', '=', $request->user_id)
        ->get()
        ->toArray();

    $subItems = [];
    foreach($items as $key => $value){
      $subItems[$value['item_id']]['item_id'] = $value['item_id'];
      $subItems[$value['item_id']]['category_name'] = $value['category_name'];
      $subItems[$value['item_id']]['item_name'] = $value['item_name'];
      $subItems[$value['item_id']]['skus'][] = $value;
    }

    return response()->json($subItems);
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

    foreach ($request->skus as $key => $value) {
      $itemSku = ItemSku::create([
        'user_id' => $request->user_id,
        'item_id' => $item->id,
        'name' => $value['name'],
        'cost' => $value['cost'],
        'barcode' => $value['barcode'],
        'sale_price' => $value['sale_price']
      ]);

      $stock = Stock::create([
        'user_id' => $request->user_id,
        'item_sku_id' => $itemSku->id,
        'store_id' => $request->store,
        'quantity' => $value['quantity']
      ]);
    }

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

  public function update(Request $request, Item $item)
  {
    $item = $item->update([
      'user_id' => $request->user_id,
      'name' => $request->name,
      'category_id' => $request->category_id,
      'supplier_id' => $request->supplier_id,
      'tax_id' => $request->tax_id
      ]);

    foreach ($request->skus as $key => $value) {
      if($value['id'] != 0){
        // edit
        $itemSku = ItemSku::where('id', $value['id'])
          ->where('user_id', $request->user_id)
          ->update([
            'name' => $value['name'],
            'cost' => $value['cost'],
            'barcode' => $value['barcode'],
            'sale_price' => $value['sale_price'],
          ]);
      } else {
        // create
        $itemSku = ItemSku::create([
          'user_id' => $request->user_id,
          'item_id' => $request->item_id,
          'name' => $value['name'],
          'cost' => $value['cost'],
          'barcode' => $value['barcode'],
          'sale_price' => $value['sale_price']
        ]);

        $stock = Stock::create([
          'user_id' => $request->user_id,
          'item_sku_id' => $itemSku->id,
          'store_id' => $request->store,
          'quantity' => 0
        ]);
      }
    }

    return response()->json([
      'status' => (bool) $item,
      'data'   => $item,
      'message' => $item ? 'Item Updated!' : 'Error Updating Item'
    ]);
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
