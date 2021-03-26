<template>
  <div>
    <section-hero />
    <home-section-ecosystem />
    <home-section-services />
    <section-intro />
    <section-banner />
  </div>
</template>

<script>
export default {
  head() {
    return {
      meta: [
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://cosmos.network/og-image.jpg',
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped></style>
