<template>
  <kinesis-container event="scroll" class="container">
    <kinesis-element
      :strength="30"
      type="rotate"
      transformOrigin="20% 250%"
      class="bg"
    ></kinesis-element>
    <svg
      width="2462"
      height="1961"
      viewBox="0 0 2462 1961"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f-620119)">
        <ellipse
          cx="1330.01"
          cy="484.494"
          rx="392"
          ry="291.5"
          fill="url(#paint0_radial-484898)"
        />
      </g>
      <path
        d="M884.209 1725.82C1536.33 2062.07 2220.23 2033.02 2411.75 1660.92C2603.26 1288.83 2229.86 714.6 1577.74 378.346C925.615 42.0912 241.713 71.1447 50.2008 443.238C-141.312 815.332 232.087 1389.56 884.209 1725.82Z"
        fill="url(#paint1_radial-470401)"
      />
      <g filter="url(#filter1_f-316405)">
        <circle
          cx="1197.51"
          cy="929.494"
          r="690.5"
          fill="url(#paint2_radial-807354)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f-620119"
          x="746.014"
          y="0.994141"
          width="1168"
          height="967"
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
          <feGaussianBlur stdDeviation="96" result="effect1_foregroundBlur" />
        </filter>
        <filter
          id="filter1_f-316405"
          x="432.678"
          y="164.658"
          width="1529.67"
          height="1529.67"
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
            stdDeviation="37.1683"
            result="effect1_foregroundBlur"
          />
        </filter>
        <radialGradient
          id="paint0_radial-484898"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(1029.32 577.939) rotate(-17.4023) scale(751.302 534.716)"
        >
          <stop stop-color="#4C00C8" stop-opacity="0" />
          <stop offset="1" stop-color="#FF6D03" />
        </radialGradient>
        <radialGradient
          id="paint1_radial-470401"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(1231.45 1052.82) rotate(-152.723) scale(1329.27 758.174)"
        >
          <stop offset="0.0001" stop-color="#C01AEA" />
          <stop offset="0.539562" stop-color="#B347CE" stop-opacity="0.3" />
          <stop offset="1" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="paint2_radial-807354"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(1197.51 929.494) rotate(90) scale(663.081)"
        >
          <stop offset="0.223958" stop-color="#A5FBFF" />
          <stop offset="0.385417" stop-color="#86A1FF" stop-opacity="0.7" />
          <stop offset="0.729167" stop-color="#CF36D2" stop-opacity="0.28" />
          <stop offset="1" stop-color="#99309B" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
    <graphics-orbit-lines class="orbit" />
    <kinesis-element
      :strength="60"
      type="rotate"
      transformOrigin="-230% 160%"
      class="fg"
    ></kinesis-element>
  </kinesis-container>
</template>
<style lang="stylus" scoped>
.container
  position relative

svg
  position relative
  width 100%
  height auto

.orbit
  position absolute
  left 17.6%
  top 31.4%
  width 60%
  transform rotate(-15deg)

.bg,
.fg
  position absolute
  border-radius 50%

.bg
  width 11%
  padding-bottom 11%
  top 20.3%
  left 46%
  background radial-gradient(105% 105% at 58% -1%, #4187C8 0%, rgba(132, 76, 204, 0.536826) 25%, rgba(72, 31, 188, 0) 55%)

.fg
  width 4.5%
  padding-bottom 4.5%
  top 38%
  left 59%
  background radial-gradient(94.48% 85.86% at 89.62% 38.66%, #6151C0 0%, #A14BC2 71.87%, #CBCAFF 94.27%)
  box-shadow inset 0px 0px 24px rgba(237, 185, 255, 0.21)
</style>
