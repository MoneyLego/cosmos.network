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
                  <span class="icon__right">↗</span></tm-button
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
      <div class="tm-section tm-container tm-grid-base features-2">
        <div class="text">
          <div class="title tm-rf5 tm-bold tm-lh-title">
            Cutting-edge Features.
          </div>
        </div>
        <div class="tiles tm-grid-base">
          <div class="span-0 tm-rf0 tm-medium tm-lh-title tm-overline">
            Security and Scalability
          </div>
          <div class="span-8">
            <div class="row-1">
              <div class="img">
                <!-- GRAPHICS -->
              </div>
              <div class="text">
                <div class="caption tm-rf0 tm-lh-title">
                  Capital Formation · Live
                </div>
                <div class="title">
                  <tm-button
                    to-link="internal"
                    to="/staking"
                    size="l"
                    dark-color="var(--white)"
                    light-color="var(--black)"
                    background-color="transparent"
                    variant="text"
                    class="btn tm-rf3 tm-bold tm-lh-title"
                    >Staking <span class="icon__right">-></span></tm-button
                  >
                </div>
                <div class="desc tm-rf0 tm-lh-copy">
                  Built on top of the
                  <a
                    href="https://tendermint.com/core/"
                    target="_blank"
                    rel="noreferrer noopener"
                    class="tm-link"
                    >Tendermint BFT consensus engine</a
                  >, the Hub’s staking module is one of the most efficient
                  proof-of-stake implementations in the world. It enables ATOM
                  token holders to secure the chain by locking their ATOMs, in
                  exchange for transaction fees.
                </div>
              </div>
            </div>
            <div class="row-2">
              <div class="img">
                <!-- GRAPHICS -->
              </div>
              <div class="text">
                <div class="caption tm-rf0 tm-lh-title">Governance · Live</div>
                <div class="title">
                  <tm-button
                    to-link="internal"
                    to="/"
                    size="l"
                    dark-color="var(--white)"
                    light-color="var(--black)"
                    background-color="transparent"
                    variant="text"
                    class="btn tm-rf3 tm-bold tm-lh-title"
                    >Voting <span class="icon__right">-></span></tm-button
                  >
                </div>
                <div class="desc tm-rf0 tm-lh-copy">
                  Staking ATOMs gives rights to participate in the open
                  governance process, which governs the evolution of the
                  network.
                </div>
              </div>
            </div>
          </div>
          <div class="span-4">
            <div class="top">
              <div class="caption tm-rf0 tm-lh-title">
                Account System · 2021
              </div>
            </div>
            <div class="mid">
              <div class="title">
                <tm-button
                  to-link="external"
                  href="https://medium.com/chainapsis/why-interchain-accounts-change-everything-for-cosmos-interoperability-59c19032bf11"
                  size="l"
                  dark-color="var(--white)"
                  light-color="var(--black)"
                  background-color="transparent"
                  variant="text"
                  class="btn tm-rf3 tm-bold tm-lh-title"
                  >Interchain Accounts
                  <span class="icon__right">↗</span></tm-button
                >
              </div>
              <div class="desc tm-rf0 tm-lh-copy">
                Interchain Accounts are the accounts of the IBC-enabled world.
                Essentially, they allow blockchains to securely control accounts
                on other chains over IBC. With this feature, users will be able
                to access the entire Interchain through their single Cosmos Hub
                account. One account, for all the chains.
              </div>
            </div>
            <div class="bottom">
              <div class="avatar-list">
                <div class="overlap">
                  <div class="avatar-item">
                    <img src="~static/avatars/chainapsis.svg" alt="icon" />
                  </div>
                </div>
                <div class="overlap">
                  <div class="avatar-item">
                    <img src="~static/avatars/interchain-gmbh.svg" alt="icon" />
                  </div>
                </div>
              </div>
              <div class="footnote tm-rf0 tm-lh-copy tm-medium">
                Chainapsis, Interchain GmbH
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Interchain staking -->
    <div class="tm-wrapper">
      <div class="tm-container tm-grid-base section-interchain-staking">
        <div class="text">
          <div class="top">
            <div class="caption tm-rf0 tm-lh-title">
              Shared Security · Late 2021
            </div>
          </div>
          <div class="mid">
            <div class="title tm-rf3 tm-bold tm-lh-title">
              <tm-button
                to-link="internal"
                to="/"
                size="l"
                dark-color="var(--white)"
                light-color="var(--black)"
                background-color="transparent"
                variant="text"
                class="btn tm-rf3 tm-bold tm-lh-title"
                >Interchain Staking
                <span class="icon__right">↗</span></tm-button
              >
            </div>
            <div class="desc tm-rf0 tm-lh-copy">
              Staked ATOMs will be able to secure more than just the Cosmos Hub.
              In practice, validators will be able to validate chains that
              request it (called child-chains) on an opt-in basis, with their
              ATOM delegation as collateral. In exchange for securing
              child-chains, ATOM stakers will be rewarded with additional
              rewards. The more child-chains, the more rewards!
            </div>
          </div>
          <div class="bottom">
            <div class="avatar-list">
              <div class="overlap">
                <div class="avatar-item">
                  <img src="~static/avatars/informal.svg" alt="icon" />
                </div>
              </div>
              <div class="overlap">
                <div class="avatar-item">
                  <img src="~static/avatars/icf.svg" alt="icon" />
                </div>
              </div>
              <div class="overlap">
                <div class="avatar-item">
                  <img src="~static/avatars/tendermint.svg" alt="icon" />
                </div>
              </div>
            </div>
            <div class="footnote tm-rf0 tm-lh-copy tm-medium">
              Informal Systems, Interchain Foundation, Tendermint
            </div>
          </div>
        </div>
        <div class="graphics">
          <graphics-features-interchain-staking class="graphics__item" />
        </div>
      </div>
    </div>

    <!-- AMM -->
    <div class="tm-wrapper">
      <div class="tm-container tm-grid-base section-amm">
        <div class="graphics">
          <graphics-features-amm class="graphics__item" />
        </div>
        <div class="text">
          <div class="top">
            <div class="caption tm-rf0 tm-lh-title">
              Capital Formation · Q2 2021
            </div>
          </div>
          <div class="mid">
            <div class="title">
              <tm-button
                to-link="internal"
                to="/"
                size="l"
                dark-color="var(--white)"
                light-color="var(--black)"
                background-color="transparent"
                variant="text"
                class="btn tm-rf3 tm-bold tm-lh-title"
                >Next-gen. Automated Market Maker
                <span class="icon__right">↗</span></tm-button
              >
            </div>
            <div class="desc tm-rf0 tm-lh-copy">
              The Hub’s Automated Market Maker (AMM) module will enable users to
              seamlessly swap digital assets coming from all over the
              interchain. The module improves on existing designs by combining
              traditional AMM features (like that of Uniswap) with an
              orderbook-based model, providing a richer and more efficient
              trading experience.
            </div>
          </div>
          <div class="bottom">
            <div class="avatar-list">
              <div class="overlap">
                <div class="avatar-item">
                  <img src="~static/avatars/b-harvest.svg" alt="icon" />
                </div>
              </div>
              <div class="overlap">
                <div class="avatar-item">
                  <img src="~static/avatars/tendermint.svg" alt="icon" />
                </div>
              </div>
            </div>
            <div class="footnote tm-rf0 tm-lh-copy tm-medium">
              B-Harvest, Tendermint
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Gravity bridge -->
    <div class="tm-wrapper">
      <div class="tm-container tm-grid-base section-gravity-bridge">
        <div class="text">
          <div class="top">
            <div class="caption tm-rf0 tm-lh-title">
              Capital Formation · 2021
            </div>
          </div>
          <div class="mid">
            <div class="title">
              <tm-button
                to-link="external"
                href="https://blog.althea.net/gravity-bridge"
                size="l"
                dark-color="var(--white)"
                light-color="var(--black)"
                background-color="transparent"
                variant="text"
                class="btn tm-rf3 tm-bold tm-lh-title"
                >Gravity bridge<span class="icon__right">↗</span></tm-button
              >
            </div>
            <div class="desc tm-rf0 tm-lh-copy">
              Backed by billions of dollars of Atoms staked on the Cosmos Hub,
              the Gravity Bridge will be the most secure, efficient, and
              decentralized cross chain bridge to Ethereum. It will enable
              Cosmos assets to flow into the Ethereum ecosystem as ERC-20 tokens
              and, conversely, native ERC-20 tokens to flow in the Cosmos
              ecosystem.
            </div>
          </div>
          <div class="bottom">
            <div class="avatar-list">
              <div class="overlap">
                <div class="avatar-item">
                  <img src="~static/avatars/informal.svg" alt="icon" />
                </div>
              </div>
              <div class="overlap">
                <div class="avatar-item">
                  <img src="~static/avatars/icf.svg" alt="icon" />
                </div>
              </div>
            </div>
            <div class="footnote tm-rf0 tm-lh-copy tm-medium">
              Althea, Interchain Foundation
            </div>
          </div>
        </div>
        <div class="graphics">
          <!-- GRAPHICS -->
          <graphics-features-gravity-bridge class="graphics__item" />
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
            <div class="title">
              <tm-button
                to-link="internal"
                to="/"
                size="l"
                dark-color="var(--white)"
                light-color="var(--black)"
                background-color="transparent"
                variant="text"
                class="btn tm-rf3 tm-bold tm-lh-title"
                >Chain Name Service
                <span class="icon__right">↗</span></tm-button
              >
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
            <div class="avatar-list">
              <div class="overlap">
                <div class="avatar-item">
                  <img src="~static/avatars/tendermint.svg" alt="icon" />
                </div>
              </div>
              <div class="overlap">
                <div class="avatar-item">
                  <img src="~static/avatars/icf.svg" alt="icon" />
                </div>
              </div>
            </div>
            <div class="footnote tm-rf0 tm-lh-copy tm-medium">
              Tendermint, Interchain Foundation
            </div>
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
              <tm-button
                to-link="internal"
                to="/"
                size="l"
                dark-color="var(--white)"
                light-color="var(--black)"
                background-color="transparent"
                variant="text"
                class="btn tm-rf3 tm-bold tm-lh-title"
                >Staking Derivatives
                <span class="icon__right">↗</span></tm-button
              >
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
            <div class="avatar-list">
              <div class="overlap">
                <div class="avatar-item">
                  <img src="~static/avatars/informal.svg" alt="icon" />
                </div>
              </div>
              <div class="overlap">
                <div class="avatar-item">
                  <img src="~static/avatars/icf.svg" alt="icon" />
                </div>
              </div>
            </div>
            <div class="footnote tm-rf0 tm-lh-copy tm-medium">
              Chorus One, Interchain Foundation
            </div>
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
// GLOBAL
.caption
  color rgba(0, 0, 0, 0.621) // TODO: change to var

.desc
  color var(--trans-gray-200)

.bottom
  display block
  align-items center

  .footnote
    margin-top var(--spacing-5)

.avatar-list
  display flex

.overlap
  margin-right -8px

.avatar-item
  background-color transparent
  box-shadow transparent 0px 0px 0px 4px
  display flex
  justify-content center
  align-items center
  height 2rem
  width 2rem

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
.features-2 .text,
.features-2 .span-8,
.features-2 .span-4
  grid-column span 12

.features-2 .tiles
  grid-column span 12
  position relative
  margin-top var(--spacing-7)

.features-2 .tiles .span-0
  position absolute
  writing-mode vertical-lr
  transform rotate(180deg) translate(90px, -180px)
  top -5rem

.features-2 .span-4
  padding var(--spacing-7)
  display flex
  flex-direction column
  justify-content space-between
  height 38.3125rem
  position relative

.features-2 .span-8,
.features-2 .span-4
  margin-top var(--spacing-10)

.features-2 .span-8
  .row-1,
  .row-2
    background linear-gradient(0deg, #FFFFFF, #FFFFFF)
    border-radius $border-radius-5
    padding var(--spacing-8) var(--spacing-7)

    .caption
      margin-top var(--spacing-7)

.features-2 .span-8 .title
  margin-top var(--spacing-6)

.features-2 .span-8 .row-2
  margin-top var(--spacing-7)

.features-2 .span-4
  &:before
    content url("data:image/svg+xml,%3Csvg width='33' height='33' viewBox='0 0 33 33' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M33 32L1 32L1 0' stroke='black' stroke-width='2'/%3E%3C/svg%3E")
    position absolute
    top 0
    right 0
    transform-origin center
    transform rotate(180deg)

// Interchain staking
.section-interchain-staking
  position relative

.section-interchain-staking .text
  grid-column span 12
  padding var(--spacing-8) var(--spacing-7)
  display flex
  flex-direction column
  justify-content space-between
  height 32.25rem
  &:after
    content url("data:image/svg+xml,%3Csvg width='32' height='2' viewBox='0 0 32 2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 1L32 1' stroke='black' stroke-width='2'/%3E%3C/svg%3E")
    position absolute
    bottom 0
    left 0
    transform-origin center
    transform rotate(0deg) translate(10px, 10px)

.section-interchain-staking .graphics
  grid-column span 12
  position relative

  &:before
    content url("data:image/svg+xml,%3Csvg width='33' height='33' viewBox='0 0 33 33' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M33 32L1 32L1 0' stroke='black' stroke-width='2'/%3E%3C/svg%3E")
    position absolute
    top 0
    right 0
    transform-origin center
    transform rotate(180deg)

  &:after
    content url("data:image/svg+xml,%3Csvg width='33' height='33' viewBox='0 0 33 33' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M33 32L1 32L1 0' stroke='black' stroke-width='2'/%3E%3C/svg%3E")
    position absolute
    bottom 0
    right 0
    transform-origin center
    transform rotate(270deg)

  &__item
    width 100%
    height 100%

// AMM
.section-amm .graphics
  grid-column span 12

  &__item
    width 100%
    height 100%

.section-amm .text
  grid-column span 12
  padding var(--spacing-7)
  display flex
  flex-direction column
  justify-content space-between
  height 32.25rem
  position relative

  &:before
    content url("data:image/svg+xml,%3Csvg width='33' height='33' viewBox='0 0 33 33' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M33 32L1 32L1 0' stroke='black' stroke-width='2'/%3E%3C/svg%3E")
    position absolute
    top 0
    right 0
    transform-origin center
    transform rotate(180deg)

  &:after
    content url("data:image/svg+xml,%3Csvg width='33' height='33' viewBox='0 0 33 33' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M33 32L1 32L1 0' stroke='black' stroke-width='2'/%3E%3C/svg%3E")
    position absolute
    bottom 3px
    right -5px
    transform-origin center
    transform rotate(270deg)

// Gravity bridge
.section-gravity-bridge .text
  grid-column span 12
  padding var(--spacing-7)
  display flex
  flex-direction column
  justify-content space-between
  height 32.25rem
  &:after
    content url("data:image/svg+xml,%3Csvg width='32' height='2' viewBox='0 0 32 2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 1L32 1' stroke='black' stroke-width='2'/%3E%3C/svg%3E")
    position absolute
    bottom 0
    left 0
    transform-origin center
    transform rotate(0deg) translate(10px, 10px)

.section-gravity-bridge .graphics
  grid-column span 12

  &__item
    width 100%
    height 100%

// FEATURES 6
.features-6
  display grid
  grid-template-columns auto
  gap var(--spacing-7)

.features-6 .left,
.features-6 .right
  &:before
    content url("data:image/svg+xml,%3Csvg width='33' height='33' viewBox='0 0 33 33' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M33 32L1 32L1 0' stroke='black' stroke-width='2'/%3E%3C/svg%3E")
    position absolute
    bottom 3px
    right -5px
    transform-origin center
    transform rotate(270deg)
  &:after
    content url("data:image/svg+xml,%3Csvg width='33' height='33' viewBox='0 0 33 33' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M33 32L1 32L1 0' stroke='black' stroke-width='2'/%3E%3C/svg%3E")
    position absolute
    bottom 0
    left 0
    transform-origin center
    transform rotate(0deg)

.features-6 .left,
.features-6 .right
  padding var(--spacing-7)
  display flex
  flex-direction column
  justify-content space-between
  height 32.25rem
  position relative

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
  .bottom
    display grid
    grid-template-columns auto 1fr
    gap 1rem

    .footnote
      margin-top 0

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
  .features-2 .text
    grid-column 3/span 12

  .features-2 .span-8
    .row-1,
    .row-2
      display grid
      grid-auto-flow column
      grid-template-columns min-content 1fr
      gap var(--spacing-7)

      .caption
        margin-top 0

  // Interchain staking
  .section-interchain-staking .text
    grid-column 1/span 7
    position relative

  .section-interchain-staking .graphics
    grid-column 8/span 12

  // AMM
  .section-amm .graphics
    grid-column 1/span 5
    position relative
    &:after
      content url("data:image/svg+xml,%3Csvg width='32' height='2' viewBox='0 0 32 2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 1L32 1' stroke='black' stroke-width='2'/%3E%3C/svg%3E")
      position absolute
      bottom 0
      left 0
      transform-origin center
      transform rotate(0deg) translate(10px, 10px)

  .section-amm .text
    grid-column 7/span 12

  // Gravity bridge
  .section-gravity-bridge .text
    grid-column 1/span 7
    position relative

  .section-gravity-bridge .graphics
    grid-column 8/span 12
    position relative

  // FEATURES 6
  .features-6
    grid-template-columns auto auto
    gap 0

  // FEATURES 7
  .features-7 .title
    grid-column 5/span 12

  .features-7 .description
    grid-column 6/span 10

@media $breakpoint-large
  // FEATURES 2
  .features-2 .span-8
    grid-column 1/span 8
    height auto

  .features-2 .span-4
    grid-column 9/span 12
    height auto
</style>
