<script setup lang="ts">
import backgroundImage from '@/assets/background.jpg';
</script>

<template>
  <div class="get-job-container">
    <header class="header">
      <div class="logo">
        <img src="/src/assets/HeadHunter_logo.png" alt="hh Logo" />
      </div>
      <button class="help-btn">Помощь</button>
    </header>

    <div class="main-section">
      <h1>Найди работу мечты</h1>
      <div class="search-bar">
        <input
          type="text"
          placeholder="Профессия, должность или компания"
          class="search-input"
        />
        <button class="search-btn">Найти</button>
      </div>
      <button class="find-employee-btn">Я ищу сотрудника</button>
    </div>

    <footer class="footer">
      <div class="statistics">
        <span>5 858 226 резюме</span>
        <span>49 022 вакансии</span>
        <span>117 013 компаний</span>
      </div>
      <div class="apps">
        <!-- <img src="/path/to/appstore-logo.png" alt="App Store" />
        <img src="/path/to/googleplay-logo.png" alt="Google Play" />
        <img src="/path/to/appgallery-logo.png" alt="App Gallery" /> -->
      </div>
    </footer>
  </div>
</template>

<style scoped>
.get-job-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: url('/src/assets/background.jpg') no-repeat center center;
  background-size: cover;
}

.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
}

.logo img {
  height: 50px;
}

.help-btn {
  background-color: transparent;
  border: none;
  color: #000;
  font-size: 18px;
  cursor: pointer;
}

.main-section {
  text-align: center;
  color: #fff;
}

.main-section h1 {
  font-size: 48px;
  margin-bottom: 20px;
}

.search-bar {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.search-input {
  width: 400px;
  padding: 10px;
  font-size: 18px;
}

.search-btn {
  background-color: #0066cc;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

.find-employee-btn {
  background: none;
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
}

.footer {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  color: #fff;
}

.statistics {
  display: flex;
  gap: 20px;
}

.apps img {
  width: 120px;
  margin-left: 10px;
}
</style>
