<template>
  <main>
    <div class="section-hero">
      <div class="tm-wrapper tm-section tm-grid-base">
        <div class="text">
          <div class="title tm-rf6 tm-bold tm-lh-title">Staking</div>
          <div class="subtitle tm-rf1 tm-lh-copy tm-measure-narrower">
            Help secure the Cosmos Hub and earn rewards
          </div>
        </div>
      </div>
      <graphics-staking-hero-dark
        v-if="$nuxt.$colorMode.value === 'dark'"
        class="graphics"
      />
      <graphics-staking-hero-light v-else class="graphics" />
    </div>

    <div class="tm-container tm-wrapper tm-grid-base">
      <div class="section-intro">
        <div class="title tm-rf5 tm-bold tm-lh-title">What is staking?</div>
        <div class="subtitle tm-rf1 tm-lh-copy tm-measure">
          Staking is the process of locking up a digital asset (ATOMs in the
          case of the Cosmos Hub) in order to provide economic security for a
          public blockchain.
        </div>
      </div>
      <div class="cards-wrapper">
        <div class="card-item">
          <span class="accent"></span>
          <div class="graphics">
            <graphics-staking-1-dark
              v-if="$nuxt.$colorMode.value === 'dark'"
              class="graphics__item"
            />
            <graphics-staking-1-light v-else class="graphics__item" />
          </div>
          <div class="title tm-rf3 tm-bold tm-lh-title">Secure the chain</div>
          <div class="subtitle tm-rf0 tm-lh-copy tm-measure-narrower">
            With ATOM, you have the superpower to contribute to the security and
            governance of the Cosmos Hub.
          </div>
        </div>
        <div class="card-item">
          <span class="accent"></span>
          <div class="graphics">
            <graphics-staking-2-dark
              v-if="$nuxt.$colorMode.value === 'dark'"
              class="graphics__item"
            />
            <graphics-staking-2-light v-else class="graphics__item" />
          </div>
          <div class="title tm-rf3 tm-bold tm-lh-title">Earn rewards</div>
          <div class="subtitle tm-rf0 tm-lh-copy tm-measure-narrower">
            Select one or more validators of the Cosmos Hub and start earning
            crypto assets.
          </div>
        </div>
        <div class="card-item">
          <span class="accent"></span>
          <div class="graphics">
            <graphics-staking-3-dark
              v-if="$nuxt.$colorMode.value === 'dark'"
              class="graphics__item"
            />
            <graphics-staking-3-light v-else class="graphics__item" />
          </div>
          <div class="title tm-rf3 tm-bold tm-lh-title">
            Vote for the future
          </div>
          <div class="subtitle tm-rf0 tm-lh-copy tm-measure-narrower">
            Staking ATOMs grants the right to vote on proposals and make
            decisions on the future of the network.
          </div>
        </div>
      </div>
    </div>

    <div
      class="section-rewards tm-section tm-container tm-wrapper tm-grid-base"
    >
      <div class="span-4">
        <div class="header tm-rf0 tm-medium tm-lh-title tm-overline">
          typical apy
        </div>
        <div class="percentage tm-rf7 tm-bold tm-lh-title">9.7%</div>
        <div class="tm-rf1 tm-lh-title">of staked ATOMs (annually)*</div>
      </div>
      <div class="span-7">
        <span class="accent"></span>
        <div class="title tm-rf5 tm-bold tm-lh-title tm-measure">
          Staking rewards
        </div>
        <div class="subtitle tm-rf1 tm-lh-copy tm-measure-narrow">
          When the staking transaction is complete, rewards will start to be
          generated immediately. At any time, stakers can send a transaction to
          claim their accumulated rewards, using a wallet.
        </div>
      </div>
    </div>
    <div class="tm-container tm-wrapper">
      <div class="pie-container">
        <div class="pie-wrapper">
          <div class="pie-item">
            <div class="heading tm-rf0 tm-medium tm-lh-title tm-overline">
              if you stake
            </div>
            <div class="amount tm-rf4 tm-bold tm-lh-title">1,000</div>
            <div class="unit tm-rf1 tm-lh-title tm-medium">ATOMs</div>
          </div>
          <div class="pie-item">
            <div class="pie">
              <div class="text">
                <div class="title tm-rf0 tm-medium tm-lh-title tm-overline">
                  Your rewards
                </div>
                <div class="num tm-rf6 tm-bold tm-lh-title">873.26</div>
              </div>
            </div>
          </div>
          <div class="pie-item">
            <div class="percentage tm-rf2 tm-bold tm-lh-title">10.63%</div>
            <div class="title tm-rf0 tm-medium tm-lh-title tm-overline">
              commission
            </div>
            <div class="subtitle tm-rf-1 tm-lh-copy">
              (Varies between validators)
            </div>
          </div>
        </div>
      </div>
      <div class="footnote tm-rf-1 tm-lh-copy tm-measure">
        * baseline inflation rate fluctuates based on the total amount of staked
        ATOMs in the network
      </div>
    </div>

    <div
      class="section-rewards-origin tm-section tm-container tm-wrapper tm-grid-base"
    >
      <div class="graphics">
        <graphics-staking-rewards-origin-dark
          v-if="$nuxt.$colorMode.value === 'dark'"
          class="graphics__item"
        />
        <graphics-staking-rewards-origin-light v-else class="graphics__item" />
      </div>
      <div class="text">
        <span class="accent"></span>
        <div class="title tm-rf5 tm-bold tm-lh-title tm-measure">
          Where do rewards come from?
        </div>
        <div class="subtitle tm-rf1 tm-lh-copy tm-measure-narrower">
          Staking rewards are generated and distributed to staked ATOM holders
          in two ways:
        </div>
        <div class="subheading-item">
          <div class="left">
            <span class="crosshair"></span>
          </div>
          <div class="right">
            <div class="title tm-rf2 tm-bold tm-lh-title tm-measure">
              Transaction fees
            </div>
            <div class="subtitle tm-rf0 tm-lh-copy tm-measure-narrower">
              Transaction fees collected on the Cosmos Hub are distributed to
              staked ATOM holders.
            </div>
          </div>
        </div>
        <div class="subheading-item">
          <div class="left">
            <span class="crosshair"></span>
          </div>
          <div class="right">
            <div class="title tm-rf2 tm-bold tm-lh-title tm-measure">
              Newly created ATOMs
            </div>
            <p class="subtitle tm-rf0 tm-lh-copy tm-measure-narrower">
              The total supply of ATOMs is inflated to reward stakers. ATOM
              holders that do not stake do not receive rewards, meaning their
              ATOMs get diluted over time.
            </p>
            <p class="subtitle tm-rf0 tm-lh-copy tm-measure-narrower">
              The yearly inflation rate of ATOMs is available on most explorers.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      class="section-staking-safely tm-section tm-container tm-wrapper tm-grid-base"
    >
      <div class="text">
        <span class="accent"></span>
        <div class="title tm-rf5 tm-bold tm-lh-title">Staking safely</div>
        <div class="subtitle tm-rf1 tm-lh-copy tm-measure-narrow">
          Staking ATOMs is not risk-free. When ATOM holders stake, they need to
          choose one or more validators to delegate to. However, if a validator
          performs badly (according to the protocol), up to 5% of ATOMs
          delegated to them can be forfeited.
        </div>
        <tm-button
          to-link="internal"
          to="/staking"
          size="l"
          variant="text"
          class="btn"
          >More about staking safely
          <span class="icon__right">--></span></tm-button
        >
      </div>
      <div class="graphics">
        <graphics-staking-safely-dark
          v-if="$nuxt.$colorMode.value === 'dark'"
          class="graphics__item"
        />
        <graphics-staking-safely-light v-else class="graphics__item" />
      </div>
    </div>

    <section-banner />
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: 'Staking',
    }
  },
}
</script>

<style lang="stylus" scoped>
// Global
.crosshair
  position relative
  display block
  height 24px
  width 24px
  border-left 0.0625rem solid

  &::before,
  &::after
    content ""
    display block
    position relative

  &:before
    width 24px
    border-top 0.0625rem solid
    top 50%
    left -53%

// Hero
.section-hero .text
  grid-column span 4
  center()
  text-align center

  .subtitle
    margin-top var(--spacing-6)

.section-hero .graphics
  grid-column span 12
  z-index 0
  width 100%
  height 100%
  margin-top -7rem

// Intro
.section-intro
  grid-column span 4

  .subtitle
    margin-top var(--spacing-7)

.cards-wrapper
  grid-row 2
  display grid
  grid-template-columns repeat(1, 1fr)
  gap var(--spacing-7)
  grid-column span 4
  margin-top var(--spacing-11)

.card-item
  display flex
  flex-direction column
  justify-content space-evenly
  height 33.9375rem
  position relative

.card-item .accent
  angle-accent(ne)
  position absolute
  top 0
  right 0

.card-item .graphics
  height 20.1875rem
  display flex
  justify-content center

  &__item
    width 100%
    height 100%

.card-item .subtitle
  margin-top var(--spacing-5)
  margin-bottom var(--spacing-7)

// Rewards
.section-rewards .span-4
  grid-column span 4

  .percentage
    margin-top var(--spacing-5)
    margin-bottom var(--spacing-5)

.section-rewards .span-7
  grid-column span 4
  margin-top var(--spacing-9)
  position relative

  .accent
    angle-accent(ne)
    position absolute
    top 0
    right 0

  .title
    margin-top var(--spacing-7)

  .subtitle
    margin-top var(--spacing-7)

.pie-container
  grid-column span 12

.pie-wrapper
  padding var(--spacing-10)
  border-radius $border-radius-5
  box-shadow var(--elevation-4)
  align-items center
  text-align center
  height fit-content
  background #171717
  display block

  .light-mode &
    background var(--white)

.pie-item
  text-align left

  &:nth-child(2)
    display grid
    place-items center

.pie-item + .pie-item
  margin-top var(--spacing-9)

.pie-item
  .amount,
  .unit
    margin-top 1rem

.pie-item
  .title,
  .subtitle
    margin-top 0.25rem

.pie-item .subtitle
  color var(--white-500)
  .light-mode &
    color var(--trans-gray-600)

.pie
  width 15rem
  height 15rem
  border-radius: 50%
  background conic-gradient(from 180deg at 50% 50%, #00C2FF -37.79deg, #000000 24.02deg, #FF48F8 24.04deg, #00C2FF 322.21deg, #000000 384.02deg)
  transform matrix(0, 1, 1, 0, 0, 0)
  display grid
  place-items center
  text-align center

  .light-mode &
    background conic-gradient(from 180deg at 50% 50%, #74DEFF -37.79deg, #FFFFFF 24.02deg, #FFCAFD 24.04deg, #74DEFF 322.21deg, #FFFFFF 384.02deg);

  .text
    transform inherit
    display grid
    gap var(--spacing-6)

.footnote
  grid-column 1/span 4
  margin-top var(--spacing-6)
  color var(--white-500)
  max-width 24.375rem

  .light-mode &
    color var(--trans-gray-400)

// Rewards origin
.section-rewards-origin .graphics
  grid-column span 4
  position relative

  &__item
    width 120%
    height 100%
    margin-top -10%

.section-rewards-origin .accent
  angle-accent(nw)
  position absolute
  top 0
  left 0

.section-rewards-origin .text
  grid-column span 4
  position relative
  padding var(--spacing-7)

.section-rewards-origin .text .subtitle
  margin-top var(--spacing-7)

.subheading-item
  grid-column 2/span 12
  margin-top var(--spacing-9)
  position relative
  display flex
  margin-left 0

.subheading-item .right
  margin-left 2rem

.subheading-item .subtitle
  margin-top var(--spacing-3)

// Staking safely
.section-staking-safely .text
  grid-column span 4
  padding var(--spacing-7)
  position relative

.section-staking-safely .accent
  angle-accent(ne)
  position absolute
  top 0
  right 0

.section-staking-safely .text .subtitle
  margin-top var(--spacing-7)

.section-staking-safely .text .btn
  margin-top var(--spacing-7)

.section-staking-safely .graphics
  grid-column span 4
  display grid
  place-items center
  position relative

  &__item
    width 100%
    height auto

@media $breakpoint-medium
  // Hero
  .section-hero .text
    grid-column 7
    text-align left

  .section-hero .graphics
    z-index 0
    margin-top -25rem
    margin-bottom -10rem
    width 80%
    center()
    display flex
    justify-content center

  // Intro
  .section-intro
    grid-row 1
    grid-column 2/span 7

  .cards-wrapper
    grid-template-columns repeat(2, 1fr)
    grid-column span 12

  .card-item .title
    width 8.125rem

  .card-item .title
    width 10.625rem

  // Rewards
  .section-rewards .span-4
    grid-column 2/span 4
    grid-row 1
    margin-top var(--spacing-11)

  .section-rewards  .span-7
    grid-column 6/span 7
    grid-row 1
    margin-top var(--spacing-7)

  .section-rewards  .span-7 .subtitle
    margin-left var(--spacing-10)

  .pie-container
    grid-column span 16

  .pie-wrapper
    display flex
    flex-direction row
    justify-content space-between
    max-height 18.625rem

  .pie-item + .pie-item
    margin-top 0

  .pie
    width 18.75rem
    height 18.75rem

  // Rewards origin
  .section-rewards-origin .graphics
    grid-column 1/span 6
    position relative

    &__item
      position absolute
      width 220%
      height 100%
      margin-top -1%
      margin-left -25%

  .section-rewards-origin .text
    grid-column 7/ 12
    margin-top var(--spacing-11)

  .subheading-item
    margin-left 6.3125rem

  .subheading-item .subtitle
    margin-top var(--spacing-3)

  // Staking safely
  .section-staking-safely .text
    grid-column 2/ 7

  .section-staking-safely .graphics
    grid-column 8/ 12

    &__item
      position absolute
      width 100%
      height 100%

@media $breakpoint-large
  // Intro
  .cards-wrapper
    grid-template-columns repeat(3, 1fr)

  .pie
    width 27.9375rem
    height 27.9375rem
</style>
