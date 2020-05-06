<?php

namespace App\Http\Controllers;

use App\Store;
use Illuminate\Http\Request;

class StoreController extends Controller
{
    public function index(Request $request)
    {
        return response()->json(
          Store::where('user_id', '=', $request->user_id)
               ->orderBy('name')
               ->get()
               ->toArray()
        );
    }

    public function store(Request $request)
    {
        $store = Store::create([
          'user_id' => $request->user_id,
          'name' => $request->name,
          ]);

        return response()->json([
            'status' => (bool) $store,
            'message'=> $store ? 'Store Created' : 'Error Creating Store'
        ]);
    }

    public function show(Store $store)
    {
      return response()->json($store);
    }

    public function update(Request $request, Store $store)
    {
        $status = $store->update($request->only('name'));

        return response()->json([
            'status' => $status,
            'message' => $status ? 'Store Updated!' : 'Error Updating Store'
        ]);
    }

    public function destroy(Store $store)
    {
        $status = $store->delete();

        return response()->json([
            'status' => $status,
            'message' => $status ? 'Store Deleted' : 'Error Deleting Store'
        ]);
    }

}
