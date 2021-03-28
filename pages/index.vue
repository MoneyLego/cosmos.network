<template>
  <main>
    <section-hero />
    <home-section-ecosystem />
    <home-section-services />
    <home-section-atom />
    <home-section-features />
    <home-section-tech />
    <!-- <section-intro /> -->
    <!-- <section-banner /> -->
  </main>
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
