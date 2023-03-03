/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminView from '../views/AdminView.vue';
import ContactView from '../views/ContactView.vue';
import LoginView from '../views/LoginView.vue';
import ProductView from '../views/ProductView.vue';
import RegisterView from '../views/RegisterView.vue';


	const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView
	},
{
		path:'/Login',
		name:'Login',
		component: function(){
			return import("../views/LoginView.vue")
		},

},
{
	path: '/Admin',
	name: 'Admin',
	component: function(){
		return import("../views/AdminView.vue")
	}
},
{
	path: '/Contact',
	name: 'Contact',
	component: function(){
		return import("../views/ContactView.vue")
	}
},
{
	path: '/Products',
	name: 'Products',
	component: function(){
		return import("../views/ProductView.vue")
	}
},
{
	path: '/Register',
	name: 'Register',
	component: function(){
		return import("../views/RegisterView.vue")
	}
},

	]






const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
