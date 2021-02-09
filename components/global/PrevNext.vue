<template>
  <div class="section prev-next-container">
    <NuxtLink
      v-if="prev"
      :to="{ name: 'learn-slug', params: { slug: prev.slug } }"
    >
      {{ prev.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="next"
      :to="{ name: 'learn-slug', params: { slug: next.slug } }"
    >
      {{ next.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
}
</script>

<style lang="stylus" scoped>
.prev-next-container
  display flex
  justify-content space-between
</style>
