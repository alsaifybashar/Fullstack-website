<template>
    <div id="app">
      <login-form tool-id="alaromk" />
    </div>
  </template>
  
  <script>
  import Userfront, { LoginForm } from "@userfront/vue";
  
  Userfront.init("xbrx864b");
  
  export default {
    name: "App",
    components: {
      LoginForm,
    },
  };
  </script>
  
  <style>
  
  </style>