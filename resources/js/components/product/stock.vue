<template>
   <div>
<div class="row">
    <router-link to="/store-product" class="btn btn-primary">Add Product</router-link>
</div>
<br>
<input type="text" v-model="searchTerm" placeholder="Search Here" class="form-control" style="width:300px">
<br>
<div class="row">
            <div class="col-lg-12 mb-4">
              <!-- Simple Tables -->
              <div class="card">
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 class="m-0 font-weight-bold text-primary">Product List</h6>
                </div>
                <div class="table-responsive">
                  <table class="table align-items-center table-flush">
                    <thead class="thead-light">
                      <tr>
                        <th>Product Name</th>
                        <th>Product Photo</th>
                        <th>Category</th>
                        <th>Buying Price</th>
                        <th>Stock</th>
                        <th>Quantity</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="product in filterSearch" :key="product.id">
                        <td>{{product.product_name}}</td>
                        <td><img :src="product.image" style="height:60px;width:60px"></td>
                        <td>{{product.category_name}}</td>
                        <td>{{product.buying_price}}</td>
                        <td v-if="product.product_quantity>=1" ><span class="badge badge-success">Available</span></td>
                        <td v-else=" "><span class="badge badge-danger">Stock Out</span></td>
                        <td>{{product.product_quantity}}</td>
                        <td>
                          <router-link :to="{ name:'edit-stock',params:{id:product.id}}" class="btn btn-sm btn-primary">Edit Stock</router-link>
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
  computed:{
    filterSearch(){
      return this.products.filter(product=>{
        return product.product_name.match(this.searchTerm)
      })
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