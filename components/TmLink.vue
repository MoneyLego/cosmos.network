<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    :class="['tm-link', hoverUnderline && 'tm-link-underline-hover']"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: '#',
      required: true,
    },
    hoverUnderline: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="stylus" scoped></style>
