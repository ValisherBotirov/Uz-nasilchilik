<template>
  <footer class="footer">
    <div class="top footer__row">
      <div class="left footer__row__side">
        <a href="/en" class="footer__row__side__logo-container"
          ><img src="./icons/logo.png" class="footer__row__side__logo-container__logo"
        /></a>
      </div>
      <div class="social-links right footer__row__side">
        <a href="https://t.me/uznasl" class="footer-icon"><i class="fa-brands fa-telegram"></i></a>
        <a href="https://www.instagram.com/uznaslchilik_chorva/" class="footer-icon"
          ><i class="fa-brands fa-instagram"></i
        ></a>
        <a href="https://www.facebook.com/uznaslchilik" class="footer-icon"><i class="fa-brands fa-facebook"></i></a>
        <a href="https://www.youtube.com/channel/UCXLkF2IQQrjotcsm5iSmj1g" class="footer-icon"
          ><i class="fa-brands fa-youtube"></i
        ></a>
      </div>
    </div>
    <div class="middle footer__row">
      <div class="left footer__row__side">
        <span class="footer__row__side__location"
          ><b>O'znaslchilik davlat korxonasi</b></span
        ><span class="footer__row__side__street">O'zbekiston bo'ylab yuqori genotipli chuqur muzlatilgan naslli buqalar urug'larni yetqazib beradi  • </span
        ><p class="footer__row__side__phone"><b>Manzilimiz : </b> Toshkent shahar Mirzo Ulug'bek tumani 37-A uy</p>
        <p class="footer__row__side__phone hot">
          <b>Telefon : </b>&nbsp; +998 (90) 915 25 26
        </p>
        <a href="#" class="footer__row__side__email">uznasilchilik.uz</a>
      </div>
      <div class="right footer__row__side"></div>
    </div>
    <div class="footer-bottom">
      <p class="footer-bottom_left">
        2022 © Uznasilchilik
      </p>
      <div class="footer-bottom_right">
        <a href="#" class="footer__row__side__copyright">Developed by Valisher Botirov and Bekzod Baratov</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-icon {
  text-decoration: none;
  color: white;
  font-size: 30px;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px 45px;
  background-color: #2432d4;
}

.footer__row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
}
.footer__row.middle {
  color: #fff;
  margin: 35px 0;
}
.footer__row.middle a,
.footer__row.middle span {
  margin-bottom: 5px;
}
.footer__row__side.left {
  align-items: flex-start;
  gap: 0.3rem;
}

.footer__row__side {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
}
.footer__row__side.right {
  align-items: flex-end;
  text-align: right;
}

.footer__row__side.social-links {
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
}
.footer__row__side.social-links a {
  font-size: 24px;
}
.footer__row__side.social-links a:hover {
  transform: scale(1.1);
}
.footer__row__side {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
}
.footer__row__side__slink {
  margin-left: 15px;
  transition: 0.3s all;
}
.footer-bottom{
  width: 100%;
  display: flex;
  justify-content: space-between;
 color: #fff;

}

.footer__row.middle a,
.footer__row.middle span {
  margin-bottom: 5px;
}
.footer__row__side__email,
.footer__row__side__phone {
  color: #fff;
}
.footer__row__side__email.hot,
.footer__row__side__phone.hot {
  display: inline-flex;
  align-items: flex-start;
  
}

.footer__row__side__email,
.footer__row__side__phone {
  color: #fff;
}
.footer__row.middle a,
.footer__row.middle span {
  margin-bottom: 5px;
}

.footer__row__side__email,
.footer__row__side__phone {
  color: #fff;
}
a {
  text-decoration: none;
  font-family: "regular";
  transition: 0.3s color;
}
.footer__row__side__logo-container__logo {
  width: 100px;
  border-radius: 50%;
}
.footer__row__side__copyright {
  color: #fff;
  font-family: "regular";
}
/* responive */
@media (max-width: 768px){
  .footer-bottom{
    display: flex;
    flex-direction: column-reverse;
    text-align: center;
    justify-content: start;
  }
  
}
</style>
