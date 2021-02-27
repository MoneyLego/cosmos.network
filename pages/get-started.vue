<template>
  <main>
    <div class="section-hero tm-section">
      <div class="tm-wrapper">
        <div class="tm-container tm-section tm-grid-base">
          <div class="text tm-measure-wide">
            <div class="header tm-rf0 tm-medium tm-lh-title tm-overline">
              get started
            </div>
            <div class="title tm-rf6 tm-bold tm-lh-title">
              Stake ATOMs in four steps
            </div>
          </div>
        </div>
      </div>
      <!-- GRAPHICS -->
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
          <NuxtLink to="/learn/faq/how-to-get-atoms" class="card-item">
            <div class="heading tm-rf-1 tm-medium tm-lh-title tm-overline">
              learn
            </div>
            <div class="title tm-rf1 tm-bold tm-lh-title">
              How to get ATOMs?
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="tm-wrapper">
      <div class="tm-section tm-container">
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
            <graphics-get-started-step-1 class="graphics__item" />
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
              dark-color="var(--white)"
              light-color="var(--black)"
              background-color="transparent"
              variant="text"
              class="btn"
              >Browse exchanges <span class="icon__right">↗️</span></tm-button
            >
            <div class="footnote tm-rf-1 tm-lh-copy">
              messari.io is an unvalidated third-party listing exchanges. We are
              not liable for X,Y,Z.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="tm-wrapper">
      <div class="tm-container tm-grid-base section-step-2">
        <div class="left">
          <div class="step step-2 tm-rf1 tm-medium tm-lh-title tm-overline">
            step 02
          </div>
          <!-- GRAPHICS -->
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
            dark-color="var(--white)"
            light-color="var(--black)"
            background-color="transparent"
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
            <div class="row">
              <tm-button
                to-link="internal"
                to="/staking"
                size="l"
                dark-color="var(--white)"
                light-color="var(--black)"
                background-color="transparent"
                variant="text"
                class="btn"
                >What is a validator
                <span class="icon__right">-></span></tm-button
              >
              <tm-button
                to-link="internal"
                to="/staking"
                size="l"
                dark-color="var(--white)"
                light-color="var(--black)"
                background-color="transparent"
                variant="text"
                class="btn"
                >Choosing a validator
                <span class="icon__right">-></span></tm-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="tm-wrapper">
      <div class="tm-section tm-container tm-grid-base">
        <div class="section-step-4">
          <div class="step tm-rf1 tm-medium tm-lh-title tm-overline">
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

    <div class="tm-wrapper">
      <div class="tm-section tm-container tm-grid-base">
        <div class="section-community">
          <div class="title tm-rf5 tm-bold tm-lh-title tm-measure">
            Welcome to the community, fellow Cosmonaut
          </div>
          <div class="subtitle tm-rf1 tm-lh-copy tm-measure-wide">
            Now that you’ve staked your ATOMs like a pro, join a fast-growing
            community of developers and innovators connected all over the world,
            building the new era of the internet.
          </div>
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
            dark-color="var(--white)"
            light-color="var(--black)"
            background-color="transparent"
            variant="text"
            class="btn"
            >Cosmos Community <span class="icon__right">-></span></tm-button
          >
        </div>
        <!-- GRAPHICS -->
      </div>
    </div>
  </main>
</template>

<script>
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
}
</script>

<style lang="stylus" scoped>
// Hero
.section-hero
  text-align left

.section-hero .text
  grid-column span 12

.section-hero .title
  margin-top var(--spacing-6)

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

.section-step-1 .bottom
  margin-top var(--spacing-7)

.section-step-1 .footnote
  color var(--gray-600)

// Step 2
.section-step-2 .subtitle
  margin-top var(--spacing-7)

.section-step-2 .btn
  margin-top var(--spacing-6)

// Step 3
.section-step-3 .row
  display flex
  flex-direction column

.left,
.right
  grid-column span 12
  position relative

.right
  margin-top var(--spacing-12)

// .section-step-3
//   right 10%

.section-step-3 .graphics__item
  width 110%
  height 100%

// Step 4
.section-step-4
  grid-column span 12

.section-step-4 .graphics
  display grid
  place-items center

  &__item
    width 100%
    // height 100%

.dark-mode .warning-wrapper
  background-color #171717

.light-mode .warning-wrapper
  background-color var(--white)

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

.warning-wrapper .icon
  grid-column-start 1
  width var(--spacing-9)
  height var(--spacing-9)
  display flex
  align-items center
  justify-content center

.dark-mode .warning-wrapper .text
  color var(--white-800)

.light-mode .warning-wrapper .text
  color rgba(0, 0, 0, 0.5)

.warning-wrapper .text
  grid-column-start 2

// Community
.section-community
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
  margin-top var(--spacing-9)

@media $breakpoint-small
  // Step 3
  .section-step-3 .row
    display block

@media $breakpoint-medium
  // Hero
  .section-hero .text
    grid-column 4/span 10

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

  .step
    transform rotate(-90deg)
    position absolute
    top 10%
    left -3%
    margin-bottom 0

  .step-2
    grid-column 1/span 2
    left -31%
  .step-3
    grid-column 7/span 8
    left -21%

  .dark-mode .step:after
    background var(--white)
  .light-mode .step:after
    background var(--black)

  .step:after
    content ""
    position absolute
    left -56px
    bottom 15px
    width 40px
    height 1px

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

// .section-step-4 .graphics

//   &__item
//     height auto

  .section-step-4 .text .subtitle
    margin-top var(--spacing-7)

  // Community
  .section-community
    grid-column 1/span 10

  .grid-wrapper
    grid-template-columns repeat(2, 1fr)
    grid-column 1/span 8

@media $breakpoint-large
  // Intro
  .cards-wrapper
    grid-template-columns repeat(3, 1fr)
    grid-column span 15
</style>
