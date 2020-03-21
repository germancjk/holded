<?php

namespace App\Http\Controllers;

use App\{ Movement, MovementItem, Stock };
use Illuminate\Http\Request;

class MovementController extends Controller
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

    public function store(Request $request)
    {
      // add new movement
      $move = Movement::create([
        'user_id' => $request->user_id,
        'from' => $request->from,
        'to' => $request->to,
        'comments' => $request->comments,
        'status' => 1,
      ]);
      // add items to movement item
      foreach($request->cart as $line){
        // add movement
        $item = MovementItem::create([
          'movement_id' => $move->id,
          'item_sku_id' => $line['sku_id'],
          'quantity' => $line['quantity'],
        ]);
        // update stock
        // from
        $q = $line['quantity'] * -1;
        $flight = Stock::updateOrCreate(
            ['user_id' => $request->user_id, 'item_sku_id' => $line['sku_id'], 'store_id' => $request->from],
            ['quantity' => \DB::raw("quantity + {$q}")]
        );
        // to
        $q = $line['quantity'];
        $flight = Stock::updateOrCreate(
            ['user_id' => $request->user_id, 'item_sku_id' => $line['sku_id'], 'store_id' => $request->to],
            ['quantity' => \DB::raw("quantity + {$q}")]
        );
      }

      return response()->json([
        'status' => (bool) $move,
        'data'   => $move,
        'message' => $move ? 'Move Created!' : 'Error Creating Move'
      ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Movement  $movement
     * @return \Illuminate\Http\Response
     */
    public function show(Movement $movement)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Movement  $movement
     * @return \Illuminate\Http\Response
     */
    public function edit(Movement $movement)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Movement  $movement
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Movement $movement)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Movement  $movement
     * @return \Illuminate\Http\Response
     */
    public function destroy(Movement $movement)
    {
        //
    }
}
