<template>
  <div>
    <!-- Section ATOM - to move to component -->
    <div class="section-atom tm-section tm-container tm-wrapper">
      <div class="bg-sunrise-container">
        <graphics-bg-sunrise class="bg-sunrise" />
      </div>
      <div class="graphics">
        <div class="coins-top">
          <span class="coin"><graphics-coin-atom /></span>
          <span class="coin"><graphics-coin-atom /></span>
          <span class="coin"><graphics-coin-atom /></span>
          <span class="coin"><graphics-coin-atom /></span>
          <span class="coin"><graphics-coin-atom /></span>
        </div>
      </div>
      <div class="content">
        <span class="tm-crosshair"></span>
        <h2 class="title tm-rf5 tm-bold tm-lh-title tm-title">
          Secured by the ATOM.
        </h2>
        <p class="subtitle tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure-narrower">
          In return for securing the Hub services, transaction feed and staking
          rewards are distributed for ATOM stakers.
        </p>
        <div class="btn-group">
          <tm-button
            to-link="internal"
            to="/learn/get-atom"
            size="l"
            color="var(--black)"
            light-color="var(--white)"
            class="btn"
            >Start staking</tm-button
          >
          <tm-button
            to-link="internal"
            to="/learn/staking"
            size="l"
            variant="text"
            class="btn"
            >What is staking <span class="icon__right">--></span></tm-button
          >
        </div>
        <span class="accent"></span>
      </div>
      <div class="graphics">
        <div class="coins-bottom">
          <span class="coin"><graphics-coin-atom /></span>
          <span class="coin"><graphics-coin-atom /></span>
        </div>
      </div>
    </div>

    <!-- Section features - to move to component -->
    <div
      class="section-features tm-section tm-container tm-wrapper tm-grid-base"
    >
      <h2 class="title tm-rf5 tm-bold tm-lh-title tm-title">
        Be part of the open economy of the future.
      </h2>
      <div class="card card-accounts">
        <h3
          class="card__title tm-rf-1 tm-lh-title tm-overline tm-medium tm-muted"
        >
          Interchain Accounts
        </h3>
        <figure class="graphics">
          <graphics-navigator-gem class="gem" />
          <svg
            class="trail"
            width="144"
            height="43"
            viewBox="0 0 144 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.16992 41.2962C18.9059 31.6337 36.1437 23.3068 52.7061 16.8816C69.2724 10.4549 84.7498 6.09099 98.0856 4.07025C111.448 2.04554 122.227 2.4392 129.78 5.08592C137.254 7.70525 141.308 12.4196 142.035 18.8771M2.16992 1.55859C18.9059 11.2211 36.1437 19.548 52.7061 25.9732C69.2724 32.3999 84.7498 36.7638 98.0856 38.7845C111.448 40.8092 122.227 40.4156 129.78 37.7689C137.254 35.1495 141.308 30.4352 142.035 23.9777"
              stroke="url(#paint0_linear-392827)"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear-392827"
                x1="142"
                y1="21.5273"
                x2="2"
                y2="21.5273"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0" />
                <stop offset="0.901042" stop-color="white" />
              </linearGradient>
            </defs>
          </svg>
        </figure>
        <p
          class="card__tagline tm-rf3 tm-rf4-m-up tm-lh-title tm-bold tm-title"
        >
          One secure account for all your digital assets.
        </p>
        <p class="card__footnote tm-rf-1 tm-rf0-m-up tm-lh-title tm-muted">
          Coming soon
        </p>
      </div>
      <div class="card card-dex">
        <h3
          class="card__title tm-rf-1 tm-lh-title tm-overline tm-medium tm-muted"
        >
          Decentralized Exchange
        </h3>
        <figure class="graphics">
          <graphics-coin-stack class="coin-stack" />
        </figure>
        <p class="card__tagline tm-rf3 tm-lh-title tm-bold tm-title">
          Swap tokens &amp; collectibles.
        </p>
        <p class="card__footnote tm-rf-1 tm-rf0-m-up tm-lh-title tm-muted">
          Coming soon
        </p>
      </div>
      <div class="cards-features-bottom">
        <div class="card card-pools">
          <h3
            class="card__title tm-rf-1 tm-lh-title tm-overline tm-medium tm-muted"
          >
            Liquidity Pools
          </h3>
          <p class="card__tagline tm-rf3 tm-lh-title tm-bold tm-title">
            Provide liquidity.<br />Earn rewards.
          </p>
          <p class="card__footnote tm-rf-1 tm-rf0-m-up tm-lh-title tm-muted">
            Coming soon
          </p>
        </div>
        <div class="card card-bridges">
          <h3
            class="card__title tm-rf-1 tm-lh-title tm-overline tm-medium tm-muted"
          >
            Wrapped ETH / BTC
          </h3>
          <p class="card__tagline tm-rf3 tm-lh-title tm-bold tm-title">
            + Ethereum.<br />+ Bitcoin.
          </p>
          <p class="card__footnote tm-rf-1 tm-rf0-m-up tm-lh-title tm-muted">
            Coming soon
          </p>
        </div>
      </div>
      <p class="cta">
        <tm-button to-link="internal" to="/features" size="l" variant="text"
          >More features<span class="icon__right">-></span></tm-button
        >
      </p>
    </div>

    <!-- Section tech - to move to component -->
    <div class="section-tech tm-section tm-container tm-wrapper tm-grid-base">
      <div class="graphics">
        <graphics-hub-tech-stack />
        <span class="tm-crosshair"></span>
      </div>
      <div class="title">
        <h2 class="overline tm-rf0 tm-lh-title tm-medium tm-overline tm-muted">
          Technology
        </h2>
        <div class="tm-rf5 tm-bold tm-lh-title tm-title">
          The most trusted way to build value.
        </div>
      </div>
      <div class="subtitle">
        <p
          class="tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure-narrow tm-measure-narrower-l-up"
        >
          <a href="cosmos.network/sdk" class="tm-link tm-medium">Cosmos SDK</a>
          is a state-of-the-art blockchain framework that powers the Cosmos Hub
          and its rapidly expanding orbit of sovereign chains.
        </p>
        <p
          class="tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure-narrow tm-measure-narrower-l-up"
        >
          Developers can use the SDK to build innovative applications that
          create value through exchange with the Cosmos Hub.
        </p>
      </div>
      <div class="stat stat-tech">
        <h3
          class="stat-title tm-rf0 tm-lh-title tm-medium tm-overline tm-muted"
        >
          Secure tech
        </h3>
        <div class="stat-value tm-rf7 tm-lh-title tm-bold tm-title">
          $50B<span class="tm-rf4 tm-lh-title tm-bold super">+</span>
        </div>
        <p class="stat-subtitle tm-rf0 tm-lh-title">
          Digital assets under management.
        </p>
      </div>
      <div class="stat stat-pos">
        <h3
          class="stat-title tm-rf0 tm-lh-title tm-medium tm-overline tm-muted"
        >
          Proof-of-Stake
        </h3>
        <div class="stat-value tm-rf7 tm-lh-title tm-bold tm-title">
          <icon-plant-leaf class="icon" />99%<span
            class="tm-rf-1 tm-rf1-m-up tm-rf2-l-up tm-lh-title tm-bold super"
            >lower carbon footprint</span
          >
        </div>
        <p class="stat-subtitle tm-rf0 tm-lh-title">
          Blockchain tech that truly scales.
        </p>
      </div>
      <div class="stat stat-fees">
        <h3
          class="stat-title tm-rf0 tm-lh-title tm-medium tm-overline tm-muted"
        >
          Low fees
        </h3>
        <div class="stat-value tm-rf7 tm-lh-title tm-bold tm-title">$0.01</div>
        <p class="stat-subtitle tm-rf0 tm-lh-title">
          Enjoy the lowest fees – almost zero.
        </p>
      </div>
      <div class="stat stat-tx">
        <h3
          class="stat-title tm-rf0 tm-lh-title tm-medium tm-overline tm-muted"
        >
          Fast transactions
        </h3>
        <div class="stat-value tm-rf7 tm-lh-title tm-bold tm-title">7 sec</div>
        <p class="stat-subtitle tm-rf0 tm-lh-title">
          Transactions confirmed in seconds.
        </p>
      </div>
    </div>

    <!-- Section developer - to move to component -->
    <div
      class="section-developer tm-section tm-container tm-wrapper tm-grid-base"
    >
      <div class="tm-grid-base">
        <div class="caption tm-rf0 tm-medium tm-lh-title tm-overline">
          Developers
        </div>
        <div class="title tm-rf5 tm-bold tm-lh-title tm-measure">
          Build upon value.
        </div>
        <div class="subtitle tm-rf1 tm-lh-copy tm-measure">
          Developers in Cosmos are the pioneers of the new era of blockchain
          technology. Join a fast-growing token economy and build upon a secure
          and stable foundation.
        </div>
      </div>
    </div>

    <!-- Section community - to move to component -->
    <div class="section-community tm-section tm-container tm-grid-base">
      <div class="tm-wrapper">
        <div class="text">
          <div class="title tm-rf5 tm-bold tm-lh-title">
            Join the worldwide community.
          </div>
          <div class="subtitle tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure">
            Join a fast-growing community of developers and innovators connected
            all over the world, building the new era of the internet.
          </div>
          <tm-button
            to-link="external"
            href="https://cosmos.network/community"
            size="l"
            variant="text"
            class="btn"
            >Cosmos Community <span class="icon__right">-></span></tm-button
          >
        </div>
        <div class="list">
          <div class="list-wrapper">
            <a
              v-for="item in links"
              :key="item.logo"
              :href="item.url"
              target="_blank"
              rel="noreferrer noopener"
              class="list-item"
            >
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
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconPlantLeaf from '~/components/icons/IconPlantLeaf.vue'
import IconTwitter from '~/components/icons/IconTwitter.vue'
import IconDiscord from '~/components/icons/IconDiscord.vue'
import IconTelegram from '~/components/icons/IconTelegram.vue'
import IconCosmos from '~/components/icons/IconCosmos.vue'

export default {
  components: {
    IconPlantLeaf,
    IconTwitter,
    IconDiscord,
    IconTelegram,
    IconCosmos,
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
.subtitle
  margin-top var(--spacing-6)

.btn-group
  display flex
  flex-direction column
  margin-top var(--spacing-8)
  gap 0 var(--grid-gap-x)

.bg-sunrise-container
  position absolute
  display flex
  justify-content center
  width 100%
  min-width 64rem

.bg-sunrise
  width 120%

// Animations
@keyframes float
  0%
    transform translateY(0%) rotate(0)
  100%
    transform translateY(-20%) rotate(-5deg)

// ATOM
.section-atom
  display flex
  flex-direction column
  align-items center
  text-align center
  padding-bottom var(--spacing-13)

  .bg-sunrise-container
    bottom 0

  .bg-sunrise
    bottom 0

  .content
    position relative
    max-width 40rem
    center()
    z-index 1

  .graphics
    position relative
    width 100%
    min-width 32rem
    max-width 64rem
    margin-left auto
    margin-right 35%

  .coin
    position absolute
    height auto
    z-index 1
    svg
      width 100%
      height auto
      // animation float 3s ease-in-out alternate infinite

  .coins-top
    $w = (367 / (64 * 16) * 100%) // graphics mw / container mw
    position absolute
    left -7%
    width $w
    padding-bottom $w * 1.05%
    margin-top -23%

    .coin
      position absolute

    .coin:nth-child(1)
      bottom 75%
      right 67%
      width 38%
      transform rotate(50deg)
      filter blur(4px)
    .coin:nth-child(2)
      bottom 57%
      right 60%
      width 42%
      transform rotate(-62deg)
      filter blur(3px)
      svg
        animation-delay 0.5s
    .coin:nth-child(3)
      bottom 41%
      right 52%
      width 42%
      transform rotate(46deg)
      filter blur(1.5px)
      svg
        animation-delay 1s
    .coin:nth-child(4)
      bottom 20%
      right 24%
      width 74%
      transform rotate(-17deg)
      filter blur(0.5px)
      svg
        animation-delay 1.5s
    .coin:nth-child(5)
      bottom 1%
      right -7%
      width 82%
      transform rotate(29deg)
      svg
        animation-delay 2s

  .coins-bottom
    $w = (330 / (64 * 16) * 100%) // graphics mw / container mw
    position relative
    width $w
    padding-bottom $w
    center()

    .coin:nth-child(1)
      width 108%
      transform rotate(-37deg)
      left 4%
      top 29%

    .coin:nth-child(2)
      width 108%
      transform rotate(27deg)
      left -10%
      top 0

  .tm-crosshair
    margin-left auto
    margin-right -3rem

  .title
    max-width 6em
    center()

  .subtitle
    center()

  .accent
    angle-accent(sw)
    margin-top var(--spacing-8)

// Features
.section-features
  z-index 1 // Above tech stack graphics
  padding-top 0

  > *
    grid-column 1/-1

  .title
    max-width 11em
    margin-bottom var(--spacing-10)

  .card
    background var(--gray-100)
    border-radius $border-radius-6
    padding var(--spacing-7)
    display flex
    flex-direction column
    justify-content space-between
    margin-bottom var(--grid-gap-x)

  .light-mode & .card
    background var(--white)

  .graphics,
  .card__tagline,
  .card__footnote
    margin-top var(--spacing-9)

  .card__tagline
    position relative
    max-width 11em

  .graphics
    position relative
    width 100%
    max-width 22rem

  .cta
    margin-top var(--spacing-7)

// Features > Interchain Accounts
.card-accounts
  .gem
    position relative
    margin -43% 0 -65% -80%
    width 150%
    height auto

  .trail
    position absolute
    width 41%
    height auto
    top 51%
    left 38%

// Features > DEX
.card-dex
  .graphics
    margin-left auto

  .coin-stack
    margin-top -7%

// Features > Pools & Bridges
.cards-features-bottom
  display grid
  grid-template-columns repeat(auto-fit, minmax(16rem,1fr))
  gap 0 var(--grid-gap-x)

// Tech
.section-tech
  > *
    grid-column 1/-1

  .graphics
    position relative
    min-width 23rem

  .hub-tech-stack
    right var(--spacing-11)

  .tm-crosshair
    margin-bottom var(--spacing-6)

  .title .tm-title
    max-width 9em
    margin-top var(--spacing-6)

  .overline
    position relative

  .subtitle
    position relative
    margin-top var(--spacing-8)

    &:before
      content ""
      angle-accent(nw)
      margin-left calc(-1 * var(--grid-gap-x))
      margin-bottom var(--spacing-5)


.stat
  position relative
  margin-top var(--spacing-10)

  .super
    margin-left var(--spacing-2)

.stat-value
  display flex
  align-items flex-start
  margin var(--spacing-3) 0

.stat-pos
  .icon
    align-self start
    margin-top var(--spacing-4)
    margin-right var(--spacing-1)

  .stat-value
    align-items center

  .super
    max-width 4.5em
    margin-left var(--spacing-6)


// Community
.section-community
  .text,
  .list
    grid-column 1/-1

  .list
    margin-top var(--spacing-7)

  .list-item
    display grid
    grid-auto-flow column
    grid-template-columns min-content 1fr
    gap var(--spacing-7)
    border-radius $border-radius-5
    hover-raise(-3px)

  a.list-item + a.list-item
    margin-top var(--spacing-7)

  .details .desc
    margin-top var(--spacing-3)

@media $breakpoint-small
  .btn-group
    display block

  // Features > DEX
  .card-dex .graphics
    height 0
    margin-top 0

  // Tech
  .section-tech
    > *
      grid-column auto

    .graphics
      grid-column 1/-1

    .title,
    .subtitle
      grid-column 2 / -1

  // Tech > Stats
  .stat
    grid-column span 2

@media $breakpoint-medium

  // ATOM
  .section-atom
    .coins-bottom
      margin-right 0
      right -20%
      margin-top -30%

  // Features
  .section-features
    .title,
    .cta
      grid-column 2 / -1

  // Tech > Stats
  .stat
    grid-column span 4

  .stat-value
    margin var(--spacing-4) 0

  // Community
  .section-community
    .text
      grid-column 1/span 4

    .list
      grid-column 7/span 4
      margin-top 0

@media $breakpoint-large

  // Features > Cards
  .card-accounts,
  .card-dex,
  .cards-features-bottom
    grid-column span 4

  // Features > Interchain Accounts
  .card-accounts
    grid-row 2 / 5

  .section-features .card__tagline
    max-width 8em

  // Tech
  .section-tech
    .tm-crosshair
      margin-top -6rem

    .title,
    .subtitle
      grid-column span 4

    .subtitle
      margin-top auto

  // Community
  .section-community
    .text
      grid-column 1/span 5

@media $breakpoint-xl

  // Features > Interchain Accounts
  .card-accounts
    grid-column 1 / span 5
    grid-row 2 / 4

  // Featur es > DEX
  // Features > Pools & Bridges
  .card-dex
  .cards-features-bottom
    grid-column span 7

  // Tech
  .section-tech
    .title
      grid-column 2 / span 6
    .subtitle
      grid-column span 5

  // Tech > Stats
  .stat-tech,
  .stat-fees
    grid-column 2 / span 5

  .stat-pos,
  .stat-tx
    grid-column 8 / span 5
</style>
