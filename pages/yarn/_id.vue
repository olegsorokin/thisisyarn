<template>
  <div v-if="yarn" class="good">
    <div class="page__subheader  good__header">
      <div class="container">
        <h1 class="page__title  good__title">{{ yarn.name }}</h1>
      </div>
    </div>
    <div class="page__content">
      <div class="container">
        <div class="row">
          <div class="col  col-50">
            <div class="slider  good__slider">
              <div class="slider__body">
                <div class="slider__img  image-box">
                  <img :src="slideImage" :alt="yarn.name">
                </div>
              </div>
              <div v-if="false" class="slider__thumbs">
                <div v-for="(item, index) of yarn.thumbs" :key="index" class="slider__item">
                  <a href="#" class="slider__link  image-box">
                    <img :src="item" :alt="yarn.name">
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col  col-50">
            <div class="good__wrap">
              <div class="good__radio">
                <input id="single" name="packSize" class="form__radio-input" type="radio" checked>
                <label for="single" class="form__radio">
                  <span>Single (${{ yarn.cost }})</span>
                </label>
              </div>
              <div class="good__radio">
                <input id="pack" name="packSize" class="form__radio-input" type="radio">
                <label for="pack" class="form__radio">
                  <span>Pack - 5 qty. (${{ toNumber(yarn.cost - yarn.cost * 0.05) }} each)</span>
                </label>
              </div>
            </div>
            <div class="good__wrap">
              <span class="good__cost">$ {{ price() }}</span>
              <input-number :value="goodsQuantity" :max-value="yarn.balance" :type-large="true" @priceChanged="goodsQuantity = $event"/>
              <div class="good__cart-button-wrap">
                <button :disabled="!goodsQuantity"
                        class="button  button--large  good__cart-button"
                        @click="addToCart()">
                  Add to cart <span class="icon icon--cart"></span>
                </button>
              </div>
            </div>
            <div class="good__wrap">
              <span class="logotype  logotype--paypal">PayPal</span>
              <span class="logotype  logotype--visa">Visa</span>
              <span class="logotype  logotype--mastercard">MasterCard</span>
            </div>
            <div class="good__wrap">
              <ul class="list">
                <li>Content: {{ yarn.content }}</li>
                <li>Ball Weight: {{ yarn.ballWeightGr }} gr / {{ yarn.ballWeightOz }} oz</li>
                <li>Yarn Length: {{ yarn.yarnLengthMt }} mt / {{ yarn.yarnLengthYd }} yd</li>
                <li>Yarn Weight: {{ yarn.yarnWeight }}</li>
                <li>Recommended Knitting Needle: {{ yarn.knittingNeedle }} mm</li>
                <li>Recommended Crochet Hook: {{ yarn.crochetNeedle }} mm</li>
              </ul>
              <p>One of the most popular yarns of Madame Tricote Paris, Madame Tricote Paris Dora is all-purpose classic yarn. With a lot of color choices, you can prefer for all seasons and all kind of projects from garment to decorate objects.</p>
            </div>
            <div class="good__wrap">
              <div class="social">
                <button class="social__button  social__button--facebook"><span class="icon  icon--small-facebook"></span> Share</button>
                <button class="social__button  social__button--twitter"><span class="icon  icon--small-twitter"></span> Share</button>
                <button class="social__button  social__button--instagram"><span class="icon  icon--small-instagram"></span> Share</button>
              </div>
            </div>
            <div class="good__wrap">
              <h2 class="good__subtitle">Product Variations</h2>
              <ul class="good__list">
                <li v-for="(good, index) of yarn.variations" :key="index" class="good__item">
                  <a :class="{ 'good__link--active': currentColor === index }"
                     class="image-box  good__link"
                     @click="checkColor(index)">
                    <img :src="'http://www.alize.gen.tr/' + good.image" :alt="good.id">
                  </a>
                </li>
              </ul>
            </div>
            <div class="good__wrap">
              <h2 class="good__subtitle">Madame Tricote Paris</h2>
              <p>Since 1968, under the name “Diktas Dikis Iplik Sanayi ve Ticaret A.S.” is Turkey’s leading industrial and home-textiles thread manufacturer. Using highest quality Egyptian cotton and imported polyester, and manufacturing with highest quality standards in mind, Diktas A.S. threads are of highest strength, durability, and luster. After export to more than 50 countrys. Diktas decided to reband "Örenbayan" to "Madame Tricote Paris" determined to entrance the france's market in 2004.</p>
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
  name: 'YarnView',
  components: {
    InputNumber,
  },
  props: ['event'],
  data() {
    return {
      goodsQuantity: 1,
      currentColor: 0
    };
  },
  beforeRouteUpdate(to) {
    this.$store.commit('yarn/preloadItem', parseInt(to.params.id));
  },
  methods: {
    toNumber(number) {
      return parseFloat((number).toFixed(2));
    },
    price() {
      if (this.goodsQuantity >= 1) {
        return this.toNumber(this.yarn.cost * this.goodsQuantity);
      }
      return this.toNumber(this.yarn.cost);
    },
    addToCart() {
      this.$store.commit('cart/addItem', { quantity: this.goodsQuantity, item: this.yarn, color: this.yarn.variations[this.currentColor].number });
    },
    checkColor(color) {
      this.currentColor = color;
    }
  },
  computed: {
    yarn() {
      const id = parseInt(this.$route.params.id);

      return this.$store.getters['yarn/getById'](id);
    },
    slideImage() {
      return '/img/products/angora-gold/angora-gold-' + this.yarn.variations[this.currentColor].number + '.jpg';
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';
@import '../../assets/scss/blocks/good';
@import '../../assets/scss/blocks/slider';
@import '../../assets/scss/blocks/logotype';
@import '../../assets/scss/blocks/social';
</style>
