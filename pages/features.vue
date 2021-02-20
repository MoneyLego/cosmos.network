<template>
  <main>
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

    <!-- OTHER SECTION CONTENT GOES HERE -->
    <div class="tm-section tm-wrapper tm-container">
      <div class="title tm-rf5 tm-bold tm-lh-title">
        Security and scalability
      </div>
    </div>

    <div class="tm-section tm-wrapper tm-container">
      <div class="title tm-rf5 tm-bold tm-lh-title">
        Services generate fees. Fees generate rewards.
      </div>
      <div class="subtitle tm-rf1 tm-lh-copy">
        The more activity on the Hub, the more fees paid by services, which in
        turn, generates rewards for staked ATOM holders.
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

    <section-community />
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
</style>
