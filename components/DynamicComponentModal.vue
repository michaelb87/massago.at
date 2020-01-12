<template>
  <div>
    <span @click="openModal" class="pointer-cursor"><slot></slot></span>
    <div class="modal is-active" v-if="isActive">
      <div class="modal-background"></div>
      <div class="modal-content" v-on-clickaway="deActivate">
        <div class="box">
            <component :is="dynamic" />

        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" click="isActive = false">></button>
    </div>
  </div>
</template>
<script>
import { mixin as clickaway } from "vue-clickaway";
export default {
  props: ["component"],
  mixins: [clickaway],
  data: function() {
    return {
      isActive: false,
      dynamic: null,
    };
  },
  methods: {
    deActivate() {
      this.isActive = false
    },
    openModal() {
        this.isActive = true
        this.dynamic = () => import(`@/components/${this.component}.vue`);
    }
  }
};
</script>