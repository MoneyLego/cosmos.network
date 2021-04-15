<template>
  <article>
    <div class="section-hero section-first tm-section">
      <div class="tm-wrapper">
        <div class="tm-section tm-container tm-grid-base">
          <div class="main">
            <div class="markdown">
              <nuxt-content :document="content" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="tm-wrapper tm-container">
      <tm-cta-cards :data="cards" />
    </div>
  </article>
</template>

<script>
import '~/assets/styles/markdown.styl'

export default {
  async asyncData({ $content }) {
    const content = await $content('trademark').fetch()

    return {
      content,
    }
  },
  data() {
    return {
      cards: [
        {
          href: 'https://discord.com/invite/vcExX9T',
          overline: 'Discord',
          title: 'Developer chat ->',
        },
        {
          href: 'https://t.me/cosmosproject',
          overline: 'Telegram',
          title: 'Community chat ->',
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
.main
  grid-column 1/-1
  max-width 44rem
  center()

.markdown
  margin-top var(--spacing-9)

@media $breakpoint-medium
  .main
    grid-column 1/-1

@media $breakpoint-xl
  .main
    grid-column 5/ span 8
</style>
