<template>
  <div>
    <div class="nav-container">
      <section-primary-nav />
    </div>
    <main id="content">
      <!-- all page content here - hidden when mobile nav open -->
      <nuxt />
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

@media $breakpoint-large-max
  .mobile-menu-open
    #content
    #footer
      display none
</style>
