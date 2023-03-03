import { createStore } from 'vuex';
import axios from 'axios';
const shiniGamiURL = 'https://shinigami-api.onrender.com/';
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    showSpinner: true,
    message: null
  },
  getters: {
  },
  mutations: {
    setUsers(state, values) {
      state.users = values
    },
    setUser(state, value) {
      state.user = value
    },
    setProducts(state, values) {
      state.products = values
    },
    setProduct(state, value) {
      state.product = value
    },
    setSpinner(state, value) {
      state.Spinner = value
    },
    setMessage(state, value) {
      state.message = value
    }
  },
  actions: {
    async login(context, payload) {
      const res = await axios.post(`${shiniGamiURL}login`, payload);
      const {result, err} = await res.data;
      if(result){
        context.commit('setUser', result);
      }else{
        context.commit('setMessage', err);
      }
    },
    async register(context, payload) {
      let res = await axios.post(`${shiniGamiURL}register`, payload);
      let {msg, err} = await res.data;
      if(msg){
        context.commit('setMessage', msg);
      }else{
        context.commit('setMessage', err);
      }
    },
    // async fetchUsers(context) {
    // },
    // async updateUser(context, payload) {
    // },
    // async deleteUser(context, id) {
    // }
  },
  modules: {
  }
})