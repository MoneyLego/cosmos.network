<template>
  <main>
    <!-- FAQ 0 -->
    <div class="section-hero tm-section">
      <div class="tm-wrapper">
        <div class="tm-section tm-container tm-grid-base faq-0">
          <div class="text">
            <div class="title tm-rf5 tm-bold tm-lh-title tm-measure">
              Frequently asked questions
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- FAQ 1 -->
    <div class="tm-wrapper">
      <div class="tm-container tm-grid-base">
        <div class="faq-1">
          <div v-for="item in articles" :key="item.title" class="item">
            <div class="title tm-rf2 tm-bold tm-lh-copy">{{ item.title }}</div>
            <div class="desc tm-rf0 tm-lh-copy">{{ item.description }}</div>
            <tm-button
              to-link="internal"
              :to="`/learn/faq/${item.slug}`"
              size="l"
              dark-color="var(--white)"
              light-color="var(--black)"
              background-color="transparent"
              variant="text"
              class="btn"
              >Learn more <span class="icon__right">--></span></tm-button
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
}
</script>

<style lang="stylus" scoped>
/deep/
.section-header
  border none
  color inherit

// FAQ 0
.section-hero
  text-align left

.faq-0 .text
  grid-column span 12

// FAQ 1
.faq-1
  grid-column span 12

.desc
  margin-top var(--spacing-4)

.item + .item
  margin-top var(--spacing-8)

@media $breakpoint-medium
  // FAQ 0
  .faq-0 .text
    grid-column 6/span 12

  // FAQ 1
  .faq-1
    grid-column 6/span 12
</style>
