<template>
  <div>
    <div class="columns">
      <div class="column">
        <ImageModal cwidth="60%" >
            <img :src="`${voucher[selectedSide]}`" :alt="voucher.name" :key="selectedSide" />
        </ImageModal>
      </div>
    </div>

    <div class="columns is-mobile">
      <a
        class="button"
        :class="{'is-light': selectedSide === 'back' , 'is-small': smallButtons}"
        @click="selectSide('front')"
      >Voderseite</a>
      <a
        class="button"
        :class="{'is-light': selectedSide === 'front' , 'is-small': smallButtons}"
        @click="selectSide('back')"
      >Rückseite</a>
    </div>
  </div>
</template>

<script>
import ImageModal from "~/components/ImageModal.vue";
let self;
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
  created: function() {
    self = this;
  },
  data: () => {
    return {
      selectedSide: "front"
    };
  },
  methods: {
    selectSide(side) {
      this.selectedSide = side;
    }
  }
};
</script>

<style scoped>

</style>