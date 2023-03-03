<template lang="en">
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        AddUser
      </button>
    <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Add New User</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form class="form" @submit.prevent="signUp">
            <div class="form-control-wrapper">
            <span class="inline">
              <input class="form-control" type="text" placeholder="Firstname" required v-model="payload.firstName"/>
            </span>
            </div>
          <div class="form-control-wrapper">
              <span class="inline">
                <input type="text" class="form-control" placeholder="Lastname" v-model="payload.lastName">
              </span>
          </div>
          <div class="form-control-wrapper">
              <span class="inline">
                <input type="text" class="form-control" placeholder="Gender" v-model="payload.gender">
              </span>
          </div>
          <div class="form-control-wrapper">
              <span class="inline">
                <input type="text" class="form-control" placeholder="Cellphone" v-model="payload.cellphoneNumber" maxlength="12">
              </span>
          </div>
          <div class="form-control-wrapper">
              <span class="inline">
                <input type="email" class="form-control" placeholder="Email" v-model="payload.emailAdd">
              </span>
          </div>
          <div class="form-control-wrapper">
              <span class="inline">
                <input type="password" class="form-control" placeholder="Password" v-model="payload.user_password">
              </span>
          </div>
          <div class="form-control-wrapper">
              <span class="inline">
                <input type="text" class="form-control" placeholder="Profile URL" v-model="payload.userProfile">
              </span>
          </div>
          <div class="form-control-wrapper">
              <span class="inline">
                <input type="date" class="form-control" placeholder="Joined Date" v-model="payload.joinDate">
              </span >
          </div>
          <div class="form-control-wrapper mt-3">
            <label class="form-control bg-gradient" v-show="userMsg">{{userMsg}}</label>
          </div>
          <!-- <div class="form-control-wrapper mb-3"> 
            <button type="submit" class="btn btn-success w-100">Register</button>
          </div> -->
        </form>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {computed} from '@vue/runtime-core';
import { useStore  } from 'vuex';
export default {
    setup() {
      const payload = {
          firstName: '',
          lastName: '',
          gender: '',
          cellphoneNumber: '',
          emailAdd: '',
          user_password: '',
          userProfile: '',
          joinDate: ''
        };
      const store = useStore();
      const signUp = ()=> {
          store.dispatch("register", payload);
          // Refresh
          store.dispatch("fetchUsers");
      }
      const userMsg =
      computed( ()=>store.state.message )
      return {
        payload,
        userMsg,
        signUp
      }
    }
}
</script>
<style lang="">
</style>