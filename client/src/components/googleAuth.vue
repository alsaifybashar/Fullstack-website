
<template>
    <GoogleSignInButton
      @success="handleLoginSuccess"
      @error="handleLoginError"
    ></GoogleSignInButton>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import { GoogleSignInButton } from 'vue3-google-signin';
  
  
  export default defineComponent({
    name: 'googelAuth',
    components: {
      GoogleSignInButton,
    },
    methods: {
      handleLoginSuccess(response) {
        const { credential } = response;
        console.log('Access Token', credential);
      },
      handleLoginError() {
        console.error('Login failed');
      },
    },
  });
  </script>
  