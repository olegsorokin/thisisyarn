<template>
  <div class="page__error">
    <div class="page__content">
      <div class="container">
        <h1 class="page__error-title">That page doesn't exist!</h1>
        <span>Sorry, the page you were looking for could not be found.</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Oops! Page not found!',
    };
  },
};
</script>

<style scoped>
</style>
