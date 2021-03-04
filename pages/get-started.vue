<template>
  <main>
    <div class="section-hero tm-section">
      <div class="tm-wrapper">
        <div class="tm-container tm-section tm-grid-base">
          <logo-cosmos-brandmark class="graphics-brandmark" />
          <graphics-get-started-hero-validator class="graphics-validator" />
          <div class="text tm-measure-wide">
            <div class="header tm-rf0 tm-medium tm-lh-title tm-overline">
              get started
            </div>
            <div class="title tm-rf6 tm-bold tm-lh-title">
              Stake ATOMs in four steps
            </div>
          </div>
          <graphics-get-started-hero-coins class="graphics-coins" />
        </div>
      </div>
      <graphics-get-started-hero-stars class="graphics-stars-hero" />
    </div>

    <div class="tm-wrapper">
      <div class="tm-section tm-container tm-grid-base">
        <div class="section-intro">
          <div class="title tm-rf3 tm-bold tm-lh-title">Before you begin</div>
        </div>
        <div class="cards-wrapper">
          <NuxtLink to="/learn/faq/what-is-the-atom-tokens" class="card-item">
            <div class="heading tm-rf-1 tm-medium tm-lh-title tm-overline">
              learn
            </div>
            <div class="title tm-rf1 tm-bold tm-lh-title">
              What is the ATOM token?
            </div>
          </NuxtLink>
          <NuxtLink to="/learn/faq/what-is-staking" class="card-item">
            <div class="heading tm-rf-1 tm-medium tm-lh-title tm-overline">
              learn
            </div>
            <div class="title tm-rf1 tm-bold tm-lh-title">What is staking?</div>
          </NuxtLink>
          <NuxtLink to="/learn/faq/what-is-a-wallet" class="card-item">
            <div class="heading tm-rf-1 tm-medium tm-lh-title tm-overline">
              learn
            </div>
            <div class="title tm-rf1 tm-bold tm-lh-title">
              What is a wallet?
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="tm-wrapper tm-section">
      <div class="tm-container">
        <div class="section-step-1 tm-grid-base">
          <div class="step tm-rf1 tm-medium tm-lh-title tm-overline">
            step 01
          </div>
          <div class="top">
            <div class="title tm-rf5 tm-bold tm-lh-title">
              Get ATOMs via one of the many cryptocurrency exchanges
            </div>
          </div>
          <div class="graphics">
            <!-- TODO: remove excess whitespace of this svg -->
            <!-- <graphics-get-started-step-1 class="graphics__item" /> -->
          </div>
          <div class="bottom">
            <p class="subtitle tm-rf1 tm-lh-copy tm-measure">
              Some exchanges offer staking services directly, but this requires
              you to delegate ownership of your tokens to them.
            </p>
            <p class="subtitle tm-rf1 tm-lh-copy tm-measure">
              This guide involves using your own wallet, enabling you to
              maintain full ownership of your tokens.
            </p>
            <tm-button
              to-link="external"
              href="https://messari.io/asset/cosmos/exchanges"
              size="l"
              variant="text"
              class="btn"
              >Browse exchanges <span class="icon__right">↗️</span></tm-button
            >
            <div class="footnote tm-rf-1 tm-lh-copy tm-measure">
              messari.io is an unvalidated third-party listing exchanges. We are
              not liable for X,Y,Z.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="tm-container transition">
      <svg
        width="164"
        height="241"
        viewBox="0 0 164 241"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M57.6217 239.843C94.1553 226.029 123.171 206.528 141.312 183.593C159.454 160.658 165.981 135.227 160.138 110.241C154.295 85.2541 136.322 61.7326 108.296 42.3963C80.2706 23.0599 43.3373 8.69857 1.76725 0.972885"
          stroke="url(#paint0_linear-200014)"
          stroke-width="1.77663"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear-200014"
            x1="67.499"
            y1="-62.0005"
            x2="16.9728"
            y2="235.195"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.254598" stop-color="white" stop-opacity="0" />
            <stop offset="0.901042" stop-color="white" />
          </linearGradient>
        </defs>
      </svg>
    </div>

    <div class="tm-wrapper">
      <div class="tm-container tm-grid-base section-step-2">
        <div class="left">
          <div class="step step-2 tm-rf1 tm-medium tm-lh-title tm-overline">
            step 02
          </div>
          <div class="graphics">
            <graphics-get-started-step-2 class="graphics__item" />
          </div>
          <div class="title tm-rf5 tm-bold tm-lh-title tm-measure">
            Transfer your ATOMs to a wallet
          </div>
          <div class="subtitle tm-rf1 tm-lh-copy">
            Choose a wallet that supports the ATOM token, create an account, and
            transfer your ATOMs from the exchange.
          </div>
          <tm-button
            to-link="external"
            href="https://cosmos.network/ecosystem/wallets"
            size="l"
            variant="text"
            class="btn"
            >Choose a wallet <span class="icon__right">-></span></tm-button
          >
        </div>
        <div class="right">
          <div class="step step-3 tm-rf1 tm-medium tm-lh-title tm-overline">
            step 03
          </div>
          <div class="section-step-3">
            <div class="graphics">
              <graphics-get-started-step-3 class="graphics__item" />
            </div>
            <div class="title tm-rf5 tm-bold tm-lh-title tm-measure">
              Select your validators
            </div>
            <div class="subtitle tm-rf1 tm-lh-copy">
              In your wallet, choose the validators to delegate your ATOMs to.
            </div>
            <tm-button
              to-link="internal"
              to="/learn/faq/how-should-atom-holders-choose-the-validators-to-stake-with"
              size="l"
              variant="text"
              class="btn"
              >Choosing a validator
              <span class="icon__right">-></span></tm-button
            >
          </div>
        </div>
      </div>
    </div>

    <div class="tm-container transition">
      <svg
        width="368"
        height="368"
        viewBox="0 0 368 368"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M366 2C318.199 2 270.866 11.4151 226.703 29.7079C182.541 48.0006 142.414 74.8126 108.613 108.613C74.8126 142.414 48.0005 182.541 29.7078 226.703C11.4151 270.866 1.99999 318.199 2 366"
          stroke="url(#paint0_linear-032779)"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear-032779"
            x1="598"
            y1="-15"
            x2="1.99998"
            y2="366"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.00763763" stop-color="white" stop-opacity="0" />
            <stop offset="0.57166" stop-color="white" stop-opacity="0.03" />
            <stop offset="1" stop-color="white" />
          </linearGradient>
        </defs>
      </svg>
    </div>

    <div class="tm-wrapper">
      <div class="tm-container tm-grid-base">
        <div class="section-step-4">
          <div class="step step-4 tm-rf1 tm-medium tm-lh-title tm-overline">
            step 04
          </div>
          <div class="graphics">
            <graphics-get-started-lock-atoms class="graphics__item" />
          </div>
          <div class="text">
            <div class="title tm-rf5 tm-bold tm-lh-title">
              Lock up and stake your ATOMs
            </div>
            <div class="subtitle tm-rf1 tm-lh-copy">
              Using your wallet, send a simple transaction (often called “Stake”
              or “Delegate”) to start staking. This locks up your ATOMs (i.e.
              you can't transfer them) and enables the chosen validators to
              operate the network.
            </div>
            <div class="warning-wrapper">
              <div class="icon">
                <icon-warning />
              </div>
              <div class="text">
                Staked ATOMs can be unlocked via your wallet by sending a
                transaction (often called “Unstake” or “Undelegate”) and waiting
                21 days.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="tm-wrapper tm-section">
      <div class="tm-section tm-container tm-grid-base">
        <div class="section-community">
          <div class="text">
            <div class="title tm-rf5 tm-bold tm-lh-title tm-measure">
              Welcome to the community, fellow Cosmonaut
            </div>
            <div class="subtitle tm-rf1 tm-lh-copy tm-measure-wide">
              Now that you’ve staked your ATOMs like a pro, join a fast-growing
              community of developers and innovators connected all over the
              world, building the new era of the internet.
            </div>
            <div class="grid-wrapper">
              <a
                v-for="item in links"
                :key="item.logo"
                :href="item.url"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div class="grid-item">
                  <div class="icon">
                    <component :is="`icon-${item.logo}`" />
                  </div>
                  <div class="details">
                    <div class="title tm-rf1 tm-bold tm-lh-title">
                      {{ item.title }}
                    </div>
                    <div class="desc tm-rf0 tm-lh-copy">
                      {{ item.desc }}
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="footer">
              <tm-button
                to-link="external"
                href="https://cosmos.network/community"
                size="l"
                variant="text"
                class="btn"
                >Cosmos Community <span class="icon__right">-></span></tm-button
              >
            </div>
          </div>
        </div>
        <!-- TODO -->
        <graphics-home-hero class="section-graphics" />
        <!-- <graphics-get-started-community-background class="section-graphics" /> -->
      </div>
    </div>
  </main>
</template>

<script>
import LogoCosmosBrandmark from '../components/logos/LogoCosmosBrandmark.vue'
import IconTwitter from '~/components/icons/IconTwitter.vue'
import IconDiscord from '~/components/icons/IconDiscord.vue'
import IconTelegram from '~/components/icons/IconTelegram.vue'
import IconCosmos from '~/components/icons/IconCosmos.vue'
import IconWarning from '~/components/icons/IconWarning.vue'

export default {
  components: {
    IconTwitter,
    IconDiscord,
    IconTelegram,
    IconCosmos,
    IconWarning,
    LogoCosmosBrandmark,
  },
  data() {
    return {
      links: [
        {
          url: 'https://t.me/cosmosproject',
          logo: 'telegram',
          title: 'Community Chat',
          desc:
            'Ask general questions and chat with the worldwide community on Telegram.',
        },
        {
          url: 'https://twitter.com/cosmos',
          logo: 'twitter',
          title: 'Twitter',
          desc:
            'Follow @cosmos to get the latest news and updates from across the ecosystem.',
        },
        {
          url: 'https://discord.gg/vcExX9T',
          logo: 'discord',
          title: 'Developer Chat',
          desc:
            'Have technical questions about Cosmos tools? Ask a developer on the Community Discord.',
        },
        {
          url: 'https://forum.cosmos.network',
          logo: 'cosmos',
          title: 'Cosmos Forum',
          desc:
            'Thinking about becoming a validator or interested in network matters? Join the discussion.',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Get Started',
    }
  },
}
</script>

<style lang="stylus" scoped>
.transition
  display grid
  place-items center

// Hero
.section-hero
  text-align left

.section-hero .text
  grid-column 1/-1
  z-index 1

.section-hero .title
  margin-top var(--spacing-6)

.graphics-brandmark
  display none

.graphics-validator
  grid-row 2
  width auto
  display none

.graphics-coins
  grid-row 2

.graphics-stars-hero
  position absolute
  right 0
  top 0
  z-index 0
  width 65%

// Intro
.section-intro
  grid-column span 12

.cards-wrapper
  grid-row 2
  display grid
  grid-template-columns repeat(1, 1fr)
  gap var(--spacing-7)
  grid-column span 12
  margin-top var(--spacing-8)

.card-item
  padding var(--spacing-7)
  border-radius $border-radius-5
  hover-raise(-3px)
  box-shadow var(--elevation-4)
  background-color #171717

  .light-mode &
    background-color var(--white)

.card-item .title
  margin-top var(--spacing-3)

// Step 1
.section-step-1
  position relative
  align-items flex-end

.step
  grid-column span 12
  margin-bottom var(--spacing-5)

.section-step-1
  .top,
  .graphics,
  .bottom
    grid-column span 12

.section-step-1 .graphics__item
  width 100%
  height auto

.section-step-1 .bottom
  margin-top var(--spacing-7)

.section-step-1 .footnote
  color var(--gray-600)

// Step 2
.section-step-2 .title
  position relative
  z-index 1

.section-step-2 .subtitle
  margin-top var(--spacing-7)

.section-step-2 .btn
  margin-top var(--spacing-6)

// .section-step-2 .graphics
//   position relative
//   display grid
//   place-items center
//   z-index 0

//   &__item
//     position absolute
.left .graphics__item
  width 100%
  height auto

// Step 3
.left,
.right
  grid-column span 12
  position relative

.right
  margin-top var(--spacing-12)

.section-step-3 .graphics__item
  width 100%
  height 100%

// Step 4
.section-step-4
  grid-column span 12

.section-step-4 .graphics
  display grid
  place-items center

  &__item
    width 100%

.section-step-4 .text .warning-wrapper
  margin-top var(--spacing-8)
  display grid
  grid-auto-flow column
  grid-template-columns min-content 1fr
  gap var(--spacing-5)
  align-items center
  border-radius $border-radius-5
  box-shadow var(--elevation-4)
  padding var(--spacing-6)
  background-color #171717

  .light-mode &
    background-color var(--white)

.warning-wrapper .icon
  grid-column-start 1
  width var(--spacing-9)
  height var(--spacing-9)
  display flex
  align-items center
  justify-content center

.warning-wrapper .text
  grid-column-start 2
  color var(--white-800)

  .light-mode &
    color rgba(0, 0, 0, 0.5)

// Community
.section-community,
.section-graphics
  grid-column span 12

.section-community .subtitle
  margin-top var(--spacing-6)

.section-community .btn
  margin-top var(--spacing-9)

.grid-wrapper
  display grid
  grid-template-columns repeat(1, 1fr)
  gap var(--spacing-7)
  grid-column span 12
  margin-top var(--spacing-9)

.grid-item
  display grid
  grid-auto-flow column
  grid-template-columns min-content 1fr
  gap var(--spacing-7)
  border-radius $border-radius-5
  hover-raise(-3px)

.details .desc
  margin-top var(--spacing-3)

.footer
  grid-column span 12
  width fit-content

@media $breakpoint-medium
  // Hero
  .graphics-brandmark
    grid-row 1
    grid-column 2/4
    position absolute
    right 0
    display inherit

  .graphics-validator
    grid-row 1
    grid-column 2/4
    margin-top 2.4375rem
    transform translate(30px, 60px)
    display inherit

  .section-hero .text
    grid-column 4/span 10
    grid-row 1

  .graphics-coins
    grid-column 9/11
    grid-row 1

  // Intro
  .cards-wrapper
    grid-template-columns repeat(2, 1fr)

  .section-intro
    grid-column 4/span 12

  // Step 1
  .section-step-1 .top
    grid-column 5/span 12

  .section-step-1 .graphics
    grid-column 1/span 6

  .section-step-1 .bottom
    grid-column 7/span 12

  // Step 2
  .step
    transform rotate(-90deg)
    position absolute
    top 10%
    left -3%
    margin-bottom 0

  .step-2
    grid-column 1/span 2
    left -31%

    &:before
      content ""
      position absolute
      left -56px
      bottom 15px
      width 40px
      height 1px
      background var(--white)

      .light-mode &
        background var(--black)

  .step-3
    grid-column 7/span 8
    left -21%

    &:after
      content ""
      position absolute
      right -56px
      bottom 15px
      width 40px
      height 1px
      background var(--white)

      .light-mode &
        background var(--black)

  .left .graphics
    position relative
    display grid
    place-items center
    z-index 0

    &__item
      position absolute

  // Step 3
  .left
    grid-row 1
    grid-column 2/span 5
    position relative

  .right
    grid-row 2
    grid-column 9/span 12
    position relative
    margin-top -15rem

  .section-step-3 .graphics
    position relative
    display grid
    place-items center
    margin-bottom 20%
    right 30%

    &__item
      position absolute
      width 130%
      height auto
      left 0

  // Step 4
  .section-step-4
    position relative
    display grid
    grid-template-columns 50% 50%
    grid-template-rows 1fr
    align-items center

    // .text
    //   grid-column 1/span 6

    // .graphics
    //   grid-column 7/span 12

  .section-step-4 .text .subtitle
    margin-top var(--spacing-7)

  .step-4
    &:before
      content ""
      position absolute
      left -56px
      bottom 15px
      width 40px
      height 1px
      background var(--white)

      .light-mode &
        background var(--black)

  // Community
  .section-community
    grid-column 1/span 10

  .grid-wrapper
    grid-template-columns repeat(2, 1fr)
    grid-column 1/span 8

  .section-graphics
    grid-column 11/span 12
    display flex
    align-items center
    justify-content center
    position absolute
    top 0
    left 0
    right 0
    bottom 0

@media $breakpoint-large
  // Intro
  .cards-wrapper
    grid-template-columns repeat(3, 1fr)
    grid-column span 15
</style>
