
<template>

    <div id="navbar-color">
      <navbar></navbar>
    </div>
  <div id="login-box">
    <div id="user-password">
        <loginForm></loginForm>
    </div>
    <div id="google-box">
      <googleAuth></googleAuth>
    </div>
  <div id="register">
    <p3>Don't have an account? <router-link class="navbar-btn" to="/profile/register">Register</router-link></p3>
  </div>
</div>
</template>

<script>
import googleAuth from '@/components/googleAuth.vue';
import loginForm from '@/components/userfrontComponents/loginForm.vue';
import navbar from '@/components/navbar.vue';




export default{
  components:{
    googleAuth,
    loginForm,
    navbar,
  }
}

</script>


<style>

#navbar-color{
  background-color: black;
}

#login-box{
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



#google-box{
  padding: 10px;
  /*background-color: #DB4437;*/
  color: white;
  border: none;
  cursor: pointer;
}
</style>