<template>
  <main>
    <div class="section-hero section-first">
      <div class="tm-wrapper tm-section tm-container tm-grid-base">
        <div class="text">
          <div class="overline tm-rf0 tm-medium tm-lh-title tm-overline">
            Ecosystem
          </div>
          <h1 class="title tm-rf6 tm-bold tm-lh-title">
            40+ wallets and block explorers for Cosmos
          </h1>
          <p class="subtitle tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure">
            Discover a wide variety of apps, blockchains, wallets and explorers,
            built in the Cosmos ecosystem by developers and contributors from
            across the globe.
          </p>
          <div class="btn-group">
            <tm-button
              to-link="internal"
              to="/ecosystem/apps"
              size="m"
              variant="text"
              class="btn"
              >Apps &amp; Services
            </tm-button>
            <tm-button
              to-link="internal"
              to="/ecosystem/wallets"
              size="m"
              class="btn"
              >Wallets
            </tm-button>
          </div>
        </div>
      </div>
    </div>
    <SectionItems :items="wallets.records" />
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import SectionItems from '~/components/ecosystem/SectionItems.vue'
export default {
  components: {
    SectionItems,
  },
  computed: {
    ...mapGetters(['wallets']),
  },
  async mounted() {
    await this.$store.commit('initApps')
  },
}
</script>

<style lang="stylus" scoped>
// Global
.btn-group
  display flex
  flex-direction column
  margin-top var(--spacing-8)
  gap 0 var(--spacing-7)

.grid-col-2
  display grid
  grid-template-columns repeat(1, 1fr)

.center
  display grid
  place-items center
  center()

// Hero
.section-hero
  text-align center

.section-hero
  .text
  .demo
    grid-column 1/-1
    position relative
    z-index 1

.section-hero .overline
  color var(--white-500)

.section-hero .title
  margin-top var(--spacing-5)

.section-hero .subtitle
  margin-top var(--spacing-7)
  center()

@media $breakpoint-small
  .btn-group
    display block

  .grid-col-2
    grid-template-columns repeat(2, 1fr)

@media $breakpoint-xl
  .section-hero .text
      grid-column 2/span 10
</style>
