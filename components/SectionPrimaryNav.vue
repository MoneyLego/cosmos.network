<template>
  <div class="nav-inner">
    <nav
      class="nav nav-primary tm-section-container section-container"
      role="navigation"
    >
      <div class="nav-first">
        <NuxtLink to="https://cosmos.network/" class="logo">
          <logo-cosmos-wordmark class="logo__cosmos" />
        </NuxtLink>
        <span class="sr-only">Cosmos</span>
        <NuxtLink
          to="/"
          class="logo logo-secondary tm-rf-1 tm-medium tm-lh-solid"
        >
          <logo-hub-brandmark class="logo__hub" />Hub
        </NuxtLink>
        <tm-button
          variant="text"
          glow
          class="nav-mobile-toggle"
          :class="{ 'is-open': isOpen }"
          @click="isOpen = !isOpen"
          ><div class="nav-mobile-toggle__icon"></div
        ></tm-button>
      </div>
      <div class="nav-mobile-container">
        <div class="nav-mobile-content tm-section-container">
          <ul>
            <li>
              <a
                href="https://cosmos.network/"
                class="text tm-rf1 tm-medium tm-lh-title tm-link"
                >What is Cosmos?</a
              >
            </li>
            <li>
              <a
                href="https://cosmos.network/"
                class="text tm-rf1 tm-medium tm-lh-title tm-link"
                >Build on Cosmos</a
              >
            </li>
            <li>
              <a
                href="https://cosmos.network/"
                class="text tm-rf1 tm-medium tm-lh-title tm-link"
                >Community</a
              >
            </li>
            <li>
              <a
                href="https://cosmos.network/"
                class="text tm-rf1 tm-medium tm-lh-title tm-link"
                >Ecosystem</a
              >
            </li>
            <li>
              <a
                href="https://cosmos.network/"
                class="text tm-rf1 tm-medium tm-lh-title tm-link"
                >Tools</a
              >
            </li>
            <li>
              <NuxtLink to="/" class="text tm-rf1 tm-medium tm-lh-title tm-link"
                >Cosmos Hub</NuxtLink
              >
              <ul>
                <li>
                  <NuxtLink to="/features" class="tm-rf0 tm-lh-title tm-link"
                    >Features</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/staking" class="tm-rf0 tm-lh-title tm-link"
                    >Staking</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/learn/faq" class="tm-rf0 tm-lh-title tm-link"
                    >FAQ</NuxtLink
                  >
                </li>
                <li>
                  <a
                    href="https://hub.cosmos.network"
                    target="_blank"
                    rel="noreferrer noopener"
                    class="tm-rf0 tm-lh-title tm-link"
                    >Documentation<span class="tm-link-disclosure"
                      >&#8599;</span
                    ></a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="nav-mobile-bottom tm-section-container">
          <tm-button glow background-color="var(--white)" color="var(--black)"
            >Get started</tm-button
          >
        </div>
      </div>
      <div class="nav-second">
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
      </div>
    </nav>
    <nav
      class="nav nav-secondary tm-section-container section-container"
      role="navigation"
    >
      <NuxtLink to="/" class="logo tm-rf-1 tm-medium tm-lh-solid">
        <logo-hub-brandmark class="logo__hub" />Hub
      </NuxtLink>
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
export default {
  props: {
    data: {
      isOpen: false,
    },
  },
}
</script>

<style lang="stylus" scoped>

$navbar-height = 5rem
$navbar-mobile-menu = 200

.nav-inner
  position relative
  z-index 2

.nav
  &,
  &-first
    display flex
    flex-direction row
    align-items center
    justify-content space-between
  ul
    padding 0
  li
    list-style-type none
  .logo
    display flex
    align-items center
    gap var(--spacing-3)
    padding var(--spacing-6) 0
    color inherit
    transition transform .4s $ease-out, opacity .4s $ease-out, color .4s $ease-out, visibility .4s 0s
    svg
      width auto
    &__cosmos
      height 1.125rem
    &-secondary
      margin-right auto
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
  &-mobile-toggle
    margin-right calc(-1 * var(--spacing-5))
    &.tm-button
      padding-left var(--spacing-5)
      padding-right var(--spacing-5)
    &__icon
      display flex
      flex-direction column
      justify-content center
      align-items center
      width 1.5rem
      height 1.5rem
      pointer-events none
      &:before,
      &:after
        content ""
        display block
        height 1px
        width 100%
        background-color currentColor
        transition transform .2s $ease-out
      &:before
        transform translateY(-4px) rotate(0deg)
      &:after
        transform translateY(4px) rotate(0deg)
    &.is-open &__icon
      &:before
        transform translateY(1px) rotate(45deg)
      &:after
        transform translateY(0) rotate(-45deg)
  &-mobile-container
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    z-index $navbar-mobile-menu
    background var(--black)
    display none
    flex-direction column
    -webkit-box-orient vertical
    -webkit-box-direction normal
  &-mobile-content
    padding-top $navbar-height
    padding-bottom var(--spacing-7)
    overflow-y auto
    flex-grow 1
    -webkit-box-flex 1
    .tm-link
      padding var(--spacing-4) var(--spacing-7)
    ul
      margin-left calc(-1 * var(--spacing-7))
      margin-right calc(-1 * var(--spacing-7))
      ul
        margin-left 0
        margin-right 0
        .tm-link
          padding-top var(--spacing-3)
          padding-bottom var(--spacing-3)
  &-mobile-bottom
    padding-bottom var(--spacing-7)
    text-align center
    .tm-button
      width 100%
      max-width 20rem
  &-primary
    border-bottom 1px solid var(--white-100)
  &-first
    z-index $navbar-mobile-menu + 1
    gap var(--spacing-7)
  &-second,
  &-secondary
    display none

@media $breakpoint-large-max
  .nav
    &-mobile-container.is-open
      display flex
    &-first
      flex 1 1
      background var(--black)
    .tm-link
      &.nuxt-link-exact-active:after
        transform rotate(90deg)
        left 0
        bottom 50%
        transform-origin bottom

@media $breakpoint-large
  .nav
    ul
      margin-right calc(-1 * var(--spacing-5))
    li
      display inline-block
    &-mobile-toggle.tm-button,
    &-mobile-container
      display none
    &-primary
      .logo-secondary
        display none
    &-second
      display block
    &-secondary
      display flex
      .nav-right
        border-top 1px solid var(--white)
        margin-top -1px
</style>
