<template>
  <div class="tm-section prev-next-container">
    <NuxtLink v-if="prev" :to="`/learn/faq/${prev.slug}`">
      {{ prev.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink v-if="next" :to="`/learn/faq/${next.slug}`">
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
