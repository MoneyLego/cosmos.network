<template>
  <div>
    <!-- Section tech - to move to component -->
    <div class="section-tech tm-section tm-container tm-wrapper tm-grid-base">
      <div class="graphics">
        <graphics-hub-tech-stack />
        <span class="tm-crosshair"></span>
      </div>
      <div class="title">
        <h2 class="overline tm-rf0 tm-lh-title tm-medium tm-overline tm-muted">
          Technology
        </h2>
        <div class="tm-rf5 tm-bold tm-lh-title tm-title">
          The most trusted way to build value.
        </div>
      </div>
      <div class="subtitle">
        <p
          class="tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure-narrow tm-measure-narrower-l-up"
        >
          <a href="cosmos.network/sdk" class="tm-link tm-medium">Cosmos SDK</a>
          is a state-of-the-art blockchain framework that powers the Cosmos Hub
          and its rapidly expanding orbit of sovereign chains.
        </p>
        <p
          class="tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure-narrow tm-measure-narrower-l-up"
        >
          Developers can use the SDK to build innovative applications that
          create value through exchange with the Cosmos Hub.
        </p>
      </div>
      <div class="stat stat-tech">
        <h3
          class="stat-title tm-rf0 tm-lh-title tm-medium tm-overline tm-muted"
        >
          Secure tech
        </h3>
        <div class="stat-value tm-rf7 tm-lh-title tm-bold tm-title">
          $50B<span class="tm-rf4 tm-lh-title tm-bold super">+</span>
        </div>
        <p class="stat-subtitle tm-rf0 tm-lh-title">
          Digital assets under management.
        </p>
      </div>
      <div class="stat stat-pos">
        <h3
          class="stat-title tm-rf0 tm-lh-title tm-medium tm-overline tm-muted"
        >
          Proof-of-Stake
        </h3>
        <div class="stat-value tm-rf7 tm-lh-title tm-bold tm-title">
          <icon-plant-leaf class="icon" />99%<span
            class="tm-rf-1 tm-rf1-m-up tm-rf2-l-up tm-lh-title tm-bold super"
            >lower carbon footprint</span
          >
        </div>
        <p class="stat-subtitle tm-rf0 tm-lh-title">
          Blockchain tech that truly scales.
        </p>
      </div>
      <div class="stat stat-fees">
        <h3
          class="stat-title tm-rf0 tm-lh-title tm-medium tm-overline tm-muted"
        >
          Low fees
        </h3>
        <div class="stat-value tm-rf7 tm-lh-title tm-bold tm-title">$0.01</div>
        <p class="stat-subtitle tm-rf0 tm-lh-title">
          Enjoy the lowest fees – almost zero.
        </p>
      </div>
      <div class="stat stat-tx">
        <h3
          class="stat-title tm-rf0 tm-lh-title tm-medium tm-overline tm-muted"
        >
          Fast transactions
        </h3>
        <div class="stat-value tm-rf7 tm-lh-title tm-bold tm-title">7 sec</div>
        <p class="stat-subtitle tm-rf0 tm-lh-title">
          Transactions confirmed in seconds.
        </p>
      </div>
    </div>

    <!-- Section developer - to move to component -->
    <div
      class="section-developer tm-section tm-container tm-wrapper tm-grid-base"
    >
      <div class="tm-grid-base">
        <div class="caption tm-rf0 tm-medium tm-lh-title tm-overline">
          Developers
        </div>
        <div class="title tm-rf5 tm-bold tm-lh-title tm-measure">
          Build upon value.
        </div>
        <div class="subtitle tm-rf1 tm-lh-copy tm-measure">
          Developers in Cosmos are the pioneers of the new era of blockchain
          technology. Join a fast-growing token economy and build upon a secure
          and stable foundation.
        </div>
      </div>
    </div>

    <!-- Section community - to move to component -->
    <div class="section-community tm-section tm-container tm-grid-base">
      <div class="tm-wrapper">
        <div class="text">
          <div class="title tm-rf5 tm-bold tm-lh-title">
            Join the worldwide community.
          </div>
          <div class="subtitle tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure">
            Join a fast-growing community of developers and innovators connected
            all over the world, building the new era of the internet.
          </div>
          <tm-button
            to-link="external"
            href="https://cosmos.network/community"
            size="l"
            variant="text"
            class="btn"
            >Cosmos Community <span class="icon__right">&rarr;</span></tm-button
          >
        </div>
        <div class="list">
          <div class="list-wrapper">
            <a
              v-for="item in links"
              :key="item.logo"
              :href="item.url"
              target="_blank"
              rel="noreferrer noopener"
              class="list-item"
            >
              <div class="icon">
                <component :is="`icon-${item.logo}`" />
              </div>
              <div class="details">
                <div class="title tm-rf1 tm-bold tm-lh-title">
                  {{ item.title }}
                </div>
                <div class="desc tm-rf0 tm-lh-copy">
                  {{ item.desc }}
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconPlantLeaf from '~/components/icons/IconPlantLeaf.vue'
import IconTwitter from '~/components/icons/IconTwitter.vue'
import IconDiscord from '~/components/icons/IconDiscord.vue'
import IconTelegram from '~/components/icons/IconTelegram.vue'
import IconCosmos from '~/components/icons/IconCosmos.vue'

export default {
  components: {
    IconPlantLeaf,
    IconTwitter,
    IconDiscord,
    IconTelegram,
    IconCosmos,
  },
  data() {
    return {
      links: [
        {
          url: 'https://t.me/cosmosproject',
          logo: 'telegram',
          title: 'Community Chat',
          desc:
            'Ask general questions and chat with the worldwide community on Telegram.',
        },
        {
          url: 'https://twitter.com/cosmos',
          logo: 'twitter',
          title: 'Twitter',
          desc:
            'Follow @cosmos to get the latest news and updates from across the ecosystem.',
        },
        {
          url: 'https://discord.gg/vcExX9T',
          logo: 'discord',
          title: 'Developer Chat',
          desc:
            'Have technical questions about Cosmos tools? Ask a developer on the Community Discord.',
        },
        {
          url: 'https://forum.cosmos.network',
          logo: 'cosmos',
          title: 'Cosmos Forum',
          desc:
            'Thinking about becoming a validator or interested in network matters? Join the discussion.',
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
.subtitle
  margin-top var(--spacing-6)

.btn-group
  display flex
  flex-direction column
  margin-top var(--spacing-8)
  gap 0 var(--grid-gap-x)


// Tech
.section-tech
  > *
    grid-column 1/-1

  .graphics
    position relative
    min-width 23rem

  .hub-tech-stack
    right var(--spacing-11)

  .tm-crosshair
    margin-bottom var(--spacing-6)

  .title .tm-title
    max-width 9em
    margin-top var(--spacing-6)

  .overline
    position relative

  .subtitle
    position relative
    margin-top var(--spacing-8)

    &:before
      content ""
      angle-accent(nw)
      margin-left calc(-1 * var(--grid-gap-x))
      margin-bottom var(--spacing-5)


.stat
  position relative
  margin-top var(--spacing-10)

  .super
    margin-left var(--spacing-2)

.stat-value
  display flex
  align-items flex-start
  margin var(--spacing-3) 0

.stat-pos
  .icon
    align-self start
    margin-top var(--spacing-4)
    margin-right var(--spacing-1)

  .stat-value
    align-items center

  .super
    max-width 4.5em
    margin-left var(--spacing-6)


// Community
.section-community
  .text,
  .list
    grid-column 1/-1

  .list
    margin-top var(--spacing-7)

  .list-item
    display grid
    grid-auto-flow column
    grid-template-columns min-content 1fr
    gap var(--spacing-7)
    border-radius $border-radius-5
    hover-raise(-3px)

  a.list-item + a.list-item
    margin-top var(--spacing-7)

  .details .desc
    margin-top var(--spacing-3)

@media $breakpoint-small
  .btn-group
    display block

  // Tech
  .section-tech
    > *
      grid-column auto

    .graphics
      grid-column 1/-1

    .title,
    .subtitle
      grid-column 2 / -1

  // Tech > Stats
  .stat
    grid-column span 2

@media $breakpoint-medium
  // Tech > Stats
  .stat
    grid-column span 4

  .stat-value
    margin var(--spacing-4) 0

  // Community
  .section-community
    .text
      grid-column 1/span 4

    .list
      grid-column 7/span 4
      margin-top 0

@media $breakpoint-large
  // Tech
  .section-tech
    .tm-crosshair
      margin-top -6rem

    .title,
    .subtitle
      grid-column span 4

    .subtitle
      margin-top auto

  // Community
  .section-community
    .text
      grid-column 1/span 5

@media $breakpoint-xl
  // Tech
  .section-tech
    .title
      grid-column 2 / span 6
    .subtitle
      grid-column span 5

  // Tech > Stats
  .stat-tech,
  .stat-fees
    grid-column 2 / span 5

  .stat-pos,
  .stat-tx
    grid-column 8 / span 5
</style>
