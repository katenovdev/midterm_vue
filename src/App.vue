<script setup lang="ts">
import Header from "@/components/Header.vue";
</script>

<template>
  <div class="mainapp">
    <Header />
    <router-view />
  </div>
</template>

<style scoped>
.mainapp {
  /* padding: 10px 3rem; */
}
</style>
