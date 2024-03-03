<template>
    <div id="navbar-color">
        <navbar></navbar>
    </div>
    <div id="signup-box">
        <signupForm></signupForm>
        <div id="login-text">
            <p3>Have an account? <router-link class="navbar-btn" to="/profile">Login</router-link></p3>
        </div>
    </div>
</template>

<script>
import signupForm from '@/components/userfrontComponents/signupForm.vue';
import navbar from '@/components/navbar.vue';

export default{
    components:{
        signupForm,
        navbar
    },
}
</script>


<style>
#navbar-color{
    color: black;
}

#signup-box{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 500px;
  width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid lightgray;
  margin-top: 100px;
}

#login-text{
    margin-top: 10px;
}
</style>