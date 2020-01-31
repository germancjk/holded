<?php

namespace App\Http\Controllers;

use App\Store;
use Illuminate\Http\Request;

class StoreController extends Controller
{
    public function index()
    {
        return response()->json(Store::all()->toArray());
    }

    public function store(Request $request)
    {
        $store = Store::create($request->only('name'));

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
