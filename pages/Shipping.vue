<template>
  <div class="shipping">
    <div class="page__subheader  shipping__header">
      <div class="container">
        <h1 class="page__title  shipping__title">Shipping</h1>
      </div>
    </div>
    <div class="page__content">
      <div class="container  container--text">
        <h2>Yarn</h2>
        <h3>Ready to ship</h3>
        <p>1-5 business days</p>
        <h3>Delivery</h3>
        <p>Delivery is carried out through PTT - Turkish Post Office.</p>
        <p>The cost of international postage DOES NOT include tracking number. If you need tracking, ask us and we are happy to provide it according to Turkey post's prices.</p>
        <p>International Standard Shipping takes between 2-5 weeks, sometimes up to 2 months.</p>
        <h3>Price</h3>
        <table class="table">
          <thead>
          <tr>
            <th>Weight/grams</th>
            <th>Price, USD</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item, index) of yarnShipping" :key="index">
            <td>{{ item.sizeStart }}-{{ item.sizeEnd }}</td>
            <td>{{ item.cost }}</td>
          </tr>
          </tbody>
        </table>

        <h2>Handmade</h2>
        <h3>Ready to ship</h3>
        <p>80% of the items are ready for shipment. These items we can send 1-2 days after your order.</p>
        <p>20% of the items are not ready to be shipped. We can knit specially for you and send in 1-2 weeks later.</p>
        <h3>Delivery</h3>
        <p>Delivery is carried out through PTT - Turkish Post Office.</p>
        <p>The cost of international postage includes tracking number.</p>
        <p>International Standard Shipping takes between 1-3 weeks, sometimes up to 30 business days.</p>
        <h3>Price</h3>
        <table class="table">
          <tbody>
          <tr>
            <td></td>
            <td>Price, USD</td>
          </tr>
          <tr>
            <td>One item</td>
            <td>{{ handMadeOneShipping }}</td>
          </tr>
          <tr>
            <td>Additional item</td>
            <td>{{ handMadeAdditionalShipping }}</td>
          </tr>
          </tbody>
        </table>

        <h2>Important information for buyers</h2>
        <p>We are NOT responsible for items lost or damaged by post.</p>
        <p>Please make sure address you provided is correct. We will not resend items returned to us by your local post office if you provided wrong address or parcel was not picked up by you. If item returned to us for this reason we will not refund original postage cost or pay for second shipment whatever is required.</p>
        <p>Buyer paying possible custom/import taxes, those are not included in product's prices or shipping cost.</p>
        <p>WE are not responsible for postal delays.</p>
        <p>Also we have fast shipping, email us to know price for your location.</p>
        <p>If you have any questions, do not hesitate to contact us.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Shipping',
  head() {
    return {
      title: 'Shipping | This is Yarn Store',
      meta: [
        { name: 'description', hid: 'description', content: 'Description text' },
        // Open Graph
        { name: 'og:title', content: 'Shipping | This is Yarn Store' },
        { name: 'og:description', content: 'Description text' },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: 'http://thisisyarnstore.com/' },
        { name: 'og:image', content: 'http://thisisyarnstore.com/' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@thisisyarnstore' },
        { name: 'twitter:title', content: 'Shipping | This is Yarn Store' },
        { name: 'twitter:description', content: 'Description text' },
        { name: 'twitter:image', content: 'http://thisisyarnstore.com/' },
        { name: 'twitter:image:alt', content: 'This is Yarn Store Logo' }
      ]
    }
  },
  data() {
    return {
      yarnShipping: [
        {
          sizeStart: 1,
          sizeEnd: 100,
          cost: 2.9
        },
        {
          sizeStart: 101,
          sizeEnd: 400,
          cost: 7
        },
        {
          sizeStart: 401,
          sizeEnd: 800,
          cost: 10
        },
        {
          sizeStart: 801,
          sizeEnd: 1200,
          cost: 14
        },
        {
          sizeStart: 1201,
          sizeEnd: 1600,
          cost: 17
        },
        {
          sizeStart: 1600,
          sizeEnd: 2000,
          cost: 19
        },
        {
          sizeStart: 2001,
          sizeEnd: 2400,
          cost: 24
        },
        {
          sizeStart: 2401,
          sizeEnd: 2800,
          cost: 27
        },
        {
          sizeStart: 2801,
          sizeEnd: 3200,
          cost: 30
        },
        {
          sizeStart: 3201,
          sizeEnd: 3600,
          cost: 33
        },
        {
          sizeStart: 3601,
          sizeEnd: 4000,
          cost: 37
        }
      ],
      handMadeOneShipping: 5.90,
      handMadeAdditionalShipping: 1.90
    };
  }
};
</script>

<style lang="scss" scoped>
  @import '../assets/scss/variables';
  @import '../assets/scss/blocks/shipping';
</style>
