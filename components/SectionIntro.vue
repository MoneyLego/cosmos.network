<template>
  <div>
    <div
      class="section-services tm-container tm-section tm-wrapper tm-grid-base"
    >
      <h2 class="title tm-rf5 tm-bold tm-lh-title">
        A new world of connected services.
      </h2>
      <p
        class="subtitle offset tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure-narrow"
      >
        The Cosmos Hub is a blockchain that provides vital services to the
        Interchain.
      </p>
      <div v-swiper:myDirectiveSwiper="swiperOptions" class="swiper-container">
        <div class="swiper-wrapper">
          <div v-for="item in benefits" :key="item.title" class="swiper-slide">
            <div class="slide__title tm-rf1 tm-bold tm-lh-title">
              {{ item.title }}
            </div>
            <div
              class="slide__subtitle tm-rf-1 tm-rf0-m-up tm-lh-copy tm-measure-narrower"
            >
              {{ item.subtitle }}
            </div>
          </div>
        </div>
      </div>
      <div class="btn-group offset">
        <tm-button
          to-link="internal"
          to="/features"
          size="l"
          variant="outlined"
          class="btn"
          >Hub features<span class="icon__right">-></span></tm-button
        >
      </div>
    </div>

    <div class="section-atom tm-section tm-container tm-wrapper">
      <svg
        class="bg bg-back"
        width="2023"
        height="1012"
        viewBox="0 0 2023 1012"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2023 1012C2023 743.601 1916.43 486.195 1726.74 296.408C1537.05 106.621 1279.77 2.02636e-05 1011.5 0C743.234 -2.02636e-05 485.955 106.621 296.262 296.408C106.569 486.195 4.05071e-05 743.601 0 1012L2023 1012Z"
          fill="url(#paint0_radial-299071)"
        />
        <defs>
          <radialGradient
            id="paint0_radial-299071"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1011.5 988) rotate(90) scale(1012 1011.5)"
          >
            <stop offset="0.0833333" stop-color="#A5FBFF" />
            <stop offset="0.338542" stop-color="#6C8DFF" />
            <stop offset="0.677083" stop-color="#631C69" />
            <stop offset="1" stop-color="#72087B" stop-opacity="0" />
          </radialGradient>
        </defs>
      </svg>
      <svg
        class="bg bg-front"
        width="2022"
        height="439"
        viewBox="0 0 2022 439"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2022 206.669C1705.16 71.584 1362.12 2.65069e-05 1011 0C660.14 -2.64873e-05 316.649 71.4782 0 206.369L0 439L2022 439V206.669Z"
          fill="url(#paint0_radial-063349)"
        />
        <defs>
          <radialGradient
            id="paint0_radial-063349"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1041.89 760) rotate(-90) scale(760 2536.3)"
          >
            <stop offset="0.817689" />
            <stop offset="0.991435" stop-color="#181A49" />
          </radialGradient>
        </defs>
      </svg>
      <div class="graphics">
        <div class="coins-top">
          <span class="coin"><graphics-atom-coin /></span>
          <span class="coin"><graphics-atom-coin /></span>
          <span class="coin"><graphics-atom-coin /></span>
          <span class="coin"><graphics-atom-coin /></span>
          <span class="coin"><graphics-atom-coin /></span>
        </div>
      </div>
      <div class="content">
        <span class="tm-crosshair"></span>
        <h2 class="title tm-rf5 tm-bold tm-lh-title">Secured by the ATOM.</h2>
        <p class="subtitle tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure-narrower">
          In return for securing the Hub services, transaction feed and staking
          rewards are distributed for ATOM stakers.
        </p>
        <div class="btn-group">
          <tm-button to-link="internal" to="/staking" size="l" class="btn"
            >Start staking</tm-button
          >
          <tm-button
            to-link="internal"
            to="/staking"
            size="l"
            variant="text"
            class="btn"
            >What is staking <span class="icon__right">--></span></tm-button
          >
        </div>
        <span class="accent"></span>
      </div>
      <div class="graphics">
        <div class="coins-bottom">
          <span class="coin"><graphics-atom-coin /></span>
          <span class="coin"><graphics-atom-coin /></span>
        </div>
      </div>
    </div>

    <div
      class="section-features tm-section tm-container tm-wrapper tm-grid-base"
    >
      <h2 class="title tm-rf5 tm-bold tm-lh-title">
        Be part of the open economy of the future.
      </h2>
      <div class="card card-accounts">
        <h3 class="card__title tm-rf0 tm-lh-title tm-medium">
          Interchain Accounts
        </h3>
        <figure class="graphics">
          <graphics-navigator-gem class="gem" />
          <svg
            class="trail"
            width="144"
            height="43"
            viewBox="0 0 144 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.16992 41.2962C18.9059 31.6337 36.1437 23.3068 52.7061 16.8816C69.2724 10.4549 84.7498 6.09099 98.0856 4.07025C111.448 2.04554 122.227 2.4392 129.78 5.08592C137.254 7.70525 141.308 12.4196 142.035 18.8771M2.16992 1.55859C18.9059 11.2211 36.1437 19.548 52.7061 25.9732C69.2724 32.3999 84.7498 36.7638 98.0856 38.7845C111.448 40.8092 122.227 40.4156 129.78 37.7689C137.254 35.1495 141.308 30.4352 142.035 23.9777"
              stroke="url(#paint0_linear-392827)"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear-392827"
                x1="142"
                y1="21.5273"
                x2="2"
                y2="21.5273"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0" />
                <stop offset="0.901042" stop-color="white" />
              </linearGradient>
            </defs>
          </svg>
        </figure>
        <p class="card__tagline tm-rf3 tm-rf4-l-up tm-lh-title tm-bold">
          One secure account for all your digital assets.
        </p>
        <p class="card__footnote tm-rf0 tm-lh-title">Coming soon</p>
      </div>
      <div class="card card-dex">
        <h3 class="card__title tm-rf0 tm-lh-title tm-medium">
          Decentralized Exchange
        </h3>
        <figure class="graphics">
          <svg
            width="541"
            height="443"
            viewBox="0 0 541 443"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.2" filter="url(#filter0_f-395629)">
              <ellipse
                cx="359.329"
                cy="127.726"
                rx="96.7605"
                ry="36.3585"
                fill="url(#paint0_linear-049222)"
              />
            </g>
            <g filter="url(#filter1_b-259238)">
              <g filter="url(#filter2_di-962761)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M343.835 157.975C290.72 157.975 247.661 141.697 247.661 121.616V98.1593H270.351C287.993 90.2685 314.366 85.2578 343.835 85.2578C373.304 85.2578 399.678 90.2685 417.32 98.1593H440.009V121.616C440.009 121.616 440.009 121.616 440.009 121.616C440.009 141.697 396.951 157.975 343.835 157.975Z"
                  fill="url(#paint1_radial-178011)"
                />
              </g>
            </g>
            <path
              d="M247.662 124.034C247.662 124.034 247.662 124.034 247.662 124.034V100.577H270.352C287.993 92.6865 314.367 87.6758 343.836 87.6758C373.305 87.6758 399.679 92.6865 417.321 100.577H440.01V124.034C440.01 124.034 440.01 124.034 440.01 124.034C440.01 144.114 396.952 160.393 343.836 160.393C290.721 160.393 247.662 144.114 247.662 124.034Z"
              fill="#C4C4C4"
            />
            <ellipse
              rx="96.1741"
              ry="36.3585"
              transform="matrix(-1 0 0 1 343.838 100.651)"
              fill="#9C9C9C"
            />
            <path
              d="M321.695 127.166C268.58 127.166 225.521 110.888 225.521 90.8077L225.521 67.3506H248.211C265.853 59.4599 292.226 54.4492 321.695 54.4492C351.164 54.4492 377.538 59.4599 395.179 67.3506H417.869V90.6966C417.869 90.7336 417.869 90.7707 417.869 90.8077C417.869 110.888 374.811 127.166 321.695 127.166Z"
              fill="#C4C4C4"
            />
            <ellipse
              rx="96.1741"
              ry="36.3585"
              transform="matrix(-1 0 0 1 321.694 67.3507)"
              fill="#9C9C9C"
            />
            <path
              d="M341.067 96.174C287.952 96.174 244.893 79.8958 244.893 59.8155C244.893 59.8017 244.893 59.7879 244.893 59.7741V36.3585H267.583C285.224 28.4678 311.598 23.457 341.067 23.457C370.536 23.457 396.91 28.4678 414.552 36.3585H437.241V59.8156C437.241 79.8958 394.183 96.174 341.067 96.174Z"
              fill="#C4C4C4"
            />
            <ellipse
              rx="96.1741"
              ry="36.3585"
              transform="matrix(-1 0 0 1 341.066 36.3585)"
              fill="#9C9C9C"
            />
            <g opacity="0.2" filter="url(#filter3_f-993971)">
              <path
                d="M367.868 170.474C367.868 170.474 283.284 84.7977 170.663 144.496C75.421 194.979 131.105 333.649 217.363 304.156C276.462 283.948 303.694 298.254 339.896 315.705C397.323 343.387 471.695 273.555 367.868 170.474Z"
                fill="white"
              />
              <path
                d="M367.868 170.474C367.868 170.474 283.284 84.7977 170.663 144.496C75.421 194.979 131.105 333.649 217.363 304.156C276.462 283.948 303.694 298.254 339.896 315.705C397.323 343.387 471.695 273.555 367.868 170.474Z"
                fill="url(#paint2_linear-040071)"
              />
            </g>
            <path
              d="M263.067 262.174C209.952 262.174 166.893 245.896 166.893 225.816C166.893 225.802 166.893 225.788 166.893 225.774V202.359H189.583C207.224 194.468 233.598 189.457 263.067 189.457C292.536 189.457 318.91 194.468 336.552 202.359H359.241V225.816C359.241 245.896 316.183 262.174 263.067 262.174Z"
              fill="#C4C4C4"
            />
            <ellipse
              rx="96.1741"
              ry="36.3585"
              transform="matrix(-1 0 0 1 263.066 202.358)"
              fill="#9C9C9C"
            />
            <path
              d="M380.168 237.945C391.691 235.495 402.155 231.629 410.836 226.615C419.517 221.601 426.209 215.558 430.45 208.905C434.69 202.251 436.377 195.146 435.395 188.079C434.413 181.012 430.784 174.153 424.76 167.975"
              stroke="#A0A0A0"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <defs>
              <filter
                id="filter0_f-395629"
                x="258.81"
                y="87.6082"
                width="201.039"
                height="80.235"
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
                  stdDeviation="1.87951"
                  result="effect1_foregroundBlur"
                />
              </filter>
              <filter
                id="filter1_b-259238"
                x="196.055"
                y="12.6865"
                width="295.563"
                height="199.387"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImage" stdDeviation="25.8032" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur"
                  result="shape"
                />
              </filter>
              <filter
                id="filter2_di-962761"
                x="244.729"
                y="84.085"
                width="195.867"
                height="76.822"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dx="-1.17285" dy="1.17285" />
                <feGaussianBlur stdDeviation="0.879641" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
                />
                <feBlend
                  mode="soft-light"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="-1.75928" />
                <feGaussianBlur stdDeviation="0.586427" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
                />
                <feBlend
                  mode="soft-light"
                  in2="shape"
                  result="effect2_innerShadow"
                />
              </filter>
              <filter
                id="filter3_f-993971"
                x="0.544991"
                y="3.06306"
                width="539.57"
                height="439.022"
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
                  stdDeviation="60.1443"
                  result="effect1_foregroundBlur"
                />
              </filter>
              <linearGradient
                id="paint0_linear-049222"
                x1="262.569"
                y1="129.443"
                x2="456.09"
                y2="129.443"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.783167" stop-color="#171B2F" />
                <stop offset="1" stop-color="#1A2F9F" stop-opacity="0" />
              </linearGradient>
              <radialGradient
                id="paint1_radial-178011"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(387.378 121.252) rotate(-173.178) scale(172.221 81.7321)"
              >
                <stop />
                <stop offset="0.473925" />
                <stop offset="0.866261" stop-color="#1F1F1F" />
              </radialGradient>
              <linearGradient
                id="paint2_linear-040071"
                x1="236.919"
                y1="121.644"
                x2="296.111"
                y2="342.553"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FD91FF" />
                <stop offset="0.34375" stop-color="#A0A8FF" />
                <stop offset="0.947005" stop-color="#C9F2FF" />
              </linearGradient>
            </defs>
          </svg>
        </figure>
        <p class="card__tagline tm-rf3 tm-lh-title tm-bold">
          Swap tokens &amp; collectibles.
        </p>
        <p class="card__footnote tm-rf0 tm-lh-title">Coming soon</p>
      </div>
    </div>

    <div class="section-tech tm-section tm-container tm-wrapper">
      <div class="title tm-rf5 tm-bold tm-lh-title">
        Powered by the best blockchain tech has to offer.
      </div>
      <div class="subtitle tm-rf0 tm-rf1-m-up tm-lh-copy">
        The Cosmos Hub is powered by the
        <a href="cosmos.network/sdk" class="tm-medium">Cosmos SDK</a>, a leading
        blockchain framework securing over $18B USD in value across 200+
        interconnected blockchains.
      </div>
    </div>

    <div
      class="section-developer tm-section tm-container tm-wrapper tm-grid-base"
    >
      <div class="left">
        <div class="caption tm-rf0 tm-medium tm-lh-title tm-overline">
          Developers
        </div>
        <div class="title tm-rf5 tm-bold tm-lh-title tm-measure">
          Build upon value.
        </div>
        <div class="subtitle tm-rf1 tm-lh-copy tm-measure">
          Developers in Cosmos are the pioneers of the new era of blockchain
          technology. Join a fast-growing token economy and build upon a secure
          and stable foundation.
        </div>
        <div class="row">
          <tm-button
            to-link="external"
            href="http://hub.cosmos.network"
            size="l"
            color="var(--white)"
            background-color="var(--black)"
            class="btn"
            >View the docs <span class="icon__right">&#8599;</span></tm-button
          >
        </div>
      </div>
      <div class="right">
        <!-- GRAPHICS -->
        <div class="nav">Build a chain</div>
        <div class="slider">
          <div class="title">
            Build your own decentralized community, powered by your own
            blockchain.
          </div>
          <tm-button
            to-link="external"
            href="http://hub.cosmos.network"
            size="l"
            variant="text"
            class="btn"
            >Get started in minutes
            <span class="icon__right">&#8594;</span></tm-button
          >
        </div>
      </div>
    </div>

    <div class="section-dev-features tm-section tm-container tm-grid-base">
      <div class="cards-wrapper">
        <div class="card-item">
          <div class="top tm-rf0 tm-lh-title">Cross-chain Staking</div>
          <div class="mid">
            <div class="graphics">
              <graphics-home-crosschainstaking class="graphics__item" />
            </div>
          </div>
          <div class="bottom">
            <div class="title tm-rf3 tm-bold tm-lh-title">
              Share security with the Hub.
            </div>
            <div class="desc tm-rf0 tm-lh-title">Coming soon</div>
          </div>
        </div>
        <div class="card-item">
          <div class="top tm-rf0 tm-lh-title">Fundraising</div>
          <div class="mid">
            <div class="graphics">
              <graphics-home-fundraising class="graphics__item" />
            </div>
          </div>
          <div class="bottom">
            <div class="title tm-rf3 tm-bold tm-lh-title">
              Build with funds from the Hub.
            </div>
            <div class="desc tm-rf0 tm-lh-title">Coming soon</div>
          </div>
        </div>
        <div class="card-item">
          <div class="top tm-rf0 tm-lh-title">Chain Name System</div>
          <div class="mid">
            <div class="graphics">
              <graphics-home-chainnameservice class="graphics__item" />
            </div>
          </div>
          <div class="bottom">
            <div class="title tm-rf3 tm-bold tm-lh-title">
              Claim your chain name.
            </div>
            <div class="desc tm-rf0 tm-lh-title">Coming soon</div>
          </div>
        </div>
      </div>
    </div>

    <div class="section-community tm-section tm-container tm-grid-base">
      <div class="tm-wrapper">
        <div class="text">
          <div class="title tm-rf5 tm-bold tm-lh-title">
            Join the worldwide community.
          </div>
          <div class="subtitle tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure">
            Join a fast-growing community of developers and innovators connected
            all over the world, building the new era of the internet.
          </div>
          <tm-button
            to-link="external"
            href="https://cosmos.network/community"
            size="l"
            variant="text"
            class="btn"
            >Cosmos Community <span class="icon__right">-></span></tm-button
          >
        </div>
        <div class="list">
          <div class="list-wrapper">
            <a
              v-for="item in links"
              :key="item.logo"
              :href="item.url"
              target="_blank"
              rel="noreferrer noopener"
              class="list-item"
            >
              <div class="icon">
                <component :is="`icon-${item.logo}`" />
              </div>
              <div class="details">
                <div class="title tm-rf1 tm-bold tm-lh-title">
                  {{ item.title }}
                </div>
                <div class="desc tm-rf0 tm-lh-copy">
                  {{ item.desc }}
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Carousel from 'vue-slick-carousel'
import { directive } from 'vue-awesome-swiper'

import IconTwitter from '~/components/icons/IconTwitter.vue'
import IconDiscord from '~/components/icons/IconDiscord.vue'
import IconTelegram from '~/components/icons/IconTelegram.vue'
import IconCosmos from '~/components/icons/IconCosmos.vue'

export default {
  directives: {
    swiper: directive,
  },
  components: {
    IconTwitter,
    IconDiscord,
    IconTelegram,
    IconCosmos,
  },
  data() {
    return {
      benefits: [
        {
          title: 'Marketplace',
          subtitle:
            'Set to operate a next-gen decentralized exchange, swapping digital assets from across the Interchain, with very low fees and instant transaction confirmation.',
        },
        {
          title: 'Security provider',
          subtitle:
            'With the upcoming Cross-chain Staking feature, the ATOM token will soon be securing many chains, in exchange for additional staking rewards.',
        },
        {
          title: 'Router',
          subtitle:
            'A core mission of the Hub – to connect chains by establishing IBC connections with compatible chains and operating decentralized bridges with chains like Ethereum and Bitcoin.',
        },
        {
          title: 'Custodian',
          subtitle:
            'Located at the crossroads of the Interchain, the Hub is extremely secure, the best place to hold digital assets and manage accounts across many chains.',
        },
      ],
      links: [
        {
          url: 'https://t.me/cosmosproject',
          logo: 'telegram',
          title: 'Community Chat',
          desc:
            'Ask general questions and chat with the worldwide community on Telegram.',
        },
        {
          url: 'https://twitter.com/cosmos',
          logo: 'twitter',
          title: 'Twitter',
          desc:
            'Follow @cosmos to get the latest news and updates from across the ecosystem.',
        },
        {
          url: 'https://discord.gg/vcExX9T',
          logo: 'discord',
          title: 'Developer Chat',
          desc:
            'Have technical questions about Cosmos tools? Ask a developer on the Community Discord.',
        },
        {
          url: 'https://forum.cosmos.network',
          logo: 'cosmos',
          title: 'Cosmos Forum',
          desc:
            'Thinking about becoming a validator or interested in network matters? Join the discussion.',
        },
      ],
      swiperOptions: {
        slidesPerView: 'auto',
        loop: true,
        loopedSlides: 4,
        slideToClickedSlide: true,
        autoplay: {
          delay: 6000,
        },
      },
    }
  },
}
</script>

<style lang="stylus" scoped>
.subtitle
  margin-top var(--spacing-6)

.btn-group
  display flex
  flex-direction column
  margin-top var(--spacing-8)
  gap 0 var(--spacing-7)

// Animations
@keyframes float
  0%
    transform translateY(0%) rotate(0)
  100%
    transform translateY(-20%) rotate(-5deg)

// Services
.section-services

  &:before
    content ""
    display block
    height var(--spacing-13)
    width 2px
    background linear-gradient(180deg, var(--transparent) 16%, var(--white) 40%)
    center()

  &:before,
  & > *
    grid-column 1/-1

  .title
    margin-top var(--spacing-8)
    max-width 10em

  .swiper-container
    margin-top var(--spacing-10)
    overflow visible
    width 100%

  .swiper-slide
    width calc(75% - (var(--grid-gap-x)/4)) // 3/4 cols
    max-width: $max-width['5']
    margin-right var(--grid-gap-x)
    cursor w-resize
    opacity 0.3
    transition opacity .4s $ease-out

    &-active
      opacity 1
      cursor auto

    &-active ~ .swiper-slide
      cursor e-resize

  .slide__subtitle
    margin-top var(--spacing-5)

// ATOM
.section-atom
  text-align center
  padding-bottom var(--spacing-13)

  .content
    max-width 40rem
    center()

  .bg
    position absolute
    left 0
    height auto
    width 100%
    min-width 64rem
    z-index -1

  .bg-back
    bottom -6%

  .bg-front
    bottom -16%
    filter blur(14px)

  .graphics
    position relative
    width 100%
    min-width 32rem
    max-width 64rem
    margin-left auto
    margin-right 35%
    z-index -1

  .coin
    position absolute
    height auto
    z-index 1
    svg
      width 100%
      height auto
      // animation float 3s ease-in-out alternate infinite

  .coins-top
    $w = (367 / (64 * 16) * 100%) // graphics mw / container mw
    position absolute
    left -7%
    width $w
    padding-bottom $w * 1.05%
    margin-top -23%

    .coin
      position absolute

    .coin:nth-child(1)
      bottom 75%
      right 67%
      width 38%
      transform rotate(50deg)
      filter blur(4px)
    .coin:nth-child(2)
      bottom 57%
      right 60%
      width 42%
      transform rotate(-62deg)
      filter blur(3px)
      svg
        animation-delay 0.5s
    .coin:nth-child(3)
      bottom 41%
      right 52%
      width 42%
      transform rotate(46deg)
      filter blur(1.5px)
      svg
        animation-delay 1s
    .coin:nth-child(4)
      bottom 20%
      right 24%
      width 74%
      transform rotate(-17deg)
      filter blur(0.5px)
      svg
        animation-delay 1.5s
    .coin:nth-child(5)
      bottom 1%
      right -7%
      width 82%
      transform rotate(29deg)
      svg
        animation-delay 2s

  .coins-bottom
    $w = (330 / (64 * 16) * 100%) // graphics mw / container mw
    position relative
    width $w
    padding-bottom $w
    center()

    .coin:nth-child(1)
      width 108%
      transform rotate(-37deg)
      left 4%
      top 29%

    .coin:nth-child(2)
      width 108%
      transform rotate(27deg)
      left -10%
      top 0

  .tm-crosshair
    margin-left auto
    margin-right -3rem

  .title
    max-width 6em
    center()

  .subtitle
    center()

  .accent
    angle-accent(sw)
    margin-top var(--spacing-8)

// Features
.section-features
  > *
    grid-column 1/-1

  .card__title,
  .title
    max-width 11em

  .title
    margin-bottom var(--spacing-10)

  .card
    background var(--gray-100)
    border-radius $border-radius-6
    padding var(--spacing-7)
    display flex
    flex-direction column
    align-content space-between
    gap var(--spacing-9) 0

  .graphics
    position relative

// Features > Interchain Accounts
.card-accounts

  .graphics
    max-width 22rem

  .gem
    margin -43% 0 -65% -80%
    width 150%
    height auto

  .trail
    position absolute
    top 51%
    left 38%

// Developer
.section-developer
  .left
    grid-column span 12
    .caption
      writing-mode tb
      transform rotate(180deg)
    .title
      margin-top var(--spacing-7)
    .subtitle
      margin-left 2.4375rem
  .right
    grid-column span 12
    margin-top 16.375rem

// Dev features
.section-dev-features
  grid-column span 12

.section-dev-features .graphics
  position relative
  display grid
  place-items center

  &__item
    position absolute
    width 100%
    height auto

.cards-wrapper
  grid-row 2
  display grid
  grid-template-columns repeat(1, 1fr)
  gap var(--spacing-7)
  grid-column span 12
  margin-top var(--spacing-11)

.card-item
  display flex
  flex-direction column
  justify-content space-between
  height 34.6875rem
  padding var(--spacing-7)
  position relative

  &:before
    content url("data:image/svg+xml,%3Csvg width='33' height='33' viewBox='0 0 33 33' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M33 32L1 32L1 0' stroke='black' stroke-width='2'/%3E%3C/svg%3E")
    position absolute
    top 0
    right 0
    transform-origin center
    transform rotate(180deg) translate(0px, 6px)

  .mid
    margin-top var(--spacing-7)

  .bottom
    margin-top var(--spacing-7)

    .desc
      margin-top var(--spacing-7)
      color var(--trans-gray-400)

// Community
.section-community
  .text,
  .list
    grid-column 1/-1

  .list
    margin-top var(--spacing-7)

  .list-item
    display grid
    grid-auto-flow column
    grid-template-columns min-content 1fr
    gap var(--spacing-7)
    border-radius $border-radius-5
    hover-raise(-3px)

  a.list-item + a.list-item
    margin-top var(--spacing-7)

  .details .desc
    margin-top var(--spacing-3)

@media $breakpoint-small
  .btn-group
    display block

  // Developer
  .section-developer
    .left
      grid-column span 12
      .subtitle
        margin-left 0

  // Dev features
  .cards-wrapper
    margin-top 0

@media $breakpoint-small-only
  .section-services
    > .btn-group
      grid-column 3 / span 2

@media $breakpoint-medium
  // Services
  .section-services
    .title
      grid-column 3 / span 6

    .offset
      grid-column 4 / span 5

    .swiper-container
      grid-column 4 / span 4

    .swiper-slide
      max-width none

  // ATOM
  .section-atom
    .coins-bottom
      margin-right 0
      right -20%
      margin-top -30%

  // Features
  .section-features
    .title
      text-align right
      margin-left auto
      grid-column 1/span 7

  // Dev features
  .section-dev-features
    .cards-wrapper
      grid-template-columns repeat(2, 1fr)

    .graphics__item
      width 140%

  // Community
  .section-community
    .text
      grid-column 1/span 4

    .list
      grid-column 7/span 4
      margin-top 0

@media $breakpoint-large

  // Developer
  .section-developer
    .left
      grid-column 2/span 3
      display grid
      grid-template-columns repeat(6, 1fr)
      gap 0 var(--spacing-7)
      .caption
        grid-row 1
      .title
        grid-row 2
        grid-column 1/span 5
      .subtitle
        grid-row 3
        grid-column 2/span 6
      .row
        grid-row 4
        grid-column 1/span 4
        margin-top var(--spacing-7)
    .right
      grid-column 5/span 4

  // Dev features
  .section-dev-features
    .cards-wrapper
      grid-template-columns repeat(3, 1fr)

  // Community
  .section-community
    .text
      grid-column 1/span 5

@media $breakpoint-xl
  // Services
  .section-services
    .title
      grid-column 6 / span 7

    .offset
      grid-column 7 / span 6

    .swiper-container
      grid-column 7 / span 4


  // Features
  .section-features
    .title
      grid-column 1/span 11

    .card-accounts
      grid-column 1 / span 5
      grid-row 2 / 3

    .card-dex
      grid-column 6 / span 7
      grid-row 2
</style>
