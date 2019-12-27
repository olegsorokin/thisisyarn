import Vue from 'vue';
import Vuelidate from 'vuelidate';
import { validationMixin } from 'vuelidate';

Vue.use(Vuelidate);

Vue.extend({
  mixins: [validationMixin]
});
