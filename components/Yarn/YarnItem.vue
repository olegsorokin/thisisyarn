<template>
  <nuxt-link :to="{ name: 'yarn-id', params: { id: data.id }}" class="product">
    <div class="product__img">
      <img :src="data.img" alt="">
    </div>
    <div class="product__info">
      <h4 class="product__title">{{ data.name }}</h4>
      <span class="product__values">{{ data.content }}</span>
      <span class="product__values">{{ data.ballWeightGr }} gr {{ data.ballWeightOz }} mt</span>
      <span class="product__cost">${{ data.cost }}</span>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'YarnItem',
  props: {
    data: {
      type: Object,
      default: null
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';
@import '../../assets/scss/blocks/product';
</style>
