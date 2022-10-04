<template>
  <footer id="footer">
    <div class="footer">
    <div class="top footer__row">
      <div class="left footer__row__side">
        <a href="" class="footer__row__side__logo-container"
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
    <div class="footer-middle">
      <div class="footer-middle_box">
        <h3 class="footer-title">O'znaslchilik davlat korxonasi</h3>
        <p class="footer-discription">O'zbekiston bo'ylab yuqori genotipli chuqur muzlatilgan naslli buqalar urug'larni yetqazib beradi</p>
        <p class="footer-location"><b>Manzilimiz : </b> Toshkent shahar Mirzo Ulug'bek tumani 37-A uy</p>
        <p class="footer-phone">
          <b>Telefon : </b>&nbsp; +998 (91) 162 43 23
        </p>
        <a href="#" class="footer-email">uznasilchilik.uz</a>
      </div>
      <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d937.2850918288065!2d69.41971516637498!3d41.332797179464926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef71abb05127b%3A0x3b94b6d1dda30da4!2sO&#39;znaslchilik!5e0!3m2!1suz!2s!4v1664875200083!5m2!1suz!2s"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="map-img"></iframe>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="footer-bottom_left">
        2022 © Uznasilchilik
      </p>
      <div class="footer-bottom_right">
        <a href="https://www.instagram.com/valisher.botirov/" class="footer__row__side__copyright">Developed by Valisher Botirov and Shokhruh Soatov</a>
      </div>
    </div>
  </div>
  </footer>
</template>

<style scoped>
  a{
    text-decoration: none;
  }
.footer-icon {
  text-decoration: none;
  color: white;
  font-size: 30px;
}

#footer {
  padding: 16px 0;
  background-color: #2432d4;
}

.footer{
  width: 90%;
 margin:0 auto;
}
.footer__row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
}

.footer__row__side.left {
  align-items: flex-start;
  gap: 0.3rem;
}

.footer__row__side.social-links {
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
}
.footer__row__side.social-links a {
  transition: all 0.5s;
  font-size: 24px;
}
.footer__row__side.social-links a:hover {
  transform: translateY(-6px) scale(1.3);
  
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
  align-items: center;
  color: #fff;
  margin-top: 20px;
  margin-bottom: 10px;

}

.footer__row__side__logo-container__logo {
  width: 100px;
  border-radius: 50%;
}
.footer__row__side__copyright {
  color: #fff;
  font-family: "Museo Bold";
  transition: all 0.7s;
}

.footer-middle_box{
  color: #fff;
  font-family: 'Museo Bold';
}
.footer-email{
  color: #fff;
}
.footer-title{
  padding: 6px 0;
}

.footer-phone:hover,.footer-email:hover,.footer-location:hover{
  color: rgb(136, 130, 130);
}
.footer__row__side__copyright:hover{
  color: rgb(136, 130, 130);
  transform: scale(1.2)
}
.footer-middle{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.map-img{
  height: 200px;
  width: 400px;
  object-fit: cover;
}
/* responive */
@media (max-width: 768px){
  .footer-bottom{
    display: flex;
    flex-direction: column-reverse;
    text-align: center;
    justify-content: start;
    gap: 5px;
  }
  .footer-middle_box{
    text-align: center;
  } 
}
@media (max-width:886px){
  .footer-middle{
    flex-direction: column;
  }
  .map{
    width: 100%;
    margin-top: 15px;
  }
  .map-img{
    width: 100%;
  }
}
</style>
