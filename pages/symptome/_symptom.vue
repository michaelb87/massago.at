<template>
    <div class="container">
        symptom..
    </div>
</template>

<script>
export default {
    mounted: function(){
        console.log(this.$route.params.symptom)
    }
}
</script>