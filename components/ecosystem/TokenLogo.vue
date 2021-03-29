<template lang="pug">
  a(:href="item.fields.website" target="_blank" rel="noreferrer noopener" v-if="item && item.fields && item.fields.website && item.fields.website !== 'x'")
    .logo-wrapper
      img(:src="item.fields.logo[0].url" :alt="`${item.fields.name} App logo`" v-if="item.fields && item.fields.logo").logo-wrapper__base
      img(:src="item.fields.logo[0].url" :alt="`${item.fields.name} App logo`" v-if="item.fields && item.fields.logo").logo-wrapper__top
      img(src="~assets/images/ecosystem/avatar-placeholder.svg" :alt="`${item.fields.name} App logo`" v-if="!item.fields.logo && !item.fields").logo-wrapper__base
      img(src="~assets/images/ecosystem/avatar-placeholder.svg" :alt="`${item.fields.name} App logo`" v-if="!item.fields.logo && !item.fields").logo-wrapper__top
      .logo-wrapper__color
  div(v-else-if="item && item.fields")
    .logo-wrapper
      img(:src="item.fields.logo[0].url" :alt="`${item.fields.name} App logo`" v-if="item.fields && item.fields.logo").logo-wrapper__base
      img(:src="item.fields.logo[0].url" :alt="`${item.fields.name} App logo`" v-if="item.fields && item.fields.logo").logo-wrapper__top
      img(src="~assets/images/ecosystem/avatar-placeholder.svg" :alt="`${item.fields.name} App logo`" v-if="!item.fields.logo && !item.fields").logo-wrapper__base
      img(src="~assets/images/ecosystem/avatar-placeholder.svg" :alt="`${item.fields.name} App logo`" v-if="!item.fields.logo && !item.fields").logo-wrapper__top
      .logo-wrapper__color
  div(v-else)
    .logo-wrapper
      img(src="~assets/images/ecosystem/avatar-placeholder.svg" alt="Placeholder lgo").logo-wrapper__base
      img(src="~assets/images/ecosystem/avatar-placeholder.svg" alt="Placeholder logo").logo-wrapper__top
      .logo-wrapper__color
</template>

<script>
export default {
  props: {
    item: { type: Object, required: true },
  },
}
</script>

<style lang="stylus" scoped>
.logo-wrapper
  width fit-content
  height fit-content
  padding 0.5rem
  border-radius 0.5rem
  display flex
  align-items center
  background var(--white-100)
  overflow hidden
  filter blur(0px)
  position relative

  &__color
    width 2rem
    height 2rem

  &__base
    width 2rem
    height 2rem
    position absolute
    filter blur(16px)
    transform scale(2.3)
    opacity 0.7

  &__top
    max-width 2rem
    max-height 2rem
    width 100%
    position absolute
    overflow hidden
    filter blur(0px)
</style>
