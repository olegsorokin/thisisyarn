<template>
  <div class="page">
    <app-header/>
    <main class="page__main">
      <nuxt/>
    </main>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables';
@import '../assets/scss/blocks/page';
</style>
