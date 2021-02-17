<template>
  <main>
    <div class="section-get-started tm-wrapper">
      <div class="tm-section tm-container">
        <div class="header tm-rf0 tm-medium tm-lh-title tm-overline">
          get started
        </div>
        <div class="title tm-rf6 tm-bold tm-lh-title tm-measure-narrow">
          Stake ATOMs in four steps
        </div>
      </div>
    </div>

    <!-- OTHER SECTION CONTENT GOES HERE -->
    <div class="tm-section tm-wrapper tm-container">
      <div class="title tm-rf3 tm-bold tm-lh-title">Before you begin</div>
      <!-- TODO: grid 3 -->
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
.section-get-started
  position relative
  display flex
  justify-content center
  align-items center
  text-align center

.row
  display flex
  flex-direction column

@media $breakpoint-small
  .row
    display block
</style>
