<template>
  <div>
    <!-- preview of orders -->
    <section class="hero is-info is-bold" v-if="selectedVouchers.length > 0">
      <div class="hero-body">
        <div class="container">
          <h4 class="title is-4">
            <span>Warenkorb</span>
          </h4>

          <div class="columns is-variable is-5 is-multiline no-margin-top">
            <div
              v-for="selectedVoucher in selectedVouchers"
              :key="selectedVoucher.id"
              class="column is-6"
            >
              <VOrderPreview :svoucher="selectedVoucher" />
            </div>
          </div>
          <div>&nbsp;</div>
          <div class="has-text-centered">
            <nuxt-link to="/gutscheine/bestellen" no-prefetch class="button">zur Bestellung</nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <div class="section">
      <div class="container">
        <!-- list of vouchers -->
        <div v-for="(voucher, id) in vouchers" :key="id" class="columns">
          <div class="column is-5 content">
            <h4 class="is-4 title">{{voucher.name}}</h4>
            <p>{{voucher.description}}</p>
            <p>
              <nuxt-link
                :to="`/gutscheine/konfigurieren/${id}`"
                no-prefetch
                class="button is-info"
              >Gutschein personalisieren</nuxt-link>
            </p>
          </div>
          <div class="column is-7">
            <VoucherPreview :voucher="voucher" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VoucherPreview from "~/components/vouchers/VoucherPreview.vue";
import VOrderPreview from "~/components/vouchers/VOrderPreview.vue";

export default {
  components: {
    VoucherPreview,
    VOrderPreview
  },
  computed: {
    vouchers() {
      return this.$store.state.voucher.vouchers;
    },
    selectedVouchers() {
      return this.$store.state.voucher.selectedVouchers;
    }
  }
};
</script>