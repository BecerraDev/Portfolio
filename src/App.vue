<template>
  <div>
    <Navbar />
    <Main />
    <Footer />
    <button id="scrollToTop" class="icon-scrolltop" @click="scrollToTop"></button>
  </div>
</template>

<script>
import Navbar from './components/navbar.vue';
import Footer from './components/footer.vue';
import Main from './components/main.vue'; // Importa tu componente Main

export default {
  components: {
    Navbar,
    Footer,
    Main,
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
};
</script>

<style>
/* Estilos globales */
</style>