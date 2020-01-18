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
          <p>Natürlich können Sie den Gutschein auch zu sich schicken lassen und persönlich übergeben</p>
          <p>&nbsp;</p>
          <p>
            <nuxt-link to="/gutscheine" class="is-pulled-right">Zurück</nuxt-link>
          </p>
        </div>
      </div>
      <div>&nbsp;</div>
      <div class="columns is-centered">
        <div class="column is-4 box">
          <h4 class="title is-4">Diesen Gutschein personalisieren</h4>
          <form class="form">
            <div class="field">
              <label class="label">Für</label>
              <div class="control">
                <input class="input" type="text" placeholder="Name des Beschenkten" v-model="to" />
              </div>
            </div>

            <div class="field">
              <label class="label">Von</label>
              <div class="control">
                <input class="input" type="text" placeholder="Ihr Name" v-model="from" />
              </div>
            </div>

            <div class="field">
              <label class="label">Wert</label>

              <div class="control">
                <div class="select">
                  <select v-model="tarif_id">
                    <option
                      v-for="(t, id) in tarifs"
                      :key="id"
                      :value="id"
                    >{{t.minutes}} Minuten ({{t.price}} Euro)</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field">
              <label class="label">Nachricht</label>
              <div class="control">
                <textarea
                  class="textarea"
                  placeholder="Ihre Persönliche Nachrichte an den Beschenkten"
                  v-model="message"
                ></textarea>
              </div>
            </div>

            <div class="field is-grouped is-grouped-multiline">
              <div class="control">
                <button class="button is-link" @click="addOrder" data-action="order">Zur Bestellung</button>
              </div>
              <div class="control">
                <button
                  class="button is-link is-light"
                  @click="addOrder"
                  data-action="add_more"
                >Weiteren Gutschein konfigurieren</button>
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
  data: function() {
    return {
      from: this.$store.state.voucher.from,
      to: "",
      message: "",
      tarif_id: 1
    };
  },
  components: {
    VoucherPreview
  },
  computed: {
    voucher() {
      return this.$store.state.voucher.vouchers[this.$route.params.id];
    },
    tarifs() {
      return this.$store.state.voucher.tarifs;
    }
  },
  beforeMount: function() {
    if (!(this.$route.params.id in this.$store.state.voucher.vouchers)) {
      this.$router.push({ path: "/gutscheine" });
    }
  },
  methods: {
    addOrder(e) {
      e.preventDefault();
      this.$store.commit("voucher/addOrder", {
        id: Math.random(),
        voucherId: this.$route.params.id,
        data: {
          from: this.from,
          to: this.to,
          message: this.message,
          tarif_id: this.tarif_id
        }
      });
      this.$store.commit("voucher/setFrom", this.from);
      if (e.target.dataset.action === "order") {
        this.$router.push({ path: "/gutscheine/bestellen" });
      } else {
        this.$router.push({ path: "/gutscheine" });
      }
    }
  }
};
</script>