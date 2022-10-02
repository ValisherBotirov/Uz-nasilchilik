<template>
    <div class="container">
        <div class="section-box">
            <div class="img-box">
                <img :src="route.query.img" alt="img" class="img">
            </div>
            <div class="content">
                <h1 class="title">{{route.query.title}}</h1>
                <p class="description">{{route.query.description}}</p>
                <router-link to="/laboratoriya" class="btn-exit"><i class="fa-solid fa-arrow-left icon"></i> Ortga</router-link>
            </div>
      
        </div>
  
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();

</script>

<style scoped>
.container{
    width: 70%;
    margin: 0 auto;
    margin-top: 60px;
}
.section-box{
    margin-bottom: 60px;
}
.img-box{
    margin:0 auto;
}
.img{
    object-fit: cover;
    width: 100%;
}
.content{
    text-align: center;
    font-family: "Museo Bold";
}
.description{
    margin-top: 5px;
}
.btn-exit{
    display: inline-flex;
  align-items: center;
  gap: 10px;
  border: 2px solid #fff;
  padding: 0 45px;
  height: 50px;
  border-radius: 30px;
   background-color: #0055e9;
  color: #fff;
  font-family: "Museo Bold";
  text-decoration: none;
  margin-top: 15px;
  transition: 0.3s all;
}
.btn-exit:hover{
     background-color: #fff;
  color: black;
  border: 2px solid black;
}
.icon{
    transition: transform .4s;
}
.btn-exit:hover .icon{
    transform: translateX(-8px);
}
@media (max-width:560px){
    .title{
        font-size:30px;
        line-height: 40px;
    }
}
</style>