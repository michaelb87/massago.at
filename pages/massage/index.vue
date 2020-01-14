<template>
  <div class="container">
    <div>
      <symptome v-bind:embedded="false" padding="7%" v-bind:showMore="false" :elementsPerRow="5" />
    </div>
  </div>
</template>

<script>
import symptome from "~/pages/symptome/index";
export default {
  components: {
    symptome
  }
};
</script>