<template>
  <div class="section-hero">
    <div class="tm-wrapper">
      <div class="tm-section">
        <div class="title tm-rf7 tm-bold tm-lh-title">
          The heart of the Interchain.
        </div>
        <div class="subtitle tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure-narrow">
          Welcome to the Cosmos Hub, the economic center of
          <a href="https://cosmos.network" class="tm-medium tm-link">Cosmos</a>
          – an ever-expanding ecosystem of interconnected blockchains.
        </div>
      </div>
    </div>
    <graphics-home-hero class="graphics" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>

.section-hero
  background linear-gradient(to bottom, #111111 44%, #000000 67%)
  text-align center

.tm-section
  width 100%
  z-index 1
  padding-bottom 0

.graphics
  z-index 0

.title
  max-width 5em
  center()

.subtitle
  margin-top var(--spacing-7)
  color var(--white-800)
  center()

@media $breakpoint-small
  .title
    max-width 6.5em
</style>
