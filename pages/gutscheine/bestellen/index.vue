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
            <div v-if="!orderSuccess">
              <span class="is-pulled-right">
                <span class="is-size-4">Gesamtsumme:</span>
                <span class="is-size-4 has-text-black">
                  <u>{{cartSum}} Euro</u>
                </span>
              </span>
              &nbsp;
            </div>

            <form class="form" @submit="checkForm" v-if="!orderSuccess">
              <h5 class="title is-5">Rechnungsempfänger</h5>
              <div class="field">
                <label class="label">Name</label>
                <div class="control">
                  <input
                    class="input"
                    v-model="rname"
                    type="text"
                    placeholder="Ihr Vor- und Nachname"
                  />
                </div>
              </div>

              <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left has-icons-right">
                  <input
                    class="input"
                    v-model="remail"
                    type="email"
                    placeholder="Ihre E-Mail Adresse"
                  />
                  <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i>
                  </span>
                </div>
              </div>

              <div class="field">
                <label class="label">Telefon</label>
                <div class="control has-icons-left has-icons-right">
                  <input
                    class="input"
                    v-model="rtel"
                    type="tel"
                    name="phone"
                    placeholder="Ihre Telefonnummer"
                  />
                  <span class="icon is-small is-left">
                    <i class="fa fa-phone"></i>
                  </span>
                </div>
              </div>

              <div class="field">
                <label class="label">Adresse</label>
                <div class="control">
                  <textarea class="textarea" v-model="raddr" placeholder="Ihre Adresse"></textarea>
                </div>
              </div>

              <div class="is-divider"></div>

              <h5 class="title is-5">Gutscheinempfänger</h5>
              <div class="field">
                <div class="control">
                  <label class="checkbox">
                    <input type="checkbox" v-model="v_rec_same" />
                    Selbe Adresse wie Rechnungsempfänger
                  </label>
                </div>
              </div>

              <div class="field" v-if="!v_rec_same">
                <label class="label">Empfänger Name</label>
                <div class="control">
                  <input class="input" v-model="vname" type="text" placeholder="Vor- und Nachname" />
                </div>
              </div>

              <div class="field" v-if="!v_rec_same">
                <label class="label">Empfänger Adresse</label>
                <div class="control">
                  <textarea
                    class="textarea"
                    v-model="vaddr"
                    placeholder="Adresse des Gutschein Empfängers"
                  ></textarea>
                </div>
              </div>

              <div class="field is-grouped">
                <div class="control">
                  <button class="button is-link" :disabled="orderPending">Bestellen</button>
                </div>
              </div>
              <div class="notification is-danger" v-if="errors.length > 0">
                <p v-for="(err, idx) in errors" :key="idx">{{err}}</p>
              </div>
              <div class="notification is-danger" v-if="orderError">
                <p>Ohje!</p>
                <p>Entschuldidung, bei Ihrer Bestellung ist ein technischer Fehler aufgetreten.</p>
                <p>Bitte rufen Sie mich doch einfach an oder schreiben mir eine E-Mail mit den Gutschein Informationen</p>
              </div>
            </form>
            <div class="notification is-success" v-if="orderSuccess">
              <p>
                <strong>Bestellung erhalten</strong>
              </p>
              <p>Herzlichen Dank für Ihre Bestellung!</p>
              <p>Ich sende Ihnen als Nächstes meine Kontonummer und Ihre Rechnung via E-Mail an {{email_addr}}.</p>
              <p>Dies ist kann bis zu einen Tag dauern.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VOrderPreview from "~/components/vouchers/VOrderPreview.vue";
function defaultData() {
  return {
    rname: "",
    remail: "",
    rtel: "",
    raddr: "",
    v_rec_same: true,
    vname: "",
    vaddr: "",
    orderError: false,
    orderSuccess: false,
    orderPending: false,
    errors: []
  };
}

export default {
  components: {
    VOrderPreview
  },
  data: defaultData,
  computed: {
    selectedVouchers() {
      return this.$store.state.voucher.selectedVouchers;
    },
    cartSum() {
      return this.$store.state.voucher.selectedVouchers.reduce((prev, cur) => {
        return prev + this.$store.state.voucher.tarifs[cur.data.tarif_id].price;
      }, 0);
    }
  },
  methods: {
    placeOrder(e) {
      this.orderPending = true;
      this.$axios
        .$post("/api/voucher", {
          rname: this.rname,
          remail: this.remail,
          rtel: this.rtel,
          raddr: this.raddr,
          v_rec_same: this.v_rec_same,
          vname: this.vname,
          vaddr: this.vaddr,
          vouchers: this.$store.state.voucher.selectedVouchers,
          total_amount: this.cartSum
        })
        .then(() => {
          this.$store.commit("voucher/resetCart");
          let initialData = defaultData();
          initialData = {
            ...initialData,
            email_addr: this.remail,
            orderSuccess: true
          };
          // Iterate through the props
          for (let prop in initialData) {
            // Reset the prop locally.
            this[prop] = initialData[prop];
          }
        })
        .catch(() => {
          this.orderError = true;
        });
    },
    checkForm(e) {
      e.preventDefault();
      this.errors = [];
      if (this.rname.length < 4) {
        this.errors.push("Bitte geben Sie ihren Namen an.");
      }
      if (this.remail.length == 0) {
        this.errors.push("Bitte geben Sie ihre E-Mail Adresse an.");
      } else if (this.remail.length < 4) {
        this.errors.push("Bitte geben Sie eine korrekte E-Mail Adresse an.");
      }
      if (this.rtel.length < 6) {
        this.errors.push("Bitte geben Sie eine korrekte Telefonnummer an.");
      }
      if (this.raddr.length < 10) {
        this.errors.push("Bitte geben Sie ihre Adresse an.");
      }

      if (this.errors.length == 0 && !this.orderPending) {
        this.placeOrder(e);
      }
    }
  }
};
</script>