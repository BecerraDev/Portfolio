<template>
    <div>
      <home-section></home-section>
      <about-section></about-section>
      <skills-section></skills-section>
      <project-section></project-section>
      <contact-section></contact-section>
    </div>
  </template>
  
  <script>
  import Home from '../views/home.vue';
  import About from '../views/about.vue';
  import Skills from '../views/skills.vue';
  import Project from '../views/project.vue';
  import Contact from '../views/contact.vue';
  
  export default {
    name: 'Main',
    components: {
      'home-section': Home,
      'about-section': About,
      'project-section': Project,
      'contact-section': Contact,
      'skills-section': Skills,
    },
  };
  </script>
  