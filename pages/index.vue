<template>
  <div class="employee-section">
    <button
      @click="previousEmployee"
      :disabled="currentIndex === 0"
      class="arrow"
    >
      &larr;
    </button>

    <EmployeeCard :employee="employees[currentIndex]" />

    <button
      @click="nextEmployee"
      :disabled="currentIndex === employees.length - 1"
      class="arrow"
    >
      &rarr;
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import EmployeeCard from "@/components/EmployeeCard.vue";

const employees = [
  {
    photo: "/assets/employee.png",
    name: "John",
    position: "Waiter",
    tips: 0,
  },
  {
    photo: "/assets/employee.png",
    name: "Jane",
    position: "Waitress",
    tips: 0,
  },
  {
    photo: "/assets/employee.png",
    name: "Mike",
    position: "Bartender",
    tips: 0,
  },
  {
    photo: "/assets/employee.png",
    name: "Emily",
    position: "Manager",
    tips: 0,
  },
];

const currentIndex = ref(0);

const previousEmployee = () => {
  if (currentIndex.value > 0) currentIndex.value--;
};

const nextEmployee = () => {
  if (currentIndex.value < employees.length - 1) currentIndex.value++;
};
</script>

<style scoped>
.employee-section {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  gap: 30px;
}

.arrow {
  background-color: var(--violet-color);
  color: var(--white-color);
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
}

.arrow:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}
</style>
