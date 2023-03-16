<template>
	<div class="ProductView">
		<h2 class="text-dark">Welcome to the Inferno</h2>
		<Products/>
	</div>
</template>
<script>
import Products from '../components/ProductsComp.vue'
export default{
	components:{
		Products
	}
}
</script>