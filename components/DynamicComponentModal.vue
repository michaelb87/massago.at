<template>
  <div>
    <span @click="openModal" class="pointer-cursor">
      <slot></slot>
    </span>
    <div class="modal is-active" v-if="isActive">
      <div class="modal-background"></div>
      <div
        class="modal-content"
        v-on-clickaway="deActivate"
        :style="{width: isMobile ? mobileDefault: cwidth}"
      >
        <div class="box">
          <div class="content">
            <component :is="dynamic" />
          </div>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" click="isActive = false">></button>
    </div>
  </div>
</template>
<script>
import { mixin as clickaway } from "vue-clickaway";
import MobileHelper from "~/mixins/MobileHelper";
export default {
  props: {
    component: {
      type: String,
      default: null
    },
    cwidth: {
      // defines modal content width
      type: String,
      default: "65%"
    }
  },
  mixins: [clickaway, MobileHelper],
  data: function() {
    return {
      isActive: false,
      dynamic: null,
      mobileDefault: "95%"
    };
  },
  methods: {
    deActivate() {
      this.isActive = false;
    },
    openModal() {
      this.isActive = true;
      this.dynamic = () => import(`@/components/${this.component}.vue`);
    }
  }
};
</script>