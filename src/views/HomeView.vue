<template>
  <section class="home usp">
    <div class="home usp__bgr"></div>
    <div class="home usp__toning"></div>
    <div class="home usp__wrapper">
      <h1 class="home usp__wrapper__title">Parent breeding enterprise «Elite»</h1>
      <p class="home usp__wrapper__text">
        Оne of the largest enterprises in Russia for the production and sale of the seed of manufacturing bulls - it has
        been going on since 1977 when the Kazan station of artificial insemination of farm animals had transformed into
        the Republican organization on artificial insemination of farm animals
      </p>
      <a class="call-order-form rounded-button">Get an offer</a>
    </div>
  </section>

  <!-- bannerdan keyingi section -->
  <!-- catalog section start -->
  <section class="catalog_section ">
    <h3 class="left-side laboratory-services chess__row__info-container__title">Catalog</h3>
    <p class="catalog_section-paragraph">
      We sell the seed of bulls of the Holstein breed of the best world selection. The productivity of bull mothers is
      from 1,0000 to 24,000 kg of milk, fat content from 3.6% to 4.5%, protein content from 3.0 to 4.0%. Bulls are born
      in the USA, Canada, Germany, the Netherlands. All bulls were tested for the carriage of gene anomalies,
      haplotypes, for the ease of calving of daughters. Product prices are flexible. The laboratory for selection
      control of milk quality examines samples for fat, protein, content of somatic cells, urea in milk, falsification
      and quality of feeding cows
    </p>
    <div class="slider_container ">
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
          '410': {
            slidesPerView: 1,
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
              <router-link :to="slide.link">All Abouts</router-link>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <router-link
      class="rounded-button blue laboratory-services chess__row__info-container__more"
      :to="{name:'catolog'}"
      >All Catalogs</router-link>
  </section>
  <!-- catalog section end -->
  <section class="dark laboratory-services chess container">
    <div class="laboratory-services chess__row">
      <div class="laboratory-services chess__row__info-container">
        <h3 class="laboratory-services chess__row__info-container__title">
          Laboratory for packing and freezing of seed
        </h3>
        <p class="laboratory-services chess__row__info-container__description">
          Since 2006, the breeding enterprise has frozen the seed of bulls using European technology, using special
          equipment of the 4th generation, produced in France by the IMV company. In parallel with it, the seed of the
          most highly valued bulls is packed
        </p>
        <a
          href="#"
          class="rounded-button blue laboratory-services chess__row__info-container__more"
          >More</a
        >
      </div>
      <div class="laboratory-services chess__row__img-container">
        <img
          src="http://api.elitaplem.ru/api/files/b423mJJsd4v54v/a84e49fac644ffb4224db642c94d6834_bull_3.jpg"
          alt="Лаборатория иммуногенетической экспертизы"
          class="laboratory-services chess__row__img-container__img"
        />
      </div>
    </div>
    <div class="left-side laboratory-services chess__row">
      <div class="left-side laboratory-services chess__row__info-container">
        <h3 class="left-side laboratory-services chess__row__info-container__title">
          The feed quality control laboratory offers services based on the NutriOpt modular animal feeding system
        </h3>
        <p class="left-side laboratory-services chess__row__info-container__description">
          The feed quality control laboratory offers services based on a modular system NutriOpt Animal Feeding, which
          combines accurate analyzes obtained on feed and forage analyzer "FOSS" NIRS DS 2500
        </p>
        <a
          href="/en/services/the-feed-quality-control-laboratory-offers-services-based-on-the-nutriopt-modular-animal-feeding-system?sid=RQzIte00ZJ"
          class="left-side rounded-button blue laboratory-services chess__row__info-container__more"
          >More</a
        >
      </div>
      <div class="left-side laboratory-services chess__row__img-container">
        <img
          src="http://api.elitaplem.ru/api/files/b423mJJsd4v54v/3ca6a1a249321f24fef1c126b6714320_3.jpg"
          alt="Feed Quality Control Laboratory"
          class="left-side laboratory-services chess__row__img-container__img"
        />
      </div>
    </div>
    <div class="laboratory-services chess__row">
      <div class="laboratory-services chess__row__info-container">
        <h3 class="laboratory-services chess__row__info-container__title">
          Laboratory of Milk Quality Selection Control
        </h3>
        <p class="laboratory-services chess__row__info-container__description">
          The laboratory for breeding milk quality controls includes: the CombiFoss ™ 7 system, which combines MilkoScan
          ™ 7 RM and Fossomatic ™ 7, which allows you to simultaneously examine fat, protein, casein, lactose, dry
          residue, urea
        </p>
        <a
          href="/en/services/laboratory-of-milk-quality-selection-control?sid=zYDi7RxGBF"
          class="rounded-button blue laboratory-services chess__row__info-container__more"
          >More</a
        >
      </div>
      <div class="laboratory-services chess__row__img-container">
        <img
          src="http://api.elitaplem.ru/api/files/b423mJJsd4v54v/cf16940c66b77351eab10bdacf540d10_mol_2.jpg"
          alt="Laboratory of Milk Quality Selection Control"
          class="laboratory-services chess__row__img-container__img"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import { Autoplay, Keyboard, Navigation, Lazy } from "swiper";

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

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Keyboard, Navigation, Autoplay, Lazy],
      slides: [
        { img: slideImg1, name: "Hello world", link: "#" },
        { img: slideImg2, name: "Hello world", link: "#" },
        { img: slideImg3, name: "Hello world", link: "#" },
        { img: slideImg4, name: "Hello world", link: "#" },
        { img: slideImg5, name: "Hello world", link: "#" },
        { img: slideImg6, name: "Hello world", link: "#" },
        { img: slideImg7, name: "Hello world", link: "#" },
        { img: slideImg8, name: "Hello world", link: "#" },
        { img: slideImg9, name: "Hello world", link: "#" },
        { img: slideImg10, name: "Hello world", link: "#" },
        { img: slideImg11, name: "Hello world", link: "#" },
        { img: slideImg12, name: "Hello world", link: "#" },
        { img: slideImg13, name: "Hello world", link: "#" },
        { img: slideImg14, name: "Hello world", link: "#" },
        { img: slideImg15, name: "Hello world", link: "#" },
        { img: slideImg16, name: "Hello world", link: "#" },
        { img: slideImg17, name: "Hello world", link: "#" },
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
  padding: 0 45px;
  z-index: 2;
  color: #fff;
  width: 600px;
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
  margin: 25px 0;
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

a {
  text-decoration: none;
  font-family: Museo Regular;
  transition: 0.3s color;
}

img {
  border-radius: 10px;
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


</style>

<script setup>
// const url = "../components/images/bgimg.jpg";
</script>
