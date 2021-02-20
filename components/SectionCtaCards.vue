<template>
  <div class="tm-wrapper tm-container">
    <div class="cards">
      <NuxtLink to="/staking" class="card-item">
        <div class="caption tm-rf0 tm-medium tm-lh-title tm-overline">
          Token Holders
        </div>
        <div class="title tm-rf2 tm-bold tm-lh-title">Start staking -></div>
      </NuxtLink>
      <NuxtLink to="/get-started" class="card-item">
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

.dark-mode .card-item
  color var(--white)
  background-color #171717

.light-mode .card-item
  color #171717
  background-color var(--white)

.card-item
  position relative
  padding var(--spacing-8)
  position relative
  display flex
  flex-direction column
  flex-wrap nowrap
  justify-content flex-end
  height 20.5rem
  border-radius $border-radius-5
  hover-raise(-3px)

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
</style>
