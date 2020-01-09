<template>
  <div class="site">
    <navbar />
    <div class="site-content">
      <nuxt />
    </div>
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
