<template>
  <section class="about-us usp">

    <div class="about-us usp__bgr">
      <img :src="image" alt="img" class="bg-image">
    </div>
    <div class="about-us usp__toning"></div>
    <div class="about-us usp__wrapper">
      <h1 class="about-us usp__wrapper__title" data-aos="fade-left" data-aos-duration="1000">{{title}}</h1>
      <p class="about-us usp__wrapper__text" data-aos="fade-left" data-aos-duration="1600">
{{description}}
      </p>
    </div>
  </section>
  <div class="container">
    <h2 class="title" data-aos="fade-left" data-aos-duration="1000">Laboratoriya</h2>
    <section class="dark laboratory-services chess container">
    <div class="laboratory-services chess__row">
      <div class="laboratory-services chess__row__info-container" data-aos="fade-right" data-aos-duration="1000">
        <h4 class="laboratory-services chess__row__info-container__title" data-aos="fade-right" data-aos-duration="1500">
        {{labData.title1}}
        </h4>
        <p class="laboratory-services chess__row__info-container__description" data-aos="fade-right" data-aos-duration="2200">
          {{labData.description1}}
        </p>
     <router-link
     @click="realoadPage"
     data-aos="fade-right" data-aos-duration="1000"
         :to="{path:'laboratoriya',query:{img:lab1,title:labData.title1,description:labData.description1} }"
          class="rounded-button blue laboratory-services chess__row__info-container__more"
          >More</router-link>
      </div>
      <div class="laboratory-services chess__row__img-container" data-aos="fade-left"  data-aos-duration="1700">
        <img
          :src="lab1"
          alt="Лаборатория иммуногенетической экспертизы"
          class="laboratory-services chess__row__img-container__img"
        />
      </div>
    </div>
    <div class="left-side laboratory-services chess__row">
      <div class="left-side laboratory-services chess__row__info-container" data-aos="fade-left" data-aos-duration="1000">
        <h4 class="left-side laboratory-services chess__row__info-container__title" data-aos="fade-left" data-aos-duration="1500">
          {{labData.title2}}
        </h4>
        <p class="left-side laboratory-services chess__row__info-container__description" data-aos="fade-left" data-aos-duration="2200">
        {{labData.description2}}
        </p>
       <router-link
       @click="realoadPage"
       data-aos="fade-right" data-aos-duration="1000"
         :to="{path:'laboratoriya',query:{img:lab2,title:labData.title2,description:labData.description2} }"
          class="rounded-button blue laboratory-services chess__row__info-container__more"
          >More</router-link>
      </div>
      <div class="left-side laboratory-services chess__row__img-container" data-aos="fade-right"  data-aos-duration="1700">
        <img
          :src="lab2"
          alt="Feed Quality Control Laboratory"
          class="left-side laboratory-services chess__row__img-container__img"
        />
      </div>
    </div>
    <div class="laboratory-services chess__row">
      <div class="laboratory-services chess__row__info-container" data-aos="fade-right" data-aos-duration="1000">
        <h4 class="laboratory-services chess__row__info-container__title">
          {{labData.title3}}
        </h4>
        <p class="laboratory-services chess__row__info-container__description" data-aos="fade-right" data-aos-duration="1500">
          {{labData.description3}}
        </p>
     <router-link
     @click="realoadPage"
     data-aos="fade-right" data-aos-duration="1000"
         :to="{path:'laboratoriya',query:{img:lab3,title:labData.title3,description:labData.description3} }"
          class="rounded-button blue laboratory-services chess__row__info-container__more"
          >More</router-link>
      </div>
      <div class="laboratory-services chess__row__img-container" data-aos="fade-left"  data-aos-duration="1700">
        <img
          :src="lab3"
          alt="Laboratory of Milk Quality Selection Control"
          class="laboratory-services chess__row__img-container__img"
        />
      </div>
    </div>
    <div class="left-side laboratory-services chess__row">
      <div class="left-side laboratory-services chess__row__info-container" data-aos="fade-left" data-aos-duration="1000">
        <h4 class="left-side laboratory-services chess__row__info-container__title" data-aos="fade-left" data-aos-duration="1500">
          {{labData.title4}}
        </h4>
        <p class="left-side laboratory-services chess__row__info-container__description" data-aos="fade-left" data-aos-duration="2200">
         {{labData.description4}}
        </p>
        <router-link
        @click="realoadPage"
        data-aos="fade-right" data-aos-duration="1000"
         :to="{path:'laboratoriya',query:{img:lab4,title:labData.title4,description:labData.description4} }"
          class="rounded-button blue laboratory-services chess__row__info-container__more"
          >More</router-link>
      </div>
      <div class="left-side laboratory-services chess__row__img-container" data-aos="fade-right"  data-aos-duration="1700">
        <img
          :src="lab4"
          alt="Feed Quality Control Laboratory"
          class="left-side laboratory-services chess__row__img-container__img"
        />
      </div>
    </div>
  </section>
  </div>
  <section class="container">
    <h2 class="title">Galleriya</h2>
    <div class="gallery-group">
      <div class="gal-img_box"><img src="../components/images/dslab1.JPG" alt="img" class="gal-img"></div>
      <div class="gal-img_box"><img src="../components/images/dslab2.JPG" alt="img" class="gal-img"></div>
      <div class="gal-img_box"><img src="../components/images/dslab3.jpg" alt="img3" class="gal-img"></div>
      <div class="gal-img_box"><img src="../components/images/dslab4.JPG" alt="img" class="gal-img"></div>
      <!-- <div class="gal-img_box"><img src="../components/images/dslab5.CR2" alt="img" class="gal-img"></div> -->
    </div>
  </section>
</template>
<script setup>
import lab1 from "../components/images/lab1.jpg"
import lab2 from "../components/images/lab2.jpg"
import lab3 from "../components/images/lab3.jpg"
import lab4 from "../components/images/lab4.jpg"

import {useRoute} from "vue-router"

const route = useRoute()


const labData = {
  title1:"AndroVision: Kompyuter va monitor bilan CASA dasturi",
   description1:"2022-yildan buyon naslchilik korxonasi MINITUBE kompaniyasi tomonidan Germaniyada ishlab chiqarilgan Androvision maxsus avtomatlashtirilgan texnikadan foydalangan holda buqalar urug‘ini kompleks tahlil qilib kelmoqda. U urug’ning nafaqat harakatchanlik, kontsentratsiya va morfologiyasini an’anaviy tahlillarini, balki spermatozoidlarning funksionalligini baholashni ham ta'minlaydi.",
   title2:"MiniJet printeri ",
    description2:"2006-yildan buyon naslchilik korxonasida urug‘larni qadoqlash ishlari Germaniyada ishlab chiqarilgan, zamonaviy MINITUBE uskunasi yordamida amalga oshirilmoqda. Bu uskuna urug‘ni anaʼnaviy granula shaklidan anchagina avfzalliklarga ega bo‘lgan payeta shaklida qadoqlaydi va markirovka qiladi.",
    title3:"Urug’larni saqlash / Genetik baza",
      description3:"Naslchilik korxonasida nasldor buqa urug’larini uzoq muddat saqlash maqsadida… uskunalarida -196C gradus haroratda chuqur muzlatish amalga oshiriladi.",
        title4:"Suyuq azot bilan taminlash",
         description4:"Suniy urug’lantirish bilan shug’ullanuvchi sub’yektlarni suyuq azot bilan uzluksiz taminlash maqsadida naslchilik korxonasining 4 tonnalik maxsus kiriogen idishi o’rnatilgan ISUZU rusumli avtomobil vositasi xizmat qiladi.00",

}

let image = route.query.img ? route.query.img : lab4
let title = route.query.title ? route.query.title : labData.title4
let description = route.query.description? route.query.description : labData.description4

const realoadPage = () =>{
  window.location.reload()
}

</script>



<style scoped>
  .container{
    width: 90%;
    margin: 0 auto;
  }

  about-us.usp {
  margin-bottom: 40px;
}
.usp {
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: flex-start;
}

.usp__bgr {
  border-radius: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  /* background: url(../components/images/lab4.jpg) center center no-repeat; */
  background-size: cover !important;
  overflow: hidden;
}

.bg-image{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.usp__toning {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}

.usp__wrapper {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: flex-start;
  padding: 0 45px;
  z-index: 2;
  color: #fff;
  max-width: 750px;
  font-family: "Museo Bold";
}
.usp__wrapper__title {
  font-size: 35px;
}
p,
span {
  line-height: 20px;
}

p,
span {
  line-height: 20px;
}
  
  .title{
    color: #0055e9;
    font-family: "Museo Bold";
    margin-top: 40px;
    padding: 0 20px;
    font-size: 35px;
  }
  .chess {
  margin-top: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.chess__row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  width: 100%;
}
.chess__row__info-container {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: flex-end;
  flex-grow: 3;
  width: 60%;
  padding-left: 150px;
  padding-right: 35px;
}
.chess__row__info-container__title {
  margin-bottom: 0;
  color: #1f69ea;
  font-size: 35px;
  text-align: right;
}
.chess__row__info-container__description {
  text-align: right;
  margin-top: 10px;
  margin-bottom: 25px 
}
p,
span {
  line-height: 1.6;
}

.chess__row__img-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-content: flex-end;
  width: 40%;
  flex-grow: 1;
}

.chess__row__img-container__img {
  width: 100%;
  object-fit: cover;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.left-side.chess__row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
}

.left-side.chess__row__info-container {
  padding-right: 150px;
  padding-left: 35px;
  align-items: flex-start;
}

.left-side.chess__row__info-container__title {
  text-align: left;
}

.left-side.chess__row__info-container__description {
  text-align: left;
}

.rounded-button.blue {
  background-color: #0055e9;
  color: #fff;
}
.rounded-button.blue:hover{
  background-color: #fff;
  color: black;
  border: 2px solid black;
}
a {
  text-decoration: none;
  font-family: Museo Regular;
  transition: 0.3s color;
}

img {
  border-radius: 10px;
}
.rounded-button.blue {
  background-color: #0055e9;
  color: #fff;
}
.rounded-button.blue:hover{
  background-color: #fff;
  color: black;
  border: 2px solid black;
}
a {
  text-decoration: none;
  font-family: "Museo Bold";
  transition: 0.3s color;
}

img {
  border-radius: 10px;
}
.rounded-button {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff;
  padding: 0 45px;
  height: 50px;
  border-radius: 30px;
  transition: 0.3s all;
}

/* photo-gallery */
.gallery-group{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.gal-img{
  width: 100%;
}

@media(max-width: 1050px){
  .chess__row,.left-side.chess__row{
    display: flex;
    flex-direction: column-reverse;
  }
  .chess__row__info-container{
    width: 100%;
    text-align: left !important;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0 !important;
  }
  .chess__row__img-container{
    width: 100%;
  }
  .chess__row__info-container__title{
    text-align: left;
    font-size: 24px;
    margin-top: 10px;
    font-family: "Museo Bold";
  }
  
  
  .chess__row__info-container__description{
    text-align: left;
    margin: 10px 0;
  }
  .chess__row__img-container__img{
    max-height: 480px;
    object-fit: cover;
  }
}
@media (max-width:400px){
  .departament-group{
    display: flex;
    flex-direction: column;
  }
}
</style>