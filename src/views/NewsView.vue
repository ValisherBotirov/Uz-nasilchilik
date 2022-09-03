<template>
  <div class="blog">
    <h1 class="blog__title">News</h1>
    <div class="blog__cell" v-for="item,index in data" :key="index">
      <img :src="item.img" class="blog__cell__img-container"/>
      <a href="#" class="blog__cell__info"><span class="blog__cell__info__date">{{item.date}}</span>
        <h3 class="blog__cell__info__title">{{item.title}}
        </h3>
        <p class="blog__cell__info__description">{{item.description}}</p>
      </a>
    </div>
  </div>
</template>

<script setup>
const data = [
  {
    id : 1, title : "XVI All-Russian competition of operators for artificial insemination of cattle",date:"8/17/2022", description:"Today, on August 17, 2022, the XVI All-Russian competition of operators for artificial insemination of cattle is being held in the city of Izhevsk, Udmurt Republic.",
    img : "http://api.elitaplem.ru/api/files/b423mJJsd4v54v/a11b21d4e78eefcfc446e84e31b7fc0b_1.jpeg"
  },
  {
    id : 2, title : "XVI All-Russian competition of operators for artificial insemination of cattle",date:"8/17/2022", description:"Today, on August 17, 2022, the XVI All-Russian competition of operators for artificial insemination of cattle is being held in the city of Izhevsk, Udmurt Republic.",
    img : "http://api.elitaplem.ru/api/files/b423mJJsd4v54v/62eee55f5ce5e9535cb6f013aeed5f0c_1.jpeg"
  },
  {
    id : 3, title : "XVI All-Russian competition of operators for artificial insemination of cattle",date:"8/17/2022", description:"Today, on August 17, 2022, the XVI All-Russian competition of operators for artificial insemination of cattle is being held in the city of Izhevsk, Udmurt Republic.",
    img : "http://api.elitaplem.ru/api/files/b423mJJsd4v54v/2728f918d3b2f2c76a844866717fdc34_1.jpeg"
  },
  {
    id : 4, title : "XVI All-Russian competition of operators for artificial insemination of cattle",date:"8/17/2022", description:"Today, on August 17, 2022, the XVI All-Russian competition of operators for artificial insemination of cattle is being held in the city of Izhevsk, Udmurt Republic.",
    img : "http://api.elitaplem.ru/api/files/b423mJJsd4v54v/a11b21d4e78eefcfc446e84e31b7fc0b_1.jpeg"
  },
  {
    id : 5, title : "XVI All-Russian competition of operators for artificial insemination of cattle",date:"8/17/2022", description:"Today, on August 17, 2022, the XVI All-Russian competition of operators for artificial insemination of cattle is being held in the city of Izhevsk, Udmurt Republic.",
    img : "http://api.elitaplem.ru/api/files/b423mJJsd4v54v/a11b21d4e78eefcfc446e84e31b7fc0b_1.jpeg"
  },
  {
    id : 6, title : "XVI All-Russian competition of operators for artificial insemination of cattle",date:"8/17/2022", description:"Today, on August 17, 2022, the XVI All-Russian competition of operators for artificial insemination of cattle is being held in the city of Izhevsk, Udmurt Republic.",
    img : "http://api.elitaplem.ru/api/files/b423mJJsd4v54v/a11b21d4e78eefcfc446e84e31b7fc0b_1.jpeg"
  },
  {
    id : 7, title : "XVI All-Russian competition of operators for artificial insemination of cattle",date:"8/17/2022", description:"Today, on August 17, 2022, the XVI All-Russian competition of operators for artificial insemination of cattle is being held in the city of Izhevsk, Udmurt Republic.",
    img : "http://api.elitaplem.ru/api/files/b423mJJsd4v54v/4c60cf422ef3b767f1b271508841422b_1.jpeg"
  },
]
</script>

<style scoped>
  a{
    text-decoration: none;
  }
.blog {
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
    row-gap: 20px;
}
.blog__title {
    color: #0055e9;
    font-size: 35px;
    width: 100%;
}
.blog__cell {
    width: calc(25% - 40px);
    margin-right: 40px;
}
.blog__cell__img-container {
    width: 100%;
    border-radius: 10px;
    height: 350px;
    object-fit: cover;
    background-size: cover;
    background-repeat: no-repeat;
}
.blog__cell__info {
    width: 270px;
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
</style>