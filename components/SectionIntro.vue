<template>
  <div>
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
import IconTwitter from '~/components/icons/IconTwitter.vue'
import IconDiscord from '~/components/icons/IconDiscord.vue'
import IconTelegram from '~/components/icons/IconTelegram.vue'
import IconCosmos from '~/components/icons/IconCosmos.vue'

export default {
  components: {
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

@media $breakpoint-medium
  // Community
  .section-community
    .text
      grid-column 1/span 4

    .list
      grid-column 7/span 4
      margin-top 0

@media $breakpoint-large
  // Community
  .section-community
    .text
      grid-column 1/span 5
</style>
