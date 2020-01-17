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
        :class="{'is-light': selectedSide === 'back' , 'is-small': smallButtons}"
        @click="selectedSide='front'"
      >Voderseite</a>
      <a
        class="button"
        :class="{'is-light': selectedSide === 'front' , 'is-small': smallButtons}"
        @click="selectedSide='back'"
      >Rückseite</a>
    </div>
  </div>
</template>

<script>
import ImageModal from "~/components/ImageModal.vue";
export default {
  props: {
      voucher: {
          type: Object
      },
      smallButtons: {
          type: Boolean,
          default: false
      }
  },
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