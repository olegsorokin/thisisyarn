<template>
  <div class="wholesale">
    <div class="page__subheader  wholesale__header">
      <div class="container">
        <h1 class="page__title  wholesale__title">Wholesale</h1>
      </div>
    </div>
    <div class="page__content">
      <div class="container">
        <form @submit.prevent="sendWholesaleContact" class="form  wholesale__form">
          <div class="row">
            <div class="col col-50">
              <div class="form__group">
                <label for="firstName" class="form__label">
                  First Name
                  <span class="form__label-required">*</span>
                </label>
                <input v-model.trim="$v.wholesale.firstName.$model"
                       id="firstName"
                       type="text"
                       class="form__control"
                       autofocus
                       required>
              </div>
            </div>
            <div class="col col-50">
              <div class="form__group">
                <label for="lastName" class="form__label">
                  Last Name
                  <span class="form__label-required">*</span>
                </label>
                <input v-model.trim="$v.wholesale.lastName.$model" id="lastName" type="text" class="form__control" required>
              </div>
            </div>
          </div>
          <div class="form__group">
            <label for="phone" class="form__label">
              Phone
              <span class="form__label-required">*</span>
            </label>
            <input v-model.trim="$v.wholesale.phone.$model" id="phone" type="text" class="form__control" required>
          </div>
          <div class="form__group">
            <label for="country" class="form__label">
              Country
              <span class="form__label-required">*</span>
            </label>
            <input v-model.trim="$v.wholesale.country.$model" id="country" type="text" class="form__control" required>
          </div>
          <div class="form__group">
            <label for="city" class="form__label">
              City
              <span class="form__label-required">*</span>
            </label>
            <input v-model.trim="$v.wholesale.city.$model" id="city" type="text" class="form__control" required>
          </div>
          <div class="form__group">
            <label for="address" class="form__label">
              Address
              <span class="form__label-required">*</span>
            </label>
            <input v-model.trim="$v.wholesale.address.$model" id="address" type="text" class="form__control" required>
          </div>
          <div class="form__group">
            <label for="zip" class="form__label">
              Zip Code
              <span class="form__label-required">*</span>
            </label>
            <input v-model.trim="$v.wholesale.zip.$model" id="zip" type="text" minlength="6" class="form__control" required>
          </div>
          <div class="form__group">
            <label for="additionalMessage" class="form__label">Additional Message</label>
            <textarea v-model.trim="$v.wholesale.additionalMessage.$model" id="additionalMessage" rows="5" class="form__control"></textarea>
          </div>
          <div class="form__group">
            <label for="site" class="form__label">Website</label>
            <input v-model.trim="$v.wholesale.site.$model" id="site" type="text" class="form__control">
          </div>
          <div class="form__group">
            <label for="facebook" class="form__label">Facebook</label>
            <input v-model.trim="$v.wholesale.facebook.$model" id="facebook" type="text" class="form__control">
          </div>
          <div class="form__group">
            <label for="instagram" class="form__label">Instagram</label>
            <input v-model.trim="$v.wholesale.instagram.$model" id="instagram" type="text" class="form__control">
          </div>
          <button type="submit" class="button">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators';

export default {
  name: 'Whosale',
  data() {
    return {
      wholesale: {
        firstName: '',
        lastName: '',
        phone: '',
        country: '',
        city: '',
        address: '',
        zip: '',
        additionalMessage: '',
        site: '',
        facebook: '',
        instagram: ''
      }
    };
  },
  validations: {
    wholesale: {
      firstName: { required },
      lastName: { required },
      phone: { required },
      country: { required },
      city: { required },
      address: { required },
      zip: { required, minLength: minLength(6) },
      site: { required },
      facebook: { required },
      instagram: { required }
    }
  },
  methods: {
    sendWholesaleContact() {
      this.$v.$touch();

      if (this.$v.$error) {
        console.log('ERROR! ' + this.$v.$error);
        console.log(this.wholesale);
        return;
      }

      console.log('OK!');
      return true;
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../assets/scss/variables';
  @import '../assets/scss/blocks/wholesale';
</style>
