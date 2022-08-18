<template>
  <section class="home usp">
    <div class="home usp__bgr"></div>
    <div class="home usp__toning"></div>
    <div class="home usp__wrapper">
      <h1 class="home usp__wrapper__title">
        Parent breeding enterprise «Elite»
      </h1>
      <p class="home usp__wrapper__text">
        Оne of the largest enterprises in Russia for the production and sale of
        the seed of manufacturing bulls - it has been going on since 1977 when
        the Kazan station of artificial insemination of farm animals had
        transformed into the Republican organization on artificial insemination
        of farm animals
      </p>
      <a class="call-order-form rounded-button">Get an offer</a>
    </div>
  </section>
  <!-- bannerdan keyingi section -->
  <section class="dark laboratory-services chess">
    <div class="laboratory-services chess__row">
      <div class="laboratory-services chess__row__info-container">
        <h3 class="laboratory-services chess__row__info-container__title">
          Laboratory for packing and freezing of seed
        </h3>
        <p class="laboratory-services chess__row__info-container__description">
          Since 2006, the breeding enterprise has frozen the seed of bulls using
          European technology, using special equipment of the 4th generation,
          produced in France by the IMV company. In parallel with it, the seed
          of the most highly valued bulls is packed
        </p>
        <a
          href="/en/services/laboratory-for-packing-and-freezing-of-seed?sid=FCWLX4fEtR"
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
        <h3
          class="left-side laboratory-services chess__row__info-container__title"
        >
          The feed quality control laboratory offers services based on the
          NutriOpt modular animal feeding system
        </h3>
        <p
          class="left-side laboratory-services chess__row__info-container__description"
        >
          The feed quality control laboratory offers services based on a modular
          system NutriOpt Animal Feeding, which combines accurate analyzes
          obtained on feed and forage analyzer "FOSS" NIRS DS 2500
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
          The laboratory for breeding milk quality controls includes: the
          CombiFoss ™ 7 system, which combines MilkoScan ™ 7 RM and Fossomatic ™
          7, which allows you to simultaneously examine fat, protein, casein,
          lactose, dry residue, urea
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

<style scoped>
.home.usp {
  margin-bottom: 30px;
  position: relative;
  align-items: flex-end;
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
  color: #0055e9;
  font-size: 35px;
  text-align: right;
}
.chess__row__info-container__description {
  text-align: right;
  margin: 25px 0;
}
p,
span {
  font-family: "sans-serif";
  line-height: 20px;
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
</style>

<script setup>
// const url = "../components/images/bgimg.jpg";
</script>
