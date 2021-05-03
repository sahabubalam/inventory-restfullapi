<template>
   <div>
   <div class="container-fluid" id="container-wrapper">
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">POS Dashboard</h1>
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="./">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">POS</li>
            </ol>
          </div>

          <div class="row mb-3">
           
            

            <!-- Area Chart -->
            <div class="col-xl-5 col-lg-5">
              <div class="card mb-4">
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 class="m-0 font-weight-bold text-primary">Monthly Recap Report</h6>
                  
                </div>
                <div class="card-body">
                  <div class="chart-area">
                   
                  </div>
                </div>
              </div>
            </div>
            <!-- Pie Chart -->
            <div class="col-xl-7 col-lg-7">
              <div class="card mb-4">
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 class="m-0 font-weight-bold text-primary">Products Sold</h6>
                </div>

                <!-- Category wisw product -->
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">All Product</a>
                </li>


                <li class="nav-item" v-for="category in categories" :key="category.id">
                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false" @click="subProduct(category.id)">{{category.category_name}}</a>
                </li>


                
                </ul>
                <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div class="card-body">
                    <input type="text" v-model="searchTerm" placeholder="Search Product" class="form-control" style="width:300px">
                    <br>
                <div class="row">
                    <div class="col-lg-3 col-md-3 col-sm-3 col-6" v-for="product in filterSearch" :key="product.id">
                        <a href="#">
                        <div class="card" style="width: 8.5rem;margin-bottom:5">
                            <img class="card-img-top" style="height:60px;width:90px" :src="product.image" alt="Card image cap">
                            <div class="card-body">
                                <h6 class="card-title">{{product.product_name}}</h6>
                                <span class="badge badge-success" v-if="product.product_quantity>=1">Available {{product.product_quantity}}</span>
                        <span class="badge badge-danger" v-else=" ">Stock Out {{product.product_quantity}}</span>
                                
                            </div>
                        </div>
                        </a>
                    </div>

                    </div>
                  
                </div>
                </div>


                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <br>
                <input type="text" v-model="searchTerm" placeholder="Search Product" class="form-control" style="width:300px">
                    <br>
                <div class="row">
                    <div class="col-lg-3 col-md-3 col-sm-3 col-6" v-for="getproduct in getfilterSearch" :key="getproduct.id">
                        <a href="#">
                        <div class="card" style="width: 8.5rem;margin-bottom:5">
                            <img class="card-img-top" style="height:60px;width:90px" :src="getproduct.image" alt="Card image cap">
                            <div class="card-body">
                                <h6 class="card-title">{{getproduct.product_name}}</h6>
                                <span class="badge badge-success" v-if="getproduct.product_quantity>=1">Available {{getproduct.product_quantity}}</span>
                                <span class="badge badge-danger" v-else=" ">Stock Out {{getproduct.product_quantity}}</span>
                                
                            </div>
                        </div>
                        </a>
                    </div>

                    </div>
                </div>
              
                </div>
                 <!-- Category wisw product end -->

             
                
              </div>
            </div>
          </div>
          <!--Row-->

        
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
  created(){
      this.allProduct();
      this. allCategory();
      
  },
  computed:{
    filterSearch(){
      return this.products.filter(product=>{
        return product.product_name.match(this.searchTerm)
      })
    },
    getfilterSearch(){
      return this.getproducts.filter(getproduct=>{
        return getproduct.product_name.match(this.searchTerm)
      })
    }

  },
  data(){
      return{
        categories:[],
        getproducts:[],
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
      allCategory(){
          axios.get('/api/category/')
          .then(({data})=>(this.categories=data))
          .catch()
      },
      subProduct(id){
          axios.get('/api/getting/product/'+id)
          .then(({data})=>(this.getproducts=data))
          .catch()
      },
     
  },
  
}
</script>
<style>
</style>