<template>
  <div class="payment-button">
    <div class="payment-button__tips">
      <div class="pay">To pay {{ tipsAmount || 0 }}€</div>
      <div class="fees">
        Service fees
        {{ isServiceFeeEnabled ? Math.ceil(tipsAmount * 0.15) : 0 }} €
      </div>
    </div>
    <div class="payment-button__buttons">
      <button @click="onConfirmTips" class="apple-pay">
        Pay with <Payment class="payment-logo" />
      </button>
      <button @click="onConfirmTips" class="credit-card">
        Pay with debit card
      </button>
    </div>
    <div class="payment-button__terms">
      <p class="text">
        By clicking the button, you agree to our
        <a target="_blank" href="https://www.google.com/">Terms of Use</a> and
        <a target="_blank" href="https://www.google.com/">Privacy Policy</a>,
        and
        <a target="_blank" href="https://www.google.com/">authorize payment</a>
        and
        <a target="_blank" href="https://www.google.com/">data processing.</a>
      </p>
    </div>
  </div>
</template>

<script setup>
import Payment from "public/assets/apple-pay.svg";

defineProps({
  tipsAmount: {
    type: Number,
    required: true,
  },
  activeEmployee: {
    type: Object,
    required: true,
  },
  onConfirmTips: {
    type: Function,
    required: true,
  },
  isServiceFeeEnabled: {
    type: Boolean,
    default: true,
  },
});
</script>

<style lang="scss" scope>
.payment-button {
  margin: 12px 20px 0;
  padding: 24px 20px 32px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: var(--white-color);
  border-radius: 20px;

  &__tips {
    padding-bottom: 12px;
    border-bottom: 1px solid #f3f3f3;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .pay {
      color: var(--black-color);
      font-weight: 500;
      font-size: 15px;
      line-height: 24px;
    }

    .fees {
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: var(--gray-color);
    }
  }

  &__buttons {
    display: flex;
    flex-direction: column;
    gap: 8px;

    button {
      padding: 10px 24px;
      color: var(--white-color);
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      border: none;
      border-radius: 40px;
      cursor: pointer;
    }

    button.apple-pay {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      background-color: var(--dark-black-color);

      &:active {
        background-color: var(--violet-color);
      }
    }

    button.credit-card {
      background-color: var(--violet-color);

      &:active {
        background-color: var(--dark-black-color);
      }
    }
  }

  &__terms {
    font-weight: 500;
    font-size: 11px;
    line-height: 15px;
    text-align: center;
    color: var(--gray-color);

    a {
      color: var(--violet-color);
    }
  }
}
</style>
