<template>
  <div class="switcher">
    <div class="switcher__description">
      <h1 class="title">
        I want Mark to receive <br />
        the full amount
      </h1>
      <p class="subtitle">
        You compensate service fee of 0.00€, which will be applied to your
        payment.
      </p>
    </div>
    <div class="switcher__switch">
      <n-switch
        :value="modelValue"
        @update:value="emitUpdate"
        :theme-overrides="switchThemeOverrides"
      />
    </div>
  </div>
</template>

<script setup>
import { NSwitch } from "naive-ui";

defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const emitUpdate = (value) => {
  emit("update:modelValue", value);
};

const switchThemeOverrides = {
  railColor: "#8e6cea66",
  raiBoxShadow: "none",
  railColorActive: "#9771fd",
};
</script>

<style lang="scss" scoped>
.switcher {
  margin: 12px 20px 0;
  padding: 16px;
  display: flex;
  align-items: center;
  background-color: var(--white-color);
  border-radius: 12px;

  &__description {
    .title {
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: var(--black-color);
    }

    .subtitle {
      margin-top: 4px;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      counter-reset: var(--gray-color);
    }
  }
}
</style>
