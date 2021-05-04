
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
let stock = require('./components/product/stock.vue').default;
let editstock = require('./components/product/edit_stock.vue').default;
//end product crud

//start expense crud
let storeexpense = require('./components/expense/create.vue').default;
let expense = require('./components/expense/index.vue').default;
let editexpense = require('./components/expense/edit.vue').default;
//end expense crud

//start salary crud
let paysalary = require('./components/salary/create.vue').default;
let salary = require('./components/salary/index.vue').default;
let editsalary = require('./components/salary/edit_salary.vue').default;
let allsalary = require('./components/salary/all_salary.vue').default;
let viewsalary = require('./components/salary/view.vue').default;
//end salary crud

//start customer crud
let storecustomer = require('./components/customer/create.vue').default;
let customer = require('./components/customer/index.vue').default;
let editcustomer = require('./components/customer/edit.vue').default;
//end customer crud

//pos curd
let pos = require('./components/pos/pointofsale.vue').default;
//order curd
let order = require('./components/order/order.vue').default;
let vieworder = require('./components/order/vieworder.vue').default;
let searchorder = require('./components/order/search.vue').default;
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
     { path: '/stock', component: stock, name:'stock' },
     { path: '/edit-stock/:id', component: editstock, name:'edit-stock' },
     //end product crud

      //start expense crud
      { path: '/store-expense', component: storeexpense, name:'store-expense' },
      { path: '/expense', component: expense, name:'expense' },
      { path: '/edit-expense/:id', component: editexpense, name:'edit-expense' },
      //end expense crud

       //start salary crud
       { path: '/salary', component: allsalary, name:'allsalary' },
       { path: '/given-salary', component: salary, name:'salary' },
       { path: '/pay-salary/:id', component: paysalary, name:'pay-salary' },
       { path: '/view-salary/:id', component: viewsalary, name:'view-salary' },
       { path: '/edit-salary/:id', component: editsalary, name:'edit-salary' },
       //end salary crud

      //start customer crud
      { path: '/store-customer', component: storecustomer, name:'store-customer' },
      { path: '/customer', component: customer, name:'customer' },
      { path: '/edit-customer/:id', component: editcustomer, name:'edit-customer' },
      //end customer crud

      //pos crud
      { path: '/pos', component: pos, name:'pos' },
      
      //order crud
      { path: '/order', component: order, name:'order' },
      { path: '/view-order/:id', component: vieworder, name:'view-order' },
      { path: '/searchorder', component: searchorder, name:'search' },
  ]