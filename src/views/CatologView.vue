<template>
  <div class="catalogue">

    <h1 class="catalogue__title" data-aos="fade-left" data-aos-duration="1000">Katalog</h1>
    <div class="catologue-card">
      <div class="catalogue__cell" v-for="(item, index) in displaySlide" :key="index" data-aos="fade-right" data-aos-duration="1600">
        <!-- <div class="catalogue__cell__left"> -->
          <router-link :to="{path : `catolog/${index+1}`, query: { title: item.title,description:item.description,img:item.img,zoti:item.zoti,birth_date:item.birth_date,birth_place:item.birth_place,desc_mum:item.desc_mum,weight:item.weight,pass_img:item.pass_img},}" class="catalogue__cell__left">
          <img :src="item.img" class="catalogue__cell__left__img" />
        </router-link>
        <!-- </div>                                                                                                                                                                                                                                                                                                                            -->
          <div class="catalogue__cell__right">
            <h3 class="catalogue__cell__right__title">{{ item.title }} №{{ pageLimit * currentPage + index + 1 }}</h3>
            <p class="catalogue__cell__right__description">{{ item.description }}</p>
          </div> 
      </div>
   
  </div>
  <div class="slide_control">
      <p class="prevSlide" :disabled="this.currentPage === 0" @click="prevSlide">&larr;</p>
      <span> {{ maxPageFunc }} </span>
      <p class="nextSlide" :disabled="this.currentPage === this.maxPage - 1" @click="nextSlide">&rarr;</p>
    </div>
  </div>
</template>

<script>
import slideImages1 from "../components/images/Magic.jpg";
import slideImages2 from "../components/images/MOHICAN.jpg";
import slideImages3 from "../components/images/Torry.jpg";
import slideImages4 from "../components/images/Trouba.jpg";
import slideImages5 from "../components/images/Untamo.jpg";
import slideImages6 from "../components/images/Ursel.jpg";
import slideImages7 from "../components/images/Vasit.jpg";
import slideImages8 from "../components/images/Katlovan.jpg";
import slideImages9 from "../components/images/Heroz.jpg";
import slideImages10 from "../components/images/Perfect.jpg";
import slideImages11 from "../components/images/Pushok.jpg";
import slideImages12 from "../components/images/Sherxon.jpg";
import slideImages13 from "../components/images/Barbos.jpg";
import slideImages14 from "../components/images/Boton.jpg";
import slideImages15 from "../components/images/Jacobson.jpg";
import slideImages16 from "../components/images/Kvarts.jpg";
import slideImages17 from "../components/images/Monros.jpg";
import slideImages18 from "../components/images/EVRON.jpg";
import slideImages19 from "../components/images/HEMIN.jpg";
import slideImages20 from "../components/images/MANOMAH.jpg";
import slideImages21 from "../components/images/OTELO.jpg";
import slideImages22 from "../components/images/RUSTIK.jpg";
import slideImages23 from "../components/images/STEVENSON.jpg";
import slideImages24 from "../components/images/Trouba.jpg";
import slideImages25 from "../components/images/Pushok.jpg";
import slideImages26 from "../components/images/Untamo.jpg";
import slideImages27 from "../components/images/Torry.jpg";
import slideImages28 from "../components/images/HEMIN.jpg";
import slideImages29 from "../components/images/MANOMAH.jpg";
import slideImages30 from "../components/images/Kvarts.jpg";

export default {
  name: "catolog-view",
  data() {
    return {
      currentPage: 0,
      pageLimit: 8,
      dataSlide: [
        {
          id: 1,
          title: "Magic Merlin 121GE  ",
          description:
            "Zoti	Angus. Tug’lgan yili	22.03.2019. Tug’lgan joyi	AQSH. Tirik vazni	860",
          img: slideImages1,
          zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12327 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg",
    

        },
        {
          id : 2,
          title: "MOHICAN  ",
          description:
            "Zoti	Gereford. Tug’lgan yili	19.02.2019. Tug’lgan joyi	AQSH. Tirik vazni	770",
          img: slideImages2,
          zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12327 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg",

        },
        {
          id : 3,
          title: "Torry  ",
          description:
            "Zoti	Angus. Tug’lgan yili	01.01.2017. Tug’lgan joyi	Germaniya. Tirik vazni	1010",
          img: slideImages3,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12327 Sut yog`i 3,61 % Sut oqsilii 3,35 %",
          weight : "1080 kg",

        },
        {
          id : 4,
          title: "Trouba  ",
          description:
            "Zoti	Angler. Tug’lgan yili	29.06.2016. Tug’lgan joyi	Germaniya. Onasining mahsuldorligi 	Suti, kg 10859.	Sut yog`i  4,04 %. Sut oqsilii 3,51 %. Tirik vazni	940",
          img: slideImages4,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12327 Sut yog`i 3,61 %  Sut oqsilii 3,35 % [413]",
          weight : "1080 kg",

        },
        {
          id:5,
          title: "Untamo  ",
          description:
            "Zoti	Qizil ola golshtin. Tug’lgan yili	24.11.2016. Tug’lgan joyi	Germaniya. Onasining mahsuldorligi 	Suti, kg 12289.	Sut yog`i  3,5 %. Sut oqsilii 3,12 %. Tirik vazni	1030",
          img: slideImages5,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12327 Sut yog`i 3,61 %  Sut oqsilii 3,35 %",
          weight : "1080 kg",

        },
        {
          id:6,
          title: "Ursel ",
          description:
            "Zoti	Qora ola golshtin. Tug’lgan yili	13.01.2017. Tug’lgan joyi	Germaniya. Onasining mahsuldorligi 	Suti, kg 12327.	Sut yog`i  3,61 %. Sut oqsilii 3,35 %. Tirik vazni	1080",
          img: slideImages6,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12327 Sut yog`i 3,61 % Sut oqsilii 3,35 %",
          weight : "1080 kg",

        },
        {
          id:7,
          title: "Vasit  ",
          description:
            "Zoti	Shvits. Tug’lgan yili	11.01.2016. Tug’lgan joyi	Germaniya. Onasining mahsuldorligi 	Suti, kg 11749. Sut yog`i  4,54 %.	Sut oqsilii 3,75 %. Tirik vazni	1040",
          img: slideImages7,
          zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12327 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg",

        },
        {
          id:8,
          title: "Katlovan  ",
          description:
            "Zoti	Bushuev. Tug’lgan yili	19.12.2013. Tug’lgan joyi	O’zbekiston. Onasining mahsuldorligi 	Suti, kg 4915. Sut yog`i  4,2 %.	Sut oqsilii.Tirik vazni	850",
          img: slideImages8,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 9445 Sut yog`i 4,81 % [445] Sut oqsilii 4,25 % [413]",
          weight : "1080 kg",

        },
        {
          id:9,
          title: "Heroz ",
          description:
            "Zoti	Simental. Tug’lgan yili	13.11.2016. Tug’lgan joyi	Germaniya.Onasining mahsuldorligi 	Suti, kg 11415.	Sut yog`i  3,98 %.	Sut oqsilii 3,5 %. Tirik vazni	1050",
          img: slideImages9,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12330 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg",

        },
        {
          id:10,
          title: "Perfect Game  ",
          description:
            "Zoti	Angus. Tug’lgan yili	24.12.2018. Tug’lgan joyi	AQSH. Tirik vazni	780",
          img: slideImages10,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12027 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg",

        },
        {
          id:11,
          title: "Pushok  ",
          description:
            "Zoti	Qora ola golshtin. Tug’lgan yili	23.07.2020. Tug’lgan joyi	Belarus. Onasining mahsuldorligi 	Suti, kg 11172.	Sut yog`i  3,9 %.	Sut oqsilii 3,27 %. Tirik vazni	560",
          img: slideImages11,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 10327 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg",

        },
        {
          title: "Sherxon  ",
          description:
            "Zoti	Bushuev. Tug’lgan yili	27.03.2020. Tug’lgan joyi	O’zbekiston. Onasining mahsuldorligi 	Suti, kg 3965.	Sut yog`i  3,9 %.	Sut oqsilii.Tirik vazni	400",
          img: slideImages12,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 9545 Sut yog`i 4,61 % [445] Sut oqsilii 4,35 % [413]",
          weight : "1080 kg",

        },
        {
          title: "Barbos  ",
          description:
            "Zoti	Bushuev. Tug’lgan yili	02.05.2020. Tug’lgan joyi	O’zbekiston. Onasining mahsuldorligi 	Suti, kg 4005.	Sut yog`i  4,2 %.	Sut oqsilii.Tirik vazni	480",
          img: slideImages13,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 10150 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg",

        },
        {
          title: "Boton   ",
          description:
            "Zoti	Qora ola golshtin. Tug’lgan yili	03.04.2020. Tug’lgan joyi	O`zbekiston. Onasining mahsuldorligi 	Suti, kg 10250.	Sut yog`i  3,8 %.	Sut oqsilii. Tirik vazni	640",
          img: slideImages14,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 9540 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg",

        },
        {
          title: "Jacobson Pioner ",
          description:
            "Zoti	Angus. Tug’lgan yili	15.02.2019. Tug’lgan joyi	AQSH. Tirik vazni	750",
          img: slideImages15,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 9845 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg",

        },
        {
          title: "Kvarts   ",
          description:
            "Zoti	Qora ola golshtin. Tug’lgan yili	08.09.2020. Tug’lgan joyi	Belarus. Onasining mahsuldorligi 	Suti, kg 11127.	Sut yog`i  3,86 %.	Sut oqsilii 3,47 %. Tirik vazni	500",
          img: slideImages16,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 9595 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg",

        },
        {
          title: "Monros ",
          description:
            "Zoti	Qora ola golshtin. Tug’lgan yili	29.08.2020. Tug’lgan joyi	O`zbekiston. Onasining mahsuldorligi 	Suti, kg 10065.	Sut yog`i  4,1 %.	Sut oqsilii. Tirik vazni	500",
          img: slideImages17,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 9745 Sut yog`i 3,61 %. Sut oqsilii 3,35 %",
          weight : "1080 kg",

        },
        {
          title: "EVRON     DE 08 16178334",
          description:
            "Zoti Simmental. Tug'ilgan yili 08.12.2015. Tug'ilgan joyi Germaniya. Onasining sut mahsuldorligi   11652",
          img: slideImages18,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 9549 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg",

        },
        {
          title: "HEMIN  DE 0008 16488942",
          description:
            "Zoti Simmental. Tug'ilgan yili 16.11.2016. Tug'ilgan joyi Germaniya. Onasinig sut mahsuldorligi     11172",
          img: slideImages19,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 9945 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg",

        },
        {
          title: "MANOMAH DE 0008 16488942",
          description:
            "Zoti Simmental. Tug'ilgan yili 02.02.2016. Tug'ilgan joyi Germaniya. Onasining sut mahsuldorligi 11402",
          img: slideImages20,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 9555 Sut yog`i 3,61 % Sut oqsilii 3,35 %",
          weight : "1080 kg",

        },
        {
          title: "OTELO  DE 0008 16561211",
          description:
            "Zoti Simmental.Tug'ilgan yili 26.07.2016. Tug'ilgan joyi Germaniya. Onasinig sut mahsuldorligi 9545",
          img: slideImages21,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 9545 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg",

        },
        {
          title: "RUSTIK DE 0008 16488942",
          description:
            "Zoti Simmental. Tug'ilgan yili 15.08.2016. Tug'ilgan joyi Germaniya. Onasinig sut mahsuldorligi 11582",
          img: slideImages22,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12327 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg",

        },
        {
          title: "STEVENSON WEIGH USA 911737",
          description:
            "Zoti Angus. Tug'ilgan yili 31.01.2019. Tug'ilgan joyi AQSH",
          img: slideImages23,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12327 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg",

        },
        {
          title: "Trouba  ",
          description:
            "Zoti	Angler. Tug’lgan yili	29.06.2016. Tug’lgan joyi	Germaniya. Onasining mahsuldorligi 	Suti, kg 10859.	Sut yog`i  4,04 %. Sut oqsilii 3,51 %. Tirik vazni	940",
          img: slideImages24,
          zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12327 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg",

        },
        {
          title: "Pushok  ",
          description:
            "Zoti	Qora ola golshtin. Tug’lgan yili	23.07.2020. Tug’lgan joyi	Belarus. Onasining mahsuldorligi 	Suti, kg 11172.	Sut yog`i  3,9 %.	Sut oqsilii 3,27 %. Tirik vazni	560",
          img: slideImages25,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12327 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg",

        },
        {
          title: "Untamo  ",
          description:
            "Zoti	Qizil ola golshtin. Tug’lgan yili	24.11.2016. Tug’lgan joyi	Germaniya. Onasining mahsuldorligi 	Suti, kg 12289.	Sut yog`i  3,5 %. Sut oqsilii 3,12 %. Tirik vazni	1030",
          img: slideImages26,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12327 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg",

        },
        {
          title: "Torry  ",
          description:
            "Zoti	Angus. Tug’lgan yili	01.01.2017. Tug’lgan joyi	Germaniya. Tirik vazni	1010",
          img: slideImages27,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12327 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg",

        },
        {
          title: "HEMIN DE 0008 16488942 ",
          description:
            "Zoti Simmental. Tug'ilgan yili 16.11.2016. Tug'ilgan joyi Germaniya. Onasinig sut mahsuldorligi     11172",
          img: slideImages28,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12327 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg",

        },
        {
          title: "MANOMAH  ",
          description:
            "Zoti Simmental. Tug'ilgan yili 02.02.2016. Tug'ilgan joyi Germaniya. Onasining sut mahsuldorligi 11402",
          img: slideImages29,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12327 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg",

        },
        {
          title: "Kvarts  ",
          description:
            "Zoti	Qora ola golshtin. Tug’lgan yili	08.09.2020. Tug’lgan joyi	Belarus. Onasining mahsuldorligi 	Suti, kg 11127.	Sut yog`i  3,86 %.	Sut oqsilii 3,47 %. Tirik vazni	500",
          img: slideImages30,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12327 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg",

        },
      ],
      displaySlide: null,
      maxPage: null,
    };
  },
  computed: {
    maxPageFunc() {
      return `page ${this.currentPage + 1} in ${this.maxPage}`;
    },
  },
  mounted() {
    this.displaySlide = this.dataSlide.slice(
      this.currentPage * this.pageLimit,
      this.pageLimit * (this.currentPage + 1)
    );
    this.maxPage = Math.ceil(this.dataSlide.length / this.pageLimit);
  },
  methods: {
    nextSlide() {
      if (this.currentPage < this.maxPage - 1) {
        this.currentPage++;

        this.displaySlide = this.dataSlide.slice(
          this.currentPage * this.pageLimit,
          this.pageLimit * (this.currentPage + 1)
        );
      }
    },
    prevSlide() {
      if (this.currentPage > 0) {
        this.currentPage--;

        this.displaySlide = this.dataSlide.slice(
          this.currentPage * this.pageLimit,
          this.pageLimit * (this.currentPage + 1)
        );
      }
    },
  },
};
</script>

<style scoped>
.catalogue{
  width: 90%;
  margin : 0 auto;
}
.catalogue__title{
  color: #0055e9;
  font-size: 35px;
  margin: 20px 0;
}
.catologue-card{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}
.catalogue__cell{
  display: grid;
    grid-template-columns: 1fr 1fr;
  gap: 15px;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
}
.catalogue__cell__left{
  max-height: 180px;
}
.catalogue__cell__left__img{
width: 100%;
height: 100%;
border-radius: 10px;
object-fit: cover;
}
.slide_control {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem;
  margin-top: 60px;
  margin-bottom: 30px;
}
.prevSlide,
.nextSlide {
  transition: all 0.3s;
  cursor: pointer;
  font-size: 20px;
}
.prevSlide:hover,
.nextSlide:hover {
  transform: translateY(-2px);
}

.catalogue__cell__right__title {
  transition: all 0.3s;
  word-break: break-word;
  margin-bottom: 5px;
  color: #0055e9;
  font-family: "Times New Roman", Times, serif;
  font-size: 20px;
}
p,
span {
  font-family: "Times New Roman", Times, serif;
  line-height: 25px;
} 
.catalogue__cell__right__description {
  word-break: break-word;
  color: #000; 
}

@media (max-width:1110px){
  .catalogue__cell{
    grid-template-columns: 1fr ;
    align-items: initial;
  }
  .catalogue__cell__left{
    width: 100%;
    max-height: 280px;
  }
  .catalogue__cell__right__description{
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
}
@media (max-width:680px){
  .catologue-card{
    grid-template-columns: 1fr;
  }
  .catalogue__cell__left{
    max-height: 320px;
  }
  .slide_control{
    margin-top: 20px;
  }
}

</style>
