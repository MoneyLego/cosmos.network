<template>
  <div class="section-items tm-section tm-container tm-wrapper">
    <CardItem v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

<script>
import CardItem from '~/components/ecosystem/CardItem.vue'

export default {
  components: {
    CardItem,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
}
</script>

<style lang="stylus" scoped>
.section-items
  display grid
  gap var(--spacing-6)

@media $breakpoint-medium
  .section-items
    grid-template-columns 1fr 1fr
    gap var(--spacing-7)

@media $breakpoint-xl
  .section-items
    grid-template-columns 1fr 1fr 1fr
    gap var(--spacing-8)
</style>
