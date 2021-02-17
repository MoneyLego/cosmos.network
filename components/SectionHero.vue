<template>
  <div class="section-hero tm-section">
    <div class="tm-wrapper">
      <div class="tm-container tm-section">
        <div class="title tm-rf5 tm-rf7-m-up tm-bold tm-lh-title">
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

  .tm-section
    padding-bottom 0

.tm-container
  width 100%
  text-align center

.graphics
  z-index -1

.title
  center()

.subtitle
  center()
  margin-top var(--spacing-6)

@media $breakpoint-small
  .section-hero
    &__top
      &:after
        content ""
  .title
    max-width 6.5em
  .subtitle
    margin-top 0

@media $breakpoint-large
  .section-hero
    padding-top 10rem // navbar max height
</style>
