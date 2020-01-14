<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p class="footer-elem">
        <strong>massago.at</strong>
        &copy; 2019 - {{currYear}}
        <nuxt-link no-prefetch to="/andrea" class="reverse-link">Andrea Orlovits</nuxt-link>
     
      </p>
      <p class="footer-elem">
        <nuxt-link no-prefetch to="/kontakt" class="reverse-link">Vitalogikum, Saaßstraße 66, 4421 Aschach an der Steyr</nuxt-link>
      </p>
      <p class="footer-elem">
        <span>
          Tel.:
          <a href="tel:06776-3153-743" >06776 3153 743</a>
        </span>
        <!-- <span class="hdivider"></span>
        <span>
          E-mail:
          <a href="mailto:andreaorlovits@gmail.com">andreaorlovits@gmail.com</a>
        </span> -->
      </p>
      <p class="footer-elem">
        <span>Impressum</span> | 
        <a href="https://www.facebook.com/massago.at" target="blank">Facebook</a>
        </p>
    </div>
  </footer>
</template>

<script>
import moment from "moment";
export default {
  computed: {
    currYear: () => {
      return moment().format("YYYY");
    }
  }
};
</script>

<style scoped>
.hdivider {
  display: inline-block;
  width: r1em;
}
.footer-elem{
  margin-bottom: 0em !important;
}
</style>