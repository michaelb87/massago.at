<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link to="/" class="navbar-item navbar-logo">
          <logo />
        </nuxt-link>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar"
          v-on:click="isActive=!isActive"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbar" class="navbar-menu" v-bind:class="{'is-active':isActive}">
        <div class="navbar-start">

        </div>
        <div class="navbar-end">
          <nuxt-link no-prefetch exact
            class="navbar-item"
            v-on:click.native="isActive=false"
            v-for="entry in entries"
            :key="entry.text"
            :to="entry.path"
          >{{entry.text}}</nuxt-link>

        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from "~/components/Logo.vue";
import colors from 'bulma/sass/utilities/_all.sass';
export default {
  components: {
    Logo
  },
  data() {
    return {
      entries: [
        { text: "Home", path: "/" },
        { text: "Massage", path: "/massage" },
        { text: "Über mich", path: "/andrea" },
        { text: "Kontakt", path: "/kontakt" },
      ],
      isActive: false
    };
  }
};
</script>

<style scoped>
.nuxt-link-active {
    color: #3273dc !important;
}
</style>