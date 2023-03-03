<template>
	<div class="LoginView">
		<NavBar/>
		<Login/>
		<Footer/>
	
	</div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
import Login from '@/components/Login.vue'
import Footer from '@/components/Footer.vue'
export default{
	components:{
		NavBar,
		Login,
		Footer
	}
};

</script>