<template>
  <div class="section">
    <div class="container">
      <div>
        <div v-for="selectedVoucher in selectedVouchers" :key="selectedVoucher.id">
          <VOrderPreview :svoucher="selectedVoucher" />
        </div>
      </div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>

      <div class="columns is-centered">
        <div class="column is-8">
          <div class="box">
            <form class="form">
              <h5 class="title is-5">Rechnungsempfänger</h5>
              <div class="field">
                <label class="label">Name</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Ihr Name" />
                </div>
              </div>

              <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left has-icons-right">
                  <input class="input" type="email" placeholder="Ihre E-Mail Adresse" />
                  <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i>
                  </span>
                </div>
              </div>

              <div class="field">
                <label class="label">Telefon</label>
                <div class="control has-icons-left has-icons-right">
                  <input class="input" type="tel" name="phone" placeholder="Ihre Telefonnummer" />
                  <span class="icon is-small is-left">
                    <i class="fa fa-phone"></i>
                  </span>
                </div>
              </div>

              <div class="field">
                <label class="label">Adresse</label>
                <div class="control">
                  <textarea class="textarea" placeholder="Ihre Adresse"></textarea>
                </div>
              </div>

              <div class="is-divider"></div>

              <h5 class="title is-5">Gutscheinempfänger</h5>
              <div class="field">
                <div class="control">
                  <label class="checkbox">
                    <input type="checkbox" />
                    Selbe Adresse wie Rechnungsempfänger
                  </label>
                </div>
              </div>

              <div class="field is-grouped">
                <div class="control">
                  <button class="button is-link">Bestellen</button>
                </div>
              </div>
            </form>
          </div>
        </div>
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