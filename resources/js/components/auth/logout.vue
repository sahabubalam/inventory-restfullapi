<template>
  
</template>

<script type="text/javascript">

export default{
    created(){
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        Toast.fire({
          icon: 'success',
          title: 'Signed out successfully'
        })
        this.$router.push({ name: '/'})
    }
}
    
</script>
<style scopped>

</style>