

require('./bootstrap');


import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//router imported here
import {routes} from './routes'
//sweet alert start
import Swal from 'sweetalert2'
window.Swal=Swal;
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
window.Toast=Toast;
//sweet alert end
window.Reload=new Vue();

//import user class
import User from './Helpers/User';

window.User = User
//import notification
import Notification from './Helpers/Notification';


window.Notification = Notification
const router = new VueRouter({
    routes,
    mode: 'history'
  })






const app = new Vue({
    el: '#app',
    router
});
