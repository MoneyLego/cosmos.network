<template>
  <div class="dropdown-container">
    <div class="dropdown-wrap">
      <NuxtLink to="/starport" class="dropdown-wrap__content type2">
        <div>
          <div class="overline tm-rf-1 tm-medium tm-lh-title tm-overline">
            Starport
          </div>
          <div class="title tm-rf0 tm-lh-copy">
            Build a chain in minutes &#8594;
          </div>
          <div class="subtitle tm-rf-1 tm-lh-copy">
            Create your own token. Build your own community. Launch today.
          </div>
        </div>
      </NuxtLink>
      <div class="graphics">
        <graphics-coin-atom :coins="3" class="graphics__item" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.title
  margin-top var(--spacing-3)

.subtitle
  margin-top var(--spacing-3)
</style>
