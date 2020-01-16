<template>
  <div class="container">
    <div class="section">
      
        <div class="column is-2 is-hidden-mobile"></div>
        <component :is="dynamic" class="column" />
        <div class="column is-2 is-hidden-mobile"></div>
      </div>
    </div>
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
    if (this.$route.params.therapie) {
      this.dynamic = () =>
        import(`@/components/therapien/${this.$route.params.therapie}.vue`);
    }
  }
};
</script>