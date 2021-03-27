<template>
  <div class="tm-section tm-container tm-wrapper tm-grid-base">
    <div class="items">
      <CardItem v-for="item in items" :key="item.id" :item="item" />
    </div>
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
.items
  width 100%
  display flex
  flex-flow row wrap
.item
  margin-bottom 1.5rem
</style>
