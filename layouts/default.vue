<template>
  <div>
    <div class="nav-container">
      <section-primary-nav />
    </div>
    <div id="content">
      <!-- all page content here - hidden when mobile nav open -->
      <nuxt />
      <!-- <section-form /> -->
      <tm-footer />
    </div>
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

main
  overflow hidden

.nav-container
  position absolute
  top 0
  left 0
  right 0

.section-first
  padding-top 5rem // approx navbar max height

@media $breakpoint-large-max
  .mobile-menu-open
    #content
      display none
</style>
