
let login = require('./components/auth/login.vue').default;
let register = require('./components/auth/register.vue').default;
let forget = require('./components/auth/forget.vue').default;
let logout = require('./components/auth/logout.vue').default;
//end authentication
let home = require('./components/home.vue').default;
//start employee crud
let storeemployee = require('./components/employee/create.vue').default;
let employee = require('./components/employee/index.vue').default;
let editemployee = require('./components/employee/edit.vue').default;
//end employee crud

//start supplier crud
let storesupplier = require('./components/supplier/create.vue').default;
let supplier = require('./components/supplier/index.vue').default;
let editsupplier = require('./components/supplier/edit.vue').default;
//end supplier crud
//start category crud
let storecategory = require('./components/category/create.vue').default;
let category = require('./components/category/index.vue').default;
let editcategory = require('./components/category/edit.vue').default;
//end category crud

//start product crud
let storeproduct = require('./components/product/create.vue').default;
let product = require('./components/product/index.vue').default;
let editproduct = require('./components/product/edit.vue').default;
//end product crud
export const routes = [
    { path: '/', component: login, name:'/' },
    { path: '/register', component: register, name:'register' },
    { path: '/forget', component: forget, name:'forget' },
    { path: '/logout', component: logout, name:'logout' },
    { path: '/home', component: home, name:'home' },
    //start employee crud
    { path: '/store-employee', component: storeemployee, name:'store-employee' },
    { path: '/employee', component: employee, name:'employee' },
    { path: '/edit-employee/:id', component: editemployee, name:'edit-employee' },
    //end employee crud

     //start supplier crud
     { path: '/store-supplier', component: storesupplier, name:'store-supplier' },
     { path: '/supplier', component: supplier, name:'supplier' },
     { path: '/edit-supplier/:id', component: editsupplier, name:'edit-supplier' },
     //end supplier crud

     //start category crud
     { path: '/store-category', component: storecategory, name:'store-category' },
     { path: '/category', component: category, name:'category' },
     { path: '/edit-category/:id', component: editcategory, name:'edit-category' },
     //end category crud

     //start product crud
     { path: '/store-product', component: storeproduct, name:'store-product' },
     { path: '/product', component: product, name:'product' },
     { path: '/edit-product/:id', component: editproduct, name:'edit-product' },
     //end product crud
  ]