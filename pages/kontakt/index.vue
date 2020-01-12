<template>
  <div class="container">
    <div class="columns is-vcentered">
      <div class="column">
          <p class="is-size-3">Vitalogikum</p>
          <p class="is-size-5">Saaßstraße 66</p>
          <p class="is-size-5">4421 Aschach an der Steyr</p>
          <p class="is-size-5">Tel.: <a href="tel:06776-3153-743">06776 3153 743</a></p>
          <p class="is-size-5">E-mail: <a
								href="mailto:andreaorlovits@gmail.com">andreaorlovits@gmail.com</a></p>

      </div>
      <div class="column">
        <figure class="image">
          <img src="/images/vitalogikum.jpg" alt="Vitalogikum Gebäude aussen" />
        </figure>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <Map></Map>
      </div>
    </div>
  </div>
</template>

<script>
import Map from "~/components/Map";
export default {
  components: {
    Map
  }
};
</script>