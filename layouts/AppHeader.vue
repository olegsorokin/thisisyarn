<template>
  <header class="page__header  header">
    <div class="header__bar">
      <div class="container">
        <nav class="header__delivery-menu  delivery-menu">
          <ul class="delivery-menu__list">
            <li class="delivery-menu__item">
              <nuxt-link to="/shipping" class="delivery-menu__link  header__link">Shipping</nuxt-link>
            </li>
            <li class="delivery-menu__item">
              <nuxt-link to="/wholesale" class="delivery-menu__link  header__link">Wholesale</nuxt-link>
            </li>
          </ul>
        </nav>
        <div class="header__user-bar  user-bar">
          <nuxt-link to="/login" class="user-bar__link  header__link">
            <span class="icon  icon--user">Icon user</span>
            Login/Register
          </nuxt-link>
          <nuxt-link to="/cart" class="user-bar__cart  link">
            <span class="user-bar__cart-counter">
              <span class="icon  icon--cart">Icon cart</span>
              <span class="user-bar__cart-counter-value">{{ cart.itemsList.length }}</span>
            </span>
            <span v-if="!cart.isEmpty" class="user-bar__cart-cost">{{ totalCost }} USD</span>
            <span v-if="cart.isEmpty" class="user-bar__cart-cost">Empty</span>
          </nuxt-link>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="header__wrap">
        <logo class="header__logo"/>
        <div class="header__search  search">
          <input class="form__control  search__input" type="text" placeholder="Search...">
          <span class="icon  icon--search">Search</span>
        </div>
        <a href="https://wa.me/+905382523695" class="header__whatsapp  link">
          <span class="header__whatsapp-icon">Whatsapp</span>
          +90 538 252 36 95
        </a>
        <nav class="header__menu  menu">
          <ul class="menu__list">
            <li class="menu__item">
              <nuxt-link to="/yarn" class="menu__link  link">Yarn</nuxt-link>
            </li>
            <li class="menu__item">
              <nuxt-link to="/handmade" class="menu__link  link">Handmade</nuxt-link>
            </li>
            <li class="menu__item">
              <nuxt-link to="/aboutus" class="menu__link  link">About us</nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '~/components/Logo.vue';

export default {
  components: {
    Logo
  },
  computed: {
    cart() {
      return this.$store.state.cart
    },
    totalCost() {
      return this.cart.itemsList.reduce((accum, item) => accum + item.cost * item.quantity, 0)
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables';
@import '../assets/scss/blocks/header';
@import '../assets/scss/blocks/delivery-menu';
@import '../assets/scss/blocks/user-bar';
@import '../assets/scss/blocks/logo';
@import '../assets/scss/blocks/menu';
@import '../assets/scss/blocks/search';
</style>
