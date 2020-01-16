<script>
export default {
  computed: {
    isMobile: function() {
      if (process.client) {
        return document.documentElement.clientWidth < 768;
      } else {
        return false;
      }
    }
  }
};
</script>