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
    <div class="switcher-section">
      <Switcher v-model="isServiceFeeEnabled" :employeeName="currentEmployee" />
    </div>
    <div class="rates-section">
      <RateComponent v-model="currentRating" :rate-text="rateText" />
    </div>
    <LikeComponent v-model="activeLikes" />
    <div class="payment-section">
      <PaymentButtons
        :tipsAmount="tipsAmount"
        :activeEmployee="employees[currentIndex]"
        :onConfirmTips="confirmTips"
        :isServiceFeeEnabled="isServiceFeeEnabled"
      />
    </div>
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
    rates: [],
  },
  {
    id: 2,
    photo: "/assets/employee.png",
    name: "Jane",
    position: "Waitress",
    tips: 0,
    rates: [],
  },
  {
    id: 3,
    photo: "/assets/employee.png",
    name: "Mike",
    position: "Bartender",
    tips: 0,
    rates: [],
  },
  {
    id: 4,
    photo: "/assets/employee.png",
    name: "Emily",
    position: "Manager",
    tips: 0,
    rates: [],
  },
];

const currentIndex = ref(0);
const tipsAmount = ref(0);
const isServiceFeeEnabled = ref(false);
const currentRating = ref(0);
const activeLikes = ref([]);
const currentEmployee = computed(() => employees[currentIndex.value].name);
const rateText = "Rate your experience";
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
  console.log(activeLikes.value);
  employees[currentIndex.value].tips += tipsAmount.value;
  employees[currentIndex.value].rates.push({
    name: "Semen",
    rate: currentRating.value,
    likes: [...activeLikes.value],
  });
  alert(
    `${employees[currentIndex.value].name} was updated: ${JSON.stringify(
      employees[currentIndex.value],
      null,
      2
    )}`
  );
  tipsAmount.value = 0;
  currentRating.value = 0;
  activeLikes.value = [];
  console.log(currentRating.value);
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

  .switcher-section {
    margin: 12px 20px 0;
  }
}
</style>
