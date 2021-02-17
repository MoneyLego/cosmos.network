<template>
  <div class="section-hero tm-section">
    <div class="tm-wrapper">
      <div class="tm-container tm-section">
        <div class="title tm-rf7 tm-bold tm-lh-title">
          The heart of the Interchain.
        </div>
        <div class="subtitle tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure-narrow">
          Welcome to the Cosmos Hub, the economic center of
          <span class="tm-bold">Cosmos</span> – an ever-expanding ecosystem of
          interconnected blockchains.
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
  padding-top 5rem // approx navbar max height
  background linear-gradient(159deg, #111111 44%, #000000 67%)

  .tm-section
    padding-bottom 0

.tm-container
  width 100%
  text-align center
  z-index 1

.graphics
  z-index 0

.title
  center()
  max-width 5em

.subtitle
  center()
  margin-top var(--spacing-6)

@media $breakpoint-small
  .title
    max-width 6.5em

@media $breakpoint-large
  .section-hero
    padding-top 10rem // navbar max height
</style>
