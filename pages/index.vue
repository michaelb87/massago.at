<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <h3 class="title is-4">Herzlich Willkommen</h3>
        <p class="is-size-5 has-text-justified">
          Es freut mich Sie begrüßen zu dürfen!
        </p>
        <p class="is-size-5 has-text-justified	">Massago ist eine auf Heilmassage spezialisierte Praxis
          in Aschach a.d. Steyr - <i>nur 8 Minuten von Steyr entfernt</i>.
        </p><p class="is-size-5 has-text-justified">
          Der Praxisraum befindet sich im <a
                    href="http://www.vitalogikum.at"
                    target="blank"
                    class="has-text-dark"
                  >Vitalogikum</a> im ersten Stock.
          Falls Sie noch nicht hier waren, finden Sie unter <nuxt-link to="/kontakt" >Kontakt</nuxt-link> einen Routenplaner. 
        </p>
        <p>
          
        </p>
      </div>
      <div class="column is-5">
        <figure class="image">
          <img src="~/assets/img/title.jpg" />
        </figure>
      </div>
    </div>

    <div class="is-divider"></div>

    <div>
      <div class="is-size-4 has-text-weight-medium">Massage bei Beschwerden wie</div>
      <p>&nbsp;</p>
      <symptome v-bind:embedded="true" padding="6%" v-bind:showMore="true" elementsPerRow="5" />
    </div>
  </div>
</template>

<script>
import symptome from '~/pages/symptome/index'
export default {
  components: {
    symptome
  }
};
</script>

<style>
</style>
