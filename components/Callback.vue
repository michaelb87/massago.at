<template>
  <div>
    <form @submit="send">
      <div id="callback-form" v-if="!msgSent">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Name</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input class="input" type="text" placeholder="Name" v-model="name" />
                <span class="icon is-small is-left">
                  <i class="fa fa-user"></i>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Telefon</label>
          </div>
          <div class="field-body">
            <div class="field is-expanded">
              <div class="field has-addons">
                <p class="control">
                  <a class="button is-static">+43</a>
                </p>
                <p class="control is-expanded">
                  <input class="input" type="tel" placeholder="Ihre Telefonnummer" v-model="phone" />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Wann darf ich Sie zurückrufen?</label>
          <div class="control">
            <div class="list is-hoverable">
              <a
                v-for="d in days"
                :key="d.id"
                @click="selectSlot(d)"
                :class="{'list-item': true, 'is-active': d.id === selected_id}"
              >{{d.day}}, {{d.prefix}} {{d.slot}}</a>
              <a
                class="list-item"
                v-on:click="renderDaysCnt=Math.min(renderDaysCnt+3,20)"
              >... zeige mehr Optionen</a>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Anmerkung</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded">
                <input class="input" type="text" placeholder v-model="note" />
              </p>
            </div>
          </div>
        </div>

        <div class="field is-grouped is-pulled-right">
          <div class="control">
            <button type="submit" class="button is-link">Anfrage Senden</button>
          </div>
        </div>
      </div>
      <div class="content" v-if="msgSent">
        <h4 class="title is-4">Nachricht gesendet!</h4>
        <p>Ich rufe sie {{selected_text}} zurück.</p>
        <p v-if="note.length > 0">
          <strong>Ihre Nachricht:</strong>
          {{note}}
        </p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      selected_id: null,
      selected_text: "",
      name: "",
      phone: "",
      note: "",
      msgSent: false,
      renderDaysCnt: 3,
      periodDefinitions: {
        Morgen: { from: 0, to: 9, prefix: "am " },
        Vormittag: { from: 9, to: 12, prefix: "am " },
        Mittag: { from: 12, to: 14, prefix: "zu " },
        Nachmittag: { from: 14, to: 17, prefix: "am " },
        Abend: { from: 17, to: 19, prefix: "am " }
      },

      availableTimes: {
        1: {
          day: "Montag",
          available: ["Morgen", "Vormittag", "Mittag", "Nachmittag", "Abend"]
        },
        2: {
          day: "Dienstag",
          available: ["Morgen", "Vormittag", "Mittag", "Nachmittag", "Abend"]
        },
        3: {
          day: "Mittwoch",
          available: ["Morgen", "Vormittag", "Mittag", "Nachmittag", "Abend"]
        },
        4: {
          day: "Donnerstag",
          available: ["Morgen", "Vormittag", "Mittag", "Nachmittag", "Abend"]
        },
        5: {
          day: "Freitag",
          available: ["Morgen", "Vormittag", "Mittag", "Nachmittag", "Abend"]
        }
      }
    };
  },
  computed: {
    days: function() {
      const today = new Date();
      let cnt = 0;
      let td = today.getDay();
      let result = [];
      while (cnt < this.renderDaysCnt) {
        let day = this.availableTimes[td];
        // iterate over times of day
        for (let a = 0; a < day.available.length; a++) {
          let slot = day.available[a];
          let period = this.periodDefinitions[slot];
          if (cnt < this.renderDaysCnt) {
            let isPassed =
              td === today.getDay() && period.to <= today.getHours();
            if (!isPassed) {
              let id = `${day.day}-${slot}`;
              result.push({
                id: id,
                day: today.getDay() !== td ? day.day : "Heute",
                prefix: period.prefix,
                slot: slot,
                selected: this.selected == id
              });
              cnt++;
            }
          }
        }

        td = td == 5 ? 1 : td + 1;
      }
      return result;
    }
  },
  methods: {
    selectSlot: function(elem) {
      this.selected_id = elem.id;
      this.selected_text = `${elem.day} ${elem.prefix} ${elem.slot}`;
    },
    send: function(e) {
      e.preventDefault();
      this.$axios.$post("/api/callback", {
        name: this.name,
        phone: this.phone,
        note: this.note,
        slot: this.selected_text
      });
      this.msgSent = true;
    }
  }
};
</script>