<template>
  <main>
    <div class="section-staking tm-section">
      <div class="tm-wrapper">
        <div class="tm-section tm-container tm-grid-base">
          <div class="staking-0-text tm-measure-wide">
            <div class="title tm-rf6 tm-bold tm-lh-title">Staking</div>
            <div class="subtitle tm-rf1 tm-lh-copy">
              Help secure the Cosmos Hub and earn rewards
            </div>
          </div>
        </div>
      </div>
      <!-- GRAPHICS -->
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

    <div class="tm-wrapper">
      <div class="tm-section tm-container tm-grid-base">
        <div class="top-left">
          <div class="header tm-rf0 tm-medium tm-lh-title tm-overline">
            typical apy
          </div>
          <div class="percentage tm-rf7 tm-bold tm-lh-title">9.7%</div>
          <div class="footnote tm-rf1 tm-lh-title">
            of staked ATOMs (annually)*
          </div>
        </div>
        <div class="top-right">
          <div class="title tm-rf5 tm-bold tm-lh-title">Staking rewards</div>
          <div class="subtitle tm-rf1 tm-lh-copy">
            When the staking transaction is complete, rewards will start to be
            generated immediately. At any time, stakers can send a transaction
            to claim their accumulated rewards, using a wallet.
          </div>
        </div>
        <div class="pie-container">
          <div class="pie-wrapper">
            <div class="pie-item">
              <div class="heading">if you stake</div>
              <div class="amount">1,000</div>
              <div class="unit">atoms</div>
            </div>
            <div class="pie-item">
              <!-- GRAPHICS -->
              graphics
            </div>
            <div class="pie-item">
              <div class="top">
                <div>873</div>
                <div>your rewards</div>
              </div>
              <div class="btm">
                <div>97</div>
                <div>commission</div>
                <div>(Varies between validators)</div>
              </div>
            </div>
          </div>
        </div>
        <div class="footnote">
          * baseline inflation rate fluctuates based on the total amount of
          staked ATOMs in the network
        </div>
      </div>
    </div>

    <div class="tm-wrapper">
      <div class="tm-section tm-container tm-grid-base">
        <!-- GRAPHICS -->
        <div class="staking-3-text">
          <div class="title tm-rf5 tm-bold tm-lh-title">
            Where do rewards come from?
          </div>
          <div class="subtitle tm-rf1 tm-lh-copy">
            Staking rewards are generated and distributed to staked ATOM holders
            in two ways:
          </div>
        </div>
        <div class="subheading-item">
          <div class="title tm-rf2 tm-bold tm-lh-title">Transaction fees</div>
          <div class="subtitle tm-rf0 tm-lh-copy">
            Transaction fees collected on the Cosmos Hub are distributed to
            staked ATOM holders.
          </div>
        </div>
        <div class="subheading-item">
          <div class="title tm-rf2 tm-bold tm-lh-title">
            Newly created ATOMs
          </div>
          <p class="subtitle tm-rf0 tm-lh-copy">
            The total supply of ATOMs is inflated to reward stakers. ATOM
            holders that do not stake do not receive rewards, meaning their
            ATOMs get diluted over time.
          </p>
          <p class="subtitle tm-rf0 tm-lh-copy">
            The yearly inflation rate of ATOMs is available on most explorers.
          </p>
        </div>
      </div>
    </div>

    <div class="tm-wrapper">
      <div class="tm-section tm-container tm-grid-base">
        <div class="staking-4-text">
          <div class="title tm-rf5 tm-bold tm-lh-title">Staking risks</div>
          <div class="subtitle tm-rf1 tm-lh-copy tm-measure-narrow">
            Staking ATOMs is not risk-free. When ATOM holders stake, they need
            to choose one or more validators to delegate to. However, if a
            validator performs badly (according to the protocol), up to 5% of
            ATOMs delegated to them can be forfeited.
          </div>
          <tm-button
            to-link="internal"
            to="/staking"
            size="l"
            color="var(--black)"
            background-color="transparent"
            variant="text"
            class="btn"
            >More about staking risks
            <span class="icon__right">--></span></tm-button
          >
        </div>
        <!-- GRAPHICS -->
      </div>
    </div>

    <section-banner />
  </main>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
// STAKING 0
.section-staking
  text-align left
  padding-top 5rem // approx navbar max height

.staking-0-text
  grid-column span 12

// STAKING 1
.staking-1-text
  grid-column span 12

.cards-wrapper
  grid-row 2
  display grid
  grid-template-columns repeat(1, 1fr)
  gap var(--spacing-7)
  grid-column span 12
  margin-top var(--spacing-11)

// STAKING 2
.top-left
  grid-column span 12

.top-right
  grid-column span 12
  margin-top var(--spacing-9)

.pie-container
  margin-top var(--spacing-9)
  grid-column span 12

.pie-wrapper
  padding var(--spacing-10)
  display flex
  flex-direction column
  border-radius $border-radius-5
  box-shadow var(--elevation-4)
  color var(--black)
  background var(--white)
  align-items center
  text-align center

.pie-item + .pie-item
  margin-top var(--spacing-9)

.footnote
  grid-column 1/span 4
  margin-top var(--spacing-6)

// STAKING 3
.staking-3-text
  grid-column span 12

.staking-3-text .subtitle
  margin-top var(--spacing-7)

.subheading-item
  grid-column span 12
  margin-top var(--spacing-9)

// STAKING 4
.staking-4-text
  grid-column span 12

.staking-4-text .subtitle
  margin-top var(--spacing-7)

.staking-4-text .btn
  margin-top var(--spacing-7)

@media $breakpoint-medium
  // STAKING 0
  .staking-0-text
    grid-column 7/span 12

  // STAKING 1
  .staking-1-text
    grid-row 1
    grid-column 2/span 7

  .cards-wrapper
    grid-template-columns repeat(2, 1fr)

  // STAKING 2
  .top-left
    grid-column 2/span 4
    grid-row 1
    margin-top var(--spacing-11)

  .top-right
    grid-column 6/span 11
    grid-row 1
    margin-top var(--spacing-7)

  .top-right .subtitle
    margin-top var(--spacing-7)
    margin-left var(--spacing-10)

  .pie-container
    grid-column span 16

  .pie-wrapper
    flex-direction row
    justify-content space-between

  .pie-item + .pie-item
    margin-top 0

  // STAKING 3
  .staking-3-text
    grid-column 7/span 12

  .subheading-item
    grid-column 8/span 11

  .subheading-item .subtitle
    margin-top var(--spacing-3)

  // STAKING 4
  .staking-4-text
    grid-column 2/span 8

@media $breakpoint-large
  // STAKING 0
  .section-staking
    padding-top 10rem // navbar max height

  // STAKING 1
  .cards-wrapper
    grid-template-columns repeat(3, 1fr)

  // STAKING 2
  // STAKING 3
  // STAKING 4
</style>
