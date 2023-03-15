<template>
    <div class="container-fluid">
        <div class="row">
            <h2 class="display-2">Registration</h2>
        </div>
        <div class="row">
            <div class="col">
                <form class="form" @submit.prevent="signUp">
                    <div class="form-control-wrapper">
                    <span class="inline">
                      <input class="form-control" type="text" placeholder="Firstname" required v-model="payload.firstName"/>
                      <i class="bi bi-person"></i>
                    </span>
                    </div>
                  <div class="form-control-wrapper">
                      <span class="inline">
                        <input type="text" class="form-control" placeholder="Lastname" v-model="payload.lastName">
                        <i class="bi bi-person"></i>
                      </span>
                  </div>
                  <div class="form-control-wrapper">
                      <span class="inline">
                        <input type="text" class="form-control" placeholder="Gender" v-model="payload.gender">
                        <i class="bi bi-person-fill"></i>
                      </span>
                  </div>
                  <div class="form-control-wrapper">
                      <span class="inline">
                        <input type="text" class="form-control" placeholder="Cellphone" v-model="payload.cellphoneNumber" maxlength="12">
                        <i class="bi bi-telephone-fill"></i>
                      </span>
                  </div>
                  <div class="form-control-wrapper">
                      <span class="inline">
                        <input type="email" class="form-control" placeholder="Email" v-model="payload.emailAdd">
                        <i class="bi bi-envelope"></i>
                      </span>
                  </div>
                  <div class="form-control-wrapper">
                      <span class="inline">
                        <input type="password" class="form-control" placeholder="Password" v-model="payload.user_password">
                        <i class="bi bi-person-fill"></i>
                      </span>
                  </div>
                  <div class="form-control-wrapper">
                      <span class="inline">
                        <input type="text" class="form-control" placeholder="Profile URL" v-model="payload.userProfile">
                        <i class="bi bi-link"></i>
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
                  <div class="form-control-wrapper mb-3">
                    <button type="submit" class="btn btn-success w-100">Register</button>
                  </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default{
	
}
	
</script>
