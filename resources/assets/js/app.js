
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
    		message:[],
            user:[],
            color:[],
            time:[]
    	},
        typing:''
    },
    watch:{
        message(){
Echo.private('chat')
    .whisper('typing', {
        name: this.message
    });
        }

    },
    methods:{
    	send(){

    		
    		if (this.message.length != 0) {

                this.chat.message.push(this.message);
                this.chat.user.push('You');
                this.chat.color.push('success');
                this.chat.time.push(this.getTime());
                axios.post('/send', {

                    message : this.message



  })
  .then(response => {
    console.log(response);
                    this.message=''

  })
  .catch(error => {
    console.log(error);
  });


    	}
    	},
        getTime(){
            let time = new Date();

            return time.getHours()+':'+time.getMinutes();
        }
    },
    mounted(){
        Pusher.logToConsole = true;
        // console.log("saasassa");

        Echo.private('chat').on('pusher:subscription_succeeded', (e) => {
        console.log("testt");
        console.log(e);
        })

        .on('ChatEvent', (e) => {
        console.log("saasassa");
                        this.chat.message.push(e.message);
                        this.chat.user.push(e.user.name);
                        this.chat.color.push('warning');
                        this.chat.time.push(this.getTime());
        // console.log(e);
        })
        
        .listenForWhisper('typing', (e) => {


            if (e.name != '') {
    
    this.typing = 'typing...';
        // console.log(e.name);
            }
            else{

                this.typing = '';
    
                }
    });

        Echo.join(`chat`)
    .here((users) => {

        console.log(users);

    })
    .joining((user) => {
        // console.log(user.name);
    })
    .leaving((user) => {
        // console.log(user.name);
    });


    }

});
