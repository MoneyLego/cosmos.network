<template>
  <div>
    <div class="nav-container tm-wrapper">
      <section-primary-nav />
    </div>
    <main id="content">
      <!-- all page content here - hidden when mobile nav open -->
      <nuxt />
      <section-form />
    </main>
    <tm-footer id="footer" />
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

@media $breakpoint-large-max
  .mobile-menu-open
    #content
    #footer
      display none
</style>
