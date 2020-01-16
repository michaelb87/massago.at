<template>
  <div :class="{container: !embedded}">
    <h4 class="title is-4" v-if="!embedded">Therapien</h4>
    <div class="columns is-multiline">
      <div v-for="t in therapien" :key="t.id" class="column is-3">
        <nuxt-link no-prefetch :to="`/therapien/${t.id}`" class="reverse-link">
          <i class="fa fa-arrow-right"></i>
          &nbsp; {{t.title}}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import therapien from "~/components/therapien/therapien";
export default {
  mixins: [therapien],
  props: {
    embedded: {
      type: Boolean,
      default: false
    }
  }
};
</script>