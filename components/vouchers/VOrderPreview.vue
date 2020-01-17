<template>
  <div class="columns box">
    <div class="column">
      <VoucherPreview :voucher="voucher" :small-buttons="true" />
    </div>
    <div class="column content">
      <p>
        <strong>Für:</strong>
        {{svoucher.data.to}}
        <button
          class="delete is-pulled-right has-background-danger"
          @click="deleteSelected"
        ></button>
      </p>
      <p>
        <strong>Von:</strong>
        {{svoucher.data.from}}
      </p>
      <p>
        <strong>Wert:</strong>
        {{tarifs[svoucher.data.tarif_id].minutes}} Minuten ({{tarifs[svoucher.data.tarif_id].price}} €)
      </p>
      <p>
        <strong>Nachricht:</strong>
        {{svoucher.data.message}}
      </p>
    </div>
  </div>
</template>

<script>
import VoucherPreview from "~/components/vouchers/VoucherPreview.vue";
export default {
  props: ["svoucher"],
  components: {
    VoucherPreview
  },
  computed: {
    voucher() {
      return this.$store.state.voucher.vouchers[this.svoucher.voucherId];
    },
    tarifs() {
      return this.$store.state.voucher.tarifs;
    }
  },
  methods: {
    deleteSelected(e) {
      this.$store.commit("voucher/deleteSelectedVoucher", this.svoucher);
    }
  }
};
</script>

<style scoped>
</style>