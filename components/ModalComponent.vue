<template>
  <div v-if="visible" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <Close class="modal-content__close" @click="closeModal" />
      <img src="/assets/modal-banner.png" alt="" />
      <div class="modal-content__title">{{ title }}</div>
      <div class="modal-content__subtitle">{{ subtitle }}</div>
      <button class="modal-content__button">{{ buttonText }}</button>
    </div>
  </div>
</template>

<script setup>
import Close from "public/assets/close.svg";
const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  buttonText: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["close"]);

const closeModal = () => {
  emit("close");
};
</script>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 400px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  background-color: var(--white-color);
  padding: 12px;
  border-radius: 10px;
  width: 90%;
  max-width: 400px;
  text-align: center;

  &__close {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }

  &__title {
    margin-top: 16px;
    text-align: center;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: var(--black-color);
  }

  &__subtitle {
    margin: 8px;
    font-weight: 400;
    font-size: 17px;
    line-height: 24px;
    color: var(--gray-color);
  }

  &__button {
    margin-top: 16px;
    padding: 10px;
    width: 100%;
    color: var(--white-color);
    background-color: rgba(15, 10, 47, 1);
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    border: none;
    border-radius: 40px;
    cursor: pointer;
  }

  img {
    width: 100%;
  }
}
</style>
