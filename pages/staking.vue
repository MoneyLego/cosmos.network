<template>
  <main>
    <div class="section-staking tm-wrapper">
      <div class="tm-section tm-container">
        <div class="title tm-rf6 tm-bold tm-lh-title">Staking</div>
        <div class="subtitle tm-rf1 tm-lh-copy">
          Help secure the Cosmos Hub and earn rewards
        </div>
      </div>
    </div>

    <!-- OTHER SECTION CONTENT GOES HERE -->
    <div class="tm-section tm-wrapper tm-container">
      <div class="title tm-rf5 tm-bold tm-lh-title">What is staking?</div>
      <div class="subtitle tm-rf1 tm-lh-copy">
        Staking is the process of locking up a digital asset (ATOMs in the case
        of the Cosmos Hub) in order to provide economic security for a public
        blockchain.
      </div>
    </div>

    <div class="tm-section tm-wrapper tm-container">
      <div class="title tm-rf5 tm-bold tm-lh-title">Staking rewards</div>
      <div class="subtitle tm-rf1 tm-lh-copy">
        When the staking transaction is complete, rewards will start to be
        generated immediately. At any time, stakers can send a transaction to
        claim their accumulated rewards, using a wallet.
      </div>
    </div>

    <div class="tm-section tm-wrapper tm-container">
      <div class="title tm-rf5 tm-bold tm-lh-title">
        Where do rewards come from?
      </div>
      <div class="subtitle tm-rf1 tm-lh-copy">
        Staking rewards are generated and distributed to staked ATOM holders in
        two ways:
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
        color="var(--black)"
        background-color="transparent"
        variant="text"
        class="btn"
        >What is staking <span class="icon__right">--></span></tm-button
      >
    </div>

    <section-banner />
  </main>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.section-staking
  position relative
  display flex
  justify-content center
  align-items center
</style>
