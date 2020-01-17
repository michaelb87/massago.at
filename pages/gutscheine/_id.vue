<template>
  <div class="section">
    <div class="container">
      <div class="columns">
        <VoucherPreview :voucher="voucher" class="column" />
        <div class="column content">
          <p>
            <span class="tag is-info">Gratis Versand!</span>
          </p>
          <p>
            Gerne können Sie den Gutschein auch direkt an die beschenkte Person senden lassen.
            Hinterlassen Sie doch auch ein paar nette Worte und ich übertrage ihre Nachricht.
          </p>
          <p>&nbsp;</p>
          <p>
            <nuxt-link to="/gutscheine" class="is-pulled-right">Zurück</nuxt-link>
          </p>
        </div>
      </div>
      <div>&nbsp;</div>
      <div class="columns">
        <div class="column is-4 box">
          <h4 class="title is-4">Diesen Gutschein personalisieren</h4>
          <form class="form">
            <div class="field">
              <label class="label">Für</label>
              <div class="control">
                <input class="input" type="text" placeholder="Name des Beschenkten" />
              </div>
            </div>

            <div class="field">
              <label class="label">Von</label>
              <div class="control">
                <input class="input" type="text" placeholder="Ihr Name" />
              </div>
            </div>

            <div class="field">
              <label class="label">Nachricht</label>
              <div class="control">
                <textarea
                  class="textarea"
                  placeholder="Ihre Persönliche Nachrichte an den Beschenkten"
                ></textarea>
              </div>
            </div>

            <div class="field is-grouped">
              <div class="control">
                <button class="button is-link">Zur Bestellung</button>
              </div>
              <div class="control">
                <button class="button is-link is-light">Weiteren Gutschein konfigurieren</button>
              </div>
            </div>
          </form>
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
    voucher() {
      return this.$store.state.voucher.vouchers[this.$route.params.id];
    }
  },
  beforeMount: function() {
    if (!(this.$route.params.id in this.$store.state.voucher.vouchers)) {
      this.$router.push({ path: "/gutscheine" });
    }
  }
};
</script>