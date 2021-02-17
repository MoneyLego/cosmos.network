<template>
  <main>
    <section-hero />
    <section-intro />
    <section-banner />
  </main>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="stylus" scoped>
main
  overflow -webkit-paged-x

@media $breakpoint-small-max
  main
    overflow-x hidden
</style>
