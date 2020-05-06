<?php

namespace App\Http\Controllers;

use App\Supplier;
use Illuminate\Http\Request;

class SupplierController extends Controller
{
    public function index(Request $request)
    {
        return response()->json(
          Supplier::where('user_id', '=', $request->user_id)
               ->orderBy('name')
               ->get()
               ->toArray()
        );
    }

    public function store(Request $request)
    {
      $supplier = Supplier::create([
          'user_id' => $request->user_id,
          'name' => $request->name,
          'address' => $request->address
      ]);

      return response()->json([
          'status' => (bool) $supplier,
          'message'=> $supplier ? 'Supplier Created' : 'Error Creating Supplier'
      ]);
    }

    public function show(Supplier $supplier)
    {
      return response()->json($supplier);
    }

    public function update(Request $request, Supplier $supplier)
    {
        $status = $supplier->update([
            'name' => $request->name,
            'address' => $request->address
        ]);

        return response()->json([
            'status' => $status,
            'message' => $status ? 'Supplier Updated!' : 'Error Updating Supplier'
        ]);
    }

    public function destroy(Supplier $supplier)
    {
        $status = $supplier->delete();

        return response()->json([
            'status' => $status,
            'message' => $status ? 'Supplier Deleted' : 'Error Deleting Supplier'
        ]);
    }

}
