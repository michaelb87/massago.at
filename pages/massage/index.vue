<template>
  <div>
    <div class="section container">
      <h4 class="is-4 title">Zeit für Massage</h4>
    </div>

    <div class="container section">
      <h4 class="title is-4">Therapien</h4>
      <div>
        <p>Beim Ersttermin werden wir gemeinsam bei einem Befundgespräch die passende Therapieform für Sie finden. 
          </p>
          <p>Meistens besteht diese aus einer Kombination von mehreren Techniken.</p>
      </div>
      <div>&nbsp;</div>
      <therapien v-bind:embedded="true" />
    </div>
    <div class="container section">
      <div>
        <symptome v-bind:embedded="false" padding="7%" v-bind:showMore="false" :elementsPerRow="5" />
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