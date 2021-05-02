<template>
   <div>
<div class="row">
    <router-link to="/store-employee" class="btn btn-primary">Add Employee</router-link>
</div>
<br>
<input type="text" v-model="searchTerm" placeholder="Search Here" class="form-control" style="width:300px">
<br>
<div class="row">
            <div class="col-lg-12 mb-4">
              <!-- Simple Tables -->
              <div class="card">
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 class="m-0 font-weight-bold text-primary">Employee List</h6>
                </div>
                <div class="table-responsive">
                  <table class="table align-items-center table-flush">
                    <thead class="thead-light">
                      <tr>
                        <th>Product Name</th>
                        <th>Product Photo</th>
                        <th>Category</th>
                        <th>Supplier</th>
                        <th>Buying Price</th>
                        <th>Selling Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="product in products" :key="product.id">
                        <td>{{product.product_name}}</td>
                        <td><img :src="product.image" style="height:60px;width:60px"></td>
                        <td>{{product.category_name}}</td>
                        <td>{{product.name}}</td>
                        <td>{{product.buying_price}}</td>
                        <td>{{product.selling_price}}</td>
                        <td>{{product.product_quantity}}</td>
                        <td>
                          <router-link :to="{ name:'edit-product',params:{id:product.id}}" class="btn btn-sm btn-primary">Edit</router-link>

                          <a @click="deleteEmployee(product.id)" class="btn btn-sm btn-danger"><font color="#ffffff">Delete</font></a>
                        </td>
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
                <div class="card-footer"></div>
              </div>
            </div>
          </div>
  
   </div>
</template>
<script>
export default{
    created(){
    if(!User.loggedIn()){
      this.$router.push({ name: '/'})
    }
  },
  data(){
      return{
        categories:[],
        products:[],
        suppliers:[],
        searchTerm:''
      }
  },
  methods:{
    allProduct(){
          axios.get('/api/product/')
          .then(({data})=>(this.products=data))
          .catch()
      },
  },
  created(){
      this.allProduct();
  }
}
</script>
<style>
</style>