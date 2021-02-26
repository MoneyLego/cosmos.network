<template>
  <main>
    <div class="section-hero">
      <div class="tm-wrapper tm-section tm-grid-base">
        <div class="text">
          <div class="title tm-rf5 tm-bold tm-lh-title tm-measure">
            Frequently asked questions
          </div>
        </div>
      </div>
      <graphics-faq-hero-dark
        v-if="$nuxt.$colorMode.preference === 'dark'"
        class="graphics"
      />
      <graphics-faq-hero-light v-else class="graphics" />
    </div>

    <div class="tm-wrapper tm-container tm-grid-base">
      <div class="content">
        <div
          v-for="item in currentIndex"
          :key="articles[item - 1].title"
          class="item"
        >
          <div class="title tm-rf2 tm-bold tm-lh-copy">
            {{ articles[item - 1].title }}
          </div>
          <div class="desc tm-rf0 tm-lh-copy">
            {{ articles[item - 1].description }}
          </div>
          <tm-button
            to-link="internal"
            :to="`/learn/faq/${articles[item - 1].slug}`"
            size="l"
            dark-color="var(--white)"
            light-color="var(--black)"
            background-color="transparent"
            variant="text"
            class="btn"
            >Learn more <span class="icon__right">--></span></tm-button
          >
        </div>
        <div class="cta">
          <div
            v-if="currentIndex != articles.length"
            @click="currentIndex = articles.length"
          >
            <tm-button
              dark-color="var(--white)"
              light-color="var(--black)"
              background-color="transparent"
              variant="text"
              class="btn tm-rf1 tm-lh-copy tm-medium"
              >Show all &#8595;</tm-button
            >
          </div>
          <div v-else @click="currentIndex = 6">
            <tm-button
              dark-color="var(--white)"
              light-color="var(--black)"
              background-color="transparent"
              variant="text"
              class="btn tm-rf1 tm-lh-copy tm-medium"
              >Show less &#8593;</tm-button
            >
          </div>
        </div>
      </div>
    </div>

    <section-social-cards />
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('index', 'asc')
      .fetch()
    const tags = await $content('tags', params.slug)
      .only(['name', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      articles,
      tags,
    }
  },
  data() {
    return {
      currentIndex: 6,
    }
  },
}
</script>

<style lang="stylus" scoped>
// Hero
.tm-section
  z-index 1

.section-hero
  text-align left
  position relative

.section-hero .text
  grid-column span 12

.section-hero .graphics
  position unset
  height 100%
  width 210%
  margin-top -20%
  margin-left 0%
  overflow visible

// Content
.content
  grid-column span 12

.desc
  margin-top var(--spacing-4)

.item + .item
  margin-top var(--spacing-8)

.cta
  margin-top var(--spacing-10)
  text-align left
  cursor pointer

@media $breakpoint-medium
  // Hero
  .section-hero .text
    grid-column 6/span 12

  .section-hero .graphics
    position absolute
    top 0
    z-index 0
    height auto
    width auto
    margin 0

  // Content
  .content
    grid-column 6/span 12
</style>
