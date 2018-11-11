<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class ChatController extends Controller
{
    //

    public function send(Request $req){

    	$user = User::find(1);

    	event (new ChatEvent($req->message,$user));
    }
}
