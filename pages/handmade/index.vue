<template>
  <div class="handmade">
    <div class="page__subheader  handmade__header">
      <div class="container">
        <h1 class="page__title  handmade__title">Handmade</h1>
      </div>
    </div>
    <div class="page__content">
      <div class="container">
        <div class="row">
          <div class="col  col-25">
            <aside class="aside">
              <h3 class="aside__title">Handmade</h3>
              <ul class="aside__list">
                <li class="aside__item">
                  <a href="#" class="aside__link  link  disabled">Handmade</a>
                </li>
              </ul>
            </aside>
          </div>
          <div class="col  col-75">
            <h2 class="page__subtitle">Handmade</h2>
            <div class="row">
              <div class="col  col-33  col-tab-50  col-mobile-50">
                <handmade-item/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HandmadeItem from '~/components/Handmade/HandmadeItem';

export default {
  name: 'Handmade',
  components: {
    HandmadeItem,
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';
@import '../../assets/scss/blocks/handmade';
@import '../../assets/scss/blocks/aside';
</style>
