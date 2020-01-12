<template>
  <div class="site">
    <navbar />
    <section class="section site-content">
      <nuxt />
    </section>
    <footer-bar />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import FooterBar from "~/components/FooterBar.vue" ;

export default {
  components: {
    Navbar,
    FooterBar
  }
};
</script>
