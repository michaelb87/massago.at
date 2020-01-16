<template>
  <div v-if="show">
    <DynamicComponentModal component="Callback" cwidth="40%">
      <div class="cbw-container">
        <i class="fa fa-phone is-size-3 cbw-icon"></i>
        <div class="cbw-info has-text-centered">Rückruf vereinbaren</div>
      </div>
    </DynamicComponentModal>
    <div class="fa fa-times-circle cbw-close" v-on:click="show=false"></div>
  </div>
</template>

<script>
import DynamicComponentModal from "~/components/DynamicComponentModal.vue";

export default {
  components: { DynamicComponentModal },
  data: function() {
    return {
      show: false
    };
  },
  mounted: function() {
    setTimeout(
      function() {
        this.show = true;
      }.bind(this),
      30 * 1000
    );
  }
};
</script>

<style scoped>
</style>