<template>
  <div class="employee-card">
    <div class="employee-card__image">
      <img :src="employee.photo" :alt="employee.name" />
    </div>
    <div class="employee-card__data">
      <h3 class="name">{{ employee.name }}</h3>
      <p class="position">{{ employee.position }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  employee: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.employee-card {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 160px;

  &__data {
    display: flex;
    flex-direction: column;
    gap: 4px;

    .name {
      font-weight: 600;
      font-size: 22px;
      line-height: 24px;
      color: var(--black-color);
    }

    .position {
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      color: var(--violet-color);
    }
  }
}
</style>
