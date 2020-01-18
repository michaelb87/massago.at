<template>
  <div class="vorder-container">
    <div class="columns box">
      <span class="close-btn">
        <button class="delete has-background-danger is-pulled-right" @click="deleteSelected"></button>
        <div class="close-btn-label">
          <span class="tag is-warning" @click="deleteSelected">Löschen</span>
        </div>
      </span>
      <div class="column">
        <VoucherPreview :voucher="voucher" :small-buttons="true" />
      </div>
      <div class="column content">
        <p>
          <strong>Für:</strong>
          {{svoucher.data.to}}
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
.vorder-container {
  position: relative;
}
.close-btn {
  position: absolute;
  right: 1rem;
  top: 1.5rem;
  cursor: pointer;
}

@media (max-width: 768px) {
  .close-btn {
    right: 0rem;
    top: 1rem;
  }
}

.close-btn-label {
  display: none;
  position: relative;
  top: -0.25rem;
  right: 0.5rem;
  animation: 0.4s fadeInRight;
}

.close-btn:hover > .close-btn-label {
  display: inline-block;
}
.vorder-container .columns {
  margin-top: 0 !important;
}
</style>
