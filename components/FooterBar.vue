<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>massago.at</strong>
        &copy; 2019 - {{currYear}}
        <a href="/andrea">Andrea Orlovits</a>
      </p>
      <p>
        <span>Vitalogikum, Saaßstraße 66, 4421 Aschach an der Steyr</span>
      </p>
      <p>
        <span>
          Tel.:
          <a href="tel:06776-3153-743">06776 3153 743</a>
        </span>
        <span class="hdivider"></span>
        <span>
          E-mail:
          <a href="mailto:andreaorlovits@gmail.com">andreaorlovits@gmail.com</a>
        </span>
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
</style>