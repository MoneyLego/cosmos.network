<template>
  <article>
    <div class="section-hero tm-section">
      <div class="tm-wrapper">
        <div class="tm-section tm-container tm-grid-base">
          <div class="sidebar">
            <!-- <span v-for="(tag, id) in article.tags" :key="id">
              <NuxtLink :to="`/learn/tag/${tags[tag].slug}`">
                <span>
                  {{ tags[tag].name }}
                </span>
              </NuxtLink>
            </span> -->
            <div class="subheading tm-rf0 tm-medium tm-lh-title tm-overline">
              related questions
            </div>
          </div>
          <div class="main">
            <tm-button
              to-link="internal"
              to="/learn/faq"
              size="s"
              dark-color="var(--white)"
              light-color="var(--black)"
              background-color="transparent"
              variant="text"
              class="btn"
              ><span class="icon__left">&#8592;</span>FAQ
            </tm-button>
            <div class="title tm-rf4 tm-bold tm-lh-title">
              {{ article.title }}
            </div>
            <div class="markdown">
              <nuxt-content :document="article" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <section-social-cards />
  </article>
</template>

<script>
import '~/assets/styles/markdown.styl'

export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    // const tagsList = await $content('tags')
    //   .only(['name', 'slug'])
    //   .where({ name: { $containsAny: article.tags } })
    //   .fetch()
    // const tags = Object.assign({}, ...tagsList.map((s) => ({ [s.name]: s })))
    // const [prev, next] = await $content('articles')
    //   .only(['title', 'slug'])
    //   .sortBy('createdAt', 'asc')
    //   .surround(params.slug)
    //   .fetch()
    return {
      article,
      // tags,
      // prev,
      // next,
    }
  },
}
</script>

<style lang="stylus" scoped>
.sidebar
  display none

.main
  grid-column span 12

.markdown
  margin-top var(--spacing-9)

@media $breakpoint-medium
  .sidebar
    grid-column 1/span 4

  .main
    grid-column 5/span 11
</style>
