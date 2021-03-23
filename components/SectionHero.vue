<template>
  <div class="section-hero">
    <div class="tm-wrapper tm-section tm-container">
      <div
        class="overline tm-rf0 tm-medium tm-lh-title tm-overline tm-measure-narrow"
      >
        Welcome to Cosmos
      </div>
      <h1 class="title tm-rf7 tm-bold tm-lh-title">
        The Internet of Blockchains.
      </h1>
      <p class="subtitle tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure">
        Cosmos is an ever-expanding ecosystem of interconnected apps and
        services, built for a decentralized future.
      </p>
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

  .light-mode &
    background none

.tm-section
  width 100%
  z-index 1
  padding-bottom 0
  display flex
  flex-direction column
  align-items center

.graphics
  position relative
  z-index 0

.title
  max-width 6.7em
  margin var(--spacing-6) 0 0

.subtitle
  margin-top var(--spacing-7)

@media $breakpoint-small
  // .title
    // max-width 6.5em
</style>
