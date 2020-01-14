<template>
  <div class="container">
      <component :is="dynamic" />
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      dynamic: null
    };
  },
  mounted: function() {
      if(this.$route.params.symptom) {
          this.dynamic = () => import(`@/components/symptoms/${this.$route.params.symptom}.vue`);
      }
  }
};
</script>