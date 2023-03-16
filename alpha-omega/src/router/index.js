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
		path:'/login',
		name:'login',
		component: LoginView
	},
	{
	path: '/admin',
	name: 'admin',
	component: AdminView
	},
{
	path: '/contact',
	name: 'contact',
	component: ContactView

},
{
	path: '/products',
	name: 'Products',
	component: ProductView
	
},
{
	path: '/register',
	name: 'register',
	component: RegisterView
	
}

	]






const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
