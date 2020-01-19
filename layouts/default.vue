<template>
  <div class="site">
    <!-- <div class="pre-head has-text-centered has-background-grey-lighter"><span>
      Heilmassage Andrea Orlovits  -  Saaßstraße 66 - 4421 Aschach / Steyr
      </span>
    </div>-->
    <navbar />
    <section>
      <nuxt />
    </section>
    <footer-bar />
    <CallbackWidget />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import FooterBar from "~/components/FooterBar.vue";
import CallbackWidget from "~/components/CallbackWidget.vue";

export default {
  components: {
    Navbar,
    FooterBar,
    CallbackWidget
  }
};
</script>
