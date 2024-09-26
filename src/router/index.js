import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/contact';
import About from '../views/about.vue';
import Skills from '../views/skills.vue';
import Projects from '../views/project.vue';
import Contact from '../views/contact.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/skills', component: Skills },
    { path: '/projects', component: Projects },
    { path: '/contact', component: Contact },

  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });


  export default router;
