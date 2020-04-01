<?php

namespace App\Http\Controllers;

use App\{ Sale, SaleItem };
use Illuminate\Http\Request;

class SaleController extends Controller
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
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
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
      $item = Sale::create([
        'user_id' => $request->user_id,
        'store_id' => $request->from,
        'cost' => $request->cost,
        'taxes' => $request->taxes,
        'subtotal' => ($request->total - $request->taxes),
        'total' => $request->total,
        'profit' => $request->profit
      ]);

      foreach ($request->cart as $key => $value) {
        $saleItem = SaleItem::create([
          'sale_id' => $item->id,
          'item_sku_id' => $value['sku_id'],
          'quantity' => $value['quantity'],
          'cost' => $value['cost'],
          'taxes' => $value['taxes'],
          'discount' => $value['discount'],
          'subtotal' => ($value['total'] - $value['taxes']),
          'total' => $value['total'],
          'profit' => $value['profit'],
        ]);
      }

      return response()->json([
        'status' => (bool) $item,
        'data'   => $item,
        'message' => $item ? 'Item Created!' : 'Error Creating Item'
      ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Sale  $sale
     * @return \Illuminate\Http\Response
     */
    public function show(Sale $sale)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Sale  $sale
     * @return \Illuminate\Http\Response
     */
    public function edit(Sale $sale)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Sale  $sale
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Sale $sale)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Sale  $sale
     * @return \Illuminate\Http\Response
     */
    public function destroy(Sale $sale)
    {
        //
    }
}
