<template>
  <div class="homepage">
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
    <div class="tips-section">
      <TipsInput ref="tipsInputRef" @update-tips="updateTipsAmount" />
    </div>
    <div class="payment-section">
      <PaymentButtons
        :tipsAmount="tipsAmount"
        :activeEmployee="employees[currentIndex]"
        :onConfirmTips="confirmTips"
        :isServiceFeeEnabled="isServiceFeeEnabled"
      />
    </div>
    <Switcher v-model="isServiceFeeEnabled" :employeeName="currentEmployee" />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import EmployeeCard from "@/components/EmployeeCard.vue";
import TipsInput from "@/components/TipsInput.vue";
import PaymentButtons from "@/components/PaymentButtons.vue";
import Switcher from "@/components/Switcher.vue";

const employees = [
  {
    id: 1,
    photo: "/assets/employee.png",
    name: "John",
    position: "Waiter",
    tips: 0,
  },
  {
    id: 2,
    photo: "/assets/employee.png",
    name: "Jane",
    position: "Waitress",
    tips: 0,
  },
  {
    id: 3,
    photo: "/assets/employee.png",
    name: "Mike",
    position: "Bartender",
    tips: 0,
  },
  {
    id: 4,
    photo: "/assets/employee.png",
    name: "Emily",
    position: "Manager",
    tips: 0,
  },
];

const currentIndex = ref(0);
const tipsAmount = ref(0);
const isServiceFeeEnabled = ref(false);

const currentEmployee = computed(() => employees[currentIndex.value].name);
console.log(currentEmployee);

let tipsInputRef = null;

const previousEmployee = () => {
  if (currentIndex.value > 0) currentIndex.value--;
};

const nextEmployee = () => {
  if (currentIndex.value < employees.length - 1) currentIndex.value++;
};

const updateTipsAmount = (amount) => {
  tipsAmount.value = amount;
};

const confirmTips = () => {
  employees[currentIndex.value].tips += tipsAmount.value;
  alert(
    `${employees[currentIndex.value].name} has received ${
      tipsAmount.value
    }€ in tips!`
  );
  tipsAmount.value = 0;
  if (tipsInputRef) {
    tipsInputRef.resetTips();
  }

  console.log(employees[currentIndex.value]);
};
</script>

<style lang="scss" scoped>
.homepage {
  .employee-section {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
    gap: 30px;

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
  }

  .tips-section {
    margin-top: 20px;
  }
}
</style>
