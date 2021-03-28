<template>
  <div class="dropdown-container">
    <div class="dropdown-wrap">
      <div class="left">
        <NuxtLink to="/ecosystem/tokens" class="dropdown-wrap__content">
          <span>Tokens</span>
        </NuxtLink>
        <NuxtLink to="/ecosystem/apps" class="dropdown-wrap__content">
          <span>Ecosystem</span>
        </NuxtLink>
        <NuxtLink to="/ecosystem/wallets" class="dropdown-wrap__content">
          <span>Wallets</span>
        </NuxtLink>
      </div>
      <div class="right">
        <tm-link
          href="https://v1.cosmos.network/community"
          class="dropdown-wrap__content"
        >
          <span>Community</span></tm-link
        >
        <tm-link
          href="https://v1.cosmos.network/events"
          class="dropdown-wrap__content"
        >
          <span>Events</span></tm-link
        >
        <tm-link
          href="https://v1.cosmos.network/contributors"
          class="dropdown-wrap__content"
        >
          <span>Contributors</span></tm-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped></style>
