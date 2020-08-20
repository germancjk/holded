<?php

namespace App\Http\Controllers;

use App\{User, UserInfo};
use Validator;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Notifications\RegisterSuccess;

class UserController extends Controller
{
    public function login()
    {
        $status = 401;
        $response = ['error' => 'Unauthorised'];

        $credentials = [
            'email' => request('email'),
            'password' => request('password')
        ];

        if (Auth::attempt($credentials)) {
            $success['token'] = Auth::user()->createToken('MyApp')->accessToken;
            $user = Auth::user();
            $success['name'] = $user->name;
            $success['id'] = $user->id;

            return response()->json(['success' => $success]);
        }

        return response()->json($response, $status);
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);

        $user = User::create($input);
        $success['token'] = $user->createToken('MyApp')->accessToken;
        $success['name'] = $user->name;
        $success['id'] = $user->id;

        $user->notify(new RegisterSuccess($user->id));

        return response()->json(['success' => $success ]);
    }

    public function getDetails()
    {
        return response()->json(['success' => Auth::user()]);
    }

    public function logout(Request $request)
    {
      // $request->user()->token()->revoke();
      // return response()->json([
      //     'message' => 'Successfully logged out'
      // ]);
    }

    public function update(Request $request)
    {
      // update user
      $user = User::find($request->user_id);
      $user->name = $request->name;
      $user->save();

      // update user info
      $update = UserInfo::where('user_id', $request->user_id)
          ->update([
            'business_name' => $request->business_name,
            'business_ruc' => $request->business_ruc,
            'business_address' => $request->business_address
          ]);

      return response()->json(['success' => $update]);
    }

    public function updatePassword(Request $request)
    {
      $request->validate([
          'password' => 'required',
          'new_password' => 'required|string|confirmed|min:6|different:password'
      ]);

      if (Hash::check($request->password, Auth::user()->password) == false)
      {
          return response(['message' => 'Unauthorized'], 401);
      }

      $user = Auth::user();
      $user->password = Hash::make($request->new_password);
      $user->save();

      return response([
        'status' => 200,
        'message' => 'Your password has been updated successfully.'
      ]);
    }

    public function info(Request $request)
    {
      return response()->json(
        User::leftjoin('user_infos', 'user_infos.user_id', '=', 'users.id')
            ->select(
                'users.name',
                'users.email',
                'user_infos.business_name',
                'user_infos.business_ruc',
                'user_infos.business_address'
                )
            ->where('users.id', '=', $request->user_id)
            ->first()
            ->toArray()
          );
    }
}
