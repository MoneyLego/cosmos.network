<template>
  <main>
    <div class="section-hero tm-section">
      <div class="tm-wrapper">
        <div class="tm-section tm-container">
          <div class="title tm-rf6 tm-bold tm-lh-title">Swiper</div>
        </div>
      </div>
    </div>

    <div class="example">
      <!-- directive: render origin html on server & render Swiper on browser -->
      <!-- You can get the swiper instance object in current component context by the name: "mySwiper"  -->
      <div
        v-swiper:myDirectiveSwiper="swiperOptions"
        class="swiper"
        @ready="onSwiperRedied"
        @click-slide="onSwiperClickSlide"
        @slide-change-transition-start="onSwiperSlideChangeTransitionStart"
      >
        <div class="swiper-wrapper">
          <div v-for="index in 6" :key="index" class="swiper-slide">
            <span>Slide {{ index }}</span>
          </div>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets"></div>
      </div>
    </div>
  </main>
</template>

<script>
// https://github.surmon.me/vue-awesome-swiper/
// https://github.com/surmon-china/surmon-china.github.io/tree/source/projects/vue-awesome-swiper/nuxt
import 'swiper/swiper.min.css'

export default {
  name: 'SwiperNuxt',
  data() {
    return {
      swiperOptions: {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
        },
      },
    }
  },
  methods: {
    onSwiperRedied(swiper) {
      // eslint-disable-next-line no-console
      console.log('Swiper redied!', swiper)
    },
    onSwiperSlideChangeTransitionStart() {
      // eslint-disable-next-line no-console
      console.log('SwiperSlideChangeTransitionStart!')
    },
    onSwiperClickSlide(index, reallyIndex) {
      // eslint-disable-next-line no-console
      console.log('Swiper click slide!', reallyIndex)
    },
  },
}
</script>

<style scoped>
.title {
  text-align: center;
}

.example {
  height: auto;
}

.swiper {
  height: 300px;
  width: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 38px;
  font-weight: 700;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-pagination > .swiper-pagination-bullet {
  background-color: red;
}
</style>
