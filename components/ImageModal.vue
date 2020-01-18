<template>
  <div @keydown.esc="isActive=false" tabindex="0">
    <div @click="isActive = true" :class="{'pointer-cursor': pointer}">
      <slot />
    </div>
    <div class="modal is-active img-modal" v-if="isActive">
      <div class="modal-background"></div>
      <div
        class="modal-content"
        v-on-clickaway="deActivate"
        :style="{width: isMobile ? mobileDefault: cwidth}"
      >
        <p class="image">
          <slot />
        </p>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="isActive = false"></button>
    </div>
  </div>
</template>
<script>
import { mixin as clickaway } from "vue-clickaway";
import MobileHelper from "~/mixins/MobileHelper";
export default {
  props: {
    cwidth: {
      // defines modal content width
      type: String,
      default: "65%"
    },
    pointer: {
      type: Boolean,
      default: true
    }
  },
  mixins: [clickaway, MobileHelper],
  data: function() {
    return {
      isActive: false,
      mobileDefault: "95%",
    };
  },
  methods: {
    deActivate() {
      this.isActive = false;
    }
  }
};
</script>

<style scoped>
.img-modal {
  animation: 0.3s appear;
}
</style>