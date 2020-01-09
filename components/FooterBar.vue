<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>massago.at</strong> &copy; 2019 - {{currYear}} by
        <a href="/about">Andrea Orlovits</a>.
      </p>
    </div>
  </footer>
</template>

<script>
import moment from 'moment'
export default {
  computed: {
    currYear: () => {
      return moment().format('YYYY')
    }
  }
}
</script>