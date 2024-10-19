<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const selectedCountry = ref("Казахстан");
const countries = ref(["Казахстан", "Россия", "Украина", "Беларусь"]);
const dropdownOpen = ref(false);
const router = useRouter();

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const selectCountry = (country: string, event: Event) => {
  event.stopPropagation();
  selectedCountry.value = country;
  dropdownOpen.value = false;
};

const navigateTo = (path: string) => {
  router.push(path);
};
</script>

<template>
  <header class="header">
    <nav class="nav">
      <div class="country-dropdown" @click="toggleDropdown">
        <span>{{ selectedCountry }}</span>
        <ul v-show="dropdownOpen" class="dropdown-list">
          <li
            v-for="country in countries"
            :key="country"
            @click="(event) => selectCountry(country, event)"
          >
            {{ country }}
          </li>
        </ul>
      </div>
      <span class="nav-link" @click="navigateTo('/landing')">Соискателям</span>
      <span class="nav-link" @click="navigateTo('/landing')"
        >Работодателям</span
      >
    </nav>
  </header>
</template>

<style scoped>
.header {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 3rem;
}

.nav {
  display: flex;
  align-items: center;
  gap: 20px;
}

.country-dropdown {
  position: relative;
  cursor: pointer;
  text-decoration: none;
  border-bottom: 1px dashed;
  color: #1a73e8;
}

.dropdown-list {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  list-style: none;
  padding: 5px 0;
  margin: 0;
  width: 150px;
  z-index: 1000;
}

.dropdown-list li {
  padding: 5px 10px;
  cursor: pointer;
}

.dropdown-list li:hover {
  background-color: #f0f0f0;
}

.nav-link {
  cursor: pointer;
  text-decoration: none;
  padding: 5px;
}

.nav-link:hover {
  text-decoration: underline;
}
</style>
