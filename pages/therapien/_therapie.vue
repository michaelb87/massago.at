<template>
  <div class="container">
    <div class="section">
      <div class="columns has-text-justified">
        <div class="column is-2 is-hidden-mobile"></div>
        <div class="column">
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
    if (this.$route.params.therapie) {
      this.dynamic = () =>
        import(`@/components/therapien/${this.$route.params.therapie}.vue`);
    }
  }
};
</script>