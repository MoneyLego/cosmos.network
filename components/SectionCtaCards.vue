<template>
  <div class="tm-wrapper tm-container tm-section">
    <div class="center">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- TODO: replace with color var (white, black) -->
        <path
          v-if="$nuxt.$colorMode.value === 'dark'"
          d="M16 8H0M8 16V0"
          stroke="white"
        />
        <path v-else d="M16 8H0M8 16V0" stroke="black" />
      </svg>
    </div>
    <div class="cards">
      <NuxtLink to="/staking" class="card-item">
        <div class="graphics">
          <graphics-cta-token-holders class="graphics__item" />
        </div>
        <div class="caption tm-rf0 tm-medium tm-lh-title tm-overline">
          Token Holders
        </div>
        <div class="title tm-rf2 tm-bold tm-lh-title">Start staking -></div>
      </NuxtLink>
      <a
        href="https://cosmos.network/tools"
        target="_blank"
        rel="noreferrer noopener"
        class="card-item"
      >
        <div class="graphics">
          <graphics-cta-developers class="graphics__item" />
        </div>
        <div class="caption tm-rf0 tm-medium tm-lh-title tm-overline">
          Developers
        </div>
        <div class="title tm-rf2 tm-bold tm-lh-title">Start building -></div>
      </a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.center
  text-align center

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

.card-item
  .caption
  .title
    width fit-content

.graphics
  position absolute
  top 0
  left 0
  width 100%
  display grid
  place-items flex-end

  &__item
    width 70%
    height auto

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
    top -70px
    left -130px
    width 130%
</style>
