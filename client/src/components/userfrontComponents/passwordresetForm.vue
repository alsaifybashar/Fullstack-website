<template>
    <div id="app">
      <password-reset-form tool-id="lldknao" />
    </div>
  </template>
  
  <script>
  import Userfront, { PasswordResetForm } from "@userfront/vue";
  
  Userfront.init("xbrx864b");
  
  export default {
    name: "App",
    components: {
      PasswordResetForm,
    },
  };
  </script>
  
  <style>
  </style>