<template>
  <div class="slider">
    <div class="slider__body">
      <div :style="'transform: translateX(' + swapPosition + '%)'" class="slider__body-scroll">
        <div v-for="(image, index) of images" :key="index" class="slider__img  image-box" style="padding-top: 500px">
          <picture>
            <source v-for="(webp, keyWebp) of image.media" :key="keyWebp"
                    :srcset="path + image.name + '-' + webp + '.webp 1x, ' + path + image.name + '-' + webp + '@2x.webp 2x'"
                    :media="'(max-width: ' + webp + 'px)'" type="image/webp">
            <source :srcset="path + image.name + '-1900.webp 1x, ' + path + image.name + '-1900@2x.webp 2x'"
                    type="image/webp">

            <source v-for="(jpg, keyJpg) of image.media" :key="keyJpg"
                    :srcset="path + image.name + '-' + jpg + '.jpg 1x, ' + path + image.name + '-' + jpg + '@2x.jpg 2x'"
                    :media="'(max-width: ' + jpg + 'px)'">
            <img :src="path + image.name + '-1900.jpg'" :srcset="path + image.name + '-1900@2x.jpg 2x'" :alt="image.alt">
          </picture>
        </div>
      </div>
    </div>
    <ul v-if="false" class="slider__thumbs">
      <li class="slider__item">
        <a class="slider__link  slider__link--active  image-box">
          <picture>
            <source type="image/webp" media="(min-width: 768px)" srcset="/img/banner-home.webp 1x, /img/banner-home.webp 2x">
            <source type="image/webp" srcset="/img/banner-home.webp">

            <source media="(min-width: 768px)" srcset="/img/banner-home.jpg 1x, /img/banner-home.jpg 2x">
            <img src="/img/banner-home.jpg" alt="Photo Yarn">
          </picture>
        </a>
      </li>
      <li class="slider__item">
        <a class="slider__link  image-box">
          <picture>
            <source type="image/webp" media="(min-width: 768px)" srcset="/img/banner-home.webp 1x, /img/banner-home.webp 2x">
            <source type="image/webp" srcset="/img/banner-home.webp">

            <source media="(min-width: 768px)" srcset="/img/banner-home.jpg 1x, /img/banner-home.jpg 2x">
            <img src="/img/banner-home.jpg" alt="Photo Yarn">
          </picture>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  data() {
    return {
      swapPosition: 0,
      path: '/img/home-slider/',
      images: [
        {
          name: 'banner-alize',
          media: [360, 378, 992, 1440],
          alt: 'Alize Puffy - Ideal yarn for blankets',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables';
@import '../assets/scss/blocks/slider';
</style>
