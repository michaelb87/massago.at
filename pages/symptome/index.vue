<template>
  <div class="container">
    <h3 class="title is-3">Symptome</h3>
    <div v-for="(sc, index) in symptome_chunks" :key="index">
      <div class="columns symptome is-centered">
        <div
          v-for="s in sc"
          :key="s.id"
          :class="{
            column: true,
          'is-2': (elementsPerRow == 6),
          'is-3': (elementsPerRow == 4),
          'is-4': (elementsPerRow == 3),
           }"
        >
          <div class="card symptom-box">
            <div class="card-content m-top-auto">
              <div class="content">
                <nuxt-link :to="`/symptome/${s.id}`" class="symptom-title">{{s.title}}</nuxt-link>
              </div>
            </div>
            <div class="card-image m-top-auto">
              <figure class="image is-4by3">
                <nuxt-link :to="`/symptome/${s.id}`" class="symptom-title">
                  <img class="symptom-img" :src="getImgUrl(s.id)" :alt="s.title" />
                  <div class="is-overlay symptom-overlay symptom-overlay-txt">
                    <div>mehr Informationen</div>
                  </div>
                </nuxt-link>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import symptome from "~/components/symptoms/symptome";
export default {
  data: () => {
    return {};
  },
  mixins: [symptome],
  methods: {
    getImgUrl: sympt_id => {
      return `/images/symptome/${sympt_id}.jpg`;
    }
  },
  props: {
    elementsPerRow: {
      type: Number,
      default: 5
    }
  }
};
</script>
