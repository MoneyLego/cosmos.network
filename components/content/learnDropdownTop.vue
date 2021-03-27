<template>
  <div class="dropdown-container">
    <div class="dropdown-wrap">
      <tm-link
        href="https://v1.cosmos.network/intro"
        class="dropdown-wrap__content type1"
      >
        <span>Introduction</span></tm-link
      >
      <NuxtLink to="/learn/staking" class="dropdown-wrap__content type1">
        <span>What is staking?</span>
      </NuxtLink>
      <NuxtLink to="/features" class="dropdown-wrap__content type1">
        <span>Features</span>
      </NuxtLink>
      <NuxtLink to="/learn/faq" class="dropdown-wrap__content type1">
        <span>FAQ</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped></style>
