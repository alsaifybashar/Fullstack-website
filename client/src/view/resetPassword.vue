
<template>
    <div id="resetpassword-box">
        <passwordresetForm></passwordresetForm>
    </div>
    
    
    
</template>

<script>
import passwordresetForm from '@/components/userfrontComponents/passwordresetForm.vue';

export default{
    components:{
        passwordresetForm,
    },
}


</script>

<style>

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


</style>