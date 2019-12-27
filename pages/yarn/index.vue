<template>
  <div class="yarn">
    <div class="page__subheader  yarn__header">
      <div class="container">
        <h1 class="page__title  yarn__title">Yarn weight</h1>
      </div>
    </div>
    <div class="page__content">
      <div class="container">
        <div class="row">
          <div class="col  col-25">
            <aside class="aside">
              <h3 class="aside__title">Yarn</h3>
              <ul class="aside__list">
                <li class="aside__item">
                  <a href="#" class="aside__link  link  disabled">Yarn weight</a>
                </li>
                <li class="aside__item">
                  <a href="#" class="aside__link  link  disabled">Yarn fiber</a>
                </li>
                <li class="aside__item">
                  <a href="#" class="aside__link  link  disabled">Popular</a>
                </li>
                <li class="aside__item">
                  <a href="#" class="aside__link  link  disabled">Brand</a>
                </li>
              </ul>
            </aside>
          </div>
          <div class="col  col-75">
            <h2 class="page__subtitle">Yarn weight</h2>
            <div class="row">
              <div v-for="(item, index) of $store.state.yarn.itemsList" :key="index" class="col  col-33  col-tab-50  col-mobile-50">
                <yarn-item :data="item"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import YarnItem from '~/components/Yarn/YarnItem.vue';

export default {
  name: 'Yarn',
  components: {
    YarnItem,
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';
@import '../../assets/scss/blocks/yarn';
@import '../../assets/scss/blocks/aside';
</style>
