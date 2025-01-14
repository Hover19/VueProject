<template>
  <div class="feedback">
    <div class="feedback__title">{{ title }}</div>
    <textarea
      placeholder="Describe your own"
      id="feedback"
      maxlength="50"
      :value="modelValue"
      @input="onInput"
    ></textarea>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const onInput = (event) => {
  emit("update:modelValue", event.target.value);
};

const onBlur = () => {
  emit("final-input", props.modelValue.trim());
};
</script>

<style lang="scss" scope>
.feedback {
  margin: 16px 20px 0;

  &__title {
    text-align: center;
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    color: var(--black-color);
  }

  textarea {
    position: relative;
    margin-top: 12px;
    padding: 20px;
    width: 100%;
    border: none;
    border-radius: 20px;
    height: 104px;
    resize: none;
    outline: none;
    font-weight: 400;
    font-size: 17px;
    line-height: 24px;
    color: var(--black-color);

    &::placeholder {
      font-weight: 400;
      font-size: 17px;
      line-height: 24px;
      color: var(--gray-color);
    }
  }
}
</style>
