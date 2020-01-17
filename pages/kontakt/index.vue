<template>
  <div class="container section">
    <div class="columns is-vcentered">
      <div class="column">
        <p class="is-size-3">Vitalogikum</p>
        <p class="is-size-5">Saaßstraße 66</p>
        <p class="is-size-5">4421 Aschach an der Steyr</p>
        <p class="is-size-5">
          Tel.:
          <a href="tel:06776-3153-743">06776 3153 743</a>
        </p>
        <p class="is-size-5">
          E-Mail:
          <a href="mailto:andreaorlovits@gmail.com">andreaorlovits@gmail.com</a>
        </p>
        <p>&nbsp;</p>
        <p>Termine nach telefonischer Vereinbarung.</p>
        <p>Sollten Sie mich nicht erreichen, bin ich möglicherweise gerade bei einer Therapie.
          Nutzen Sie am Einfachsten den untenstehenden <a href="#callback" class="reverse-link">Rückruf Service</a>.
        </p>
        <p>Gerne können Sie mir Ihren Terminwunsch auch via <a href="mailto:andreaorlovits@gmail.com?subject=Terminanfrage" class="reverse-link">Email</a> senden.</p>
        <p><strong>Öffnungszeiten:</strong> Montag bis Freitag 9 - 21 Uhr</p>
      </div>
      <div class="column">
        <figure class="image">
          <img src="~/assets/img/vitalogikum.jpg" alt="Vitalogikum Gebäude aussen" />
        </figure>
      </div>
    </div>
    <div class>&nbsp;</div>
    <div class="columns">
      <div class="column">
        <Map></Map>
      </div>
    </div>
    <div class>&nbsp;</div>
    <div class="columns">
      <div class="column is-offset-4 is-4" id="callback">
        <Callback />
      </div>
    </div>
  </div>
</template>

<script>
import Map from "~/components/Map";
import Callback from "~/components/Callback";

export default {
  components: {
    Map,
    Callback
  }
};
</script>