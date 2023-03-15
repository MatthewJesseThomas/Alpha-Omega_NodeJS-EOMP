<template lang="en">
	<div class="text-white">
		<h1 class="fw-bold">Admin</h1>
        <h2  class="fw-bold">Admin Zone</h2>
    </div>
    <AddUser/>
    <UserCrud/>
	<ProductCrud/>
</template>
<script>
import ProductCrud from '../components/ProductCrud.vue';
import UserCrud from '../components/UserCrud.vue';
import AddUser from '../components/AddUser.vue';
export default {
    components: {
		ProductCrud,
        UserCrud,
        AddUser
    }
}
</script>
