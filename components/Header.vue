<template>
  <header class="header">
    <div class="header__main">
      <Logo class="logo" />
      <div class="language-switcher">
        <select name="" id="" @change="handleLanguageChange">
          <option v-for="lang in languages" :key="lang" :value="lang">
            {{ lang }}
          </option>
        </select>
      </div>
    </div>
    <div class="header__banner">
      <img class="banner" src="public/assets/banner.png" alt="" />
    </div>
  </header>
</template>

<script setup>
import Logo from "public/assets/logo.svg";
const languages = ["En", "Fr", "De"]; // Available languages
const handleLanguageChange = (event) => {
  const selectedLanguage = event.target.value;
  console.log(`Switched to: ${selectedLanguage}`); // Logs the selected language
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: column;

  &__main {
    padding: 12px 20px;
    display: flex;

    .logo {
      margin: 0 auto;
    }

    select {
      border: none;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      outline: none;

      option {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
      }
    }
  }

  &__banner {
    .banner {
      width: 100%;
    }
  }
}
</style>
