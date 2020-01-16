<template>
  <div class="container section">
    <h1 class="title is-3">Therapien</h1>
    <div class="columns is-multiline">
      <div v-for="t in therapien" :key="t.id" class="column is-3">
        <nuxt-link no-prefetch :to="`/therapien/${t.id}`">
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
  mixins: [therapien]
};
</script>