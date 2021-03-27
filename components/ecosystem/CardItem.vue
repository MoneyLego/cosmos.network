<template lang="pug">
.item(:key="item.id")
  a(:href="item.fields.website" target="_blank" rel="noreferrer noopener" v-if="item.fields.website && item.fields.website !== 'x'")
    .logo-wrapper
      img(:src="item.fields.logo[0].url" :alt="`${item.fields.name} App logo`" v-if="item.fields.logo").logo-wrapper__base
      img(:src="item.fields.logo[0].url" :alt="`${item.fields.name} App logo`" v-if="item.fields.logo").logo-wrapper__top
      img(src="~assets/images/ecosystem/avatar-placeholder.svg" :alt="`${item.fields.name} App logo`" v-if="!item.fields.logo").logo-wrapper__base
      img(src="~assets/images/ecosystem/avatar-placeholder.svg" :alt="`${item.fields.name} App logo`" v-if="!item.fields.logo").logo-wrapper__top
      .logo-wrapper__color
  div(v-else)
    .logo-wrapper
      img(:src="item.fields.logo[0].url" :alt="`${item.fields.name} App logo`" v-if="item.fields.logo").logo-wrapper__base
      img(:src="item.fields.logo[0].url" :alt="`${item.fields.name} App logo`" v-if="item.fields.logo").logo-wrapper__top
      img(src="~assets/images/ecosystem/avatar-placeholder.svg" :alt="`${item.fields.name} App logo`" v-if="!item.fields.logo").logo-wrapper__base
      img(src="~assets/images/ecosystem/avatar-placeholder.svg" :alt="`${item.fields.name} App logo`" v-if="!item.fields.logo").logo-wrapper__top
      .logo-wrapper__color
  .text
    .tm-rf1.tm-bold.tm-lh-title.tm-title
      a(:href="item.fields.website" target="_blank" rel="noreferrer noopener" v-if="item.fields.website && item.fields.website !== 'x'")
        | {{ item.fields.name }}
        span(v-tooltip.top="item.fields.status" v-if="item.fields.status !== 'Unknown'").dot
          icon-dot(fill="var(--dot-color, rgba(59, 66, 125, 0.12))" :style="{'--dot-color': `${dotColor[cleanText(item.fields.status)]}`}")
      .text__top__name__none(v-else) {{ item.fields.name }}
        span(v-tooltip.top="item.fields.status" v-if="item.fields.status !== 'Unknown'").dot
          icon-dot(fill="var(--dot-color, rgba(59, 66, 125, 0.12))" :style="{'--dot-color': `${dotColor[cleanText(item.fields.status)]}`}")
    .tm-muted(v-if="!item.fields.category || item.fields.category !== '?'") {{ item.fields.category }}
    .text__list
      a(:href="item.fields.docs" target="_blank" rel="noreferrer noopener" v-tooltip.bottom="'Docs'" v-if="item.fields.docs && item.fields.docs !== 'x'").list-item.fields
        img(src="~assets/brands/gray/docs.svg" alt="Docs").icon
      a(:href="item.fields.github" target="_blank" rel="noreferrer noopener" v-tooltip.bottom="'GitHub'" v-if="item.fields.github && item.fields.github !== 'x'").list-item.fields
        img(src="~assets/brands/gray/github.svg" alt="GitHub").icon
      a(:href="item.fields.chat" target="_blank" rel="noreferrer noopener" v-tooltip.bottom="'Chat'" v-if="item.fields.chat && item.fields.chat !== 'x'").list-item.fields
        img(src="~assets/brands/gray/chat.svg" alt="Chat").icon
      a(:href="item.fields.twitter" target="_blank" rel="noreferrer noopener" v-tooltip.bottom="'Twitter'" v-if="item.fields.twitter && item.fields.twitter !== 'x'").list-item.fields
        img(src="~assets/brands/gray/twitter.svg" alt="Twitter").icon
</template>

<script>
import IconDot from '~/components/icons/IconDot.vue'
export default {
  components: {
    IconDot,
  },
  props: {
    item: { type: Object, required: true },
  },
  data() {
    return {
      dotColor: {
        mainnet: '#4ACF4A',
        testnet: '#BA3FD9',
        development: '#FF9500',
        proofofconcept: '#3B427D',
        beta: '#66A1FF',
        alpha: '#BCE7FF',
        live: '#4ACF4A',
      },
    }
  },
  methods: {
    cleanText(item) {
      if (item) {
        return item.split(' ').join('').toLowerCase()
      }
    },
  },
}
</script>

<style lang="stylus" scoped>

.dot
  padding 0.25rem

.item
  display grid
  grid-auto-flow column
  grid-template-columns min-content 1fr
  text-decoration none
  border-radius .5rem
  transition all .25s
  gap 1.5rem
  max-width 320px

.logo-wrapper
  width fit-content
  height fit-content
  padding 1.25rem
  border-radius 1rem
  display flex
  align-items center
  background var(--white-100)
  overflow hidden
  filter blur(0px)
  position relative

  &__color
    width 4.5rem
    height 4.5rem

  &__base
    width 4.5rem
    height 4.5rem
    position absolute
    filter blur(16px)
    transform scale(2.3)
    opacity 0.7

  &__top
    max-width 4.5rem
    max-height 4.5rem
    width 100%
    position absolute
    overflow hidden
    filter blur(0px)

.text
  display flex
  flex-direction column

  &__list
    display inline-flex
    justify-content flex-start
    flex-direction row
    margin-top auto

.list-item + .list-item
  margin-left 1rem

.list-item
  opacity 0.7

  &:hover
    opacity 1

.icon
  width 1.5rem
  height 1.5rem

@media screen and (max-width: 400px)
  .item
    gap 1rem

  .logo-wrapper

    &__item
      width 2.5rem
      height 2.5rem

  .text
    &__list
      margin-top 1rem

@media screen and (max-width: 320px)
  .logo-wrapper
    padding 0.75rem

    &__base
      max-width 3rem
      max-height 3rem

    &__top
      max-width 3rem
      max-height 3rem

    &__color
      max-width 3rem
      max-height 3rem

  .text
    &__list
      margin-top 0.5rem
</style>
