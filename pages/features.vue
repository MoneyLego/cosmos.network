<template>
  <main>
    <!-- Hero -->
    <div class="section-hero tm-section">
      <div class="tm-wrapper">
        <div class="tm-section tm-container">
          <div class="text tm-grid-base">
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
                <!-- TODO: add url -->
                <tm-button
                  to-link="internal"
                  to="/staking"
                  size="l"
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
    </div>

    <div class="tm-wrapper tm-section tm-container">
      <graphics-features-hero class="graphics" />
      <div class="section-label">
        <div class="label tm-rf1 tm-lh-copy">Securing trade</div>
        <div class="label tm-rf1 tm-lh-copy">Service marketplace</div>
        <div class="label tm-rf1 tm-lh-copy">Promoting exchange</div>
        <div class="label tm-rf1 tm-lh-copy">Facilitating discovery</div>
      </div>
    </div>

    <!-- Features -->
    <div
      class="tm-section tm-container tm-wrapper tm-grid-base section-features"
    >
      <div class="text">
        <div class="title tm-rf5 tm-bold tm-lh-title">
          Cutting-edge Features.
        </div>
      </div>
      <div class="tiles tm-grid-base">
        <div class="span-7">
          <div class="row-1">
            <div class="graphics">
              <graphics-features-staking-dark
                v-if="$nuxt.$colorMode.value === 'dark'"
                class="graphics__item"
              />
              <graphics-features-staking-light v-else class="graphics__item" />
            </div>
            <div class="text">
              <div class="caption tm-rf0 tm-lh-title">
                Capital Formation · Live
              </div>
              <nuxt-link
                to="/staking"
                class="title tm-link tm-rf3 tm-bold tm-lh-title"
              >
                Staking <span class="tm-link-disclosure">-></span>
              </nuxt-link>
              <div class="desc tm-rf0 tm-lh-copy">
                Built on top of the
                <a
                  href="https://tendermint.com/core"
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
            <div class="graphics">
              <graphics-features-voting-dark
                v-if="$nuxt.$colorMode.value === 'dark'"
                class="graphics__item"
              />
              <graphics-features-voting-light v-else class="graphics__item" />
            </div>
            <div class="text">
              <div class="caption tm-rf0 tm-lh-title">Governance · Live</div>
              <div class="title">
                <!-- TODO: add url -->
                <tm-button
                  to-link="internal"
                  to="/"
                  size="l"
                  variant="text"
                  class="btn tm-rf3 tm-bold tm-lh-title"
                  >Voting <span class="icon__right">-></span></tm-button
                >
              </div>
              <div class="desc tm-rf0 tm-lh-copy">
                Staking ATOMs gives rights to participate in the open governance
                process, which governs the evolution of the network.
              </div>
            </div>
          </div>
        </div>
        <div class="span-4">
          <div class="top">
            <span class="ne-accent"></span>
            <div class="caption tm-rf0 tm-lh-title">Account System · 2021</div>
          </div>
          <div class="mid">
            <a
              href="https://medium.com/chainapsis/why-interchain-accounts-change-everything-for-cosmos-interoperability-59c19032bf11"
              class="title tm-link tm-rf3 tm-bold tm-lh-title"
            >
              Interchain Accounts <span class="tm-link-disclosure">↗</span>
            </a>
            <div class="desc tm-rf0 tm-lh-copy">
              Interchain Accounts are the accounts of the IBC-enabled world.
              Essentially, they allow blockchains to securely control accounts
              on other chains over IBC. With this feature, users will be able to
              access the entire Interchain through their single Cosmos Hub
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

    <!-- Interchain staking -->
    <div
      class="tm-container tm-wrapper tm-grid-base section-interchain-staking"
    >
      <div class="text">
        <div class="top">
          <div class="caption tm-rf0 tm-lh-title">
            Shared Security · Late 2021
          </div>
        </div>
        <div class="mid">
          <div class="title tm-rf3 tm-bold tm-lh-title">
            <tm-button
              to-link="external"
              href="https://github.com/informalsystems/cross-chain-validation/blob/2b7e5ddebd10c9eea743989ca3fbcba990db4987/spec/valset-update-protocol.md"
              size="l"
              variant="text"
              class="btn tm-rf3 tm-bold tm-lh-title"
              >Interchain Staking <span class="icon__right">↗</span></tm-button
            >
          </div>
          <div class="desc tm-rf0 tm-lh-copy">
            Staked ATOMs will be able to secure more than just the Cosmos Hub.
            In practice, validators will be able to validate chains that request
            it (called child-chains) on an opt-in basis, with their ATOM
            delegation as collateral. In exchange for securing child-chains,
            ATOM stakers will be rewarded with additional rewards. The more
            child-chains, the more rewards!
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
        <span class="horizontal-line"></span>
      </div>
      <div class="graphics">
        <span class="ne-accent"></span>
        <graphics-features-interchain-staking-dark
          v-if="$nuxt.$colorMode.value === 'dark'"
          class="graphics__item"
        />
        <graphics-features-interchain-staking-light
          v-else
          class="graphics__item"
        />
        <span class="se-accent"></span>
      </div>
    </div>

    <!-- AMM -->
    <div class="tm-container tm-wrapper tm-grid-base section-amm">
      <div class="graphics">
        <graphics-features-amm-dark
          v-if="$nuxt.$colorMode.value === 'dark'"
          class="graphics__item"
        />
        <graphics-features-amm-light v-else class="graphics__item" />
        <span class="horizontal-line"></span>
      </div>
      <div class="text">
        <span class="ne-accent"></span>
        <div class="top">
          <div class="caption tm-rf0 tm-lh-title">
            Capital Formation · Q2 2021
          </div>
        </div>
        <div class="mid">
          <div class="title">
            <tm-button
              to-link="external"
              href="https://github.com/tendermint/liquidity#liquidity-module"
              size="l"
              variant="text"
              class="btn tm-rf3 tm-bold tm-lh-title"
              >Gravity DEX <span class="icon__right">↗</span></tm-button
            >
          </div>
          <div class="desc tm-rf0 tm-lh-copy">
            The Cosmos Hub’s Gravity DEX will enable users to seamlessly swap
            digital assets coming from all over the interchain. This service
            improves on existing designs by combining AMM features (like that of
            Uniswap) with an orderbook-based model, providing a richer and more
            efficient trading experience.
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
        <span class="se-accent"></span>
      </div>
    </div>

    <!-- Gravity bridge -->
    <div class="tm-container tm-wrapper tm-grid-base section-gravity-bridge">
      <div class="text">
        <div class="top">
          <div class="caption tm-rf0 tm-lh-title">Capital Formation · 2021</div>
        </div>
        <div class="mid">
          <div class="title">
            <tm-button
              to-link="external"
              href="https://blog.althea.net/gravity-bridge"
              size="l"
              variant="text"
              class="btn tm-rf3 tm-bold tm-lh-title"
              >Gravity bridge<span class="icon__right">↗</span></tm-button
            >
          </div>
          <div class="desc tm-rf0 tm-lh-copy">
            Backed by billions of dollars of Atoms staked on the Cosmos Hub, the
            Gravity Bridge will be the most secure, efficient, and decentralized
            cross chain bridge to Ethereum. It will enable Cosmos assets to flow
            into the Ethereum ecosystem as ERC-20 tokens and, conversely, native
            ERC-20 tokens to flow in the Cosmos ecosystem.
          </div>
        </div>
        <div class="bottom">
          <div class="avatar-list">
            <div class="overlap">
              <div class="avatar-item">
                <img src="~static/avatars/althea.svg" alt="icon" />
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
        <span class="horizontal-line"></span>
      </div>
      <div class="graphics">
        <!-- GRAPHICS -->
        <graphics-features-gravity-bridge class="graphics__item" />
      </div>
    </div>

    <!-- CNS -->
    <div class="tm-container tm-wrapper tm-grid-base section-cns">
      <div class="left">
        <span class="sw-accent"></span>
        <div class="top">
          <div class="caption tm-rf0 tm-lh-title">Service Discovery · 2021</div>
        </div>
        <div class="mid">
          <div class="title">
            <tm-button
              to-link="external"
              href="https://github.com/tendermint/cns"
              size="l"
              variant="text"
              class="btn tm-rf3 tm-bold tm-lh-title"
              >Chain Name Service <span class="icon__right">↗</span></tm-button
            >
          </div>
          <div class="desc tm-rf0 tm-lh-copy">
            Just like websites have domain names, blockchains will have chain
            names. These chain names will be managed on the Cosmos Hub, which
            will operate a Chain Name Service. They will make it much easier for
            users of the Interchain to identify the chain(s) they want to
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
        <span class="se-accent"></span>
      </div>
      <div class="right">
        <span class="sw-accent"></span>
        <div class="top">
          <div class="caption tm-rf0 tm-lh-title">Capital Formation · 2022</div>
        </div>
        <div class="mid">
          <div class="title tm-rf3 tm-bold tm-lh-title">
            <tm-button
              to-link="external"
              href="https://github.com/ChorusOne/liquid-staking"
              size="l"
              variant="text"
              class="btn tm-rf3 tm-bold tm-lh-title"
              >Staking Derivatives <span class="icon__right">↗</span></tm-button
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
                <img src="~static/avatars/chorus-one.svg" alt="icon" />
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
        <span class="se-accent"></span>
      </div>
    </div>

    <!-- Fees -->
    <div class="tm-section tm-container tm-wrapper tm-grid-base section-fees">
      <div class="graphics">
        <graphics-features-rewards-fees-dark
          v-if="$nuxt.$colorMode.value === 'dark'"
          class="graphics__item"
        />
        <graphics-features-rewards-fees-light v-else class="graphics__item" />
      </div>
      <div class="title tm-rf5 tm-bold tm-lh-title">
        Services generate fees. Fees generate rewards.
      </div>
      <div class="description">
        <div class="subtitle tm-rf1 tm-lh-copy">
          The more activity on the Hub, the more fees paid by services, which in
          turn, generates rewards for staked ATOM holders.
        </div>
        <tm-button
          to-link="internal"
          to="/learn/faq/what-is-staking"
          size="l"
          variant="text"
          class="btn"
          >What is staking <span class="icon__right">--></span></tm-button
        >
      </div>
    </div>

    <section-cta-cards />
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: 'Features',
    }
  },
}
</script>

<style lang="stylus" scoped>
// Global
.ne-accent
  angle-accent(ne)
  position absolute
  top 0
  right 0

.sw-accent
  angle-accent(sw)
  position absolute
  bottom 0
  left 0

.se-accent
  angle-accent(se)
  position absolute
  bottom 0
  right 0

.horizontal-line
  display block
  width var(--spacing-6)
  border-bottom 0.0625rem solid
  position absolute
  bottom 0
  left 0

.bottom
  display block
  align-items center
  margin-top var(--spacing-9)

  .footnote
    margin-top var(--spacing-5)

.caption
  color var(--white-500)

  .light-mode &
    color var(--trans-gray-600)

.desc
  color var(--white-800)

  .light-mode &
    color var(--trans-gray-200)

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

// Hero
.section-hero .text .title,
.section-hero .text .split
  grid-column span 12

.section-hero .text .split,
.section-hero .text .split .right
  margin-top var(--spacing-9)

.section-hero .text .split .right .subtitle
  margin-bottom var(--spacing-6)

.section-hero .text .split .subtitle
  color var(--white-800)

  .light-mode &
    color var(--black)

// Graphics
.section-label
  display flex
  flex-direction row
  justify-content center
  gap var(--spacing-11)
  margin-top -38%

.label
  writing-mode vertical-rl
  transform rotate(-180deg)
  text-align right

  &:after
    content ""
    display block
    height auto
    width 1px
    background linear-gradient(180deg, var(--transparent) 16%, var(--white) 40%)
    margin-right auto
    margin-left auto

.label
  &:nth-child(1)
    margin-top 11.25rem

  &:nth-child(3)
    margin-top 6rem

  &:nth-child(4)
    margin-top 19rem

// Feature
.section-features .text,
.section-features .graphics,
.section-features .span-7,
.section-features .span-4
  grid-column span 12

.section-features .graphics
  display grid
  place-items center

  &__item
    width auto

.section-features .tiles
  grid-column span 12
  position relative
  margin-top var(--spacing-10)

.section-features .span-4
  display flex
  flex-direction column
  justify-content space-between
  height 38.3125rem
  position relative
  margin-top var(--spacing-10)

.section-features .span-4 .caption
  margin-top var(--spacing-7)

.section-features .title
  display block
  margin-top var(--spacing-6)

.section-features .desc
  margin-top var(--spacing-5)

.section-features .span-7 .desc
  color var(--white)

  .light-mode &
    color var(--trans-gray-200)

.section-features .span-7
  .row-1,
  .row-2
    border-radius $border-radius-5
    padding var(--spacing-8) var(--spacing-7)
    background #171717

    .light-mode &
      background linear-gradient(0deg, #FFFFFF, #FFFFFF)

    .caption
      margin-top var(--spacing-7)
      color var(--white-500)

      .light-mode &
        color var(--trans-gray-600)

.section-features .span-7 .row-2
  margin-top var(--spacing-7)

// Interchain staking
.section-interchain-staking .text
  grid-column span 12
  padding var(--spacing-8) var(--spacing-7)
  display flex
  flex-direction column
  justify-content space-between
  height 32.25rem
  position relative

.section-interchain-staking .graphics
  grid-column span 12
  position relative

  &__item
    width 100%
    height auto

// AMM
.section-amm
  display flex
  flex-direction column-reverse

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

// Gravity bridge
.section-gravity-bridge .text
  grid-column span 12
  padding var(--spacing-7)
  display flex
  flex-direction column
  justify-content space-between
  height 32.25rem

.section-gravity-bridge .graphics
  grid-column span 12

  &__item
    width 100%
    height 100%

// CNS
.section-cns
  display grid
  grid-template-columns auto
  gap var(--spacing-7)
  padding-bottom var(--spacing-10)

.section-cns .left,
.section-cns .right
  padding var(--spacing-7)
  display flex
  flex-direction column
  justify-content space-between
  height 32.25rem
  position relative

// Fees
.section-fees
  .title,
  .description,
  .graphics
    grid-column span 12

.section-fees .graphics__item
  width 100%
  height 100%

.section-fees .description .subtitle
  margin-top var(--spacing-8)

.section-fees .description .btn
  margin-top var(--spacing-6)

@media $breakpoint-medium
  .bottom
    display grid
    grid-template-columns auto 1fr
    gap 1rem

    .footnote
      margin-top 0

  // Hero
  .section-hero .text .title,
  .section-hero .text .split
    grid-column 2/span 12

  .section-hero .text .split
    display grid
    grid-template-columns auto auto
    gap var(--spacing-7)
    z-index 1

  .section-hero .text .split .left,
  .section-hero .text .split .right
    grid-column unset
    height 8.5rem
    margin-top 0

  // Feature
  .section-features .graphics
    grid-column 1/span 2
    display flex
    align-items center
    position relative
    z-index 0

    &__item
      position absolute
      left -10rem

  .section-features .text
    grid-column 3/span 10

  .section-features .tiles .text
    max-width 27.75rem
    z-index 1

  .section-features .span-7
    .row-1,
    .row-2
      display grid
      grid-auto-flow column
      grid-template-columns min-content 1fr
      gap var(--spacing-7)

      .caption
        margin-top 0

  .section-features .span-4
    margin-top 0

  .section-features .span-4 .caption
    margin-top 0

  // Interchain staking
  .section-interchain-staking .text
    grid-column 1/span 6

  .section-interchain-staking .graphics
    grid-column 8/ 13
    display grid
    place-items center
    max-height 32.25rem

    &__item
      width auto

  // AMM
  .section-amm
    display grid
    flex-direction row-reverse

  .section-amm .graphics
    grid-column 1/span 5
    position relative

  .section-amm .text
    grid-column 7/ 13

  // Gravity bridge
  .section-gravity-bridge .text
    grid-column 1/span 7
    position relative

  .section-gravity-bridge .graphics
    grid-column 8/ 12
    position relative

  // CNS
  .section-cns
    grid-template-columns auto auto
    gap 0

  // Fees
  .section-fees .graphics
    grid-column 1/span 4
    position relative

    &__item
      position absolute
      top -310%
      left -18vw
      width unset
      height unset

  .section-fees .title
    grid-column 5/ 12

  .section-fees .description
    grid-column 6/ 10

@media $breakpoint-large
  // Feature
  .section-features .span-7
    grid-column 1/span 7
    height auto

  .section-features .span-4
    grid-column 9/ 13
    height auto
    padding-top var(--spacing-7)
    padding-right var(--spacing-7)
    padding-bottom var(--spacing-7)
</style>
