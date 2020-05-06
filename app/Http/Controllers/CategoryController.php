<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index(Request $request)
    {
      return response()->json(
        Category::where('user_id', '=', $request->user_id)
             ->orderBy('name')
             ->get()
             ->toArray()
      );
    }

    public function store(Request $request)
    {
        $category = Category::create([
          'user_id' => $request->user_id,
          'name' => $request->name,
          ]);

        return response()->json([
            'status' => (bool) $category,
            'message'=> $category ? 'Category Created' : 'Error Creating Category'
        ]);
    }

    public function show(Category $category)
    {
      return response()->json($category);
    }

    public function update(Request $request, Category $category)
    {
        $status = $category->update([
          'user_id' => $request->user_id,
          'name' => $request->name,
          ]);

        return response()->json([
            'status' => $status,
            'message' => $status ? 'Category Updated!' : 'Error Updating Category'
        ]);
    }

    public function destroy(Category $category)
    {
        $status = $category->delete();

        return response()->json([
            'status' => $status,
            'message' => $status ? 'Category Deleted' : 'Error Deleting Category'
        ]);
    }

}
