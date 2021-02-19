<template>
  <div class="tm-wrapper">
    <div class="tm-section tm-container">
      <div class="title tm-rf5 tm-bold tm-lh-title">
        A new world of connected services.
      </div>
      <div class="subtitle tm-rf1 tm-lh-copy">
        The Cosmos Hub is a blockchain that provides vital services to the
        Interchain.
      </div>
      <Carousel :arrows="true" :dots="true" class="slider">
        <div v-for="item in benefits" :key="item.title" class="text">
          <div class="text__title tm-rf1 tm-bold tm-lh-title">
            {{ item.title }}
          </div>
          <div class="text__subtitle tm-rf0 tm-lh-copy">
            {{ item.subtitle }}
          </div>
        </div>
      </Carousel>
    </div>

    <div class="tm-section tm-container center">
      <div class="title tm-rf5 tm-bold tm-lh-title">Secured by the ATOMs.</div>
      <div class="subtitle tm-rf1 tm-lh-copy">
        In return for securing the Hub services, transaction feed and staking
        rewards are distributed for ATOM stakers.
      </div>
      <div class="row">
        <tm-button
          to-link="internal"
          to="/staking"
          size="l"
          color="var(--white)"
          dark-background-color="var(--white-200)"
          light-background-color="var(--black)"
          class="btn"
          >Start staking</tm-button
        >
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
    </div>

    <div class="tm-section tm-container">
      <div class="title tm-rf5 tm-bold tm-lh-title">
        Be part of the open economy of the future.
      </div>
    </div>

    <div class="tm-section tm-container">
      <div class="title tm-rf5 tm-bold tm-lh-title">
        Powered by the best blockchain tech has to offer.
      </div>
      <div class="subtitle tm-rf1 tm-lh-copy">
        The Cosmos Hub is powered by the
        <span class="tm-bold">Cosmos SDK</span>, a leading blockchain framework
        securing over $18B USD in value across 200+ interconnected blockchains.
      </div>
    </div>

    <div class="tm-section tm-container">
      <div class="title tm-rf5 tm-bold tm-lh-title">Build upon value.</div>
      <div class="subtitle tm-rf1 tm-lh-copy">
        Developers in Cosmos are the pioneers of the new era of blockchain
        technology. Join a fast-growing token economy and build upon a secure
        and stable foundation.
      </div>
      <tm-button
        to-link="external"
        href="http://hub.cosmos.network"
        size="l"
        color="var(--white)"
        background-color="var(--black)"
        class="btn"
        >View the docs <span class="icon__right">&#8599;</span></tm-button
      >
    </div>

    <div class="tm-section tm-container tm-grid-base">
      <div class="text-community">
        <div class="title tm-rf5 tm-bold tm-lh-title">
          Join the worldwide community.
        </div>
        <div class="subtitle tm-rf1 tm-lh-copy tm-measure">
          Join a fast-growing community of developers and innovators connected
          all over the world, building the new era of the internet.
        </div>
        <tm-button
          to-link="external"
          href="https://cosmos.network/community"
          size="l"
          dark-color="var(--white)"
          light-color="var(--black)"
          background-color="transparent"
          variant="text"
          class="btn"
          >Cosmos Community <span class="icon__right">-></span></tm-button
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
</template>

<script>
import Carousel from 'vue-slick-carousel'

import IconTwitter from '~/components/icons/IconTwitter.vue'
import IconDiscord from '~/components/icons/IconDiscord.vue'
import IconTelegram from '~/components/icons/IconTelegram.vue'
import IconCosmos from '~/components/icons/IconCosmos.vue'

// TODO: tweak custom css and remove these .css imports
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: {
    Carousel,
    IconTwitter,
    IconDiscord,
    IconTelegram,
    IconCosmos,
  },
  data() {
    return {
      benefits: [
        {
          title: 'Marketplace',
          subtitle:
            'Set to operate a next-gen decentralized exchange, swapping digital assets from across the Interchain, with very low fees and instant transaction confirmation.',
        },
        {
          title: 'Security provider',
          subtitle:
            'With the upcoming Cross-chain Staking feature, the ATOM token will soon be securing many chains, in exchange for additional staking rewards.',
        },
        {
          title: 'Router',
          subtitle:
            'A core mission of the Hub – to connect chains by establishing IBC connections with compatible chains and operating decentralized bridges with chains like Ethereum and Bitcoin.',
        },
        {
          title: 'Custodian',
          subtitle:
            'Located at the crossroads of the Interchain, the Hub is extremely secure, the best place to hold digital assets and manage accounts across many chains.',
        },
      ],
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
.subtitle,
.btn
  margin-top var(--spacing-6)

.row
  display flex
  flex-direction column
  margin-top var(--spacing-8)

.slider
  margin-top var(--spacing-10)

// Community
.text-community,
.list
  grid-column span 12

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
  .row
    display block

@media $breakpoint-medium
  .center
    text-align center
    max-width 29.0625rem

  .text-community
    grid-column 2/span 5

  .list
    grid-column 8/span 11
    margin-top 0
</style>
