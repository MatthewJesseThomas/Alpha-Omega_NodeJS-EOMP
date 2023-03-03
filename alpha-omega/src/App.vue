<template>
	<NavBar/>
	<Spinner/> 
	<RouterView/>
	<ContactView/> 
	<RegisterComp/>  
	<LoginComp/>  
	<UserProfile/> 
	<UpdateUser/>  
	<ForgotPassword/>  
	<AddProduct/> 
	<Products/> 
	<HomeBody/> 
	<Footer/>  
</template>
<script>


import Spinner from '@/components/SpinnerComponent.vue'
import ContactView from '@/components/ContactForm.vue'
import RegisterComp from '@/components/Register.vue'
import LoginComp from '@/components/Login.vue'
import UserProfile from '@/components/UserProfile.vue'
import UpdateUser from '@/components/UpdateUser.vue'
import ForgotPassword from '@/components/ForgotPassword.vue'
// import AddUser from '@/components/AddUser.vue'
import AddProduct from '@/components/AddProduct.vue'
import Products from '@/components/ProductComponent.vue'
import NavBar from '@/components/NavBar.vue'
import HomeBody from '@/components/HomeBody.vue'
import Footer from '@/components/Footer.vue'
export default{
	components:{
		Spinner,
		NavBar,
		ContactView,
		RegisterComp,
		LoginComp,
		HomeBody,
		Footer,
		Products,
		AddProduct,
		// AddUser,
		ForgotPassword,
		UpdateUser,
		UserProfile,
	
		
		
		
		
	}
	
};

</script>



<style>
/* .nav{
	background-color: red;
} */
</style>
