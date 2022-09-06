<template>
  <footer class="footer">
    <div class="top footer__row">
      <div class="left footer__row__side">
        <a href="/en" class="footer__row__side__logo-container"
          ><img
            src="./icons/logo.png"
            class="footer__row__side__logo-container__logo"
        /></a>
      </div>
      <div class="social-links right footer__row__side">
        <a href="https://t.me/uznasl" class="footer-icon"><i class="fa-brands fa-telegram"></i></a>
        <a href="https://www.instagram.com/uznaslchilik_chorva/" class="footer-icon"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://www.facebook.com/uznaslchilik" class="footer-icon"><i class="fa-brands fa-facebook"></i></a>
        <a href="https://www.youtube.com/channel/UCXLkF2IQQrjotcsm5iSmj1g" class="footer-icon"><i class="fa-brands fa-youtube"></i></a>
      </div>
    </div>
    <div class="middle footer__row">
      <div class="left footer__row__side">
        <span class="footer__row__side__location"
          >422701, Republic of Tatarstan, Vysokogorsky district, village of
          Vysokaya Gora</span
        ><span class="footer__row__side__street">Iske-Kazanskaya str. 2a</span
        ><a href="tel:+78436531530" class="footer__row__side__phone"
          >+7 (843) 653-15-30 (Многоканальный)</a
        ><a href="tel:88005507754" class="footer__row__side__phone hot">
          <span>Hot line</span
          ><span>8 (800) 550-77-54 (toll-free in Russia)</span></a
        ><a href="#" class="footer__row__side__email">info@elitaplem.ru</a>
      </div>
      <div class="right footer__row__side"></div>
    </div>
    <div class="bottom footer__row">
      <div class="left footer__row__side">
        <span class="footer__row__side__copyright">2022 © Uznasilchilik</span>
      </div>
      <div class="right footer__row__side">
        <a href="#" class="footer__row__side__copyright"
          >The website is developed by Futureinapps</a
        >
      </div>
    </div>
  </footer>
</template>

<style scoped>
  .footer-icon{
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
  width: calc(100% - 90px);
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
  gap: 30px;
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
  /* flex-direction: column; */
  align-items: flex-start;
  /* justify-content: center; */
  /* text-align: center; */
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
}
</style>
