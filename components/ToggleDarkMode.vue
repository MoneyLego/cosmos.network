<template>
  <div class="flex">
    <div class="color" @click="toggleColorMode">
      {{ $colorMode.preference }}
    </div>
    <component
      :is="`icon-light-mode`"
      v-if="$colorMode.preference === 'light'"
      class="icon"
      :class="getClasses(color)"
    />
    <component :is="`icon-dark-mode`" v-else :class="getClasses(color)" />
  </div>
</template>

<script>
import IconLightMode from '~/components/icons/IconLightMode.vue'
import IconDarkMode from '~/components/icons/IconDarkMode.vue'

export default {
  components: {
    IconLightMode,
    IconDarkMode,
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
  margin-right var(--spacing-3)
  cursor pointer


.flex
  display flex
  flex-direction row
  align-items center
  color var(--white-500)

  .light-mode &
    color var(--trans-gray-400)
</style>
