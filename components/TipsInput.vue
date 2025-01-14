<template>
  <div class="tips-input">
    <div class="tips-input__amount">
      <p class="label">Enter amount of tips</p>
      <input
        id="tip-input"
        :value="displayTip"
        @input="onInputChange"
        placeholder="0€"
        type="text"
      />
    </div>
    <div class="tips-input__buttons">
      <button @click="addTips(2)">2</button>
      <button @click="addTips(5)">5</button>
      <button @click="addTips(100)">100</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const currentTip = ref(null);

const emit = defineEmits(["update-tips"]);

const displayTip = computed(() => {
  return currentTip.value !== null ? `${currentTip.value}€` : "";
});

const onInputChange = (event) => {
  const sanitizedValue = event.target.value.replace(/[^\d]/g, "");
  currentTip.value = sanitizedValue ? Number(sanitizedValue) : null;
  emit("update-tips", currentTip.value || 0);
};

const addTips = (amount) => {
  currentTip.value = (currentTip.value || 0) + amount;
  emit("update-tips", currentTip.value);
};

const resetTips = () => {
  currentTip.value = null;
  emit("update-tips", 0);
};

defineExpose({ resetTips });
</script>

<style lang="scss" scope>
.tips-input {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__amount {
    height: 96px;
    width: 335px;
    border-radius: 20px;
    background: var(--white-color);
    display: flex;
    flex-direction: column;
    justify-content: center;

    .label {
      color: var(--black-color);
      font-weight: 500;
      font-size: 15px;
      line-height: 24px;
      text-align: center;
    }

    input {
      padding: 0;
      margin: 0;
      height: 42px;
      border: none;
      outline: none;
      display: flex;
      justify-content: center;
      text-align: center;
      font-weight: 700;
      font-size: 34px;
      line-height: 36px;

      &::placeholder {
        color: var(--black-color);
        opacity: 0.1;
        font-weight: 700;
        font-size: 34px;
        line-height: 36px;
        text-align: center;
      }

      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }

  &__buttons {
    margin-top: 8px;
    display: flex;
    gap: 4px;

    button {
      padding: 8px 0;
      width: 109px;
      cursor: pointer;
      background: var(--white-color);
      border: none;
      border-radius: 12px;
      font-weight: 600;
      font-size: 13px;
      line-height: 18px;
      color: var(--light-black-color);

      &:active {
        background-color: var(--violet-color);
        color: var(--white-color);
      }
    }
  }
}
</style>
