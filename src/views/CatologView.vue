<template>
  <div class="catalogue">
    <h1 class="catalogue__title">Catalogue</h1>
    <div class="catalogue__cell" v-for="item,index in data" :key="index">
      <div class="catalogue__cell__left">
        <img :src="item.img" class="catalogue__cell__left__img">
      </div>
      <div class="catalogue__cell__right">
        <h3 class="catalogue__cell__right__title">{{item.title}} №{{item.index}}</h3>
        <p class="catalogue__cell__right__description">{{item.description}}</p>
      </div>
    </div>
   
  </div>
</template>

<script setup>
const data = [
  {
    id : 1 , title : "Sapphire ", index : "1",description : "Born on 10/17/10 in Russia. Line M. Chieftain. Kholmogory breed of Tatarstan type. Father Lom 826 Russian bull. Mother's productivity per lactation 7969 kg of milk. Fat content 3.8%, protein 3.30%",img : "https://api.elitaplem.ru/api/files/b423mJJsd4v54v/b4a6770b69ff2ff3b910da3d25753bfb_Saphir.jpg"
  },
  {
    id : 2 , title : "Verkh  ", index : "2",description : "The Kholmogorsk breed, of Tatarstan type was born on 05/08/13 in Russia. Hope line. Father Pegasus 1210 Russian bull Mothers productivity for lactation of 8300 kg of milk. Fat content 3.82%, protein 3.30%",img:"https://api.elitaplem.ru/api/files/b423mJJsd4v54v/13415d005abb8d4dbc23181c8adc82d2_Verh.jpg"
  },
  {
    id : 3 , title : "Sandal  ", index : "3",description : "Born on August 24, 2010, in the Agricultural Production Association named after Vakhitov, Kukmorsky District. Line Reflection Sovering. Kholmogorsky prody Tatarstan type",img:"https://api.elitaplem.ru/api/files/b423mJJsd4v54v/4411669ee26022dc722cf168b2911a4c_Sandal.jpg"
  },
  {
    id : 4 , title : "Sandal  ", index : "4",description : "Born on August 24, 2010, in the Agricultural Production Association named after Vakhitov, Kukmorsky District. Line Reflection Sovering. Kholmogorsky prody Tatarstan type",img:"https://api.elitaplem.ru/api/files/b423mJJsd4v54v/8c6f762c756122d39d0a44b9122681bb_Mif.jpg"
  },
  {
    id : 5 , title : "Sandal  ", index : "5",description : "Born on August 24, 2010, in the Agricultural Production Association named after Vakhitov, Kukmorsky District. Line Reflection Sovering. Kholmogorsky prody Tatarstan type",img:"https://api.elitaplem.ru/api/files/b423mJJsd4v54v/222d69465a0640a730f13162b35d3896_muskat.jpg"
  },
  {
    id : 6 , title : "Sandal  ", index : "6",description : "Born on August 24, 2010, in the Agricultural Production Association named after Vakhitov, Kukmorsky District. Line Reflection Sovering. Kholmogorsky prody Tatarstan type",img:"https://api.elitaplem.ru/api/files/b423mJJsd4v54v/eead6b65c6019744d8a9b9bb2d85a958_ugolok.jpg"
  },

]
</script>

<style scoped>
  

.catalogue__title {
    color: #0055e9;
    font-size: 35px;
    width: 100%;
}
.catalogue {
    padding: 15px 45px;
    padding-bottom: 130px;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    align-items: flex-start;
    width: calc(100% - 90px);
    justify-content: flex-start;
}
.catalogue__cell {
    max-height: 180px;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
    align-items: flex-start;
    width: 50%;
}
.catalogue__cell__left {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 320px;
}
.catalogue__cell__left__img {
    width: 320px;
    height: 180px;
}
img {
    border-radius: 10px;
}
.catalogue__cell__right {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc(100% - 320px);
    align-items: flex-start;
    margin-left: 20px;
}
.catalogue__cell__right__title {
    transition: all .3s;
    margin: 0;
    text-align: left;
    width: 90%;
    word-break: break-word;
    margin-bottom: 5px;
    color: #0055e9;
    font-family: 'Times New Roman', Times, serif;
}
.catalogue__cell__right__description {
    word-break: break-word;
    width: 90%;
    margin: 0;
    text-align: left;
    color: #000;
}

p, span {
    font-family: 'Times New Roman', Times, serif;
    line-height: 25px;
}
</style>