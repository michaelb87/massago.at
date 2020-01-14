<template>
  <div>
    <section class="hero is-light">
      <div class="hero-body">
        <div class="container">
          <div >
            <h1 class="title">Heilmassage</h1>
          </div>
          <div>
            <p>Einleitung...</p>
            <p>Lorem Ipsum</p>
          </div>
          <div class="columns is-centered">
            <div class="column is-3">
              <figure class="image">
                <img
                  src="~/assets/img/zeit_fuer_massage.png"
                  alt="Zeit für Massage"
                  class="is-rounded"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="section container">
      <div class>
        <symptome v-bind:embedded="false" padding="7%" v-bind:showMore="false" :elementsPerRow="5" />
      </div>

      <div class="is-divider"></div>

      <div>
        <therapien />
      </div>
    </div>
  </div>
</template>

<script>
import symptome from "~/pages/symptome/index";
import therapien from "~/pages/therapien/index";
export default {
  components: {
    symptome,
    therapien
  }
};
</script>