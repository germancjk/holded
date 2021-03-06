<?php

namespace App\Http\Controllers;

use App\{ Sale, SaleItem, Stock };
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SaleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
      $date = $request->date;
      $skip = ($request->currentPage - 1) * $request->perPage;
      $take = $request->perPage;

      $json = [
        'results' => false,
        'totalPages' => 0
      ];

      if($date == 1) { $init = date('Y-m-d') . " 00:00:00"; $end = date('Y-m-d') . " 23:59:59"; } // hoy
      elseif($date == 2) { $init = date('Y-m-d', strtotime('-1 day')) . " 00:00:00"; $end = date('Y-m-d', strtotime('-1 day')) . " 23:59:59"; } // ayer
      elseif($date == 3) { $init = date('Y-m-01') . " 00:00:00"; $end = date('Y-m-31') . " 23:59:59"; } // mes actual
      elseif($date == 4) { $init = date('Y-m-01', strtotime('-1 month')) . " 00:00:00"; $end = date('Y-m-31', strtotime('-1 month')) . " 23:59:59"; } // mes pasado
      elseif($date == 5) { $init = $request->range[0] . " 00:00:00"; $end = $request->range[1] . " 23:59:59"; } // mes pasado


      $total =
        Sale::select('sales.id')
            ->where('sales.user_id', '=', $request->user_id)
            ->whereBetween('sales.created_at', [$init, $end])
            ->count();

      $json['totalPages'] = ceil($total/$take);

      $json['results'] =
        Sale::select(
            'sales.id',
            'sales.store_id',
            'sales.cost',
            'sales.taxes',
            'sales.subtotal',
            'sales.total',
            'sales.profit',
            'sales.created_at',
            'stf.name as store_name'
            )
            ->join('stores as stf', 'sales.store_id', '=', 'stf.id')
            ->where('sales.user_id', '=', $request->user_id)
            ->whereBetween('sales.created_at', [$init, $end])
            ->orderByDesc('sales.created_at')
            ->skip($skip)
            ->take($take)
            ->getQuery()
            ->get()
            ->toArray();

      return response()->json($json);
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

        $q = $value['quantity'] * -1;
        $stock = Stock::updateOrCreate(
            ['user_id' => $request->user_id, 'item_sku_id' => $value['sku_id'], 'store_id' => $request->from],
            ['quantity' => \DB::raw("quantity + {$q}")]
        );
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
    public function show(Request $request)
    {
      return response()->json(
        Sale::select(
            'sales.id',
            'sales.store_id',
            'sales.cost',
            'sales.taxes',
            'sales.subtotal',
            'sales.total',
            'sales.profit',
            'sales.created_at',
            'stf.name as store_name'
            )
            ->join('stores as stf', 'sales.store_id', '=', 'stf.id')
            ->where('sales.id', '=', $request->id)
            ->where('sales.user_id', '=', $request->user_id)
            ->orderBy('created_at')
            ->get()
            ->toArray()
      );
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

    public function items(Request $request)
    {
      return response()->json(
        SaleItem::join('item_skus', 'sale_items.item_sku_id', '=', 'item_skus.id')
            ->join('items', 'items.id', '=', 'item_skus.item_id')
            ->select(
                'sale_items.quantity',
                'sale_items.cost',
                'sale_items.taxes',
                'sale_items.discount',
                'sale_items.subtotal',
                'sale_items.total',
                'sale_items.profit',
                DB::raw("CONCAT(items.name,' ',item_skus.name) as name")
                )
            // ->where('sales.user_id', '=', $request->user_id)
            ->where('sale_items.sale_id', '=', $request->id)
            ->get()
            ->toArray()
          );
    }

    public function boardToday(Request $request)
    {
      $from = date('Y-m-d') . ' 00:00:00';
      $to   = date('Y-m-d') . ' 23:59:59';

      return response()->json(
        Sale::select(DB::raw('SUM(total) as total'), DB::raw('SUM(profit) as profit'))
            ->where('user_id', '=', $request->user_id)
            ->whereBetween('created_at', [$from, $to])
            ->get()
            ->toArray()
          );
    }

    public function boardMonth(Request $request)
    {
      $from = date('Y-m-01') . ' 00:00:00';
      $to   = date('Y-m-31') . ' 23:59:59';

      return response()->json(
        Sale::select(DB::raw('SUM(total) as total'), DB::raw('SUM(profit) as profit'))
            ->where('user_id', '=', $request->user_id)
            ->whereBetween('created_at', [$from, $to])
            ->get()
            ->toArray()
          );
    }

    public function boardStats(Request $request)
    {
      $return = [
        'this' => false,
        'last' => false
      ];

      $from = date('Y-m-01') . ' 00:00:00';
      $to   = date('Y-m-31') . ' 23:59:59';

      $thisMonth = Sale::select(
          DB::raw('SUM(total) as total'),
          DB::raw("DATE_FORMAT(created_at,'%e') as day")
        )
        ->where('user_id', '=', $request->user_id)
        ->whereBetween('created_at', [$from, $to])
        ->groupBy('day')
        ->get()
        ->toArray();

      $from = date('Y-m-01', strtotime('last month')) . ' 00:00:00';
      $to   = date('Y-m-31', strtotime('last month')) . ' 23:59:59';

      $lastMonth = Sale::select(
          DB::raw('SUM(total) as total'),
          DB::raw("DATE_FORMAT(created_at,'%e') as day")
        )
        ->where('user_id', '=', $request->user_id)
        ->whereBetween('created_at', [$from, $to])
        ->groupBy('day')
        ->get()
        ->toArray();

      for($x=0; $x<=31; $x++){
        $return['this'][$x] = 0;
        $return['last'][$x] = 0;
      }

      foreach($thisMonth as $key => $value){
        $return['this'][$value['day']-1] = $value['total'];
      }

      foreach($lastMonth as $key => $value){
        $return['last'][$value['day']-1] = $value['total'];
      }

      return response()->json($return);
    }
}
