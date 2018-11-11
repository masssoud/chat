
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');


import Vue from 'vue'
import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll)


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));
Vue.component('message', require('./components/Message.vue'));

const app = new Vue({
    el: '#app',
    data:{
    	message:'',
    	chat:{
    		message:[]
    	}
    },
    methods:{
    	send(){

    		
    		if (this.message.length != 0) {

    			this.chat.message.push(this.message);
    			this.message='';

                axios.post('/send', {

                    message : this.message
  })
  .then(response => {
    console.log(response);
  })
  .catch(error =>  {
    console.log(error);
  })



    	       }
    	}
    },
    mounted(){
        Pusher.logToConsole = true;
        // console.log("saasassa");

        Echo.private('chat').on('pusher:subscription_error', (e) => {
        console.log("te");
        console.log(e);
    });


        Echo.private('chat').on('ChatEvent', (e) => {
        console.log("saasassa");
        console.log(e);
    });

    }
});
