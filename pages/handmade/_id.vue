<template>
  <div class="good">
    <div class="page__subheader  good__header">
      <div class="container">
        <h1 class="page__title  good__title">Pixie Baby Bonnet</h1>
      </div>
    </div>
    <div class="page__content">
      <div class="container">
        <div class="row">
          <div class="col  col-50">
            <div class="slider  good__slider">
              <div class="slider__body">
                <div class="slider__img  image-box">
                  <img src="/img/handmade-test.jpg" alt="">
                </div>
              </div>
              <div class="slider__thumbs">
                <div class="slider__item">
                  <a class="slider__link  slider__link--active  image-box">
                    <img src="/img/handmade-test.jpg" alt="">
                  </a>
                </div>
                <div class="slider__item">
                  <a class="slider__link  image-box">
                    <img src="/img/handmade-test.jpg" alt="">
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col  col-50">
            <div class="good__wrap">
              <span class="good__cost">$ 15.06</span>
              <input-number :type-large="true"/>
              <div class="good__cart-button-wrap">
                <button class="button  button--large  good__cart-button">Add to cart <span class="icon icon--cart"></span></button>
              </div>
            </div>
            <div class="good__wrap">
              <span class="logotype  logotype--paypal">PayPal</span>
              <span class="logotype  logotype--visa">Visa</span>
              <span class="logotype  logotype--mastercard">MasterCard</span>
            </div>
            <div class="good__wrap">
              <ul class="list">
                <li>Age: 2-4 years</li>
                <li>Head circumference: 48-52 cm /18.9"- 20.5" approx</li>
                <li>Materials: 49% wool, 51% acrylic</li>
                <li>Care: Hand wash in cold water with mild detergent, lay flat to dry.</li>
                <li>Custom Orders: if you are interested in a different size or color just send us a conversation and we can discuss your interest.</li>
              </ul>
              <p>
                This bonnet has stretchy fit, warm and soft<br>
                Products are packed in a unique gift box (different colors) made of felt with lace.<br>
                Due to the settings of your monitor there may be some slight differences in the color tone / shadow of the website photo and the actual item that you receive.
              </p>
            </div>
            <div class="good__wrap">
              <div class="social">
                <button class="social__button  social__button--facebook"><span class="icon  icon--small-facebook"></span> Share</button>
                <button class="social__button  social__button--twitter"><span class="icon  icon--small-twitter"></span> Share</button>
                <button class="social__button  social__button--instagram"><span class="icon  icon--small-instagram"></span> Share</button>
              </div>
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
  name: 'HandmadeView',
  components: {
    InputNumber,
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';
@import '../../assets/scss/blocks/good';
@import '../../assets/scss/blocks/slider';
@import '../../assets/scss/blocks/logotype';
@import '../../assets/scss/blocks/social';
</style>
