<template>
  <div class="wrapper">
    <header ref="observer" class="header">
      <router-link to="/">
        <h1 class="header__head">
          Игровые новости
        </h1>
      </router-link>
    </header>
    <main class="main">
      <router-view/>
    </main>

    <footer class="footer">
      <router-link to="/about" class="footer__about-us">
        <h2>О нас</h2>
      </router-link>
      <div class="footer__links">
        <h2>Ссылки:</h2>
        <div class="footer__c-links">
          <a href="#" class="icon-button">
            <img src="@/assets/signal.svg">
          </a>
          <a href="#" class="icon-button">
            <img src="@/assets/slack.svg">
          </a>
          <a href="#" class="icon-button">
            <img src="@/assets/telegram.svg">
          </a>
          <a href="#" class="icon-button">
            <img src="@/assets/discord.svg">
          </a>
          <a href="#" class="icon-button">
            <img src="@/assets/xbox.svg">
          </a>
        </div>
      </div>
      <div class="footer__address">
        <h2>Контактная инофрмация:</h2>
        <ul class="footer__c-address">
          <li>
            <a href="https://yandex.ru/maps/213/moscow/house/prospekt_vernadskogo_78s2/Z04Ycg9hQEADQFtvfXp3eHlgYA==/?indoorLevel=1&ll=37.482424%2C55.667171&z=17">проспект
              Вернадского, 78с2, Москва, 119454</a>
          </li>
          <li>
            <a href="mailto:zabolotnikov.d.y@edu.mirea.ru">zabolotnikov.d.y@edu.mirea.ru</a>
          </li>
        </ul>
      </div>
      <p class="footer__root">copyright © 2021 Student MIREA. All Rights Reserved</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowLeftPanel: false
    }
  }
}
</script>

<style>

* {
  padding: 0;
  margin: 0;

  scrollbar-width: 4px;
  scrollbar-color: gray rgba(255, 255, 255, 0.00);
}

a {
  text-decoration: none;
  color: white;
}

*::-webkit-scrollbar {
  width: 4px;
}

*::-webkit-scrollbar-thumb {
  background-color: gray;
  border-radius: 150px;
  border: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;

  height: 100vh;
  overflow-y: scroll;
  background-image: url("@/assets/background.png");
  background-repeat: repeat;
  background-size: 800px;
}

.wrapper {
  height: max-content;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 60%;
  margin: 0 auto;
}

@media only screen and (max-width: 992px) {
  .wrapper {
    width: 100%;
  }
}

.header {
  grid-area: header;
  background: black;
  border-radius: 20px;
  padding: 10px 30px;
  text-align: start;
  font-weight: bold;
  text-transform: lowercase;
  margin: 10px;
}

.header__head {
  font-size: 2rem;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  transition: 0.3s all ease-out;
}

.header__head:hover {
  text-decoration: underline;
}

.header__head::before {
  content: '';
  background-image: url('@/assets/jellyfish.png');
  background-size: 43px;
  width: 40px;
  height: 40px;
  background-position: center;
  margin-right: 10px;
}

.main {
  grid-area: main;
  /*background: black;*/
  border-radius: 20px;
  flex-grow: 1;
  /*height: 200vh;*/
  margin: 0 10px;
}


/*==========================================>footer<==========================================*/

.footer {
  background-color: black;
  border-radius: 20px;

  display: grid;
  grid-template: "about-us links address" min-content
                  "root root root" min-content / auto auto auto;

  gap: 20px;
  padding: 20px;
  margin: 10px;
}

@media only screen and (max-width: 992px) {
  .footer {
    grid-template:
              "about-us" min-content
              "links" min-content
              "address" min-content
              "root" min-content / auto;
    padding: 15px;
    gap: 10px;
  }
}

.footer__about-us {
  grid-area: about-us;
  align-self: center;
  font-size: 2rem;
  color: white;
  text-decoration: underline;
  transition: 0.3s all ease-out;
}

@media only screen and (max-width: 992px) {
 .footer__about-us{
   font-size: 1rem;
   text-align: start;
 }
}

.footer__about-us:hover {
  color: #8318da;
}

.footer__links {
  grid-area: links;
  align-self: start;
  text-align: start;
}

.footer__c-links {
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 200px;
  align-items: center;
}

.footer__address {
  grid-area: address;
  align-self: start;
  text-align: start;
}

@media only screen and (max-width: 992px) {
  .footer__address li{
    margin-left: 40px;
  }
}

.footer__c-address li:nth-child(1) {
  list-style: url("@/assets/geo-alt-fill.svg");
  margin-bottom: 5px;
}

.footer__c-address li:nth-child(2) {
  list-style: url("@/assets/envelope-fill.svg");
}

.footer__root {
  grid-area: root;
  /*justify-self: center;*/
  align-self: center;

  padding: 4px 10px;
  background-color: white;
  color: black;
  border-radius: 10px;
}

/*==========================================>icon-button<==========================================*/

.icon-button {
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #fff;
  /*border: none;*/


  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
}


.icon-button * {
  z-index: 10;
}

.icon-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  background: linear-gradient(#853cda, #4954f3);
  transition: 1s ease all;
}

.icon-button:hover::before {
  height: 100%;
}
</style>
