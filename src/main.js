import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router';
import './styles.css'; // Si styles.css está en src

createApp(App)
  .use(router)
  .mount('#app');