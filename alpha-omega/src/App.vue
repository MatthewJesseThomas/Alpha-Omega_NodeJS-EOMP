<template>
	<NavBar/>
	<router-view/>
	<Footer/>

</template>
<script>
import NavBar from "../src/components/NavBar.vue"
import Footer from "../src/components/Footer.vue"
export default{
	components:{
		NavBar,
		Footer	
	}
	
};

</script>



<style>
/* .nav{
	background-color: red;
} */
</style>
