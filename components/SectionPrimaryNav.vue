<template>
  <div class="navs tm-wrapper">
    <nav
      class="nav nav-primary"
      role="navigation"
      :class="{ 'is-active': isActive }"
    >
      <vsm-menu :menu="menu">
        <!-- The main content for the dropdown list -->
        <template #default="data">
          <component :is="data.item.content" class="vsm-content" />
          <component
            :is="data.item.secondaryContent"
            class="vsm-content--secondary"
          />
        </template>
        <!-- Content to the left of the list -->
        <template #before-nav>
          <li class="vsm-section vsm-logo-section">
            <NuxtLink to="/" class="logo">
              <logo-cosmos-wordmark class="logo__cosmos" />
              <span class="sr-only">Cosmos</span>
            </NuxtLink>
          </li>
        </template>
        <!-- Content to the right of the list -->
        <template #after-nav>
          <!-- <li class="vsm-mob-hide">
            <button
              class="nav-mobile-toggle"
              type="button"
              aria-label="Menu"
              aria-controls="navigation"
              :class="{ 'is-active': isActive }"
              @click="isActive = !isActive"
            >
              <span class="nav-mobile-toggle__icon"></span>
              <span class="sr-only">Menu</span>
            </button>
          </li> -->
          <vsm-mob>
            <div class="nav-mobile-content tm-wrapper">
              <ul>
                <li>
                  <tm-tabs class="tm-wrapper">
                    <tm-tab name="Learn" :selected="true">
                      <ul>
                        <li>
                          <tm-link
                            href="https://v1.cosmos.network/intro"
                            class="tm-rf0 tm-lh-title tm-link"
                            >Introduction</tm-link
                          >
                        </li>
                        <li>
                          <NuxtLink
                            to="/features"
                            class="tm-rf0 tm-lh-title tm-link"
                            >Features</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink
                            to="/learn/staking"
                            class="tm-rf0 tm-lh-title tm-link"
                            >What is staking?</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink
                            to="/learn/faq"
                            class="tm-rf0 tm-lh-title tm-link"
                            >FAQ</NuxtLink
                          >
                        </li>
                      </ul>
                    </tm-tab>
                    <tm-tab name="Build">
                      <ul>
                        <li>
                          <tm-link
                            href="https://tutorials.cosmos.network"
                            class="dropdown-wrap__content type1"
                          >
                            <span>Tutorials</span></tm-link
                          >
                        </li>
                        <li>
                          <tm-link
                            href="https://docs.cosmos.network"
                            class="dropdown-wrap__content type1"
                          >
                            <span>Documentation</span></tm-link
                          >
                        </li>
                        <li>
                          <tm-link
                            href="https://v1.cosmos.network/sdk"
                            class="dropdown-wrap__content type1"
                          >
                            <span>Cosmos SDK</span></tm-link
                          >
                        </li>
                        <li>
                          <tm-link
                            href="https://ibcprotocol.org"
                            class="dropdown-wrap__content type1"
                          >
                            <span>IBC</span></tm-link
                          >
                        </li>
                      </ul>
                    </tm-tab>
                    <tm-tab name="Explore">
                      <ul>
                        <li>
                          <NuxtLink
                            to="/ecosystem/apps"
                            class="dropdown-wrap__content type1"
                          >
                            <span>Ecosystem</span>
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            to="/ecosystem/wallets"
                            class="dropdown-wrap__content type1"
                          >
                            <span>Wallets</span>
                          </NuxtLink>
                        </li>
                        <li>
                          <tm-link
                            href="https://v1.cosmos.network/community"
                            class="dropdown-wrap__content type1"
                          >
                            <span>Community</span></tm-link
                          >
                        </li>
                        <li>
                          <tm-link
                            href="https://v1.cosmos.network/events"
                            class="dropdown-wrap__content type1"
                          >
                            <span>Events</span></tm-link
                          >
                        </li>
                        <li>
                          <tm-link
                            href="https://v1.cosmos.network/contributors"
                            class="dropdown-wrap__content type1"
                          >
                            <span>Contributors</span></tm-link
                          >
                        </li>
                      </ul>
                    </tm-tab>
                  </tm-tabs>
                </li>
              </ul>
            </div>
            <NuxtLink to="/learn/get-atom">
              <div class="nav-mobile-bottom tm-wrapper">
                <div class="wrapper">
                  <div class="text">
                    <div class="title tm-rf0 tm-lh-copy">Get ATOM &#8594;</div>
                    <div class="subtitle tm-rf-1 tm-lh-copy">
                      Four simple steps to get ATOM and start earning rewards.
                    </div>
                  </div>
                  <div class="graphics">
                    <graphics-validator :coins="3" class="graphics__item" />
                  </div>
                </div>
              </div>
            </NuxtLink>
          </vsm-mob>
        </template>
      </vsm-menu>
    </nav>

    <!-- Uncomment for secondary nav -->
    <!-- <nav v-if="secondary" class="nav nav-secondary" role="navigation">
      <section-secondary-nav />
    </nav> -->

    <!-- <nav
      v-if="isActive"
      :class="{ 'is-active': isActive }"
      class="nav nav-mobile-container"
    >
      <div class="nav-mobile-content tm-wrapper">
        <ul>
          <li>
            <NuxtLink to="/" class="text tm-rf3 tm-bold tm-lh-title tm-link"
              >Learn</NuxtLink
            >
            <ul>
              <li>
                <tm-link
                  href="https://v1.cosmos.network/intro"
                  class="tm-rf0 tm-lh-title tm-link"
                  >Introduction</tm-link
                >
              </li>
              <li>
                <NuxtLink to="/features" class="tm-rf0 tm-lh-title tm-link"
                  >Features</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/learn/staking" class="tm-rf0 tm-lh-title tm-link"
                  >What is staking?</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/learn/faq" class="tm-rf0 tm-lh-title tm-link"
                  >FAQ</NuxtLink
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="nav-mobile-bottom tm-wrapper">
        <tm-button to-link="internal" to="/learn/get-atom"
          >Get ATOM <span class="icon__right">&#8594;</span></tm-button
        >
      </div>
    </nav> -->
  </div>
</template>

<script>
import learnDropdownTop from '../components/content/learnDropdownTop'
import learnDropdownBottom from '../components/content/learnDropdownBottom'
import buildDropdownTop from '../components/content/buildDropdownTop'
import buildDropdownBottom from '../components/content/buildDropdownBottom'
import exploreDropdownTop from '../components/content/exploreDropdownTop'
import exploreDropdownBottom from '../components/content/exploreDropdownBottom'
import LogoHubBrandmark from '~/components/logos/LogoHubBrandmark.vue'
import LogoCosmosWordmark from '~/components/logos/LogoCosmosWordmark.vue'

export default {
  components: {
    LogoCosmosWordmark,
    LogoHubBrandmark,
  },
  data() {
    return {
      isActive: false,
      secondary: false, // temporary to hide secondary nav
      menu: [
        {
          title: 'Learn',
          dropdown: 'learn',
          content: learnDropdownTop,
          secondaryContent: learnDropdownBottom,
        },
        {
          title: 'Build',
          dropdown: 'build',
          content: buildDropdownTop,
          secondaryContent: buildDropdownBottom,
        },
        {
          title: 'Explore',
          dropdown: 'explore',
          content: exploreDropdownTop,
          secondaryContent: exploreDropdownBottom,
        },
      ],
    }
  },
  watch: {
    $route() {
      this.isActive = false
    },
  },
}
</script>

<style src="~/assets/styles/nav.styl" lang="stylus" />

<style lang="stylus" scoped>
$navbar-height = 5rem
$navbar-mobile-menu = 200

// .dropdown-container
//   width 482px

.dropdown-wrap
  display grid
  grid-template-columns 1fr 1fr
  column-gap var(--spacing-6)
  .overline
    color var(--white-300)
  .title
    color var(--white)
    margin-top var(--spacing-3)
  .subtitle
    color var(--white-400)
    margin-top var(--spacing-3)

.navs
  position relative
  z-index 2

.nav
  &-inner
    width 100%
  &-inner,
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
    gap var(--spacing-4)
    padding var(--spacing-6) 0
    color inherit
    transition transform .4s $ease-out, opacity .4s $ease-out, color .4s $ease-out, visibility .4s 0s
    svg
      width auto
    &__cosmos
      height 1.125rem
    &-secondary
      margin-right auto
  &-secondary .logo
    svg
      width 2rem
      height auto
  .tm-link
    position relative
    display block
    border-radius $border-radius-2
    // /* exact link will show the primary color for only the exact matching link */
  .tm-link.nuxt-link-exact-active
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
    // copying .tm-button styles because we're not using the component for some reason
    padding var(--spacing-5)
    text-rendering inherit
    font-family inherit
    background none
    border none
    outline 0
    cursor pointer
    user-select none
    text-decoration none
    color inherit
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
    // &.is-active &__icon
    //   &:before
    //     transform translateY(1px) rotate(45deg)
    //   &:after
    //     transform translateY(0) rotate(-45deg)
  &-mobile-container
    background var(--black)
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    z-index $navbar-mobile-menu
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
      padding var(--spacing-3) 0
    ul
      margin-left calc(-1 * var(--spacing-7))
      margin-right calc(-1 * var(--spacing-7))
      ul
        margin-left 0
        margin-right 0
        .tm-link-external:after
          bottom auto
  &-mobile-bottom
    padding var(--spacing-6) var(--spacing-7)
    text-align start
    background var(--trans-gray-900)
  &-primary
    position relative
    z-index $navbar-mobile-menu + 1
  &-first
    gap var(--spacing-7)
  &-second,
  &-secondary
    display none

.nav-mobile-bottom .wrapper
  display: inline-flex;
  align-items: center;
  text-align: start;

.nav-mobile-bottom .wrapper .text
  text-align start

.wrapper .text
  white-space normal

.wrapper .text .title
  color var(--white)
  margin-top var(--spacing-3)

.wrapper .text .subtitle
  color var(--white-400)
  margin-top var(--spacing-3)

.wrapper .graphics
  display flex
  justify-content center
  position relative
  z-index 0

  &__item
    height auto
    width 70%
    margin-top calc(-1 * var(--spacing-8))
    max-width 12rem

@media $breakpoint-xsmall-only
  .wrapper .graphics
    display none

@media $breakpoint-large-max
  .nav
    &-primary.is-active
      .light-mode &
        background var(--white)
      .dark-mode &
        background var(--black)
    &-first
      flex 1 1
    .tm-link
      &.nuxt-link-exact-active:after
        transform rotate(90deg)
        left 0
        bottom 50%
        transform-origin bottom
    &-mobile-container.is-active
      display flex

@media $breakpoint-large
  .nav
    ul
      margin-right calc(-1 * var(--spacing-5))
      margin-left calc(-1 * var(--spacing-5))
      display flex
      justify-content center
    .tm-link
      padding var(--spacing-7) var(--spacing-5)
    &-first
      flex 1 1 0%
    &-second
      display block
      grid-columns 1
    &-last
      flex 1 1 0%
    &-mobile-toggle
      display none

  .nav-primary
    .logo-secondary
      display none
    // .nav-inner
    //   display grid
    //   grid-template-columns repeat(3, 1fr)

  .nav-second .nuxt-link-exact-active:before
    content ""
    position absolute
    display block
    border-bottom 1px solid
    width calc(1rem + 1px)
    bottom -1px
    left 50%
    margin-left -0.5rem

  .nav-secondary
    display flex
    border-top 1px solid var(--white-100)
    .light-mode &
      border-top-color var(--trans-gray-900)
    margin-top -1px
</style>
