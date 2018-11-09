
window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    window.$ = window.jQuery = require('jquery');

    require('bootstrap-sass');
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

import Echo from 'laravel-echo'
// import Pusher from 'pusher-js';

window.Pusher = require('pusher-js');
        Pusher.logToConsole = true;

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'a019d4041dd699197f44',
       cluster: 'ap2',
    encrypted: true
});


  //               window.Echo.channel('messages')
  //                   .listen('MessagePosted', (e) => {
  //                       // Look through the comments and if no comment matches the 
  //                       // existing comments, add it
  //                       alert(e);
  //                       if (vm.image.comments.filter((comment) => comment.id === e.comment.id).length === 0) {
  //                           vm.image.comments.push(e.comment)
  //                           $(document).ready(() => $('[data-toggle="popover"]').popover())
  //                       }
  //                   })


  // window.Echo.channel('messages').on('pusher:subscription_succeeded', (member) => {
  //           console.log("member");

  //       })





// Vue.use(VueEcho, {
//     broadcaster: 'pusher',
//     key: 'a019d4041dd699197f44',
//            cluster: 'ap2',
//     encrypted: true
// });

//         var pusher = new Pusher('a019d4041dd699197f44', {
//             cluster: 'ap2',
//             encrypted: true
//         });

//         var channel = pusher.subscribe('messages');
//         channel.bind('pusher:subscription_succeeded', function() {
// });
        // pusher.bind('MessagePosted', function(data) {
        //    alert(data);
        //     console.log(data);
        // });
        