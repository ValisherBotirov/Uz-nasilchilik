<template>
  <div class="blog">
    <h1 class="blog__title" data-aos="fade-left" data-aos-duration="1000">Maqolalar</h1>
    
    <div class="blog-cell">
      <div class="blog-card" v-for="item,index in data" :key="index" data-aos="fade-right" data-aos-duration="1600">
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
</template>

<script setup>
  import news1 from "../components/images/news1.jpg"
  import news2 from "../components/images/news2.jpg"
  import news3 from "../components/images/news3.jpg"
  import news4 from "../components/images/news4.png"
  import news5 from "../components/images/news5.jpg"
  import news6 from "../components/images/news6.jpg"
  import news7 from "../components/images/news7.png"
  import news8 from "../components/images/news8.jpg"
const data = [
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
  {
    id : 5, title : "Гўштдор қорамолчиликда “Абердин-ангуст” зотининг аҳамияти Chorvachilik va naslchilik ishi",date:"8/17/2022", description:"Today, on August 17, 2022, the XVI All-Russian competition of operators for artificial insemination of cattle is being held in the city of Izhevsk, Udmurt Republic.",
    img : news5,url:"https://slib.uz/ru/article/view?id=14565"
  },
  {
    id : 6, title : "ШВИЦ ВА ФЛЕКФИХ СИММЕНТАЛ ЗОТЛИ ЯХШИЛОВЧИ БУҚАЛАР НАСЛИДАН ФОЙДАЛАНИШ ВА УЛАРНИНГ НАСЛЧИЛИК БАЗАСИНИ МУСТАХКАМЛАШ",date:"8/17/2022", description:"Today, on August 17, 2022, the XVI All-Russian competition of operators for artificial insemination of cattle is being held in the city of Izhevsk, Udmurt Republic.",
    img : news6,url:"https://slib.uz/ru/article/view?id=14306"

  },
  {
    id : 7, title : "O‘znaslchilik”давлат корхонасида “Бушуев” зотли наслли буқаларнинг наслдорлик ва экстеръер кўрсаткичлари.“Chorvachilik va naslchilik ishi”",date:"8/17/2022", description:"Today, on August 17, 2022, the XVI All-Russian competition of operators for artificial insemination of cattle is being held in the city of Izhevsk, Udmurt Republic.",
    img : news7,url:"https://slib.uz/ru/article/view?id=14535"
  },
  {
    id : 8, title : "“O‘ZNASLCHILIK” ДАВЛАТ КОРХОНАСИДАГИ АНГУС ЗОТЛИ НАСЛЛ И БУҚАЛАРНИНГ НАСЛДОРЛИК ИНДЕК СЛАРИ ВА ЭКСТЕРЪЕР КЎРСАТКИЧЛАРИ",date:"8/17/2022", description:"Today, on August 17, 2022, the XVI All-Russian competition of operators for artificial insemination of cattle is being held in the city of Izhevsk, Udmurt Republic.",
    img : news8,url:"https://slib.uz/ru/article/view?id=20249"
  },
]
</script>

<style scoped>
  a{
    text-decoration: none;
  }
  .blog{
    width: 90%;
    margin: 20px auto;
    margin-bottom: 50px;

  }
  .blog__title{
    color: #0055e9;
    font-size: 35px;
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