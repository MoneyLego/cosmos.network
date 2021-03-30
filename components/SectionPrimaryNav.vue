<template>
  <div class="navs">
    <nav class="nav nav-primary tm-container" role="navigation">
      <vsm-menu :menu="menu" class="tm-wrapper">
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
            <nuxt-link to="/" class="logo tm-title">
              <logo-cosmos-wordmark class="logo__cosmos" />
              <span class="sr-only">Cosmos</span>
            </nuxt-link>
          </li>
        </template>
        <!-- Content to the right of the list -->
        <template #after-nav>
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
                            class="tm-rf0 tm-lh-title tm-link tm-link-external"
                            >Introduction</tm-link
                          >
                        </li>
                        <li>
                          <nuxt-link
                            to="/features"
                            class="tm-rf0 tm-lh-title tm-link"
                            >Features</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link
                            to="/learn/staking"
                            class="tm-rf0 tm-lh-title tm-link"
                            >What is staking?</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link
                            to="/learn/faq"
                            class="tm-rf0 tm-lh-title tm-link"
                            >FAQ</nuxt-link
                          >
                        </li>
                      </ul>
                    </tm-tab>
                    <tm-tab name="Build">
                      <ul>
                        <li>
                          <tm-link
                            href="https://tutorials.cosmos.network"
                            class="tm-rf0 tm-lh-title tm-link tm-link-external"
                          >
                            <span>Tutorials</span></tm-link
                          >
                        </li>
                        <li>
                          <tm-link
                            href="https://docs.cosmos.network"
                            class="tm-rf0 tm-lh-title tm-link tm-link-external"
                          >
                            <span>Documentation</span></tm-link
                          >
                        </li>
                        <li>
                          <tm-link
                            href="https://v1.cosmos.network/sdk"
                            class="tm-rf0 tm-lh-title tm-link tm-link-external"
                          >
                            <span>Cosmos SDK</span></tm-link
                          >
                        </li>
                        <li>
                          <tm-link
                            href="https://ibcprotocol.org"
                            class="tm-rf0 tm-lh-title tm-link tm-link-external"
                          >
                            <span>IBC</span></tm-link
                          >
                        </li>
                      </ul>
                    </tm-tab>
                    <tm-tab name="Explore">
                      <ul>
                        <li>
                          <nuxt-link
                            to="/ecosystem/tokens"
                            class="tm-rf0 tm-lh-title tm-link"
                          >
                            <span>Tokens</span>
                          </nuxt-link>
                        </li>
                        <li>
                          <nuxt-link
                            to="/ecosystem/apps"
                            class="tm-rf0 tm-lh-title tm-link"
                          >
                            <span>Ecosystem</span>
                          </nuxt-link>
                        </li>
                        <li>
                          <nuxt-link
                            to="/ecosystem/wallets"
                            class="tm-rf0 tm-lh-title tm-link"
                          >
                            <span>Wallets</span>
                          </nuxt-link>
                        </li>
                        <li>
                          <tm-link
                            href="https://v1.cosmos.network/community"
                            class="tm-rf0 tm-lh-title tm-link tm-link-external"
                          >
                            <span>Community</span></tm-link
                          >
                        </li>
                        <li>
                          <tm-link
                            href="https://v1.cosmos.network/events"
                            class="tm-rf0 tm-lh-title tm-link tm-link-external"
                          >
                            <span>Events</span></tm-link
                          >
                        </li>
                        <li>
                          <tm-link
                            href="https://v1.cosmos.network/contributors"
                            class="tm-rf0 tm-lh-title tm-link tm-link-external"
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
            <nuxt-link to="/learn/get-atom">
              <div class="nav-mobile-bottom tm-wrapper">
                <div class="wrapper">
                  <div class="text">
                    <div class="title tm-rf0 tm-lh-copy tm-title">
                      Get ATOM &#8594;
                    </div>
                    <div class="subtitle tm-rf-1 tm-lh-copy tm-muted">
                      Four simple steps to get ATOM and start earning rewards.
                    </div>
                  </div>
                  <div class="graphics">
                    <graphics-validator :coins="3" class="graphics__item" />
                  </div>
                </div>
              </div>
            </nuxt-link>
          </vsm-mob>
        </template>
      </vsm-menu>
    </nav>

    <!-- Uncomment for secondary nav -->
    <!-- <nav v-if="secondary" class="nav nav-secondary" role="navigation">
      <section-secondary-nav />
    </nav> -->
  </div>
</template>

<script>
import buildDropdownTop from '~/components/content/buildDropdownTop'
import buildDropdownBottom from '~/components/content/buildDropdownBottom'
import exploreDropdownTop from '~/components/content/exploreDropdownTop'
import exploreDropdownBottom from '~/components/content/exploreDropdownBottom'
import learnDropdownBottom from '~/components/content/learnDropdownBottom'
import learnDropdownTop from '~/components/content/learnDropdownTop'
import LogoHubBrandmark from '~/components/logos/LogoHubBrandmark.vue'
import LogoCosmosWordmark from '~/components/logos/LogoCosmosWordmark.vue'

export default {
  components: {
    LogoCosmosWordmark,
    LogoHubBrandmark,
  },
  data() {
    return {
      secondary: false, // temporary to hide secondary nav
      menu: [
        {
          title: 'Learn',
          dropdown: 'learn',
          content: learnDropdownTop,
          secondaryContent: learnDropdownBottom,
          attributes: {
            class: 'tm-rf-1 tm-lh-title tm-medium',
          },
        },
        {
          title: 'Build',
          dropdown: 'build',
          content: buildDropdownTop,
          secondaryContent: buildDropdownBottom,
          attributes: {
            class: 'tm-rf-1 tm-lh-title tm-medium',
          },
        },
        {
          title: 'Explore',
          dropdown: 'explore',
          content: exploreDropdownTop,
          secondaryContent: exploreDropdownBottom,
          attributes: {
            class: 'tm-rf-1 tm-lh-title tm-medium',
          },
        },
      ],
    }
  },
}
</script>

<style src="~/assets/styles/nav.styl" lang="stylus" />

<style lang="stylus" scoped>
$navbar-height = 5rem
$navbar-mobile-menu = 200

.dropdown-container:focus
  outline 0

.dropdown-wrap
  display grid
  grid-template-columns 1fr 1fr
  column-gap var(--spacing-6)
  .overline + .title,
  .subtitle
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
    &:focus
      outline 0
      opacity 0.8
    svg
      width auto
    &__cosmos
      height 1.125rem
    &-secondary
      margin-right auto
  .vsm-logo-section
    z-index 1
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

  &-mobile-content
    padding-top $navbar-height
    padding-bottom var(--spacing-7)
    overflow-y auto
    flex-grow 1
    -webkit-box-flex 1
    .tm-link
      padding var(--spacing-4) 0
    ul
      margin-left calc(-1 * var(--spacing-7))
      margin-right calc(-1 * var(--spacing-7))
      ul
        margin-left 0
        margin-right 0
        .tm-link-external:after
          bottom auto
  &-mobile-bottom
    padding var(--wrap-gap)
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

.wrapper .text .overline + .title,
.wrapper .text .subtitle
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
      background var(--bg)
      .light-mode &
        background var(--fg)
    &-first
      flex 1 1
    .tm-link
      &.nuxt-link-exact-active:after
        transform rotate(90deg)
        left -15px
        bottom 50%
        transform-origin bottom

@media $breakpoint-large
  .nav
    ul
      margin-right calc(-1 * var(--spacing-5))
      margin-left calc(-1 * var(--spacing-5))
      display flex
      justify-content center
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
