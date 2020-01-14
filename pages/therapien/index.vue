<template>
    <div class="container section">
        <h1 class="title is-3">Therapien</h1>
        <div v-for="t in therapien" :key="t.id">
            <nuxt-link no-prefetch :to="`/therapien/${t.id}`">{{t.title}}</nuxt-link>
            
        </div>
    </div>
</template>

<script>
import therapien from "~/components/therapien/therapien";
export default {
    mixins: [therapien]
}
</script>