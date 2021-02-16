<template>
  <div>
    <div class="nav-container">
      <section-primary-nav />
    </div>
    <nuxt />
    <tm-footer />
  </div>
</template>

<script>
export default {
  components: {},
}
</script>

<style lang="stylus">
// Accessible/SEO friendly CSS hiding
.sr-only
  position absolute
  height 1px
  width 1px
  overflow hidden
  clip rect(1px, 1px, 1px, 1px)

// https://nuxtjs.org/examples/transitions
.page-enter-active
  transition opacity 0.2s $ease-out
.page-leave-active
  transition opacity 0.2s $ease-out

.page-enter,
.page-leave-to
  opacity 0

// Todo: consolidate into _container.styl and rename classes to better suit purposes
.section-container
  position relative
  max-width: $max-width['11']
  margin 0 auto

// Todo: consolidate into _container.styl and rename classes to better suit purposes
.container
  display grid
  grid-template-columns repeat(12, 1fr)
  gap 0 var(--spacing-7)

// Todo: consolidate into _container.styl and rename classes to better suit purposes
.section
  position relative
  padding-top var(--spacing-10)
  padding-bottom var(--spacing-10)

@media $breakpoint-medium-max
  .section-container
    padding-top var(--spacing-6)
</style>
