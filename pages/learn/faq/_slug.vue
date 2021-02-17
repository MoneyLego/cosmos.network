<template>
  <article>
    <div class="tm-section tm-wrapper tm-container">
      <h1>{{ article.title }}</h1>
      <span v-for="(tag, id) in article.tags" :key="id">
        <NuxtLink :to="`/learn/tag/${tags[tag].slug}`">
          <span>
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
