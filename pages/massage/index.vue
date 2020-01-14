<template>
  <div class="container">
    <div>
      <symptome v-bind:embedded="false" padding="7%" v-bind:showMore="false" :elementsPerRow="5" />
    </div>

    <div class="is-divider"></div>
    
    <div>
      <therapien />
    </div>
  </div>
</template>

<script>
import symptome from "~/pages/symptome/index";
import therapien from "~/pages/therapien/index"
export default {
  components: {
    symptome,
    therapien
  }
};
</script>