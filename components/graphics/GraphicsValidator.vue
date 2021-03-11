<template>
  <div class="v-container">
    <svg
      class="v-base"
      width="551"
      height="641"
      viewBox="0 0 551 641"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M275.496 481.022L275.496 640.017L550.996 322.028L275.496 481.022Z"
        :fill="`url(#${id}-paint0_linear-127634)`"
      />
      <path
        d="M275.5 481.022L275.5 640.017L0 322.028L275.5 481.022Z"
        :fill="`url(#${id}-paint1_linear-127634)`"
      />
      <rect
        width="318.088"
        height="318.087"
        transform="matrix(0.866114 -0.499847 0.866114 0.499847 0 322.028)"
        :fill="`url(#${id}-paint2_radial-127634)`"
      />
      <path
        v-if="coins | planet"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M389.834 387.887C452.978 351.461 452.978 292.402 389.834 255.976C326.689 219.55 224.313 219.55 161.169 255.976C98.0382 292.395 98.0245 351.435 161.128 387.863L161.139 387.87L161.173 387.889L161.199 387.904C224.346 424.313 326.7 424.307 389.834 387.887Z"
        :fill="`url(#${id}-paint3_linear-127634)`"
      />
      <defs>
        <linearGradient
          :id="`${id}-paint0_linear-127634`"
          x1="389.562"
          y1="409.884"
          x2="447.934"
          y2="557.139"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            v-if="$nuxt.$colorMode.value === 'light'"
            stop-color="#80E2F8"
          />
          <stop v-else stop-color="#71A1FF" />
          <stop
            v-if="$nuxt.$colorMode.value === 'light'"
            offset="1"
            stop-color="#DA17C6"
          />
          <stop v-else offset="1" stop-color="#DA17C6" />
        </linearGradient>
        <linearGradient
          :id="`${id}-paint1_linear-127634`"
          x1="164.087"
          y1="417.843"
          x2="103.062"
          y2="557.139"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            v-if="$nuxt.$colorMode.value === 'light'"
            stop-color="#8CDFF7"
          />
          <stop v-else stop-color="#93B7FF" />
          <stop
            v-if="$nuxt.$colorMode.value === 'light'"
            offset="1"
            stop-color="#DD54CF"
          />
          <stop v-else offset="1" stop-color="#DA17C6" />
        </linearGradient>
        <radialGradient
          :id="`${id}-paint2_radial-127634`"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(101.265 216.245) rotate(-44.9244) scale(309.458 347.373)"
        >
          <stop
            v-if="$nuxt.$colorMode.value === 'light'"
            offset="0.0525602"
            stop-color="#E0FFFE"
          />
          <stop v-else stop-color="#C1CDF6" />
          <stop
            v-if="$nuxt.$colorMode.value === 'light'"
            offset="1"
            stop-color="#B1DAFF"
          />
          <stop v-else offset="1" stop-color="#8DA6FF" />
        </radialGradient>
        <linearGradient
          v-if="coins | planet"
          :id="`${id}-paint3_linear-127634`"
          x1="264.911"
          y1="416.517"
          x2="267.565"
          y2="287.834"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0.4" />
          <stop offset="1" stop-color="white" stop-opacity="0.05" />
        </linearGradient>
      </defs>
    </svg>
    <div v-if="coins" class="v-coins">
      <graphics-coin-blank class="coin" lighting="bottom" />
      <graphics-coin-blank class="coin" lighting="bottom" />
      <graphics-coin-blank class="coin" lighting="bottom" />
    </div>
    <svg
      v-if="coins | planet"
      class="v-beam"
      width="747"
      height="640"
      viewBox="0 0 747 640"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        v-if="planet"
        cx="373.5"
        cy="186.5"
        r="138.5"
        :fill="`url(#${id}-paint0_radial-259871)`"
      />
      <g opacity="0.6" :filter="`url(#${id}-filter0_f-259871)`">
        <path
          d="M224.14 357.71L224.279 357.909H224.284C232.164 368.794 243.779 378.992 259.128 387.853L259.169 387.877L259.173 387.879L259.199 387.894C322.346 424.303 424.7 424.297 487.834 387.877C504.326 378.362 516.511 367.304 524.388 355.509L735.608 52.4153L11.3877 52.4153L222.815 355.809C223.244 356.445 223.686 357.078 224.14 357.71Z"
          :fill="`url(#${id}-paint1_radial-259871)`"
        />
      </g>
      <defs>
        <filter
          :id="`${id}-filter0_f-259871`"
          x="0.774665"
          y="41.8023"
          width="745.447"
          height="384.007"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="5.30652"
            result="effect1_foregroundBlur"
          />
        </filter>
        <radialGradient
          v-if="planet"
          :id="`${id}-paint0_radial-259871`"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(379.311 21.349) rotate(91.5198) scale(198.327)"
        >
          <stop stop-color="#ECEDF7" />
          <stop offset="1" stop-color="white" />
        </radialGradient>
        <radialGradient
          :id="`${id}-paint1_radial-259871`"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(373.497 414.936) rotate(-90) scale(363.49 736.795)"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="#C9C0FD" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  </div>
</template>
<script>
export default {
  props: {
    coins: {
      /**
       * `false` | `true
       */
      type: Boolean,
      default: false,
    },
    planet: {
      /**
       * `false` | `true
       */
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      id: null,
    }
  },
  mounted() {
    this.id = this._uid
  },
}
</script>
<style lang="stylus" scoped>
.v-container
  position relative

.v-base
  width 100%
  height auto

.v-coins,
.v-beam
  position absolute
  width 100%
  height auto
  top 0
  left 0

.coin
  width 50%
  &:nth-child(1)
    top 24%
    left 54%
  &:nth-child(2)
    top 11%
    left 49%
  &:nth-child(3)
    left 54%
</style>
