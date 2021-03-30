<template>
  <div class="dropdown-container">
    <div class="dropdown-wrap">
      <div class="left">
        <tm-link
          href="https://v1.cosmos.network/intro"
          class="dropdown-wrap__content"
        >
          <span>Introduction</span></tm-link
        >
        <nuxt-link to="/features" class="dropdown-wrap__content">
          <span>Features</span>
        </nuxt-link>
      </div>
      <div class="right">
        <nuxt-link to="/learn/staking" class="dropdown-wrap__content">
          <span>What is staking?</span>
        </nuxt-link>
        <nuxt-link to="/learn/faq" class="dropdown-wrap__content">
          <span>FAQ</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped></style>
