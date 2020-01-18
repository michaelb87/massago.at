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
            <div>
              <span class="is-pulled-right">
                <span class="is-size-4">Gesamtsumme:</span>
                <span class="is-size-4 has-text-black"><u>{{cartSum}} Euro</u></span>
              </span>
              &nbsp;
            </div>

            <form class="form">
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
  data: function() {
    return {
      rname: "",
      remail: "",
      rtel: "",
      raddr: "",
      v_rec_same: true,
      vname: "",
      vaddr: ""
    };
  },
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
  methods: {}
};
</script>