<template>
  <div class="tm-wrapper tm-container tm-section">
    <div class="cards">
      <NuxtLink to="/staking" class="card-item">
        <div class="graphics">
          <graphics-cta-token-holders class="graphics__item" />
          <graphics-cta-validator class="graphics__validator" />
        </div>
        <div class="caption tm-rf0 tm-medium tm-lh-title tm-overline">
          Token Holders
        </div>
        <div class="title tm-rf2 tm-bold tm-lh-title">Start staking -></div>
      </NuxtLink>
      <NuxtLink to="/get-started" class="card-item">
        <div class="graphics">
          <graphics-cta-developers class="graphics__item" />
        </div>
        <div class="caption tm-rf0 tm-medium tm-lh-title tm-overline">
          Developers
        </div>
        <div class="title tm-rf2 tm-bold tm-lh-title">Start building -></div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.cards
  display grid
  grid-template-columns repeat(1, 1fr)
  gap var(--spacing-7)
  grid-column 1 / span 12
  margin-top var(--spacing-10)
  position relative

.card-item
  position relative
  padding var(--spacing-8)
  display flex
  flex-direction column
  flex-wrap nowrap
  justify-content flex-end
  height 20.5rem
  border-radius $border-radius-5
  hover-raise(-3px)
  color var(--white)
  background-color #171717

  .light-mode &
    color #171717
    background-color var(--white)

.graphics
  &__item
    width 80%
    position absolute
    right -7%
    top -70%

  &__validator
    width 44%
    position absolute
    right -8%
    top 0%

.title
  margin-top var(--spacing-3)

@media $breakpoint-xsmall-only
  .card-item
    height auto
    min-height 16rem
    border-radius $border-radius-4

@media $breakpoint-large
  .cards
    grid-template-columns 1fr 1fr

  .graphics
    &__item
      right -8%
      top -40%

    &__validator
      width 80%
      position absolute
      right -18%
      top 35%
</style>
