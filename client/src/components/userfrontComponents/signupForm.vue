<template>
    <div>
      <signup-form tool-id="ramokrr" />
    </div>
  </template>
  
  <script>
    import Userfront, { SignupForm } from "@userfront/vue";
  
    Userfront.init("xbrx864b");
  
    export default {
      components: {
        SignupForm
      }
    }
  </script>