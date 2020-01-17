<template>
  <div>
    <div class="columns">
      <div class="column">
        <ImageModal cwidth="60%">
          <img :src="`${voucher[selectedSide]}`" :alt="voucher.name" />
        </ImageModal>
      </div>
    </div>

    <div class="columns is-mobile">
      <a
        class="button"
        :class="{'is-light': selectedSide === 'back' , }"
        @click="selectedSide='front'"
      >Voderseite</a>
      <a
        class="button"
        :class="{'is-light': selectedSide === 'front' , }"
        @click="selectedSide='back'"
      >Rückseite</a>
    </div>
  </div>
</template>

<script>
import ImageModal from "~/components/ImageModal.vue";
export default {
  props: ["voucher"],
  components: {
    ImageModal
  },
  data: () => {
    return {
      selectedSide: "front"
    };
  }
};
</script>