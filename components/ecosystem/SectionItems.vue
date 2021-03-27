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
    items: { type: Array, required: true },
  },
}
</script>

<style lang="stylus" scoped>
  .section-items
    display grid
    grid-gap 1.5rem

@media $breakpoint-medium
  .section-items
    grid-template-columns 1fr 1fr
    grid-gap 2rem

@media $breakpoint-xl
  .section-items
    grid-template-columns 1fr 1fr 1fr
    grid-gap 3rem
</style>
