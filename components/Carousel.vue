<template>
  <div id="carousel" class="carousel">
    <div class="carousel__body">
      <div :style="'transform: translate3d(' + swapPosition + '%, 0, 0)'" class="carousel__body-scroll">
        <div v-for="(image, index) of images" :key="index" class="carousel__img  image-box">
          <picture>
            <source :srcset="path + image.name + '-1900.webp 1x, ' + path + image.name + '-1900@2x.webp 2x'"
                    media="(min-width: 1900px)" type="image/webp">
            <source :srcset="path + image.name + '-1440.webp 1x, ' + path + image.name + '-1440@2x.webp 2x'"
                    media="(min-width: 1440px)" type="image/webp">
            <source :srcset="path + image.name + '-992.webp 1x, ' + path + image.name + '-992@2x.webp 2x'"
                    media="(min-width: 992px)" type="image/webp">
            <source :srcset="path + image.name + '-768.webp 1x, ' + path + image.name + '-768@2x.webp 2x'"
                    media="(min-width: 768px)" type="image/webp">
            <source :srcset="path + image.name + '-360.webp 1x, ' + path + image.name + '-360@2x.webp 2x'"
                    type="image/webp">

            <source :srcset="path + image.name + '-1900.jpg 1x, ' + path + image.name + '-1900@2x.jpg 2x'"
                    media="(min-width: 1900px)">
            <source :srcset="path + image.name + '-1440.jpg 1x, ' + path + image.name + '-1440@2x.jpg 2x'"
                    media="(min-width: 1440px)">
            <source :srcset="path + image.name + '-1440.jpg 1x, ' + path + image.name + '-1440@2x.jpg 2x'"
                    media="(min-width: 1440px)">
            <source :srcset="path + image.name + '-992.jpg 1x, ' + path + image.name + '-992@2x.jpg 2x'"
                    media="(min-width: 992px)">
            <source :srcset="path + image.name + '-768.jpg 1x, ' + path + image.name + '-768@2x.jpg 2x'"
                    media="(min-width: 768px)">
            <img :src="path + image.name + '-360.jpg'" :srcset="path + image.name + '-360@2x.jpg 2x'" :alt="image.alt">
          </picture>
        </div>
      </div>
    </div>
    <ul class="carousel__thumbs">
      <li v-for="(thumb, thumbId) of images" :key="thumbId" class="carousel__item">
        <a :class="{ 'carousel__link--active' : Math.abs(swapPosition / 100) === thumbId }"
           class="carousel__link"
           @click="swapPosition = -100 * thumbId">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data() {
    return {
      swapPosition: 0,
      autoPlayTimeInterval: 5000,
      autoPlayInterval: null,
      path: '/img/home-slider/',
      images: [
        {
          name: 'banner-alize',
          alt: 'Alize Puffy - Ideal yarn for blankets',
        },
        {
          name: 'banner-handmade-merino',
          alt: 'Newborn merino wool bonnet',
        },
        {
          name: 'banner-handmade-cotton-hat',
          alt: 'Newborn organic cotton hat',
        },
        {
          name: 'banner-nako',
          alt: 'Etrofill - Organic cotton',
        },
        {
          name: 'banner-dolphin-baby',
          alt: 'Himalaya - Dolphin baby',
        },
        {
          name: 'banner-kartopu',
          alt: 'Kartopu cotton',
        },
        {
          name: 'banner-la-mia',
          alt: 'La mia cotton - Premium handknitting yarns',
        },
      ],
    };
  },
  destroyed() {
    const carousel = document.getElementById('carousel');
    carousel.removeEventListener('mouseenter', () => this.pauseAutoPlay());
    carousel.removeEventListener('mouseleave', () => this.startAutoPlay());
  },
  mounted() {
    const carousel = document.getElementById('carousel');
    carousel.addEventListener('mouseenter', () => this.pauseAutoPlay());
    carousel.addEventListener('mouseleave', () => this.startAutoPlay());

    this.startAutoPlay();
  },
  methods: {
    getMaxSwapPosition() {
      return (this.images.length - 1) * -100;
    },
    startAutoPlay() {
      this.autoPlayInterval = setInterval(() => {
        if (this.swapPosition > this.getMaxSwapPosition()) {
          this.swapPosition -= 100;
        } else {
          this.swapPosition = 0;
        }
      }, this.autoPlayTimeInterval);
    },
    pauseAutoPlay() {
      clearInterval(this.autoPlayInterval);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables';
@import '../assets/scss/blocks/carousel';
</style>
