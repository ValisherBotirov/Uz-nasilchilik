<template>
  <section class="home usp" >
    <div class="home usp__bgr" data-aos="fade-right"></div>
    <div class="home usp__toning"></div>
    <div class="home usp__wrapper" data-aos="fade-left" data-aos-duration="1000">
      <h1 class="home usp__wrapper__title"  data-aos="fade-left">O'znaslchilik davlat korxonasi</h1>
      <p class="home usp__wrapper__text">
        Korxona 1956 yil 28 dekabrda Toshkent davlat otchilik korxonasi oʼrnida, Markaziy Osiyoda yagona boʼlgan “Qishloq xoʼjalik xayvonlarini sunʼiy urugʼlantirish stantsiyasi” nomi bilan tashkil etilgan.
      </p>
      <a href="https://telegra.ph/OZNASLCHILIK-DAVLAT-KORHONASINING-TARIHI-VA-RIVOZHLANTIRISH-ISTI%D2%9ABOLLARI-09-21" target="_blank" class="call-order-form rounded-button">Batafsil o'qish </a>
    </div>
  </section>

  <!-- bannerdan keyingi section -->
  <!-- catalog section start -->
  <section class="catalog_section ">
    <h3 class="left-side laboratory-services chess__row__info-container__title">Katalog</h3>
    <p class="catalog_section-paragraph">
      Xozirda korxonada 9 xil zotga maʼnsub bo‘lgan, 100 boshga yaqin naslli buqalar yani golshtin qora-ola,
       golshtin qizil-ola, angler, qizil-daniya, shvits, simmental, angus, gereford va bushuyev zotili naslli buqalar parvarishlab kelinmoqda. 
    </p>
    <div class="slider_container " data-aos="fade-left" data-aos-duration="1800">
      <swiper
        :slidesPerView="4"
        :spaceBetween="30"
        :keyboard="{
          enabled: true,
        }"
        :loopFillGroupWithBlank="true"
        :speed="500"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :loop="true"
        :lazy="true"
        :pagination="{
          clickable: true,
        }"
        :breakpoints="{
          '300':{
            slidesPerView : 1
          },
          '640': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '768': {
            slidesPerView: 3,
          },
          '1024': {
            slidesPerView: 4,
          },
        }"
        :navigation="true"
        :modules="modules"
        class="card_slider"
      >
        <swiper-slide v-for="(slide, index) in slides" :key="index" class="swiper-slide">
          <div class="img_box">
            <img :src="slide.img" alt="bull_img" class="swiper-lazy" />
            <div class="slide_title">
              <h3>{{ slide.name }}</h3>
              <router-link to="/catolog">All Abouts</router-link>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <router-link 
      data-aos="fade-right" data-aos-duration="1500"
      class="rounded-button blue laboratory-services chess__row__info-container__more"
      :to="{name:'catolog'}"
      >Barcha kataloglar</router-link>
  </section>
  <!-- catalog section end -->
  <section class="dark laboratory-services chess container">
    <div class="laboratory-services chess__row">
      <div class="laboratory-services chess__row__info-container" data-aos="fade-right" data-aos-duration="1000">
        <h4 class="laboratory-services chess__row__info-container__title" data-aos="fade-right" data-aos-duration="1500">
          AndroVision: Kompyuter va monitor bilan CASA dasturi
        </h4>
        <p class="laboratory-services chess__row__info-container__description" data-aos="fade-right" data-aos-duration="2200">
          2022-yildan buyon naslchilik korxonasi MINITUBE kompaniyasi tomonidan Germaniyada ishlab chiqarilgan Androvision maxsus avtomatlashtirilgan texnikadan foydalangan holda buqalar urug‘ini kompleks tahlil qilib kelmoqda. U urug’ning nafaqat harakatchanlik, kontsentratsiya va morfologiyasini an’anaviy tahlillarini, balki spermatozoidlarning funksionalligini baholashni ham ta'minlaydi.
        </p>
        <router-link
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
          MiniJet printeri o’rnatilgan ko’p funksiyali  MPP Uno uskunasi yordamida qadoqlash va markirovkalash
        </h4>
        <p class="left-side laboratory-services chess__row__info-container__description" data-aos="fade-left" data-aos-duration="2200">
          2006-yildan buyon naslchilik korxonasida urug‘larni qadoqlash ishlari Germaniyada ishlab chiqarilgan, zamonaviy MINITUBE uskunasi yordamida amalga oshirilmoqda. Bu uskuna urug‘ni anaʼnaviy granula shaklidan anchagina avfzalliklarga ega bo‘lgan payeta shaklida qadoqlaydi va markirovka qiladi.
        </p>
         <router-link
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
          Urug’larni saqlash / Genetik baza
        </h4>
        <p class="laboratory-services chess__row__info-container__description" data-aos="fade-right" data-aos-duration="1500">
          Naslchilik korxonasida nasldor buqa urug’larini uzoq muddat saqlash maqsadida… uskunalarida -196C gradus haroratda chuqur muzlatish amalga oshiriladi.
        </p>
       <router-link
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
          
    Suyuq azot bilan taminlash

        </h4>
        <p class="left-side laboratory-services chess__row__info-container__description" data-aos="fade-left" data-aos-duration="2200">
          Suniy urug’lantirish bilan shug’ullanuvchi sub’yektlarni suyuq azot bilan uzluksiz taminlash maqsadida naslchilik korxonasining 4 tonnalik maxsus kiriogen idishi o’rnatilgan ISUZU rusumli avtomobil vositasi xizmat qiladi.00
        </p>
          <router-link
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
  
  <div class="blog">
    <h1 class="blog__title" data-aos="fade-right" data-aos-duration="1000"><router-link to="/news" class="blog__title" >Maqolalar</router-link></h1>
    
    <div class="blog-cell">
      <div class="blog-card" 
      v-for="item,index in data" 
      :key="index" 
      data-aos="fade-left"
      data-aos-duration='1200'
      >
        <div class="img-container">
          <img :src="item.img" class="blog-img"/>
        </div>
        <a :href="item.url" class="blog__cell__info"><span class="blog__cell__info__date">{{item.date}}</span>
        <h3 class="blog__cell__info__title">{{item.title}}
        </h3>
        
      </a>
      </div>
    </div>
  </div>
  <section class="departament">
    <h3 class="dep-title" data-aos="fade-right" data-aos-duration="1000">Bosh tashkilotlar</h3>
    <div class="departament-group">
      <div class="dep-item" data-aos="fade-left" data-aos-duration="1600"><img :src="dep1" alt="Departament" class="departament-img"/></div>
      <div class="dep-item" data-aos="fade-left" data-aos-duration="1600"><img :src="dep2" alt="Departament" class="departament-img"/></div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import { Autoplay, Keyboard, Navigation, Lazy } from "swiper";


import lab1 from "../components/images/lab1.jpg"
import lab2 from "../components/images/lab2.jpg"
import lab3 from "../components/images/lab3.jpg"
import lab4 from "../components/images/lab4.jpg"

import dep1 from "../components/images/departament1.jpg"
import dep2 from "../components/images/departament2.jpg"

import slideImg1 from "../components/images/slider1.jpg";
import slideImg2 from "../components/images/slider2.jpg";
import slideImg3 from "../components/images/slider3.jpg";
import slideImg4 from "../components/images/slider4.jpg";
import slideImg5 from "../components/images/slider5.jpg";
import slideImg6 from "../components/images/slider6.jpg";
import slideImg7 from "../components/images/slider7.jpg";
import slideImg8 from "../components/images/slider8.jpg";
import slideImg9 from "../components/images/slider9.jpg";
import slideImg10 from "../components/images/slider10.jpg";
import slideImg11 from "../components/images/slider11.jpg";
import slideImg12 from "../components/images/slider12.jpg";
import slideImg13 from "../components/images/slider13.jpg";
import slideImg14 from "../components/images/slider14.jpg";
import slideImg15 from "../components/images/slider15.jpg";
import slideImg16 from "../components/images/slider16.jpg";
import slideImg17 from "../components/images/slider17.jpg";
import slideImg18 from "../components/images/slider18.jpg";
import slideImg19 from "../components/images/slider19.jpg";
import slideImg20 from "../components/images/slider20.jpg";
import slideImg21 from "../components/images/slider21.jpg";
import slideImg22 from "../components/images/slider22.jpg";
import slideImg23 from "../components/images/slider23.jpg";
import slideImg24 from "../components/images/slider24.jpg";
import slideImg25 from "../components/images/slider25.jpg";
import slideImg26 from "../components/images/slider26.jpg";
import slideImg27 from "../components/images/slider27.jpg";
import slideImg28 from "../components/images/slider28.jpg";
import slideImg29 from "../components/images/slider29.jpg";
import slideImg30 from "../components/images/slider30.jpg";

  import news1 from "../components/images/news1.jpg"
  import news2 from "../components/images/news2.jpg"
  import news3 from "../components/images/news3.jpg"
  import news4 from "../components/images/news4.png"
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Keyboard, Navigation, Autoplay, Lazy],
      slides: [
        { img: slideImg1, name: "Magic Merlin 121GE", link: "#" },
        { img: slideImg2, name: "MOHICAN", link: "#" },
        { img: slideImg3, name: "Torry", link: "#" },
        { img: slideImg4, name: "Trouba", link: "#" },
        { img: slideImg5, name: "Untamo", link: "#" },
        { img: slideImg6, name: "Ursel", link: "#" },
        { img: slideImg7, name: "Vasit", link: "#" },
        { img: slideImg8, name: "Katlovan", link: "#" },
        { img: slideImg9, name: "Heroz", link: "#" },
        { img: slideImg10, name: "Perfect Game", link: "#" },
        { img: slideImg11, name: "Pushok", link: "#" },
        { img: slideImg12, name: "Sherxon", link: "#" },
        { img: slideImg13, name: "Barbos", link: "#" },
        { img: slideImg14, name: "Boton", link: "#" },
        { img: slideImg15, name: "Jacobson Pioner", link: "#" },
        { img: slideImg16, name: "Kvarts", link: "#" },
        { img: slideImg17, name: "Monros", link: "#" },
        { img: slideImg18, name: "Hello world", link: "#" },
        { img: slideImg19, name: "Hello world", link: "#" },
        { img: slideImg20, name: "Hello world", link: "#" },
        { img: slideImg21, name: "Hello world", link: "#" },
        { img: slideImg22, name: "Hello world", link: "#" },
        { img: slideImg23, name: "Hello world", link: "#" },
        { img: slideImg24, name: "Hello world", link: "#" },
        { img: slideImg25, name: "Hello world", link: "#" },
        { img: slideImg26, name: "Hello world", link: "#" },
        { img: slideImg26, name: "Hello world", link: "#" },
        { img: slideImg27, name: "Hello world", link: "#" },
        { img: slideImg28, name: "Hello world", link: "#" },
        { img: slideImg29, name: "Hello world", link: "#" },
        { img: slideImg30, name: "Hello world", link: "#" },
      ],
      labData:{
        title1:"AndroVision: Kompyuter va monitor bilan CASA dasturi",
        description1:"2022-yildan buyon naslchilik korxonasi MINITUBE kompaniyasi tomonidan Germaniyada ishlab chiqarilgan Androvision maxsus avtomatlashtirilgan texnikadan foydalangan holda buqalar urug‘ini kompleks tahlil qilib kelmoqda. U urug’ning nafaqat harakatchanlik, kontsentratsiya va morfologiyasini an’anaviy tahlillarini, balki spermatozoidlarning funksionalligini baholashni ham ta'minlaydi.",
        title2:"MiniJet printeri ",
        description2:"2006-yildan buyon naslchilik korxonasida urug‘larni qadoqlash ishlari Germaniyada ishlab chiqarilgan, zamonaviy MINITUBE uskunasi yordamida amalga oshirilmoqda. Bu uskuna urug‘ni anaʼnaviy granula shaklidan anchagina avfzalliklarga ega bo‘lgan payeta shaklida qadoqlaydi va markirovka qiladi.",
        title3:"Urug’larni saqlash / Genetik baza",
        description3:"Naslchilik korxonasida nasldor buqa urug’larini uzoq muddat saqlash maqsadida… uskunalarida -196C gradus haroratda chuqur muzlatish amalga oshiriladi.",
        title4:"Suyuq azot bilan taminlash",
        description4:"Suniy urug’lantirish bilan shug’ullanuvchi sub’yektlarni suyuq azot bilan uzluksiz taminlash maqsadida naslchilik korxonasining 4 tonnalik maxsus kiriogen idishi o’rnatilgan ISUZU rusumli avtomobil vositasi xizmat qiladi.00",
      },
      data:[
      {
    id : 1, title : "СУНЪИЙ УРУҒЛАНТИРИШ ТИЗИМИДА ҚИЗИЛ-ОЛА ГОЛШТИН ВА АНГЛЕР ЗОТЛИ БУҚАЛАРНИ ТАНЛАШ ҲАМДА ҚИЗИЛ ТУСЛИ СУТ ЙЎНАЛИШИДАГИ ПОДАЛАРНИ ТАКОМИЛЛАШТИРИШ",date:"8/17/2022", description:"Today, on August 17, 2022, the XVI All-Russian competition of operators for artificial insemination of cattle is being held in the city of Izhevsk, Udmurt Republic.",
    img : news1, url : "https://slib.uz/ru/article/view?id=14306"
  },
  {
    id : 2, title : "ШВИЦ ВА ФЛЕКФИХ СИММЕНТАЛ ЗОТЛИ ЯХШИЛОВЧИ БУҚАЛАР НАСЛИДАН ФОЙДАЛАНИШ ВА УЛАРНИНГ НАСЛЧИЛИК БАЗАСИНИ МУСТАХКАМЛАШ",date:"8/17/2022", description:"Today, on August 17, 2022, the XVI All-Russian competition of operators for artificial insemination of cattle is being held in the city of Izhevsk, Udmurt Republic.",
    img : news2,url : "https://slib.uz/ru/article/view?id=14306"
  },
  {
    id : 3, title : "СУТ ЙЎНАЛИШИДАГИ ҚИЗИЛ ЗОТЛАРНИ ТАКОМИЛЛАШТИРИШДА ҚИЗИЛ-ОЛА ГОЛШТИН ВА АНГЛЕР ЗОТЛИ БУҚАЛАР НАСЛИДАН ФОЙДАЛАНИШ",date:"8/17/2022", description:"Today, on August 17, 2022, the XVI All-Russian competition of operators for artificial insemination of cattle is being held in the city of Izhevsk, Udmurt Republic.",
    img : news3,url:"https://slib.uz/ru/article/view?id=14328"
  },
  {
    id : 4, title : "“O‘znaslchilik”давлат корхонасида “Бушуев” зотли наслли буқаларнинг наслдорлик ва экстеръер кўрсаткичлари.",date:"8/17/2022", description:"Today, on August 17, 2022, the XVI All-Russian competition of operators for artificial insemination of cattle is being held in the city of Izhevsk, Udmurt Republic.",
    img : news4,url:"https://slib.uz/ru/article/view?id=14535"
  },
      ]
    };
  },
};
</script>

<style scoped>

 
.home.usp {
  margin-bottom: 30px;
  position: relative;
  align-items: flex-end;
}

.container{
  width: 90%;
  margin: 0 auto;
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
  background: url(../components/images/bgimg.jpg) center center no-repeat;
  background-size: cover !important;
  overflow: hidden;
}
.usp__toning {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}
.home.usp .home.usp__wrapper {
  align-items: flex-end;
  text-align: right;
}
.usp__wrapper__text {
  margin-top: 3rem;
}
.usp__wrapper {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: flex-start;
  padding: 0 40px;
  z-index: 2;
  color: #fff;
  max-width: 600px;
  font-family: "Museo Bold";
}
.img_box img {
  width: 100%;
}
.home.usp__scroll {
  right: 0;
  left: unset;
}
.usp__scroll {
  position: absolute;
  bottom: 25px;
  left: 0;
  padding: 0 45px;
  z-index: 2;
  color: #fff;
}
.usp__wrapper__title {
  font-size: 35px;
}
p,
span {
  font-family: "Museo Regular";
  line-height: 20px;
}
.usp__wrapper .rounded-button {
  margin-top: 35px !important;
  color: #fff;
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
.rounded-button:hover{
  background-color: rgb(255, 250, 250);
  color: black;
  border: 2px solid black;
}
a {
  text-decoration: none;
  font-family: "Museo Regular";
  transition: 0.3s color;
}

/* Catalog section start */
.catalog_section {
  width: 90%;
  margin: 5rem auto;
}

.slider_container {
  margin: 2rem 0;
}
.catalog_section-paragraph {
  margin-top: 2rem;
}
.slide_title {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
}
.slide_title a {
  color: #0055e9;
}

/* Catalog section end */
/* banner =dan keyingi sectio */

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
  font-family: "Museo Bold";
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
/* departament */
.departament{
  width: 90%;
  margin: 0 auto;
  margin-bottom: 40px;
}
.dep-title{
  color: #1f69ea;
  font-size: 35px;
  font-family: "Museo Bold";
  padding-bottom: 10px;
}
.departament-group{
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 20px;
}
.departament-img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.dep-item{
  max-height: 400px;
}


/* blog */
a{
    text-decoration: none;
  }
  .blog{
    width: 90%;
    margin: 20px auto;
    margin-bottom: 50px;

  }
  .blog__title{
    font-size: 35px;
    font-family: "Museo Bold";
    color: #0055e9;
    text-decoration: none;

  }
  .blog-cell{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 35px;
    margin: 20px 0;
  }
  .blog-img{
    width: 100%;
    border-radius: 10px;
    height: 100%;
    object-fit: cover;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .img-container{
    height: 320px;
  }
  .blog__cell__info {
    transition: .3s all;
    margin-top: 25px;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
}
.blog__cell__info__date {
    font-family: Museo Regular;
    width: 100%;
    text-align: left;
    margin: 0;
    color: #a4a4a4;
    font-size: 14px;
}
.blog__cell__info__title {
    transition: .3s all;
    font-family: Museo Regular;
    width: 100%;
    margin: 5px 0;
    text-align: left;
    color: #0055e9;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
}
.blog__cell__info__description {
    width: 100%;
    color: #000;
    margin: 0;
    margin-bottom: 5px;
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-family: 'Times New Roman', Times, serif;
    font-size: 18px;
    line-height: 20px;
}
/* /blog */

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
@media(max-width:1200px){
  .blog-cell{
    grid-template-columns: repeat(3,1fr);
  }
 }
 @media(max-width:867px){
  .blog-cell{
    grid-template-columns: repeat(2,1fr);
  }
 }
 @media(max-width:620px){
  .blog-cell{
    grid-template-columns: repeat(1,1fr);
  }
 }
</style>

<script setup>
// const url = "../components/images/bgimg.jpg";
</script>
