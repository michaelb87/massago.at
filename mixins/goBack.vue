<script>
export default {
  methods: {
    goBack: function() {
      if (this.$router.hasHistory) {
        this.$router.back();
      } else {
        this.$router.push({ path: "/" });
      }
    }
  }
};
</script>