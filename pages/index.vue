<template>
  <div>
    <div class="container section">
      <div class="columns">
        <div class="column is-6 is-size-5 is-size-6-mobile">
          <h3 class="title is-4">Herzlich Willkommen</h3>
          <p class="has-text-justified">Es freut mich Sie begrüßen zu dürfen!</p>
          <p class="has-text-justified">
            Massago ist eine auf Heilmassage spezialisierte Praxis
            in Aschach a.d. Steyr -
            <i>nur 8 Minuten von Steyr entfernt</i>.
          </p>
          <p class="has-text-justified">
            Der Praxisraum befindet sich im
            <a
              href="http://www.vitalogikum.at"
              target="blank"
              class="has-text-dark"
            >Vitalogikum</a> im ersten Stock.
            Falls Sie noch nicht hier waren, finden Sie unter
            <nuxt-link to="/kontakt" no-prefetch>Kontakt</nuxt-link>einen Routenplaner.
          </p>
          <p></p>
        </div>
        <div class="column is-5 is-offset-1">
          <figure class="image">
            <img src="~/assets/img/title.jpg" />
          </figure>
        </div>
      </div>

      <div class="is-divider"></div>

      <div>
        <div class="is-size-4 has-text-weight-medium">Massage bei Beschwerden wie</div>
        <p>&nbsp;</p>
        <symptome v-bind:embedded="true" padding="12%" v-bind:showMore="true" :elementsPerRow="5" />
      </div>
      <div class="is-divider"></div>

      <div class="columns is-centered">
        <div class="column is-7 praxisraum">
        <figure class="image">
          <img src="~/assets/img/massageraum.jpg" />
          
          <div class="is-overlay">
            <div class="praxisraum-txt is-size-3 is-size-4-mobile">Der Praxisraum</div>
          </div>
        </figure>


        </div>
      </div>
    </div>

    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column">
              <Newsletter />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import symptome from "~/pages/symptome/index";
import Newsletter from "~/components/Newsletter";
export default {
  components: {
    symptome,
    Newsletter
  }
};
</script>

<style scoped>

</style>