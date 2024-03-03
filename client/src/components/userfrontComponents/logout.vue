<template>
    <div id="app">
      <logout-button tool-id="bamrono" />
    </div>
  </template>
  
  <script>
  import Userfront, { LogoutButton } from "@userfront/vue";
  
  Userfront.init("xbrx864b");
  
  export default {
    name: "App",
    components: {
      LogoutButton,
    },
  };
  </script>
  
  <style>
  
  </style>