<template>
  <div class="cart">
    <div class="page__subheader  cart__header">
      <div class="container">
        <h1 class="page__title  cart__title">Cart</h1>
      </div>
    </div>
    <div class="page__content">
      <div class="container">
        <div class="row">
          <div class="col  col-75">
            <div v-if="false" class="cart__empty">
              <h2 class="cart__empty-title">You don't have any items in your cart.</h2>
              <span>Have an account? Sign in to see your items.</span>
            </div>
            <div class="table  goods__table">
              <div class="table__head">
                <div class="table__row">
                  <div class="table__cell  goods__cell--product">Products</div>
                  <div class="table__cell  goods__cell--price">Price</div>
                  <div class="table__cell  goods__cell--number">Number</div>
                  <div class="table__cell  goods__cell--total">Total</div>
                  <div class="table__cell  goods__cell--action">&nbsp;</div>
                </div>
              </div>
              <div class="table__body">
                <div v-for="(product, index) of products" :key="index" class="table__row">
                  <div class="table__cell  goods__cell--product">
                    <div class="goods__img">
                      <img :src="product.img" :alt="product.name">
                    </div>
                    <h3 class="goods__name">{{ product.manufacturer }} {{ product.name }} - {{ product.color }}</h3>
                  </div>
                  <div class="table__cell  goods__cell--price">
                    <span class="table__title">Price</span>
                    ${{ product.cost }}
                  </div>
                  <div class="table__cell  goods__cell--number">
                    <input-number :value="product.quantity" :type-large="true" @priceChanged="changeQuantity($event, index)"/>
                  </div>
                  <div class="table__cell  goods__cell--total">
                    <span class="table__title">Total</span>
                    ${{ product.cost * product.quantity }}
                  </div>
                  <div class="table__cell  goods__cell--action">
                    <button class="button  button--small" @click="removeProduct(index)">
                      <span class="icon  icon--close">Close</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <nuxt-link to="/yarn" class="button  cart__button-continue">Continue shopping</nuxt-link>
          </div>
          <div class="col  col-25">
            <div class="table  goods__table">
              <div class="table__head">
                <div class="table__row">
                  <div class="table__cell">Order summary</div>
                </div>
              </div>
              <div class="table__body">
                <div class="table__row">
                  <div class="table__cell  goods__cell--type">Total amount</div>
                  <div class="table__cell  goods__cell--cost">${{ itemsCost }}</div>
                </div>
                <div class="table__row">
                  <div class="table__cell  goods__cell--type">Shipping price</div>
                  <div class="table__cell  goods__cell--cost">${{ shippingPrice }}</div>
                </div>
                <div class="table__row">
                  <div class="table__cell  goods__cell--type">
                    <strong>Total</strong>
                  </div>
                  <div class="table__cell  goods__cell--cost">${{ totalCost }}</div>
                </div>
              </div>
            </div>
            <input id="checkbox" class="form__checkbox-input" type="checkbox">
            <label for="checkbox" class="form__checkbox  goods__checkbox">
              <span>Delivery is carried out through PTT - Turkish Post Office. The cost of international postage DOES NOT include tracking number. International Standard Shipping takes between 2-5 weeks, sometimes up to 2 months.</span>
            </label>
            <div class="form__group">
              <label for="note" class="goods__note">Note</label>
              <textarea id="note" name="note" class="form__textarea" cols="30" rows="7" placeholder="Put your text here..."></textarea>
            </div>
            <div class="form__group">
              <button class="button">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputNumber from '~/components/InputNumber';

export default {
  name: 'Cart',
  components: {
    InputNumber,
  },
  methods: {
    toNumber(number) {
      return parseFloat((number).toFixed(2));
    },
    removeProduct(id) {
      this.$store.commit('cart/removeItem', parseInt(id));
    },
    changeQuantity(quantity, id) {
      this.$store.commit('cart/changeQuantity', { quantity: quantity, id: id });
    }
  },
  computed: {
    products() {
      return this.$store.state.cart.itemsList;
    },
    itemsCost() {
      return this.toNumber(this.$store.getters['cart/totalCost']());
    },
    totalWeightGr() {
      return parseInt(this.$store.getters['cart/totalWeightGr']());
    },
    shippingPrice() {
      if (this.totalWeightGr > 0 && this.totalWeightGr <= 100) {
        return 2.9;
      } else if (this.totalWeightGr > 100 && this.totalWeightGr <= 400) {
        return 7;
      } else if (this.totalWeightGr > 400 && this.totalWeightGr <= 800) {
        return 10;
      } else if (this.totalWeightGr > 800 && this.totalWeightGr <= 1200) {
        return 14;
      } else if (this.totalWeightGr > 1200 && this.totalWeightGr <= 1600) {
        return 17;
      } else if (this.totalWeightGr > 1600 && this.totalWeightGr <= 2000) {
        return 19;
      } else if (this.totalWeightGr > 2000 && this.totalWeightGr <= 2400) {
        return 24;
      } else if (this.totalWeightGr > 2400 && this.totalWeightGr <= 2800) {
        return 27;
      } else if (this.totalWeightGr > 2800 && this.totalWeightGr <= 3200) {
        return 30;
      } else if (this.totalWeightGr > 3200 && this.totalWeightGr <= 3600) {
        return 33;
      } else if (this.totalWeightGr > 3600) {
        return 37;
      }
      return 0
    },
    totalCost() {
      return this.toNumber(parseFloat(this.itemsCost) + parseFloat(this.shippingPrice));
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables';
@import '../assets/scss/blocks/cart';
@import '../assets/scss/blocks/table';
@import '../assets/scss/blocks/goods';
</style>
