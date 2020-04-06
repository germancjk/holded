<?php

namespace App\Http\Controllers;

use App\{ Movement, MovementItem, Stock };
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MovementController extends Controller
{

    public function index(Request $request)
    {
      return response()->json(
        Movement::select(
            'movements.id as id',
            'movements.comments',
            'movements.created_at',
            'stf.name as store_name_from',
            'stt.name as store_name_to',
            )
            ->join('stores as stf', 'movements.from', '=', 'stf.id')
            ->join('stores as stt', 'movements.to', '=', 'stt.id')
            ->where('movements.user_id', '=', $request->user_id)
            ->orderBy('created_at')
            ->getQuery()
            ->get()
            ->toArray()
      );
    }

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
    public function show(Request $request)
    {
      return response()->json(
        Movement::select(
            'movements.id as id',
            'movements.comments',
            'movements.created_at',
            'stf.name as store_name_from',
            'stt.name as store_name_to',
            )
            ->join('stores as stf', 'movements.from', '=', 'stf.id')
            ->join('stores as stt', 'movements.to', '=', 'stt.id')
            ->where('movements.user_id', '=', $request->user_id)
            ->where('movements.id', '=', $request->id)
            ->orderBy('created_at')
            ->getQuery()
            ->get()
            ->toArray()
      );
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

    public function items(Request $request)
    {
      return response()->json(
        MovementItem::join('item_skus', 'movement_items.item_sku_id', '=', 'item_skus.id')
            ->join('items', 'items.id', '=', 'item_skus.item_id')
            ->select(
                'movement_items.quantity',
                DB::raw("CONCAT(items.name,' ',item_skus.name) as name")
                )
            // ->where('sales.user_id', '=', $request->user_id)
            ->where('movement_items.movement_id', '=', $request->id)
            ->getQuery()
            ->get()
            ->toArray()
          );
    }
}
