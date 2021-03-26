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
      // TODO: verify this when the site is live
      meta: [
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://beta.cosmos.network/hub-og-image.jpg',
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped></style>
