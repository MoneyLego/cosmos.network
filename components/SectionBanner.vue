<template>
  <div class="tm-wrapper tm-section">
    <div class="tm-container tm-grid-base banner-item">
      <div class="text">
        <div class="title tm-rf5 tm-bold tm-lh-title">
          Ready to start staking?
        </div>
        <div class="subtitle tm-rf1 tm-lh-copy">
          Start staking ATOMs on the Cosmos Hub.
        </div>
        <tm-button
          to-link="internal"
          to="/learn/faq/what-is-the-atom-staking-process"
          size="l"
          color="var(--white)"
          background-color="#171717"
          class="btn"
          >Stake ATOMs</tm-button
        >
      </div>
      <div class="graphics">
        <!-- <graphics-banner-background class="graphics__back" /> -->
        <graphics-banner-foreground class="graphics__front" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.banner-item
  padding var(--spacing-10)
  display block
  border-radius $border-radius-5
  hover-raise(-3px)
  box-shadow var(--elevation-4)
  color var(--white)
  background #171717

  .light-mode &
    color var(--black)
    background var(--white)

.banner-item .text
  grid-column span 12

.banner-item .graphics
  grid-column span 12
  margin-top var(--spacing-10)

  &__front
    width 100%

.banner-item .title
  width fit-content

.banner-item .subtitle
  margin-top var(--spacing-5)
  width fit-content

.banner-item .btn
  margin-top var(--spacing-8)

@media $breakpoint-medium
  .banner-item .text
    grid-column 2/span 9

  .banner-item .graphics
    position relative
    z-index -1
    grid-column 1/span 6
    // display flex
    // align-items stretch
    // justify-content flex-end
    margin-top 0

    &__back
      position absolute
      max-width 172%
      transform translate(5%, -85%)
      overflow visible

    &__front
      position absolute
      max-width 172%
      top 43%
      right -88%
      transform translate(-50%,-50%)
</style>
