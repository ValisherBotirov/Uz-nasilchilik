<template>
  <div class="catalogue">
    <h1 class="catalogue__title">Catalog</h1>
    <div class="catologue-card">
      <div class="catalogue__cell" v-for="(item, index) in displaySlide" :key="index">
        <!-- <div class="catalogue__cell__left"> -->
          <router-link :to="{path : `catolog/${index+1}`, query: { title: item.title,description:item.description,img:item.img,zoti:item.zoti,birth_date:item.birth_date,birth_place:item.birth_place,desc_mum:item.desc_mum,weight:item.weight},}" class="catalogue__cell__left">
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
import slideImages1 from "../components/images/slider1.jpg";
import slideImages2 from "../components/images/slider2.jpg";
import slideImages3 from "../components/images/slider3.jpg";
import slideImages4 from "../components/images/slider4.jpg";
import slideImages5 from "../components/images/slider5.jpg";
import slideImages6 from "../components/images/slider6.jpg";
import slideImages7 from "../components/images/slider7.jpg";
import slideImages8 from "../components/images/slider8.jpg";
import slideImages9 from "../components/images/slider9.jpg";
import slideImages10 from "../components/images/slider10.jpg";
import slideImages11 from "../components/images/slider11.jpg";
import slideImages12 from "../components/images/slider12.jpg";
import slideImages13 from "../components/images/slider13.jpg";
import slideImages14 from "../components/images/slider14.jpg";
import slideImages15 from "../components/images/slider15.jpg";
import slideImages16 from "../components/images/slider16.jpg";
import slideImages17 from "../components/images/slider17.jpg";
import slideImages18 from "../components/images/slider18.jpg";
import slideImages19 from "../components/images/slider19.jpg";
import slideImages20 from "../components/images/slider20.jpg";
import slideImages21 from "../components/images/slider21.jpg";
import slideImages22 from "../components/images/slider22.jpg";
import slideImages23 from "../components/images/slider23.jpg";
import slideImages24 from "../components/images/slider24.jpg";
import slideImages25 from "../components/images/slider25.jpg";
import slideImages26 from "../components/images/slider26.jpg";
import slideImages27 from "../components/images/slider27.jpg";
import slideImages28 from "../components/images/slider28.jpg";
import slideImages29 from "../components/images/slider29.jpg";
import slideImages30 from "../components/images/slider30.jpg";

export default {
  name: "catolog-view",
  data() {
    return {
      currentPage: 0,
      pageLimit: 8,
      dataSlide: [
        {
          id: 1,
          title: "Sapphire ",
          description:
            "Born on 10/17/10 in Russia. Line M. Chieftain. Kholmogory breed of Tatarstan type. Father Lom 826 Russian bull. Mother's productivity per lactation 7969 kg of milk. Fat content 3.8%, protein 3.30%",
          img: slideImages1,
          zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12327 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg"
        },
        {
          id : 2,
          title: "Verkh  ",
          description:
            "The Kholmogorsk breed, of Tatarstan type was born on 05/08/13 in Russia. Hope line. Father Pegasus 1210 Russian bull Mothers productivity for lactation of 8300 kg of milk. Fat content 3.82%, protein 3.30%",
          img: slideImages2,
          zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12327 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg"
        },
        {
          id : 3,
          title: "Sandal  ",
          description:
            "2010 - yilda tug'ilgan germaniyada, in the Agricultural Production Association named after Vakhitov, Kukmorsky District. Line Reflection Sovering. Kholmogorsky prody Tatarstan type",
          img: slideImages3,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12327 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg"
        },
        {
          id : 4,
          title: "Sandal  ",
          description:
            "Born on August 24, 2010, in the Agricultural Production Association named after Vakhitov, Kukmorsky District. Line Reflection Sovering. Kholmogorsky prody Tatarstan type",
          img: slideImages4,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12327 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg"
        },
        {
          id:5,
          title: "Sandal  ",
          description:
            "Born on August 24, 2010, in the Agricultural Production Association named after Vakhitov, Kukmorsky District. Line Reflection Sovering. Kholmogorsky prody Tatarstan type",
          img: slideImages5,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12327 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg"
        },
        {
          id:6,
          title: "Sandal  ",
          description:
            "Born on August 24, 2010, in the Agricultural Production Association named after Vakhitov, Kukmorsky District. Line Reflection Sovering. Kholmogorsky prody Tatarstan type",
          img: slideImages6,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12327 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg"
        },
        {
          id:7,
          title: "Sandal  ",
          description:
            "Born on August 24, 2010, in the Agricultural Production Association named after Vakhitov, Kukmorsky District. Line Reflection Sovering. Kholmogorsky prody Tatarstan type",
          img: slideImages7,
        },
        {
          id:8,
          title: "Sandal  ",
          description:
            "Born on August 24, 2010, in the Agricultural Production Association named after Vakhitov, Kukmorsky District. Line Reflection Sovering. Kholmogorsky prody Tatarstan type",
          img: slideImages8,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12327 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg"
        },
        {
          id:9,
          title: "Sandal  ",
          description:
            "Born on August 24, 2010, in the Agricultural Production Association named after Vakhitov, Kukmorsky District. Line Reflection Sovering. Kholmogorsky prody Tatarstan type",
          img: slideImages9,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12327 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg"
        },
        {
          id:10,
          title: "Sandal  ",
          description:
            "Born on August 24, 2010, in the Agricultural Production Association named after Vakhitov, Kukmorsky District. Line Reflection Sovering. Kholmogorsky prody Tatarstan type",
          img: slideImages10,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12327 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg"
        },
        {
          id:11,
          title: "Sandal  ",
          description:
            "Born on August 24, 2010, in the Agricultural Production Association named after Vakhitov, Kukmorsky District. Line Reflection Sovering. Kholmogorsky prody Tatarstan type",
          img: slideImages11,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12327 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg"
        },
        {
          title: "Sandal  ",
          description:
            "Born on August 24, 2010, in the Agricultural Production Association named after Vakhitov, Kukmorsky District. Line Reflection Sovering. Kholmogorsky prody Tatarstan type",
          img: slideImages12,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12327 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg"
        },
        {
          title: "Sandal  ",
          description:
            "Born on August 24, 2010, in the Agricultural Production Association named after Vakhitov, Kukmorsky District. Line Reflection Sovering. Kholmogorsky prody Tatarstan type",
          img: slideImages13,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12327 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg"
        },
        {
          title: "Sandal  ",
          description:
            "Born on August 24, 2010, in the Agricultural Production Association named after Vakhitov, Kukmorsky District. Line Reflection Sovering. Kholmogorsky prody Tatarstan type",
          img: slideImages14,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12327 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg"
        },
        {
          title: "Sandal  ",
          description:
            "Born on August 24, 2010, in the Agricultural Production Association named after Vakhitov, Kukmorsky District. Line Reflection Sovering. Kholmogorsky prody Tatarstan type",
          img: slideImages15,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12327 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg"
        },
        {
          title: "Sandal  ",
          description:
            "Born on August 24, 2010, in the Agricultural Production Association named after Vakhitov, Kukmorsky District. Line Reflection Sovering. Kholmogorsky prody Tatarstan type",
          img: slideImages16,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12327 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg"
        },
        {
          title: "Sandal  ",
          description:
            "Born on August 24, 2010, in the Agricultural Production Association named after Vakhitov, Kukmorsky District. Line Reflection Sovering. Kholmogorsky prody Tatarstan type",
          img: slideImages17,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12327 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg"
        },
        {
          title: "Sandal  ",
          description:
            "Born on August 24, 2010, in the Agricultural Production Association named after Vakhitov, Kukmorsky District. Line Reflection Sovering. Kholmogorsky prody Tatarstan type",
          img: slideImages18,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12327 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg"
        },
        {
          title: "Sandal  ",
          description:
            "Born on August 24, 2010, in the Agricultural Production Association named after Vakhitov, Kukmorsky District. Line Reflection Sovering. Kholmogorsky prody Tatarstan type",
          img: slideImages19,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12327 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg"
        },
        {
          title: "Sandal  ",
          description:
            "Born on August 24, 2010, in the Agricultural Production Association named after Vakhitov, Kukmorsky District. Line Reflection Sovering. Kholmogorsky prody Tatarstan type",
          img: slideImages20,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12327 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg"
        },
        {
          title: "Sandal  ",
          description:
            "Born on August 24, 2010, in the Agricultural Production Association named after Vakhitov, Kukmorsky District. Line Reflection Sovering. Kholmogorsky prody Tatarstan type",
          img: slideImages21,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12327 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg"
        },
        {
          title: "Sandal  ",
          description:
            "Born on August 24, 2010, in the Agricultural Production Association named after Vakhitov, Kukmorsky District. Line Reflection Sovering. Kholmogorsky prody Tatarstan type",
          img: slideImages22,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12327 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg"
        },
        {
          title: "Sandal  ",
          description:
            "Born on August 24, 2010, in the Agricultural Production Association named after Vakhitov, Kukmorsky District. Line Reflection Sovering. Kholmogorsky prody Tatarstan type",
          img: slideImages23,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12327 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg"
        },
        {
          title: "Sandal  ",
          description:
            "Born on August 24, 2010, in the Agricultural Production Association named after Vakhitov, Kukmorsky District. Line Reflection Sovering. Kholmogorsky prody Tatarstan type",
          img: slideImages24,
          zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12327 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg"
        },
        {
          title: "Sandal  ",
          description:
            "Born on August 24, 2010, in the Agricultural Production Association named after Vakhitov, Kukmorsky District. Line Reflection Sovering. Kholmogorsky prody Tatarstan type",
          img: slideImages25,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12327 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg"
        },
        {
          title: "Sandal  ",
          description:
            "Born on August 24, 2010, in the Agricultural Production Association named after Vakhitov, Kukmorsky District. Line Reflection Sovering. Kholmogorsky prody Tatarstan type",
          img: slideImages26,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12327 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg"
        },
        {
          title: "Sandal  ",
          description:
            "Born on August 24, 2010, in the Agricultural Production Association named after Vakhitov, Kukmorsky District. Line Reflection Sovering. Kholmogorsky prody Tatarstan type",
          img: slideImages27,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12327 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg"
        },
        {
          title: "Sandal  ",
          description:
            "Born on August 24, 2010, in the Agricultural Production Association named after Vakhitov, Kukmorsky District. Line Reflection Sovering. Kholmogorsky prody Tatarstan type",
          img: slideImages28,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12327 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg"
        },
        {
          title: "Sandal  ",
          description:
            "Born on August 24, 2010, in the Agricultural Production Association named after Vakhitov, Kukmorsky District. Line Reflection Sovering. Kholmogorsky prody Tatarstan type",
          img: slideImages29,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12327 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg"
        },
        {
          title: "Sandal  ",
          description:
            "Born on August 24, 2010, in the Agricultural Production Association named after Vakhitov, Kukmorsky District. Line Reflection Sovering. Kholmogorsky prody Tatarstan type",
          img: slideImages30,
             zoti : "Qora ola golshtin",
          birth_date : "13.01.2017",
          birth_place  : "Germaniya",
          desc_mum : "Suti, kg 12327 Sut yog`i 3,61 % [445] Sut oqsilii 3,35 % [413]",
          weight : "1080 kg"
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
  display: flex;
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
    flex-direction: column;
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
