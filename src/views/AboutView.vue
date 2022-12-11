<template>
  <div class="about">
    <img class="img" src="@/assets/jellyfish.png" alt="медуза">
    <p class=description>Интернет-ресурс "Игровые новости" — это ресурс, который содержит новости про компьютерные игры
      и всё, что связано с ними</p>
  </div>
  <router-link to="/">
    <div class="article__back">Назад</div>
  </router-link>
</template>

<style scoped>
.about {
  display: flex;
  flex-direction: row;
  background-color: black;
  border-radius: 20px;
  padding: 50px 10px;
}

@media only screen and (max-width: 992px) {
  .about {
    display: flex;
    flex-direction: column;
    padding: 50px 20px;
  }
}


.img {
  height: 650px;
  align-self: center;
}

@media only screen and (max-width: 992px) {
  .img {
    width: 100%;
    height: auto;
  }
}

.description {
  overflow-wrap: break-word;
  font-size: 3.5rem;
  text-align: start;
  line-height: 100%;
}

@media only screen and (max-width: 992px) {
  .description {
    font-size: 2rem;
  }
}

.article__back {
  padding: 20px;
  border-radius: 20px;
  margin-top: 10px;
  background-color: black;

  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  transition: 1s all ease-out;
}

.article__back:hover {
  color: black;
  background-color: white;
}

</style>