<template>
    <div class="responsive-header" :class="{'active':toogleBtn}">
      
    <div class="header-links_res"  >
        <RouterLink to="/" class="active header-link_res" @click="toogleBtn=!toogleBtn">Home</RouterLink>
        <RouterLink to="/about" class="header-link_res" @click="toogleBtn=!toogleBtn">About </RouterLink>
        <RouterLink to="/news" class="header-link_res" @click="toogleBtn=!toogleBtn">News</RouterLink>
        <RouterLink to="/catolog" class="header-link_res" @click="toogleBtn=!toogleBtn">Catolog</RouterLink>
      </div>
      <div class="header-right_res">
      <div class="header-right_items">
        <a href="https://t.me/uznasl" class="header-icon"><i class="fa-brands fa-telegram"></i></a>
        <a href="https://www.instagram.com/uznaslchilik_chorva/" class="header-icon"
          ><i class="fa-brands fa-instagram"></i
        ></a>
        <a href="https://www.facebook.com/uznaslchilik" class="header-icon"><i class="fa-brands fa-facebook"></i></a>
        <a href="https://www.youtube.com/channel/UCXLkF2IQQrjotcsm5iSmj1g" class="header-icon"
          ><i class="fa-brands fa-youtube"></i
        ></a>
      </div>
    </div>
  </div>
  <header class="header">
    <div class="header-left">
      <div class="header-logo__container">
        <a href="#" @click="toogleBtn = !toogleBtn" class="menu" :class="{'active' : toogleBtn}"><span class="menu-span"></span></a>
        <RouterLink to="/" class="header__side__logo-container">
          <img src="./icons/logo.png" class="header-logo" />
        </RouterLink>
      </div>
      <nav class="header-links">
        <RouterLink to="/" class="active header-link">Bosh menu</RouterLink>
        <RouterLink to="/about" class="header-link">Biz haqimizda </RouterLink>
        <RouterLink to="/news" class="header-link">Maqolalar</RouterLink>
        <RouterLink to="/catolog" class="header-link">Katalog</RouterLink>
        <RouterLink to="/laboratoriya" class="header-link">Laboratoriya</RouterLink>
      </nav>
    </div>
    <div class="header-right">
      <div class="header-right_items">
        <a href="https://t.me/uznasl" class="header-icon"><i class="fa-brands fa-telegram"></i></a>
        <a href="https://www.instagram.com/uznaslchilik_chorva/" class="header-icon"
          ><i class="fa-brands fa-instagram"></i
        ></a>
        <a href="https://www.facebook.com/uznaslchilik" class="header-icon"><i class="fa-brands fa-facebook"></i></a>
        <a href="https://www.youtube.com/channel/UCXLkF2IQQrjotcsm5iSmj1g" class="header-icon"
          ><i class="fa-brands fa-youtube"></i
        ></a>
      </div>
    </div>
  </header>
</template>

<script setup>
  import { ref } from "@vue/reactivity";
  import { RouterLink } from "vue-router";
  let toogleBtn = ref(false)
  const func = () =>{
    console.log("ishladi")
  }
  </script>

<style scoped>
  /* menu */
  .menu{
    cursor: pointer;
  padding: 12px 0;
  display: none;
  position: absolute;
  right: 15px;
  top:16px;
  z-index: 10;
  }
  .menu-span{
    position: relative;
    display: block;
    width: 40px;
    height: 4px;
    background: #222;
    transition: all 0.01s ;
  }
  .menu-span:before{
    position: absolute;
      background: #222;
      content: '';
      width: 40px;
      height: 4px;
      transition: all .2s ease-in-out;
      top: -8px;
  }
  .menu-span:after{
    position: absolute;
      background: #222;
      content: '';
      width: 40px;
      height: 4px;
      transition: all .2s ease-in-out;
      top: 8px;
  }
  .menu.active .menu-span{
    background:transparent
  }
  .menu.active .menu-span:before{
    transform: rotate(45deg) translate(5px, 6px);
    width: 30px;
  }
  .menu.active .menu-span:after{
    transform: rotate(-45deg) translate(5px, -6px);
    width: 30px;
  }
.header-icon {
  text-decoration: none;
  color: gray;
  font-size: 28px;
  position: relative;
  margin-top: 20px;
}
.header-icon:hover {
  color: #333;
}
.header {
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
}
.header-left {
  display: flex;
  align-items: center;
  gap: 60px;
}
.header-logo {
  width: 60px;
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

.responsive-header{
opacity: 0;
  transform: translate(-100% ,-100%);
  width: 100vw;
  height: 100vh;
  position : absolute;
  background-color: rgb(190, 189, 189);
  text-align: center;
  transition: all 0.5s;
}
.responsive-header.active{
  opacity: 1;
  display: block;
  transform: translate(0 ,0); 
}
.header-links_res{
  margin-top: 130px;
}
.header-link_res{
  color: white;
  text-decoration: none;
  color: #000000;
  font-size: 24px;
  font-weight: 600;
}
.header-right_res{
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
@media (max-width: 1000px) {
  .menu{
    display : block;
    color : white;
  }
  .header-links,.header-right{
    display : none
  }
 .header-links_res{
  display : flex;
  flex-direction : column;
  color: white;
  gap: 20px;
  z-index: 2;
 }
}
</style>
