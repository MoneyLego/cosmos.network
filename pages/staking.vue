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
      <graphics-staking-hero class="graphics" />
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
          <div class="graphics">
            <graphics-staking-1 class="graphics__item" />
          </div>
          <div class="title tm-rf3 tm-bold tm-lh-title">Secure the chain</div>
          <div class="subtitle tm-rf0 tm-lh-copy tm-measure-narrower">
            With ATOM, you have the superpower to contribute to the security and
            governance of the Cosmos Hub.
          </div>
        </div>
        <div class="card-item">
          <div class="graphics">
            <graphics-staking-2 class="graphics__item" />
          </div>
          <div class="title tm-rf3 tm-bold tm-lh-title">Earn rewards</div>
          <div class="subtitle tm-rf0 tm-lh-copy tm-measure-narrower">
            Select one or more validators of the Cosmos Hub and start earning
            crypto assets.
          </div>
        </div>
        <div class="card-item">
          <div class="graphics">
            <graphics-staking-3 class="graphics__item" />
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
            <div class="pie" />
          </div>
          <div class="pie-item">
            <div class="tm-rf2 tm-bold tm-lh-title">10.63%</div>
            <div class="tm-rf0 tm-medium tm-lh-title tm-overline">
              commission
            </div>
            <div class="tm-rf-1 tm-lh-copy">(Varies between validators)</div>
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
        <graphics-staking-rewardsorigin class="graphics__item" />
      </div>
      <div class="text">
        <div class="title tm-rf5 tm-bold tm-lh-title tm-measure">
          Where do rewards come from?
        </div>
        <div class="subtitle tm-rf1 tm-lh-copy tm-measure-narrower">
          Staking rewards are generated and distributed to staked ATOM holders
          in two ways:
        </div>
        <div class="subheading-item">
          <div class="title tm-rf2 tm-bold tm-lh-title tm-measure">
            Transaction fees
          </div>
          <div class="subtitle tm-rf0 tm-lh-copy tm-measure-narrower">
            Transaction fees collected on the Cosmos Hub are distributed to
            staked ATOM holders.
          </div>
        </div>
        <div class="subheading-item">
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

    <div
      class="section-staking-safely tm-section tm-container tm-wrapper tm-grid-base"
    >
      <div class="text">
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
          dark-color="var(--white)"
          light-color="var(--black)"
          background-color="transparent"
          variant="text"
          class="btn"
          >More about staking safely
          <span class="icon__right">--></span></tm-button
        >
      </div>
      <div class="graphics">
        <graphics-staking-safely class="graphics__item" />
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
// Hero
.section-hero .text
  grid-column span 12
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
  grid-column span 12

  .subtitle
    margin-top var(--spacing-7)

.cards-wrapper
  grid-row 2
  display grid
  grid-template-columns repeat(1, 1fr)
  gap var(--spacing-7)
  grid-column span 12
  margin-top var(--spacing-11)

.card-item
  display flex
  flex-direction column
  justify-content space-evenly
  height 33.9375rem
  position relative
  &:before
    content url("data:image/svg+xml,%3Csvg width='33' height='33' viewBox='0 0 33 33' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M33 32L1 32L1 0' stroke='black' stroke-width='2'/%3E%3C/svg%3E")
    position absolute
    top 0
    right 0
    transform-origin center
    transform rotate(180deg)

.card-item .graphics
  height 20.1875rem
  display flex
  justify-content center

  &__item
    width 100%
    height 100%

.card-item .title
  width 8.125rem

.card-item .subtitle
  margin-top var(--spacing-5)
  margin-bottom var(--spacing-7)

// Rewards
.section-rewards .span-4
  grid-column span 12

  .percentage
    margin-top var(--spacing-5)
    margin-bottom var(--spacing-5)

.section-rewards .span-7
  grid-column span 12
  margin-top var(--spacing-9)
  position relative

  &:before
    content url("data:image/svg+xml,%3Csvg width='33' height='33' viewBox='0 0 33 33' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M33 32L1 32L1 0' stroke='black' stroke-width='2'/%3E%3C/svg%3E")
    position absolute
    top 0
    right 0
    transform-origin center
    transform rotate(180deg)

  .title
    margin-top var(--spacing-7)

  .subtitle
    margin-top var(--spacing-7)

.pie-container
  grid-column span 12

.light-mode .pie-wrapper
  background var(--white)

.dark-mode .pie-wrapper
  background #171717

.pie-wrapper
  padding var(--spacing-10)
  display flex
  flex-direction column
  border-radius $border-radius-5
  box-shadow var(--elevation-4)
  align-items center
  text-align center
  height 18.625rem

.pie-item
  text-align left

.pie-item + .pie-item
  margin-top var(--spacing-9)

.pie
  width 447px
  height 447px
  border-radius: 50%
  background conic-gradient(from 180deg at 50% 50%, #00C2FF -37.79deg, #000000 24.02deg, #FF48F8 24.04deg, #00C2FF 322.21deg, #000000 384.02deg)
  transform matrix(0, 1, 1, 0, 0, 0)

.footnote
  grid-column 1/span 4
  margin-top var(--spacing-6)
  color var(--trans-gray-400)
  width 24.375rem

// Rewards origin

// TODO: tweak mobile column reverse
// .section-rewards-origin
//   display flex
//   flex-direction column-reverse

.section-rewards-origin .graphics
  grid-column span 12
  position relative

  &__item
    width 120%
    height 100%
    margin-top -10%

.section-rewards-origin
  .text
    grid-column span 12

    .subtitle
      margin-top var(--spacing-7)

.subheading-item
  grid-column 2/span 12
  margin-top var(--spacing-9)
  margin-left var(--spacing-11)
  position relative

.subheading-item .title
  &:before
    content url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12.75 0.75C12.75 0.335786 12.4142 0 12 0C11.5858 0 11.25 0.335786 11.25 0.75V11.25H0.75C0.335786 11.25 0 11.5858 0 12C0 12.4142 0.335786 12.75 0.75 12.75H11.25V23.25C11.25 23.6642 11.5858 24 12 24C12.4142 24 12.75 23.6642 12.75 23.25V12.75H23.25C23.6642 12.75 24 12.4142 24 12C24 11.5858 23.6642 11.25 23.25 11.25H12.75V0.75Z' fill='black'/%3E%3C/svg%3E")
    position absolute
    top 0
    left 0
    transform-origin center
    transform translate(-60px, 0px)

.subheading-item .subtitle
  margin-top var(--spacing-3)

// Staking safely
.section-staking-safely .text
  grid-column span 12
  padding var(--spacing-7)
  position relative

.section-staking-safely .text
  &:before
    content url("data:image/svg+xml,%3Csvg width='33' height='33' viewBox='0 0 33 33' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M33 32L1 32L1 0' stroke='black' stroke-width='2'/%3E%3C/svg%3E")
    position absolute
    top 0
    right 0
    transform-origin center
    transform rotate(180deg)

.section-staking-safely .text .subtitle
  margin-top var(--spacing-7)

.section-staking-safely .text .btn
  margin-top var(--spacing-7)

.section-staking-safely .graphics
  grid-column span 12

// @media $breakpoint-small
//   .section-rewards-origin
//     flex-direction revert

@media $breakpoint-medium
  // Hero
  .section-hero .text
    grid-column 7/ 12
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
    flex-direction row
    justify-content space-between

  .pie-item + .pie-item
    margin-top 0

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
    grid-column 7/span 12
    position relative
    padding var(--spacing-7)
    margin-top var(--spacing-11)

    &:before
      content url("data:image/svg+xml,%3Csvg width='33' height='32' viewBox='0 0 33 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 0V32M1.00043 1L33 0.999997' stroke='var(--black)' stroke-width='2'/%3E%3C/svg%3E")
      position absolute
      top 0
      left 0
      transform-origin center

  .subheading-item
    grid-column 10/span 12

  .subheading-item .subtitle
    margin-top var(--spacing-3)

  // Staking safely
  .section-staking-safely .text
    grid-column 2/span 6

  .section-staking-safely .graphics
    grid-column 8/span 12
    display grid
    place-items center
    position relative

    &__item
      position absolute
      width 100%
      height 100%

@media $breakpoint-large
  // Intro
  .cards-wrapper
    grid-template-columns repeat(3, 1fr)
</style>
