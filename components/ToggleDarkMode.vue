<template>
  <div class="flex">
    <div class="color" @click="toggleColorMode">
      {{ $colorMode.preference }}
    </div>
    <component
      :is="`icon-light`"
      v-if="$colorMode.preference === 'dark'"
      :class="getClasses(color)"
    />
    <component :is="`icon-dark`" v-else :class="getClasses(color)" />
  </div>
</template>

<script>
import IconLight from '~/components/icons/IconLight.vue'
import IconDark from '~/components/icons/IconDark.vue'

export default {
  components: {
    IconLight,
    IconDark,
  },
  props: {
    color: {
      type: String,
      default: 'dark',
    },
  },
  data() {
    return {
      colors: ['dark', 'light'],
    }
  },
  methods: {
    toggleColorMode() {
      this.$colorMode.preference =
        this.$colorMode.value === 'light' ? 'dark' : 'light'
    },
    getClasses(color) {
      // Does not set classes on ssr when preference is system (because we don't know the preference until client-side)
      if (this.$colorMode.unknown) {
        return {}
      }
      return {
        preferred: color === this.$colorMode.preference,
        selected: color === this.$colorMode.value,
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
/* dark mode styling in _base.styl */

.color
  text-transform capitalize
  margin-right var(--spacing-1)
  cursor pointer

.dark-mode .color
  color rgba(255, 255, 255, 0.4)
.light-mode .color
  color rgba(0, 0, 0, 0.4)

.flex
  display flex
  flex-direction row
  align-items center
</style>
