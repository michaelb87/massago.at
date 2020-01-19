<template>
  <div>
    <div class="container section">
      <div class="columns">
        <div class="column is-6 is-size-5 is-size-6-mobile">
          <h4 class="title is-4">Herzlich Willkommen</h4>
          <p class="has-text-justified">Es freut mich Sie begrüßen zu dürfen!</p>
          <p class="has-text-justified">
            Massago ist eine auf Heilmassage spezialisierte Praxis
            in Aschach a.d. Steyr -
            <i>nur 8 Minuten von Steyr entfernt</i>.
          </p>
          <p class="has-text-justified">
            <span>Mein Praxisraum befindet sich im</span>
            <a href="http://www.vitalogikum.at" target="blank" class="has-text-dark">Vitalogikum</a>
            <span>
              im ersten Stock.
              Falls Sie noch nicht hier waren, finden Sie unter
            </span>
            <nuxt-link to="/kontakt" no-prefetch>Kontakt</nuxt-link>
            <span>einen Routenplaner.</span>
          </p>
          <p></p>
        </div>
        <div class="column is-5 is-offset-1">
          <ImageModal cwidth="50%">
            <figure class="image">
              <img src="~/assets/img/title.jpg" />
            </figure>
          </ImageModal>
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
            <ImageModal>
              <img src="~/assets/img/massageraum.jpg" alt="Massageraum" />
              <div class="is-overlay">
                <div class="praxisraum-txt is-size-3 is-size-4-mobile">Der Praxisraum</div>
              </div>
            </ImageModal>
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
import ImageModal from "~/components/ImageModal";

export default {
  components: {
    symptome,
    Newsletter,
    ImageModal
  }
};
</script>

<style scoped>
</style>