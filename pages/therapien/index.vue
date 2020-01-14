<template>
    <div class="container">
        <h1 class="title is-3">Therapien</h1>
        <div v-for="t in therapien" :key="t.id">
            {{t.title}}
            
        </div>
    </div>
</template>

<script>
import therapien from "~/components/therapien/therapien";
export default {
    mixins: [therapien]
}
</script>