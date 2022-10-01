<template>
  <section class="about-us usp">
    <div class="about-us usp__bgr"></div>
    <div class="about-us usp__toning"></div>
    <div class="about-us usp__wrapper">
      <h1 class="about-us usp__wrapper__title" data-aos="fade-left" data-aos-duration="1200">Korxona haqida</h1>
      <p class="about-us usp__wrapper__text" data-aos="fade-left" data-aos-duration="1800">
Naslli buqalar soni 1960 yilda 13 boshga, 1968
yilda 33 boshga yetkazilgan.
Korxona nomi 1989 yil 10 noyabrdan boshlab mollarni sunʼiy urugʼlantirish va naslchilik boʼyicha ishlab chiqarish “Oʼznaslchilik” korxonasi
 deb yuritila boshlangan.

      </p>
    </div>
  </section>
  <!-- two section -->
  <section class="about-banner">
    <h1 class="title" data-aos="fade-left" data-aos-duration="500">Suniy urug'lantirish - bu sizning yutug'ingiz</h1>
    <div class="banner-left">
      <div class="banner-text" >
        <p class="position" data-aos="fade-right" data-aos-duration="1100">O'znasilchilik davlat korxonasi direktori</p>
        <h3 class="name" data-aos="fade-right" data-aos-duration="1200">Mamatqulov Olimjon Eshonqulov</h3>
      </div>
      <div class="banner-img" data-aos="fade-left" data-aos-duration="1100">
        <img src="../components/images/direktor.jpg" alt="iamges" class="img-item">
      </div>
    </div>
    <div class="banner-right">
        <div class="banner-img" data-aos="fade-right" data-aos-duration="1300">
        <img src="../components/images/ziyodulla.jpg" alt="iamges" class="img-item">
      </div>
         <div class="banner-text_right">
        <p class="position" data-aos="fade-left" data-aos-duration="1000">O'znasilchilik davlat korxonasi bosh zootexnigi</p>
        <h3 class="name" data-aos="fade-left" data-aos-duration="1100">Pirnazarova Ziyodulla Maxmado'stovich</h3>
      </div>
    
    </div>
   <div class="banner-left">
      <div class="banner-text">
        <p class="position" data-aos="fade-right" data-aos-duration="1100">O'znasilchilik davlat korxonasi bosh zootexnigi</p>
        <h3 class="name" data-aos="fade-right" data-aos-duration="1200">Mamtaliyev Sherzodbek Sodiqjonovich</h3>
      </div>
      <div class="banner-img" data-aos="fade-left" data-aos-duration="1100">
        <img src="../components/images/sherzod.jpg" alt="iamges" class="img-item">
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

 
.about-us.usp {
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
  background: url(../components/images/about-bg.jpg) center center no-repeat;
  background-size: cover !important;
  overflow: hidden;
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
  width: 600px;
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

/* teo section */
.title{
  font-family: "Museo Bold";
  font-size: 40px;
  margin-bottom: 80px;
}

 .about-banner{
    width: 70%;
    margin : 0 auto;
    margin-bottom: 50px;
  }

.banner-left{
  display: flex;
  align-items: center;
  justify-content: flex-end; 
  gap: 25px;
  margin: 25px 0;
}
.banner-right{
  display: flex;
  align-items: center;
  justify-content: flex-start; 
  gap: 25px;
  margin: 25px 0;
}

.banner-text{
  text-align: right;
  width: 25%;
}
.banner-text_right{
  text-align: left;
  width: 25%;
}

.img-item{
  object-fit: cover;
  height: 300px;
}

.position{
  font-size: 16px;
  font-weight: 600;
  font-family: "system-ui";
}
.name{
  font-size: 20px;
  font-weight: 700;
  font-family: "Roboto";
  margin-top: 10px;
}



@media (max-width : 1000px){
  .banner-text,.banner-text_right{
    width: 40%;
  }
  .title{
    font-size : 36px;
    margin-bottom: 40px;
  }
}
@media (max-width : 720px){
.banner-text,.banner-text_right{
    width: 100%;
  }
    .banner-left{
    flex-direction: column-reverse;
    justify-content: center;
   
  }
  .banner-right{
    flex-direction: column;
  }
  .img-item{
    width: 100%;
  }
  .banner-text ,.banner-text_right{
    text-align: center;
  }
  .title{
    font-size : 20px;
    margin-bottom: 10px;
  }
}
@media (max-width:600px){
  .usp__wrapper{
    width: auto;
  }

}

</style>
