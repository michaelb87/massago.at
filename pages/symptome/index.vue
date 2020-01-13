<template>
  <div :class="{container: !embedded}">
    <h3 class="title is-3" v-if="!embedded">Symptome</h3>
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
                <nuxt-link :to="`/symptome/${s.id}`" class="symptom-title" v-if="s.type!=='showMore'">{{s.title}}</nuxt-link>
              </div>
            </div>
            <div class="card-image m-top-bottom-auto" :style="{'padding-left': padding, 'padding-right': padding}">
              <figure class="image is-4by3" v-if="s.type!=='showMore'">
                <nuxt-link :to="`/symptome/${s.id}`" class="symptom-title">
                  <img class="symptom-img" :src="getImgUrl(s.id)" :alt="s.title" />
                  <div class="is-overlay symptom-overlay symptom-overlay-txt">
                    <div>mehr Informationen</div>
                  </div>
                </nuxt-link>
              </figure>
              <div v-if="s.type==='showMore'">
                <button class="button is-default" @click="showMore = false">zeige mehr..</button>
                </div>
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
    embedded: {
      type: Boolean,
      default: false
    },
    padding: {
      type: String,
      default: '0%'
    },
  }
};
</script>
