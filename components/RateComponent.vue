<template>
  <div class="rate">
    <div class="rate__header">
      <BorderLine />
      <p class="text">{{ rateText }}</p>
      <BorderLine />
    </div>
    <div class="rate__stars">
      <n-rate
        color="#9771fd"
        :size="32"
        @update-value="updateRating"
        :value="rating"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { NRate } from "naive-ui";
import BorderLine from "public/assets/rate-line.svg";

const props = defineProps({
  modelValue: {
    type: Number,
    required: true,
  },
  rateText: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(["update:modelValue"]);

const rating = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newValue) => {
    rating.value = newValue;
  }
);

const updateRating = (value) => {
  emit("update:modelValue", value);
};
</script>

<style lang="scss" scope>
.rate {
  margin: 12px 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .text {
      font-weight: 500;
      font-size: 15px;
      line-height: 24px;
    }
  }

  &__stars {
    margin-top: 12px;
    padding: 16px;
    background-color: #ffffff;
    border-radius: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
</style>
