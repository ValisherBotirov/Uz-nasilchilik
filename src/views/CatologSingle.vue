<template>
  <div class="container">
    
    <img :src="route.query.img" alt="">
    
    <h1 class="title">{{route.query.title}}</h1>
   <div class="content">
    <div class="box">
      <p class="left-text">Zoti</p>
      <p class="right-text">Qora ola golshtin</p>
    </div>
    <div class="box">
      <p class="left-text">Tug’lgan yili</p>
      <p class="right-text">13.01.2017</p>
    </div>
    <div class="box">
      <p class="left-text">Tug’lgan joyi</p>
      <p class="right-text">Germaniya</p>
    </div>
    <div class="box">
      <p class="left-text">Onasining mahsuldorligi </p>
      <p class="right-text">Suti, kg 12327 Sut yog`i  3,61 % [445] Sut oqsilii 3,35 % [413]
</p>
    </div>
    <div class="box">
      <p class="left-text">Tirik vazni</p>
      <p class="right-text">1080 kg</p>
    </div>
   </div>
   
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
console.log(route.params)

</script>

<style scoped>
.container{
  width: 70%;
  margin: 0 auto;
}
.title{
  color: black;
  text-align: center;
  font-size: 35px;
  margin-top: 20px ;
  font-family: 'Museo Bold';
}
img{
  width: 100%;
  max-height: 450px;
  object-fit: cover;
  border-radius: 10px;
  margin-top: 20px;
}
.box{
  display: flex;
  justify-content: space-between;
  padding: 5px 0px;
  font-family: 'Museo Bold';
}
.right-text{
  align-items: flex-start;
  width: 50%;
}
.left-text{
  width: 50%;
  font-weight: 600;
}
.content{
  margin: 10px;
  margin-bottom: 50px;
}
@media (max-width: 730px) {
  .box{
    flex-direction: column;
  }
  .left-text,.right-text{
    width: 100%;
  }
}
</style>