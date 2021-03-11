<template>
  <main>
    <div class="tm-wrapper tm-container tm-section">
      <h1 class="tm-rf5 tm-lh-title tm-bold">Graphical components</h1>
      <section class="tm-section">
        <h2 class="tm-rf3 tm-lh-title tm-bold">Coins</h2>
        <div class="graphics">
          <graphics-coin-blank />
          <graphics-coin-blank :shadow="true" />
          <graphics-coin-blank :shadow="true" lighting="left" />
          <graphics-coin-blank lighting="bottom" />
          <graphics-coin-atom />
        </div>
      </section>
      <section class="tm-section">
        <h2 class="tm-rf3 tm-lh-title tm-bold">Navigator Gems</h2>
        <graphics-navigator-gem />
      </section>
      <section class="tm-section">
        <h2 class="tm-rf3 tm-lh-title tm-bold">Validators</h2>
        <div class="graphics">
          <graphics-validator />
          <graphics-validator :coins="true" />
          <graphics-validator :planet="true" />
        </div>
      </section>
    </div>
  </main>
</template>
<style lang="stylus" scoped>
.graphics
  display flex
  gap var(--spacing-9)
  align-items flex-end
  flex-wrap wrap
  margin var(--spacing-8) auto
</style>
