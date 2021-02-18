<template>
  <div class="tm-section tm-wrapper tm-container">
    <div class="container">
      <div class="cards">
        <a
          href="https://cosmos.network/community"
          rel="noreferrer noopener"
          class="cards__item"
        >
          <div
            class="cards__item__caption tm-rf-1 tm-rf0-m-up tm-medium tm-lh-title tm-overline"
          >
            Discord
          </div>
          <div class="cards__item__title tm-rf2 tm-bold tm-lh-title">
            Developer community -->
          </div>
          <!-- <div
            class="cards__item__description tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure-narrow"
          >
            Learn about Cosmos, get to know the community, connect with other
            Cosmonauts and more.
          </div> -->
        </a>
        <a
          href="https://cosmos.network/community"
          rel="noreferrer noopener"
          class="cards__item"
        >
          <div
            class="cards__item__caption tm-rf-1 tm-rf0-m-up tm-medium tm-lh-title tm-overline"
          >
            Telegram
          </div>
          <div class="cards__item__title tm-rf2 tm-bold tm-lh-title">
            Community chat -->
          </div>
          <!-- <div
            class="cards__item__description tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure-narrow"
          >
            Learn about Cosmos, get to know the community, connect with other
            Cosmonauts and more.
          </div> -->
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>

.tm-section
  overflow visible // graphics overflow
  z-index 1 // above next section

.wide-card
  display grid
  gap var(--spacing-7)
  grid-template-columns repeat(12, 1fr)
  grid-column 1/span 12
  position relative
  background linear-gradient(257deg, #120018 0%, #121435 100%)
  border-radius $border-radius-5
  overflow hidden
  hover-raise(-3px)

  &__content
    position relative
    padding var(--spacing-8)
    min-height 20rem
    color var(--white)
    position relative
    display flex
    flex-direction column
    flex-wrap nowrap
    justify-content flex-end
    color var(--white)
    z-index 1

  &__left
    grid-column 1/span 6

  &__right
    grid-column 7/span 6

  &:hover
    .cards__item__disclosure
      color var(--white)
      transform translate(2px,-2px)

.top
  &__sun
    position absolute
    right 0
    top 0
    z-index -1

  .section-graphics
    position absolute
    left -57%
    top -3%
    width 170%
    height 162%

.bottom
  overflow visible
  background linear-gradient(146deg, #05061D 13%, #121435 42%, #430A59 84%)

  .wide-card__right
    position relative
    padding var(--spacing-8)

  .section-graphics
    position absolute
    right 4%
    top -59%
    width 100%


.cards
  margin-top var(--spacing-7)
  margin-bottom var(--spacing-7)
  display grid
  grid-template-columns repeat(1, 1fr)
  gap var(--spacing-7)
  grid-column 1 / span 12
  z-index 1
  position relative
  &__item
    position relative
    padding var(--spacing-8)
    color var(--white)
    position relative
    display flex
    flex-direction column
    flex-wrap nowrap
    justify-content flex-end
    padding-bottom var(--spacing-11)
    color var(--white)
    background linear-gradient(256.92deg, #120018 0%, #121435 100%)
    background-position bottom center
    background-size contain
    background-repeat no-repeat
    border-radius $border-radius-5
    hover-raise(-3px)
    // &:last-child
    //   padding-bottom var(--spacing-11)
    &:hover
      .cards__item__disclosure
        color var(--white)
        transform translate(2px,-2px)
    &__disclosure
      position absolute
      right var(--spacing-8)
      color var(--white-300)
      transition color .1s ease-out, transform .25s ease-out
    &__caption
      color var(--white-500)
    &__title
      margin-top var(--spacing-4)
      color var(--white)
    &__description
      margin-top var(--spacing-4)
      color var(--white-800)

@media $breakpoint-large
  .cards
    grid-template-columns 1fr 1fr

@media $breakpoint-xsmall-only
  .cards
    &__item
      height auto
      min-height 16rem
      border-radius $border-radius-4

  .wide-card
    gap 0

  .wide-card__left,
  .wide-card__right
    grid-column 1/span 12

  .bottom
    .wide-card__content
      min-height 0
      grid-row 2
    .wide-card__right
      position static
    .section-graphics
      top auto
      height auto
      max-width: $max-width['6']
</style>
