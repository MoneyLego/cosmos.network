<template>
  <main>
    <!-- features-0 -->
    <div class="section-hero tm-section">
      <div class="tm-wrapper">
        <div class="tm-section tm-container">
          <div class="features-0-text tm-grid-base">
            <div class="title tm-rf6 tm-bold tm-lh-title">
              The next wave of interchain infrastructure, commerce, and culture.
            </div>
            <div class="split">
              <div class="left">
                <div class="subtitle tm-rf1 tm-lh-copy tm-measure">
                  The Cosmos Hub pioneered a new era in the blockchain space by
                  being the first public proof-of-stake blockchain built on top
                  of a Byzantine Fault Tolerant consensus engine.
                </div>
              </div>
              <div class="right">
                <div class="subtitle tm-rf1 tm-lh-copy tm-measure">
                  Yet, this was only the beginning – two years after its launch,
                  the Cosmos Hub is set to play a leading role in the Interchain
                  by offering a wide array of vital services.
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
                  >The Hub’s vision
                  <span class="icon__right">↗️</span></tm-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- GRAPHICS -->
    </div>

    <!-- features-1 GRAPHICS -->

    <!-- features-2 -->
    <div class="tm-wrapper">
      <div class="tm-section tm-container tm-grid-base">
        <div class="features-2-text">
          <div class="title tm-rf5 tm-bold tm-lh-title">
            Cutting-edge Features.
          </div>
        </div>
      </div>
    </div>

    <!-- features-6 -->
    <div class="tm-wrapper">
      <div class="tm-section tm-container tm-grid-base features-6">
        <div class="left">
          <div class="top">
            <div class="caption tm-rf0 tm-lh-title">
              Service Discovery · 2021
            </div>
          </div>
          <div class="mid">
            <div class="title tm-rf3 tm-bold tm-lh-title">
              Chain Name Service ↗️
            </div>
            <div class="desc tm-rf0 tm-lh-copy">
              Just like websites have domain names, blockchains will have chain
              names. These chain names will be managed on the Cosmos Hub, which
              will operate a Chain Name Service. They will make it much easier
              for users of the Interchain to identify the chain(s) they want to
              interact with.
            </div>
          </div>
          <div class="bottom">
            <div class="footnote">Tendermint, Interchain Foundation</div>
          </div>
        </div>
        <div class="right">
          <div class="top">
            <div class="caption tm-rf0 tm-lh-title">
              Capital Formation · 2022
            </div>
          </div>
          <div class="mid">
            <div class="title tm-rf3 tm-bold tm-lh-title">
              Staking Derivatives ↗️
            </div>
            <div class="desc tm-rf0 tm-lh-copy">
              Staking Derivatives will be an important primitive in the
              cross-chain Defi space. At their core, staking derivatives are
              claims against staked ATOMs. Just like staked ATOMs, staking
              derivatives accrue staking rewards - but unlike staked ATOMs,
              staking derivatives are liquid, meaning they can be transferred.
              Since they represent staked ATOMs, staking derivatives are at risk
              of being partially burnt if the underlying ATOMs get slashed.
            </div>
          </div>
          <div class="bottom">
            <div class="footnote">Chorus One, Interchain Foundation</div>
          </div>
        </div>
      </div>
    </div>

    <!-- features-7 -->
    <div class="tm-wrapper">
      <div class="tm-section tm-container tm-grid-base features-7">
        <!-- GRAPHICS -->
        <div class="title tm-rf5 tm-bold tm-lh-title">
          Services generate fees. Fees generate rewards.
        </div>
        <div class="description">
          <div class="subtitle tm-rf1 tm-lh-copy">
            The more activity on the Hub, the more fees paid by services, which
            in turn, generates rewards for staked ATOM holders.
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
            >What is staking <span class="icon__right">--></span></tm-button
          >
        </div>
      </div>
    </div>

    <section-cta-cards />
  </main>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
// FEATURES 0
.features-0-text .title,
.features-0-text .split
  grid-column span 12

.features-0-text .split,
.features-0-text .split .right
  margin-top var(--spacing-9)

.features-0-text .split .right .subtitle
  margin-bottom var(--spacing-6)

// FEATURES 1
// FEATURES 2
.features-2-text
  grid-column span 12

// FEATURES 6
.features-6
  display grid
  grid-template-columns auto
  gap var(--spacing-7)

.features-6 .left,
.features-6 .right
  &:before
    content url("data:image/svg+xml;charset=UTF-8, <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='9' height='9' viewBox='0 0 9 9' fill='darkgray'><rect width='9' height='2'/><rect width='2' height='9'/></svg>")
    position absolute
    bottom 0
    right -1px
    transform-origin center center
    transform rotate(180deg) translate(0px, -9.5px)
  &:after
    content url("data:image/svg+xml;charset=UTF-8, <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='9' height='9' viewBox='0 0 9 9' fill='darkgray'><rect width='9' height='2'/><rect width='2' height='9'/></svg>");
    position absolute
    bottom 0.4px
    left 0
    transform-origin center center
    transform rotate(270deg) translate(-8.5px, -2px)

.features-6 .left,
.features-6 .right
  padding var(--spacing-7)
  display flex
  flex-direction column
  justify-content space-between
  height 32.25rem
  position relative

.features-6 .left .desc,
.features-6 .right .desc
  margin-top var(--spacing-5)

// FEATURES 7
.features-7
  .title,
  .description
    grid-column span 12

.features-7 .description .subtitle
  margin-top var(--spacing-8)

.features-7 .description .btn
  margin-top var(--spacing-6)

@media $breakpoint-medium
  // FEATURES 0
  .features-0-text .title,
  .features-0-text .split
    grid-column 2/span 12

  .features-0-text .split
    display grid
    grid-template-columns auto auto
    gap var(--spacing-7)

  .features-0-text .split .left,
  .features-0-text .split .right
    grid-column unset
    height 8.5rem
    margin-top 0

  // FEATURES 1
  // FEATURES 2
  .features-2-text
    grid-column 3/span 12

  // FEATURES 6
  .features-6
    grid-template-columns auto auto
    gap 0

  // FEATURES 7
  .features-7 .title
    grid-column 5/span 12

  .features-7 .description
    grid-column 6/span 10
</style>
