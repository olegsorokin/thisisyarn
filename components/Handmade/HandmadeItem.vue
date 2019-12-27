<template>
  <nuxt-link to="/handmade/0001" class="product">
    <div class="product__img  product__img--small">
      <img src="/img/handmade-test.jpg" alt="">
    </div>
    <div class="product__info">
      <h4 class="product__title">Superlana midi motif</h4>
      <span class="product__values">25% Wool - 75% Acrylic</span>
      <span class="product__values">100 gr 170 mt</span>
      <span class="product__cost">$29</span>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'HandmadeItem',
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';
@import '../../assets/scss/blocks/product';
</style>
