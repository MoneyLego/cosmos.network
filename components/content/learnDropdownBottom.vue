<template>
  <div class="dropdown-container">
    <div class="bottom-wrapper">
      <NuxtLink to="/learn/get-atom" class="dropdown-wrap__content">
        <div class="text">
          <div class="title tm-rf0 tm-lh-copy">Get ATOM &#8594;</div>
          <div class="subtitle tm-rf-1 tm-lh-copy">
            Four simple steps to get ATOM and start earning rewards.
          </div>
        </div>
      </NuxtLink>
      <div class="graphics">
        <graphics-validator :coins="3" class="graphics__item" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped></style>
