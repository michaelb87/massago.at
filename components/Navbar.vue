<template>
  <nav
    class="navbar is-fixed-top"
    :class="{ 'navbar--hidden': !showNavbar }"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container disable_text_highlighting">
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
          v-on:click="isMobileActive=!isMobileActive"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbar" class="navbar-menu" v-bind:class="{'is-active':isMobileActive}">
        <div class="navbar-start"></div>
        <div class="navbar-end">
          <nuxt-link
            no-prefetch
            exact
            class="navbar-item"
            v-on:click.native="isMobileActive=false"
            v-for="entry in entries"
            :key="entry.text"
            :to="entry.path"
          >
            {{entry.text}}
            <span
              class="tag is-normal is-rounded is-info voucher-tag"
              v-if="entry.path == '/gutscheine' && vouchersCnt > 0"
            >{{vouchersCnt}}</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from "~/components/Logo.vue";
import colors from "bulma/sass/utilities/_all.sass";
export default {
  components: {
    Logo
  },
  data() {
    return {
      entries: [
        { text: "Start", path: "/" },
        { text: "Massage", path: "/massage" },
        { text: "Über mich", path: "/andrea" },
        {
          text: "Preise / Kassen",
          path: "/kassen"
        },
        { text: "Gutscheine", path: "/gutscheine" },
        { text: "Kontakt", path: "/kontakt" }
      ],
      isMobileActive: false,
      showNavbar: true,
      lastScrollPosition: 0
    };
  },
  mixins: [],
  computed: {
    vouchersCnt() {
      return this.$store.state.voucher.selectedVouchers.length;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return;
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    }
  }
};
</script>

<style scoped>
.nuxt-link-active {
  color: #3273dc !important;
}
.voucher-tag {
  margin-left: 5px;
  animation: 0.5s appear;
}
.navbar {
  transform: translate3d(0, 0, 0);
}
.navbar.navbar--hidden {
  transform: translate3d(0, -100%, 0);
  transition-duration: 0.5s;
}
</style>