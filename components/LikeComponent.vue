<template>
  <div class="like-component">
    <div class="like-component__title">What did you like?</div>
    <div class="like-component__items">
      <div v-for="item in items" :key="item.id" class="item">
        <div
          class="image"
          :class="{ active: selectedItems.includes(item.label) }"
          @click="toggleSelection(item.label)"
        >
          <img :src="item.image" :alt="item.image" />
        </div>
        <p class="text">{{ item.label }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const items = [
  { id: 1, image: "public/assets/service.png", label: "Service" },
  { id: 2, image: "public/assets/clean.png", label: "Cleanliness" },
  { id: 3, image: "public/assets/atmosphere.png", label: "Atmosphere" },
  { id: 4, image: "public/assets/food.png", label: "Food quality" },
];

const { modelValue } = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["update:modelValue"]);

const selectedItems = ref([...modelValue]);

const toggleSelection = (label) => {
  if (selectedItems.value.includes(label)) {
    selectedItems.value = selectedItems.value.filter((item) => item !== label);
  } else {
    selectedItems.value.push(label);
  }
  emit("update:modelValue", selectedItems.value);
};

watch(
  () => modelValue,
  (newVal) => {
    selectedItems.value = [...newVal];
  }
);
</script>

<style lang="scss" scope>
.like-component {
  margin-top: 16px;
  display: flex;
  flex-direction: column;

  &__title {
    text-align: center;
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    color: var(--black-color);
  }

  &__items {
    margin-top: 14px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;

      .image {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 74px;
        height: 74px;
        border-radius: 12px;
        background-color: var(--white-color);
        cursor: pointer;

        &.active {
          background-color: #9771fd;
          color: #fff;
          border-color: #9771fd;
        }

        img {
          width: 48px;
          height: 48px;
        }
      }
    }
  }
}
</style>
