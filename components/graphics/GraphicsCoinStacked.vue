<template>
  <div class="card-atom">
    <figure class="card__graphics">
      <div class="graphics">
        <div :strength="-15" class="coin">
          <img src="~/assets/images/coin-atom.svg" />
        </div>
        <div :strength="-10" class="coin">
          <img src="~/assets/images/coin-atom.svg" />
        </div>
        <div :strength="-25" class="coin">
          <img src="~/assets/images/coin-atom.svg" />
        </div>
      </div>
    </figure>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.card__graphics
  width 100%
  max-width 22rem
  margin auto

  .graphics
    position relative
    height auto

.card-atom
  .graphics
    padding-bottom 89%
    margin-top -13%

  .coin
    position absolute
    width 73%

  .coin:first-child
    top -8%
    left 16%
    img
      transform rotate(15deg)

  .coin:nth-child(2)
    top 49%
    left 35%
    img
      transform rotate(30deg)

  .coin:last-child
    top 21%
    left 7%
    width 77%
    img
      transform rotate(-15deg)
</style>
