<template>
  <footer class="page__footer  footer">
    <div class="container">
      <logo fill="#ffffff" class="footer__logo"/>
      <ul class="footer__social">
        <li class="footer__social-item">
          <a href="https://www.instagram.com/thisisyarn/" class="footer__social-link" target="_blank">
            <span class="icon icon--instagram">Instagram</span>
          </a>
        </li>
        <li class="footer__social-item">
          <a href="https://www.facebook.com/thisis.yarn" class="footer__social-link" target="_blank">
            <span class="icon icon--facebook">Facebook</span>
          </a>
        </li>
      </ul>
      <nav class="footer__menu">
        <ul class="footer__menu-list">
          <li class="footer__menu-item">
            <nuxt-link to="/yarn" class="footer__link">Yarn</nuxt-link>
          </li>
          <li class="footer__menu-item">
            <nuxt-link to="/handmade" class="footer__link">Handmade</nuxt-link>
          </li>
          <li class="footer__menu-item">
            <nuxt-link to="/aboutus" class="footer__link">About us</nuxt-link>
          </li>
          <li class="footer__menu-item">
            <nuxt-link to="/shipping" class="footer__link">Shipping</nuxt-link>
          </li>
          <li class="footer__menu-item">
            <nuxt-link to="/wholesale" class="footer__link">Wholesale</nuxt-link>
          </li>
        </ul>
      </nav>
      <div class="footer__copyright">
        <span class="footer__copyright-text">Сontact here for support:</span>
        <a href="mailto:support@thisisyarnstore.com" class="footer__link  footer__link--underline">support@thisisyarnstore.com</a>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from '~/components/Logo.vue';

export default {
  components: {
    Logo,
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables';
@import '../assets/scss/blocks/footer';
</style>
