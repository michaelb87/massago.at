<template>
  <div class="container">
    <div class="column">
      <h1 class="title">Andrea Orlovits</h1>
      <h2 class="subtitle">Heilmasseurin</h2>
      <div></div>
    </div>
    <div>
      <div class="columns is-vcentered">
        <div class="column is-3">
          <figure class="image container is-square about-me-img">
            <img class="is-rounded" src="images/about_me.jpg" alt="&Uuml;ber mich" />
          </figure>
        </div>
        <div class="column">
          <h1 class="title is-4 is-uppercase">Über mich</h1>

          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <p class="heading">Seit März 2019</p>
                <p
                  class="has-text-weight-semibold"
                >Selbständige Heilmasseurin und Gewerbliche Masseurin</p>
                <p class="has-text-weight-light">Vitalogikum, Aschach an der Steyr</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <p class="heading">2018 - 2019</p>
                <p class="has-text-weight-semibold">Heilmasseurin</p>
                <p class="has-text-weight-light">Ordination Dr. Hinz, Facharzt für Orthopädie, Linz</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <p class="heading">2016 - 2018</p>
                <p class="has-text-weight-semibold">Medizinische Masseurin/Heilmasseurin</p>
                <p class="has-text-weight-light">
                  Privatklinik Döbling, Institut für Physikalische
                  Medizin und Rehabilitation,
                  Wien
                </p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <p class="heading">2012-2015</p>
                <p class="has-text-weight-semibold">Diplomierte Gesundheits- und Krankenschwester</p>
                <p class="has-text-weight-light">Privatklinik Döbling, Wien</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- QUALIFIKATIONEN -->
      <div class="columns">
        <div class="column is-5">
          <h1 class="title is-4 is-uppercase">Qualifikationen</h1>

          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <p class="heading">2016-2017</p>
                <p class="has-text-weight-semibold">Aufschulung zur Heilmasseurin</p>
                <p class="has-text-weight-light">Dr. Kienbacher Ausbildungszentrum, Wien</p>
                <div>
                  <span class="tag skill is-light">
                    <DynamicComponentModal component="skills/triggerpunkt">Triggerpunkt Therapie</DynamicComponentModal>
                  </span>
                  <span class="tag skill is-light">Taping</span>
                  <span class="tag skill is-light">Sportmasseurin</span>
                  <span class="tag skill is-light">Dorn und Breuss</span>
                  <span class="tag skill is-light">Marnitz Therapie</span>
                </div>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <p class="heading">2015-2016</p>
                <p class="has-text-weight-semibold">
                  Medizinische Masseurin inkl. Spezialqualifikation
                  Elektrotherapie, Hydro-
                  und Balneotherapie
                </p>
                <p class="has-text-weight-light">Dr. Kienbacher Ausbildungszentrum, Wien</p>
                <div>
                  <span class="tag skill is-light">Klassische Massage</span>
                  <span class="tag skill is-light">Lymphdrainage</span>
                  <span class="tag skill is-light">Fußreflexzonenmassage</span>
                  <span class="tag skill is-light">Bindegewebsmassage</span>
                  <span class="tag skill is-light">Segmentzonenmassage</span>
                  <span class="tag skill is-light">Akupunkturmassage</span>
                </div>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <p class="heading">2008-2012</p>
                <p
                  class="has-text-weight-semibold"
                >Schule für allgemeine Gesundheits-und Krankenpflege</p>
                <p class="has-text-weight-light">Wilhelminenspital, Wien</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DynamicComponentModal from "~/components/DynamicComponentModal";
export default {
  components: {
    DynamicComponentModal
  }
};
</script>

<style>
.timeline-item {
  padding-bottom: 0.5em !important;
}
</style>
