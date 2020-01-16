<template>
  <div class="container">
    <div class="section">
      <div class="columns has-text-justified">
        <div class="column is-2 is-hidden-mobile"></div>
        <div class="column content">
          <component :is="dynamic" />
          <div>
            <p>
              <a class="is-pulled-right" v-on:click="goBack()">zurück</a>
            </p>
          </div>
        </div>
        <div class="column is-2 is-hidden-mobile"></div>
      </div>
    </div>
  </div>
</template>

<script>
import goBack from "~/mixins/goBack.vue";
export default {
  mixins: [goBack],
  data: () => {
    return {
      dynamic: null
    };
  },
  mounted: function() {
    if (this.$route.params.symptom) {
      this.dynamic = () =>
        import(`@/components/symptoms/${this.$route.params.symptom}.vue`);
    }
  }
};
</script>