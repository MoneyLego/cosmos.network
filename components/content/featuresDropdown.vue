<template>
  <div class="feature-dropdown">
    <div class="dropdown--section_title">Design</div>
    <div class="dropdown-wrap">
      <div class="dropdown-wrap__content type1">
        <component
          :is="dynamicComponent"
          to="/features"
          class="tm-rf-1 tm-medium tm-lh-title tm-link"
        >
          <span>Features</span>
        </component>
      </div>
      <div class="dropdown-wrap__content type1">
        <component
          :is="dynamicComponent"
          to="/learn/staking"
          class="tm-rf-1 tm-medium tm-lh-title tm-link"
        >
          <span>Staking</span>
        </component>
      </div>
      <div class="dropdown-wrap__content type1">
        <component
          :is="dynamicComponent"
          to="/learn/faq"
          class="tm-rf-1 tm-medium tm-lh-title tm-link"
        >
          <span>FAQ</span>
        </component>
      </div>
    </div>
    <div class="dropdown--section_title">Prototyping</div>
    <div class="dropdown-wrap">
      <div class="dropdown-wrap__content type1">
        <component
          :is="dynamicComponent"
          to="/learn/staking"
          class="tm-rf-1 tm-medium tm-lh-title tm-link"
        >
          <span>Staking 1</span>
        </component>
      </div>
      <div class="dropdown-wrap__content type1">
        <component
          :is="dynamicComponent"
          to="/learn/staking"
          class="tm-rf-1 tm-medium tm-lh-title tm-link"
        >
          <span>Staking 2</span>
        </component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    dynamicComponent() {
      return typeof this.$nuxt === 'undefined' ? 'router-link' : 'nuxt-link'
    },
  },
}
</script>

<style lang="stylus" scoped>
*
  color black
</style>
