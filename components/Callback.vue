<template>
  <div id="callback-form">
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Name</label>
      </div>
      <div class="field-body">
        <div class="field">
          <p class="control is-expanded has-icons-left">
            <input class="input" type="text" placeholder="Name" id="cb-name" />
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
              <input class="input" type="tel" placeholder="Ihre Telefonnummer" id="cb-telephone" />
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">Wann darf ich Sie zurückrufen?</label>
      <div class="control">
        <div class="list is-hoverable">
          <a class="list-item" v-for="d in days" :key="d.id">{{d.day}}, {{d.prefix}} {{d.slot}}</a>
          <a class="list-item">... zeige mehr Optionen</a>
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
            <input class="input" type="text" placeholder id="cb-anmerkung" />
          </p>
        </div>
      </div>
    </div>

    <div class="field is-grouped is-pulled-right">
      <div class="control">
        <button class="button is-link" id="anfrage-senden-btn">Anfrage Senden</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      days: [],
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
  methods: {
    getTimes: function() {
      const today = new Date();
      let cnt = 0;
      let td = today.getDay();
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
              this.days.push({
                id: `${day}-${slot}`,
                day: today.getDay() !== td ? day.day : "Heute",
                prefix: period.prefix,
                slot: slot
              });
              cnt++;
            }
          }
        }

        td = td == 5 ? 1 : td + 1;
      }
    }
  },
  mounted: function() {
    this.getTimes();
  }
};
</script>