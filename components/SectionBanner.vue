<template>
  <div class="tm-wrapper tm-section">
    <div class="tm-container tm-grid-base banner-item">
      <div class="text">
        <div class="title tm-rf5 tm-bold tm-lh-title">Become a Cosmonaut.</div>
        <div class="subtitle tm-rf1 tm-lh-copy">
          Learn about staking ATOMs on the Cosmos Hub.
        </div>
        <tm-button
          to-link="internal"
          to="/staking"
          size="l"
          color="var(--white)"
          background-color="#171717"
          class="btn"
          >Stake ATOMs</tm-button
        >
      </div>
      <!-- GRAPHICs -->
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.dark-mode .banner-item
  color var(--white)
  background #171717

.light-mode .banner-item
  color var(--black)
  background var(--white)

.banner-item
  padding var(--spacing-10)
  display block
  border-radius $border-radius-5
  hover-raise(-3px)
  box-shadow var(--elevation-4)

.banner-item .text
  grid-column span 12

.banner-item .title
  width fit-content

.banner-item .subtitle
  margin-top var(--spacing-5)
  width fit-content

.banner-item .btn
  margin-top var(--spacing-8)

@media $breakpoint-medium
  .banner-item .text
    grid-column 2/span 9
</style>
