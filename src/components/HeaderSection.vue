<template>
  <header class="header">
    <div class="header-left">
      <div>
        <RouterLink to="/" class="header__side__logo-container">
          <img src="./icons/logo.png" class="header-logo" />
        </RouterLink>
      </div>
      <nav class="header-links">
        <RouterLink to="/" class="active header-link">Home</RouterLink>
        <RouterLink to="/about" class="header-link">About </RouterLink>
        <RouterLink to="/news" class="header-link">News</RouterLink>
        <RouterLink to="/catolog" class="header-link">Catolog</RouterLink>
      </nav>
    </div>
    <div class="header-right">
      <div class="header-right_items">
        <p>icons</p>
        <p>icons</p>
        <p>icons</p>
      </div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
.header {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-left {
  display: flex;
  align-items: center;
  gap: 60px;
}
.header-logo {
  width: 100px;
}

.header-links {
  display: flex;
  gap: 30px;
}
.header-link {
  text-decoration: none;
  color: #a4a4a4;
  font-size: 20px;
}

.header-link:hover {
  color: black;
}

.header-right_items {
  display: flex;
  gap: 20px;
}
</style>
