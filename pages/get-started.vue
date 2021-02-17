<template>
  <main>
    <div class="section-start tm-section">
      <div class="tm-wrapper">
        <div class="tm-container tm-section tm-grid-base">
          <div class="start-0-text tm-measure-wide">
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

    <!-- OTHER SECTION CONTENT GOES HERE -->
    <div class="tm-wrapper">
      <div class="tm-section tm-container tm-grid-base">
        <div class="start-1-text">
          <div class="title tm-rf3 tm-bold tm-lh-title">Before you begin</div>
        </div>
        <div class="cards-wrapper">
          <div class="cards-item">
            <div class="heading tm-rf-1 tm-medium tm-lh-title tm-overline">
              learn
            </div>
            <div class="title tm-rf1 tm-bold tm-lh-title">
              What is the ATOM token?
            </div>
          </div>
          <div class="cards-item">
            <div class="heading tm-rf-1 tm-medium tm-lh-title tm-overline">
              learn
            </div>
            <div class="title tm-rf1 tm-bold tm-lh-title">What is staking?</div>
          </div>
          <div class="cards-item">
            <div class="heading tm-rf-1 tm-medium tm-lh-title tm-overline">
              learn
            </div>
            <div class="title tm-rf1 tm-bold tm-lh-title">
              What is a wallet?
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="tm-section tm-wrapper tm-container">
      <div class="title tm-rf5 tm-bold tm-lh-title">
        Get ATOMs via one of the many cryptocurrency exchanges
      </div>
      <p class="subtitle tm-rf1 tm-lh-copy">
        Some exchanges offer staking services directly, but this requires you to
        delegate ownership of your tokens to them.
      </p>
      <p class="subtitle tm-rf1 tm-lh-copy">
        This guide involves using your own wallet, enabling you to maintain full
        ownership of your tokens.
      </p>
      <tm-button
        to-link="internal"
        to="/staking"
        size="l"
        color="var(--black)"
        background-color="transparent"
        variant="text"
        class="btn"
        >Browse exchanges <span class="icon__right">↗️</span></tm-button
      >
      <div class="footnote tm-rf-1 tm-lh-copy">
        messari.io is an unvalidated third-party listing exchanges. We are not
        liable for X,Y,Z.
      </div>
    </div>

    <div class="tm-section tm-wrapper tm-container">
      <div class="title tm-rf5 tm-bold tm-lh-title">
        Transfer your ATOMs to a wallet
      </div>
      <div class="subtitle tm-rf1 tm-lh-copy">
        Choose a wallet that supports the ATOM token, create an account, and
        transfer your ATOMs from the exchange.
      </div>
      <tm-button
        to-link="internal"
        to="/staking"
        size="l"
        color="var(--black)"
        background-color="transparent"
        variant="text"
        class="btn"
        >Choose a wallet <span class="icon__right">-></span></tm-button
      >
    </div>

    <div class="tm-section tm-wrapper tm-container">
      <div class="title tm-rf5 tm-bold tm-lh-title">Select your validators</div>
      <div class="subtitle tm-rf1 tm-lh-copy">
        In your wallet, choose the validators to delegate your ATOMs to.
      </div>
      <div class="row">
        <tm-button
          to-link="internal"
          to="/staking"
          size="l"
          color="var(--black)"
          background-color="transparent"
          variant="text"
          class="btn"
          >What is a validator <span class="icon__right">-></span></tm-button
        >
        <tm-button
          to-link="internal"
          to="/staking"
          size="l"
          color="var(--black)"
          background-color="transparent"
          variant="text"
          class="btn"
          >Choosing a validator <span class="icon__right">-></span></tm-button
        >
      </div>
    </div>

    <div class="tm-section tm-wrapper tm-container">
      <div class="title tm-rf5 tm-bold tm-lh-title">
        Lock up and stake your ATOMs
      </div>
      <div class="subtitle tm-rf1 tm-lh-copy">
        Using your wallet, send a simple transaction (often called “Stake” or
        “Delegate”) to start staking. This locks up your ATOMs (i.e. you can't
        transfer them) and enables the chosen validators to operate the network.
      </div>
      <div class="warning">
        Staked ATOMs can be unlocked via your wallet by sending a transaction
        (often called “Unstake” or “Undelegate”) and waiting 21 days.
      </div>
    </div>

    <div class="tm-section tm-wrapper tm-container">
      <div class="title tm-rf5 tm-bold tm-lh-title">
        Welcome to the community, fellow Cosmonaut
      </div>
      <div class="subtitle tm-rf1 tm-lh-copy">
        Now that you’ve staked your ATOMs like a pro, join a fast-growing
        community of developers and innovators connected all over the world,
        building the new era of the internet.
      </div>
      <tm-button
        to-link="external"
        href="https://cosmos.network/community"
        size="l"
        color="var(--black)"
        background-color="transparent"
        variant="text"
        class="btn"
        >Cosmos Community <span class="icon__right">-></span></tm-button
      >
    </div>
  </main>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
// GET STARTED 0
.section-start
  padding-top 5rem // approx navbar max height
  text-align left

.start-0-text
  grid-column span 12

.start-0-text .title
  margin-top var(--spacing-6)

// GET STARTED 1
.start-1-text
  grid-column span 12

.cards-wrapper
  grid-row 2
  display grid
  grid-template-columns repeat(1, 1fr)
  gap var(--spacing-7)
  grid-column span 12
  margin-top var(--spacing-8)

.cards-item
  padding var(--spacing-7)
  border-radius $border-radius-5
  hover-raise(-3px)
  box-shadow var(--elevation-4)

.row
  display flex
  flex-direction column

@media $breakpoint-small
  .row
    display block

  // GET STARTED 0
  // GET STARTED 1

@media $breakpoint-medium
  // GET STARTED 0
  .start-0-text
    grid-column 4/span 10

  // GET STARTED 1
  .cards-wrapper
    grid-template-columns repeat(2, 1fr)

  .start-1-text
    grid-column 4/span 12

@media $breakpoint-large
  // GET STARTED 0
  .section-start
    padding-top 10rem // navbar max height

  // GET STARTED 1
  .cards-wrapper
    grid-template-columns repeat(3, 1fr)
    grid-column span 15
</style>
