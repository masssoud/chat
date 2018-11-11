<!DOCTYPE html>
<html>
<head>
	<title>
		chat
	</title>

<meta name="csrf-token" content="{{ csrf_token() }}">

	<link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">
	<style type="text/css">
			.list-group{
				overflow: scroll;
				height: 200px;

			}


	</style>

</head>
<body>

	<div class="container">
		<div class="row" id="app">
			
<div class=" col-offset-4">
<ul class="list-group" v-chat-scroll>
  <li class="list-group-item active">chat room</li>
  <div class="badge badge-pill badge-primary">@{{ typing }}</div>
  <message
  v-for='value,index in chat.message'

  :key=value.index

  :color= chat.color[index]
  :user = chat.user[index]
  :time = chat.time[index]
  >
  		
  		
  	@{{ value }}

  </message>


</ul>

  <input type="text" class="form-control" placeholder="please type!" name="" v-model="message" @keyup.enter='send'>

</div>
		</div>

	</div>





<script type="text/javascript" src="{{ asset('js/app.js') }}"></script>

    <!-- <script src="https://js.pusher.com/4.1/pusher.min.js"></script> -->


</body>
</html>