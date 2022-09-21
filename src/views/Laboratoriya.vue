<template>
  <div class="container">
    <h2 class="title">Laboratoriya</h2>
    <section class="dark laboratory-services chess container">
    <div class="laboratory-services chess__row">
      <div class="laboratory-services chess__row__info-container">
        <h4 class="laboratory-services chess__row__info-container__title">
          AndroVision: Kompyuter va monitor bilan CASA dasturi
        </h4>
        <p class="laboratory-services chess__row__info-container__description">
          2022-yildan buyon naslchilik korxonasi MINITUBE kompaniyasi tomonidan Germaniyada ishlab chiqarilgan Androvision maxsus avtomatlashtirilgan texnikadan foydalangan holda buqalar urug‘ini kompleks tahlil qilib kelmoqda. U urug’ning nafaqat harakatchanlik, kontsentratsiya va morfologiyasini an’anaviy tahlillarini, balki spermatozoidlarning funksionalligini baholashni ham ta'minlaydi.
        </p>
        <a
          href="#"
          class="rounded-button blue laboratory-services chess__row__info-container__more"
          >More</a
        >
      </div>
      <div class="laboratory-services chess__row__img-container">
        <img
          src="../components/images/lab1.png"
          alt="Лаборатория иммуногенетической экспертизы"
          class="laboratory-services chess__row__img-container__img"
        />
      </div>
    </div>
    <div class="left-side laboratory-services chess__row">
      <div class="left-side laboratory-services chess__row__info-container">
        <h4 class="left-side laboratory-services chess__row__info-container__title">
          MiniJet printeri o’rnatilgan ko’p funksiyali  MPP Uno uskunasi yordamida qadoqlash va markirovkalash
        </h4>
        <p class="left-side laboratory-services chess__row__info-container__description">
          2006-yildan buyon naslchilik korxonasida urug‘larni qadoqlash ishlari Germaniyada ishlab chiqarilgan, zamonaviy MINITUBE uskunasi yordamida amalga oshirilmoqda. Bu uskuna urug‘ni anaʼnaviy granula shaklidan anchagina avfzalliklarga ega bo‘lgan payeta shaklida qadoqlaydi va markirovka qiladi.
        </p>
        <a
          href="#"
          class="left-side rounded-button blue laboratory-services chess__row__info-container__more"
          >More</a
        >
      </div>
      <div class="left-side laboratory-services chess__row__img-container">
        <img
          src="../components/images/lab2.png"
          alt="Feed Quality Control Laboratory"
          class="left-side laboratory-services chess__row__img-container__img"
        />
      </div>
    </div>
    <div class="laboratory-services chess__row">
      <div class="laboratory-services chess__row__info-container">
        <h4 class="laboratory-services chess__row__info-container__title">
          Urug’larni sifatli saqlash
        </h4>
        <p class="laboratory-services chess__row__info-container__description">
          Naslchilik korxonasida nasldor buqa urug’larini uzoq muddat saqlash maqsadida… uskunalarida -196C gradus haroratda chuqur muzlatish amalga oshiriladi.
        </p>
        <a
          href="#"
          class="rounded-button blue laboratory-services chess__row__info-container__more"
          >More</a
        >
      </div>
      <div class="laboratory-services chess__row__img-container">
        <img
          src="../components/images/lab3.jpg"
          alt="Laboratory of Milk Quality Selection Control"
          class="laboratory-services chess__row__img-container__img"
        />
      </div>
    </div>
    <div class="left-side laboratory-services chess__row">
      <div class="left-side laboratory-services chess__row__info-container">
        <h4 class="left-side laboratory-services chess__row__info-container__title">
          
    Suyuq azot bilan taminlash

        </h4>
        <p class="left-side laboratory-services chess__row__info-container__description">
          Suniy urug’lantirish bilan shug’ullanuvchi sub’yektlarni suyuq azot bilan uzluksiz taminlash maqsadida naslchilik korxonasining 4 tonnalik maxsus kiriogen idishi o’rnatilgan ISUZU rusumli avtomobil vositasi xizmat qiladi.00
        </p>
        <a
          href="#"
          class="left-side rounded-button blue laboratory-services chess__row__info-container__more"
          >More</a
        >
      </div>
      <div class="left-side laboratory-services chess__row__img-container">
        <img
          src="../components/images/lab4.jpg"
          alt="Feed Quality Control Laboratory"
          class="left-side laboratory-services chess__row__img-container__img"
        />
      </div>
    </div>
  </section>
  </div>
</template>

<style scoped>
  .container{
    width: 90%;
    margin: 0 auto;
  }
  
  .title{
    color: #0055e9;
    font-family: "Museo Bold";
    margin-top: 40px;
    padding: 0 20px;
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