<?php

namespace App\Http\Controllers;

use App\Tax;
use Illuminate\Http\Request;

class TaxController extends Controller
{
    public function index(Request $request)
    {
        return response()->json(
          Tax::where('user_id', '=', $request->user_id)
               ->orderBy('name')
               ->get()
               ->toArray()
        );
    }

    public function store(Request $request)
    {
      $tax = Tax::create([
          'user_id' => $request->user_id,
          'name' => $request->name,
          'percent' => $request->percent
      ]);

      return response()->json([
          'status' => (bool) $tax,
          'message'=> $tax ? 'Tax Created' : 'Error Creating Tax'
      ]);
    }

    public function show(Tax $tax)
    {
      return response()->json($tax);
    }

    public function update(Request $request, Tax $tax)
    {
        $status = $tax->update([
            'name' => $request->name,
            'percent' => $request->percent
        ]);

        return response()->json([
            'status' => $status,
            'message' => $status ? 'Tax Updated!' : 'Error Updating Tax'
        ]);
    }

    public function destroy(Tax $tax)
    {
        $status = $tax->delete();

        return response()->json([
            'status' => $status,
            'message' => $status ? 'Tax Deleted' : 'Error Deleting Tax'
        ]);
    }

}
