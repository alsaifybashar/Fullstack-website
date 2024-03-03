import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import GoogleSignInPlugin from "vue3-google-signin"

const app = createApp(App);

app.use(GoogleSignInPlugin, {
  clientId: '76411636676-rp9s6s6f1vmv15qtvtb58kie9rt6pnlq.apps.googleusercontent.com', 
});



app.use(router).mount('#app');

