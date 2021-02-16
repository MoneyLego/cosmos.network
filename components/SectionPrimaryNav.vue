<template>
  <div class="nav-inner">
    <nav
      class="nav nav-primary tm-section-container section-container"
      role="navigation"
    >
      <NuxtLink to="/">
        <logo-cosmos-wordmark class="logo logo-cosmos" />
      </NuxtLink>
      <span class="sr-only">Cosmos</span>
      <ul>
        <li>
          <a
            href="https://cosmos.network/"
            class="text tm-rf-1 tm-medium tm-lh-title tm-link"
            >What is Cosmos?</a
          >
        </li>
        <li>
          <a
            href="https://cosmos.network/"
            class="text tm-rf-1 tm-medium tm-lh-title tm-link"
            >Build on Cosmos</a
          >
        </li>
        <li>
          <a
            href="https://cosmos.network/"
            class="text tm-rf-1 tm-medium tm-lh-title tm-link"
            >Community</a
          >
        </li>
        <li>
          <a
            href="https://cosmos.network/"
            class="text tm-rf-1 tm-medium tm-lh-title tm-link"
            >Ecosystem</a
          >
        </li>
        <li>
          <a
            href="https://cosmos.network/"
            class="text tm-rf-1 tm-medium tm-lh-title tm-link"
            >Tools</a
          >
        </li>
        <li>
          <NuxtLink to="/" class="text tm-rf-1 tm-medium tm-lh-title tm-link"
            >Cosmos Hub</NuxtLink
          >
        </li>
      </ul>
    </nav>
    <nav
      class="nav nav-secondary tm-section-container section-container"
      role="navigation"
    >
      <NuxtLink to="/hub" class="logo-secondary">
        <logo-cosmos-hub class="logo logo-cosmos-hub" />
      </NuxtLink>
      <span class="sr-only">Cosmos</span>
      <div class="nav-right">
        <ul>
          <li>
            <NuxtLink
              to="/features"
              class="tm-rf-1 tm-medium tm-lh-title tm-link"
              >Features</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/staking"
              class="tm-rf-1 tm-medium tm-lh-title tm-link"
              >Staking</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/learn/faq"
              class="tm-rf-1 tm-medium tm-lh-title tm-link"
              >FAQ</NuxtLink
            >
          </li>
          <li>
            <a
              href="https://hub.cosmos.network"
              target="_blank"
              rel="noreferrer noopener"
              class="tm-rf-1 tm-medium tm-lh-title tm-link"
              >Documentation<span class="tm-link-disclosure">&#8599;</span></a
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>

.nav-inner
  position relative
  z-index 2

.nav
  display flex
  align-items center
  justify-content space-between
  ul
    padding 0
    margin-right calc(-1 * var(--spacing-5))
  li
    list-style-type none
    display inline-block
  .logo
    display block
    transition transform .4s $ease-out, opacity .4s $ease-out, color .4s $ease-out, visibility .4s 0s
    color var(--white)
    height 1.125rem
    width auto
  .tm-link
    position relative
    display block
    padding var(--spacing-7) var(--spacing-5)
    color var(--white)
    border-radius $border-radius-2
    // /* exact link will show the primary color for only the exact matching link */
    &.nuxt-link-exact-active
      cursor default
      &:after
        content ""
        position absolute
        display block
        border-right 1px solid
        height var(--spacing-3)
        bottom 0
        left 50%
  &-primary
    border-bottom 1px solid var(--white-100)
  &-secondary
    .nav-right
      border-top 1px solid var(--white)
      margin-top -1px
</style>
