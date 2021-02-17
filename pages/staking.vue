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
    <div class="tm-wrapper">
      <div class="tm-section tm-container tm-grid-base">
        <div class="staking-1-text">
          <div class="title tm-rf5 tm-bold tm-lh-title">What is staking?</div>
          <div class="subtitle tm-rf1 tm-lh-copy">
            Staking is the process of locking up a digital asset (ATOMs in the
            case of the Cosmos Hub) in order to provide economic security for a
            public blockchain.
          </div>
        </div>
        <div class="cards-wrapper">
          <div class="cards-item">
            <!-- GRAPHICS -->
            <div class="cards-item__title tm-rf3 tm-bold tm-lh-title">
              Secure the chain
            </div>
            <div class="cards-item__subtitle tm-rf0 tm-lh-copy">
              With ATOM, you have the superpower to contribute to the security
              and governance of the Cosmos Hub.
            </div>
          </div>
          <div class="cards-item">
            <!-- GRAPHICS -->
            <div class="cards-item__title tm-rf3 tm-bold tm-lh-title">
              Earn rewards
            </div>
            <div class="cards-item__subtitle tm-rf0 tm-lh-copy">
              Select one or more validators of the Cosmos Hub and start earning
              crypto assets.
            </div>
          </div>
          <div class="cards-item">
            <!-- GRAPHICS -->
            <div class="cards-item__title tm-rf3 tm-bold tm-lh-title">
              Vote for the future
            </div>
            <div class="cards-item__subtitle tm-rf0 tm-lh-copy">
              Staking ATOMs grants the right to vote on proposals and make
              decisions on the future of the network.
            </div>
          </div>
        </div>
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

// STAKING 1
.staking-1-text
  grid-row 1
  grid-column 2/span 7

.cards-wrapper
  grid-row 2
  display grid
  grid-template-columns repeat(1, 1fr)
  gap var(--spacing-7)
  grid-column span 12
  margin-top var(--spacing-11)

@media $breakpoint-medium
  .cards-wrapper
    grid-template-columns repeat(2, 1fr)

@media $breakpoint-large
  .cards-wrapper
    grid-template-columns repeat(3, 1fr)
</style>
