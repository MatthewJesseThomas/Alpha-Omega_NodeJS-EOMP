<template>
	<NavBar/>
	<div class="home">
	<HelloWorld/>
  </div>
</template>
<script>
// @ is an alias to /src
 import NavBar from '@/components/NavBar.vue'
 import HelloWorld from '@/components/HelloWorld.vue'

 export default {
   name: 'HomeView',
   components: {
	NavBar,
     HelloWorld
   }
 }
</script>
