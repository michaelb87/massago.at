<template>
  <div>
    <div class="section container m-info-container">
      <div>
        <h4 class="is-4 title">Zeit für Massage</h4>
        <p>
          Unser Körper besteht aus 640 verschiedenen Muskeln die
          <i>Verspannungen</i> hervorufen können, wenn wir uns
          <strong>zu wenig</strong> oder
          <strong>falsch bewegen</strong>. Verspannungen sind Verhärtungen im Muskelgewebe, wenn sich die zwei Botenstoffe
          <i>Myosin</i> und
          <i>Aktin</i> nicht mehr voneinander lösen können.
        </p>
        <p>
          Massage ist eine manuelle Therapie, zur Behandlung der Muskulatur aber auch der Faszien und des Bindegewebes.
          Durch verschiedene Techniken können Verspannungen und Verklebungen gelöst werden.
        </p>
      </div>
    </div>

    <div class="container section">
      <h4 class="title is-4">Therapien</h4>
      <div>
        <p>Beim Ersttermin werden wir gemeinsam bei einem Befundgespräch die passende Therapieform für Sie finden.</p>
        <p>Meistens besteht diese aus einer Kombination von mehreren Techniken.</p>
      </div>
      <div>&nbsp;</div>
      <therapien v-bind:embedded="true" />
    </div>
    <div class="container section">
      <div>
        <symptome v-bind:embedded="false" padding="7%" v-bind:showMore="false" :elementsPerRow="5" />
      </div>
    </div>
    <div class="container section">
      <div>
        <h4 class="title is-4">Häufig gestellte Fragen</h4>
        <div class="faq-q">
          <p>
            <strong>Muss ich Handtücher mitnehmen?</strong>
          </p>
          <p>Nein, sie brauchen nichts mitbringen.</p>
        </div>
        <div class="faq-q">
          <p>
            <strong>Kann ich nach der Massage Duschen gehen?</strong>
          </p>
          <p>Ja, direkt nebenan ist ein Badezimmer mit Dusche für unsere Gäste falls Sie nach der Massage Duschen möchten.</p>
        </div>
        <div class="faq-q">
          <p>
            <strong>Benötige ich eine ärztliche Überweisung?</strong>
          </p>
          <p>Sie können sowohl mit als auch ohne ärztliche Überweisung zu mir kommen.</p>
          <p>Sollten Sie einen medizinischen Hintergrund haben, bitte ich Sie eine Überweisung für eine Heilmassage von Ihrem Arzt mitzubringen.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import symptome from "~/pages/symptome/index";
import therapien from "~/pages/therapien/index";
export default {
  components: {
    symptome,
    therapien
  }
};
</script>
<style scoped>
.m-info-container {
  padding-bottom: 0rem !important;
}
.faq-q {
  padding-bottom: 1em;
}
</style>