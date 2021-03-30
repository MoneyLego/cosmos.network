<template>
  <div class="dropdown-container">
    <div class="dropdown-wrap">
      <div class="left">
        <tm-link
          href="https://tutorials.cosmos.network"
          class="dropdown-wrap__content"
        >
          <span>Tutorials</span></tm-link
        >
        <tm-link
          href="https://docs.cosmos.network"
          class="dropdown-wrap__content"
        >
          <span>Documentation</span></tm-link
        >
      </div>
      <div class="right">
        <tm-link href="https://v1.cosmos.network/sdk" class="wrapper">
          <div class="icon">
            <img src="~/static/symbols/sdk.svg" />
          </div>
          <div class="text">
            <div class="title tm-rf0 tm-lh-copy">Cosmos SDK</div>
            <div class="desc tm-rf-1 tm-lh-copy">Build a blockchain</div>
          </div>
        </tm-link>
        <tm-link href="https://ibcprotocol.org" class="wrapper">
          <div class="icon">
            <img src="~/static/symbols/ibc.svg" />
          </div>
          <div class="text">
            <div class="title tm-rf0 tm-lh-copy tm-link-external">IBC</div>
            <div class="desc tm-rf-1 tm-lh-copy">Connect blockchains</div>
          </div>
        </tm-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped></style>
