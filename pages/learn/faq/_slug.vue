<template>
  <article>
    <div class="section tm-section-container section-container">
      <h1>{{ article.title }}</h1>
      <span v-for="(tag, id) in article.tags" :key="id">
        <NuxtLink :to="`/learn/tag/${tags[tag].slug}`">
          <span
            class="truncate uppercase tracking-wider font-medium text-ss px-2 py-1 rounded-full mr-2 mb-2 border border-light-border dark:border-dark-border transition-colors duration-300 ease-linear"
          >
            {{ tags[tag].name }}
          </span>
        </NuxtLink>
      </span>
      <!-- content from markdown -->
      <nuxt-content :document="article" />
      <!-- prevNext component -->
      <prev-next :prev="prev" :next="next" />
    </div>
    <section-form />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    const tagsList = await $content('tags')
      .only(['name', 'slug'])
      .where({ name: { $containsAny: article.tags } })
      .fetch()
    const tags = Object.assign({}, ...tagsList.map((s) => ({ [s.name]: s })))
    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
    return {
      article,
      tags,
      prev,
      next,
    }
  },
}
</script>

<style lang="stylus" scoped>
h1
  text-align center
</style>
