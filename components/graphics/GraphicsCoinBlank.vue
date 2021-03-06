<template>
  <svg
    width="244"
    height="118"
    viewBox="0 0 244 118"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0-402125)">
      <g v-if="shadow" opacity="0.5" filter="url(#filter0_f-693935)">
        <ellipse
          cx="131"
          cy="75.5"
          rx="113"
          ry="42.5"
          fill="url(#paint0_linear-360618)"
        />
      </g>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M112 112.671C173.856 112.671 224 93.7145 224 70.3299L224 42.4079L196.198 42.4079C175.671 33.5683 145.559 27.9885 112 27.9885C78.441 27.9885 48.3293 33.5683 27.8022 42.4079L-1.26058e-06 42.4079L5.11094e-07 70.3299C-1.53325e-06 93.7145 50.1441 112.671 112 112.671Z"
        fill="url(#paint1_radial-947661)"
      />
      <ellipse
        cx="112"
        cy="42.4079"
        rx="112"
        ry="42.3415"
        fill="url(#paint2_radial-195941)"
      />
    </g>
    <defs>
      <filter
        id="filter0_f-693935"
        x="13.6115"
        y="28.6115"
        width="234.777"
        height="93.777"
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
          stdDeviation="2.19425"
          result="effect1_foregroundBlur"
        />
      </filter>
      <linearGradient
        id="paint0_linear-360618"
        x1="18"
        y1="77.5078"
        x2="244"
        y2="77.5078"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.78" />
        <stop offset="1" stop-opacity="0" />
      </linearGradient>
      <radialGradient
        id="paint1_radial-947661"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(172.5 74) rotate(-170.032) scale(205.096 97.3336)"
      >
        <stop />
        <stop offset="0.473925" />
        <stop offset="0.88" stop-color="#1F1F1F" />
      </radialGradient>
      <radialGradient
        id="paint2_radial-195941"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(224 42) rotate(-174.806) scale(242.998 115.321)"
      >
        <stop stop-color="#0D0D0D" />
        <stop offset="0.86" stop-color="#232323" />
      </radialGradient>
      <clipPath id="clip0-402125">
        <rect width="244" height="118" fill="white" />
      </clipPath>
    </defs>
  </svg>
</template>

<script>
export default {
  props: {
    shadow: {
      /**
       * `true` | `null`
       */
      type: Boolean,
      default: null,
    },
  },
}
</script>
