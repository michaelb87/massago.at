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
      if(this.$route.params.therapie) {
          this.dynamic = () => import(`@/components/therapien/${this.$route.params.therapie}.vue`);
      }
  }
};
</script>