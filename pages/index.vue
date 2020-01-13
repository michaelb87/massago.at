<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <h3 class="title is-4">Heilmassage</h3>
        <h4 class="subtitle is-4">im Vitalogikum in Aschach and der Steyr</h4>
        <p class="is-size-5">
        </p>
      </div>
      <div class="column is-5">
        <figure class="image">
          <img src="/images/title.jpg" />
        </figure>
      </div>
    </div>

    <div class="is-divider"></div>

    <div>
      <div class="is-size-4 has-text-weight-medium">Massage bei Beschwerden wie</div>
      <p>&nbsp;</p>
      <symptome v-bind:embedded="true" padding="6%" />
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
