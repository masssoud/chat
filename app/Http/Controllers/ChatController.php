<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Events\ChatEvent;
use App\User;
use Auth;
class ChatController extends Controller
{
    //
    public function send(Request $req){
    	$message = $req->message;
    	$user= User::find(Auth::id());
    	// dd($user);
    	event(new ChatEvent($message,$user));
    }
}
