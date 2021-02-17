<template>
  <div class="tm-section section-articles">
    <div class="tm-container">
      <div class="container">
        <div class="section-title tm-rf7 tm-bold tm-lh-title tm-measure-narrow">
          Frequently asked questions
        </div>
        <div class="section-subtitle tm-rf2 tm-lh-copy tm-measure">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div class="section-header tm-rf3 tm-bold tm-lh-title">Articles</div>
        <NuxtLink
          v-for="item in articles"
          :key="item.title"
          :to="{ name: 'blog-slug', params: { slug: item.slug } }"
          target="_blank"
          rel="noreferrer noopener"
          class="articles-item"
        >
          <span class="articles-item__icon tm-rf2 tm-lh-solid">&#8599;</span>
          <div
            class="articles-item__title tm-rf1 tm-bold tm-lh-title tm-measure-narrow"
          >
            {{ item.title }}
          </div>
          <div class="articles-item__description tm-rf0 tm-lh-copy tm-measure">
            {{ item.title }}
          </div>
          <div class="articles-item__date tm-rf-1 tm-lh-title">
            {{ item.title }}
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'desc')
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

.section-articles
  .container
    gap var(--spacing-7)
  .section-title
    color var(--white)
    grid-column 1 / span 9
  .section-subtitle
    display flex
    justify-content flex-end
    flex-direction column
    grid-row 2
    grid-column 1 / span 11
    color var(--gray-800)
  .section-header
    grid-column 1 / span 11
    margin-top var(--spacing-8)
    color var(--white)
  .articles-item
    grid-column 1 / span 12
    display block
    text-align left
    padding var(--spacing-7) 0
    position relative
    &:last-child
      border-bottom 0
    &__icon
      position absolute
      right 0
      color var(--gray-600)
      transition color .1s ease-out, transform .25s ease-out
    &__title
      color var(--primary-900)
      transition color .1s ease-out
      padding-right 2rem
    &__description
      margin-top var(--spacing-4)
      color var(--gray-600)
    &__date
      margin-top var(--spacing-4)
      color var(--gray-600)
    &:hover
      .articles-item__title,
      .articles-item__icon
        color var(--white)
      .articles-item__icon
        transform translate(3px, -3px)

@media $breakpoint-small
  .section-articles
    .articles-item
      grid-column span 6

@media $breakpoint-large
  .section-articles
    .container
      gap var(--spacing-8) var(--spacing-7)
    .section-title
      grid-column 2/span 9
    .section-subtitle
      grid-column 2/span 11
    .section-header
      grid-column 2 / span 11
    .articles-item
      grid-column span 4
</style>
