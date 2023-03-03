<template lang="en">
	<NavBar/>
	<div class="text-white">
		<h1 class="fw-bold">Admin</h1>
        <h2  class="fw-bold">Admin Zone</h2>
    </div>
    <!-- <AddUser/> -->
    <UserCrud/>
	<!-- <ProductCrud/> -->
	<Footer/>
</template>
<script>

import NavBar from '../components/NavBar.vue';
// import ProductCrud from '../components/ProductCrud.vue';
import UserCrud from '../components/UserCrud.vue';
// import AddUser from '../components/AddUser.vue';
import Footer from '../components/Footer.vue';
export default {
    components: {
		NavBar,
		// ProductCrud,
        UserCrud,
        // AddUser,
		Footer
    }
}
</script>
