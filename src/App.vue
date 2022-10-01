<template>
  <div class="header">
    <HeaderSection />
  </div>
  <RouterView />
  <FooterSection />
</template>

<style scoped>
.header {
  position: fixed;
  width: 100% ;
  background-color: #fff;
  margin: 0 auto;
  top: 0;
  z-index: 10;
}
</style>

<script setup>
import HeaderSection from "./components/HeaderSection.vue";
import FooterSection from "./components/FooterSection.vue";
</script>
