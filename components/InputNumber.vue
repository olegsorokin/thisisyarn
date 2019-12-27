<template>
  <div class="form__number-wrap">
    <div :class="{ 'form__number--large': typeLarge }" class="form__number">
      <button :disabled="currentValue < 2" class="form__number-button" @click="reduceValue()">-</button>
      <input v-model="currentValue" :max="maxValue" :step="step" pattern="[0-9]*" type="number" min="1" class="form__control" required>
      <button :disabled="currentValue >= maxValue" class="form__number-button" @click="increaseValue()">+</button>
    </div>
    <span v-if="!currentValue" class="form__error">{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: 'InputNumber',
  props: ['event', 'emit', 'typeLarge', 'value', 'maxValue', 'step'],
  data() {
    return {
      currentValue: 1,
      error: 'This field is required',
    };
  },
  watch: {
    currentValue(value) {
      this.$emit('priceChanged', this.currentValue);
      if (value && !Number.isInteger(value)) {
        this.currentValue = Math.round(this.currentValue);
      } else if (value && value >= this.maxValue) {
        this.currentValue = this.maxValue;
      } else if (value && value < 1) {
        this.currentValue = 1;
      }
    },
  },
  methods: {
    increaseValue() {
      this.$emit('testvalue', this.currentValue);
      if (this.currentValue > 0) {
        return ++this.currentValue;
      }
      this.currentValue = 1;
    },
    reduceValue() {
      this.$emit('testvalue', this.currentValue);
      if (this.currentValue > 1) {
        return --this.currentValue;
      }
      this.currentValue = 1;
    },
  },
  created() {
    this.currentValue = this.value
  }
};
</script>
