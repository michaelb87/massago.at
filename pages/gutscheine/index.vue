<template>
  <div class="section">
    <div class="container">
      <div v-for="(voucher, id) in vouchers" :key="id" class="columns">
        <div class="column is-5 content">
          <h4 class="is-4 title">{{voucher.name}}</h4>
          <p>{{voucher.description}}</p>
          <p>
            <nuxt-link :to="`/gutscheine/${id}`" no-prefetch class="button is-info">Bestellen</nuxt-link>
          </p>
        </div>
        <div class="column is-7">
          <VoucherPreview :voucher="voucher" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VoucherPreview from "~/components/vouchers/VoucherPreview.vue";

export default {
  components: {
    VoucherPreview
  },
  computed: {
    vouchers() {
      return this.$store.state.voucher.vouchers;
    }
  }
};
</script>