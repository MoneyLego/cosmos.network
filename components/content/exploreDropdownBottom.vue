<template>
  <div class="dropdown-container">
    <div class="dropdown-wrap">
      <tm-link
        href="https://blog.cosmos.network"
        class="dropdown-wrap__content type2"
      >
        <div>
          <div class="title tm-rf0 tm-lh-copy">Blog &#8594;</div>
          <div class="subtitle tm-rf-1 tm-lh-copy">
            Stay on top of the latest news straight from cosmonaut teams.
          </div>
        </div>
      </tm-link>
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
