<template>
  <div class="section">
    <div class="container">
      <div v-for="selectedVoucher in selectedVouchers" :key="selectedVoucher.id">
        <VOrderPreview :svoucher="selectedVoucher" />
      </div>
    </div>
  </div>
</template>

<script>
import VOrderPreview from "~/components/vouchers/VOrderPreview.vue";
export default {
  components: {
    VOrderPreview
  },
  computed: {
    selectedVouchers() {
      return this.$store.state.voucher.selectedVouchers;
    }
  }
};
</script>