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

    <div class="tm-section tm-container">
      <div class="title tm-rf5 tm-bold tm-lh-title">
        Join the worldwide community.
      </div>
      <div class="subtitle tm-rf1 tm-lh-copy">
        Join a fast-growing community of developers and innovators connected all
        over the world, building the new era of the internet.
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
  </div>
</template>

<script>
import Carousel from 'vue-slick-carousel'
// TODO: tweak custom css and remove these .css imports
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: { Carousel },
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

@media $breakpoint-small
  .row
    display block

@media $breakpoint-medium
  .center
    text-align center
    max-width 29.0625rem
</style>
