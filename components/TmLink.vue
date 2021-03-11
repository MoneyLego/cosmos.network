<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="tm-link tm-link-underline-hover"
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
  },
}
</script>

<style lang="stylus" scoped></style>
