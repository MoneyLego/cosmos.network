<template>
  <div class="tm-wrapper tm-container tm-section">
    <tm-crosshair class="center crosshair" />
    <tm-cta-cards :data="cards" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          href: '/learn/staking',
          graphics: 'graphics-cta-token-holders',
          overline: 'Token Holders',
          title: 'Start staking ->',
        },
        {
          href: '/starport',
          graphics: 'graphics-cta-developers',
          overline: 'Developers',
          title: 'Start building ->',
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
// Global
.center
  display grid
  place-items center
  center()

.crosshair
  margin-bottom 7rem
</style>
