<template>
  <section class="about-us usp">
    <div class="about-us usp__bgr"></div>
    <div class="about-us usp__toning"></div>
    <div class="about-us usp__wrapper">
      <h1 class="about-us usp__wrapper__title">Kompaniya haqida</h1>
      <p class="about-us usp__wrapper__text">
        1954-yili 
      </p>
    </div>
  </section>
  <!-- two section -->
  <section class="dark about-banner chess">
    <div class="chess__row">
      <div class="chess__row__info-container">
        <h3 class="chess__row__info-container__title">
          High performance
        </h3>
        <p class="chess__row__info-container__description">
          Over the years, more than 30 million doses of semen have been frozen,
          of which more than 3.5 million from improver bulls, an estimated 735
          heads of manufacturing bulls, 49% of which are recognized as
          improvers. Since 2006, the pedigree enterprise has frozen the seed of
          bulls according to European technology, using the equipment of the
          French company IMV technologies of the 4th generation
        </p>
      </div>
      <div class="chess__row__img-container">
        <img
          src="../components/images/bull2.jpg"
          alt=""
          class="laboratory-services chess__row__img-container__img"
        />
      </div>
    </div>
    <div class="left-side  chess__row">
      <div class="chess__row__info-container">
        <h3 class="chess__row__info-container__title">
          Special approach
        </h3>
        <p class="chess__row__info-container__description">
          For beef cattle, the company is carrying out breeding work aimed at
          increasing the growth rate and the quality of muscled carcass (muscled
          hind legs to the hock or the carpal joint, well-developed dewlap,
          pronounced ham, and long lumbar part)
        </p>
      </div>
      <div class="chess__row__img-container">
        <img
          src="../components/images/bull.jpg"
          alt=""
          class="aboratory-services chess__row__img-container__img"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

  .about-banner{
    width: 90%;
    margin : 0 auto;
  }
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
element.style {
  background: url(../components/images/about-bg.jpg) left center no-repeat;
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
  width: 500px;
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

.left-side.chess__row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
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
.chess__row__img-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-content: flex-end;
  width: 40%;
  flex-grow: 1;
}
.left-side.chess__row__info-container {
  padding-right: 150px;
  padding-left: 35px;
  align-items: flex-start;
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
  font-family: Museo Regular;
  line-height: 20px;
}
.chess__row__img-container__img {
  width: 100%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
img {
  border-radius: 10px;
}

@media (max-width:930px){
  .chess__row {
    display: flex;
    flex-direction: column-reverse;
  }
  .chess__row__img-container__img , .chess__row__img-container{
    width: 100%;
    object-fit: cover;
  }
  .chess__row__info-container{
    padding: 0;
    width: 100%;
    align-items: flex-start;
  }
  .chess__row__info-container__description{
    text-align: left;
    width: 100%;
    margin: 10px 0; 
  }
  .chess__row__info-container__title{
    margin-top: 10px;
  }
  .left-side{
    display: flex !important;
    flex-direction: column-reverse !important;
  } 
}

</style>
