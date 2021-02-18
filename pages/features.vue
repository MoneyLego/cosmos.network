<template>
  <main>
    <div class="section-features tm-section">
      <div class="tm-wrapper">
        <div class="tm-section tm-container">
          <div class="features-0-text tm-grid-base">
            <div class="top">
              <div class="title tm-rf6 tm-bold tm-lh-title">
                The next wave of interchain infrastructure, commerce, and
                culture.
              </div>
            </div>
            <div class="bottom">
              <p class="subtitle tm-rf1 tm-lh-copy">
                The Cosmos Hub pioneered a new era in the blockchain space by
                being the first public proof-of-stake blockchain built on top of
                a Byzantine Fault Tolerant consensus engine.
              </p>
              <p class="subtitle tm-rf1 tm-lh-copy">
                Yet, this was only the beginning – two years after its launch,
                the Cosmos Hub is set to play a leading role in the Interchain
                by offering a wide array of vital services.
              </p>
              <tm-button
                to-link="internal"
                to="/staking"
                size="l"
                dark-color="var(--white)"
                light-color="var(--black)"
                background-color="transparent"
                variant="text"
                class="btn"
                >The Hub’s vision <span class="icon__right">↗️</span></tm-button
              >
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
.section-features
  padding-top 5rem // approx navbar max height

.features-0-text .top,
.features-0-text .bottom
  grid-column span 12

.bottom
  margin-top var(--spacing-9)

@media $breakpoint-medium
  // FEATURES 0
  .features-0-text .top
    grid-column 2/span 12

  .features-0-text .bottom
    grid-column 7/span 11

@media $breakpoint-large
  // FEATURES 0
  .section-features
    padding-top 10rem // navbar max height
</style>
