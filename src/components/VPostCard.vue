<template>
  <article class="article">
    <div class="article__c-img">
      <div class="article__type">{{ getType }}</div>
      <img class="article__img" :src="'http://localhost:8080/img/' + previewURL">
    </div>
    <h2 class="article__header">{{ title }}</h2>
    <p class="article__info">{{ date }}</p>
  </article>
</template>

<script>
export default {
  name: "VPostCard",
  props: {
    id: Number,
    title: String,
    previewURL: String,
    date: String,
    type: String
  },
  computed: {
    getType: function () {
      let type = "Другое"
      if (this.type === "news") {
        type = "Новости";
      }
      return type;
    }
  }
}
</script>

<style scoped>

.article {
  border-radius: 20px;
  padding: 10px;
  background-color: black;
  display: grid;
  grid-template:
      "pic title" 1fr
      "pic subtitle" 1fr
      "pic info" 1fr / 400px 1fr;
  row-gap: 10px;
  column-gap: 20px;
  transition: 0.5s ease-out;
}

.article:hover .article__img {
  transform: scale(1.04, 1.04);
}

.article__c-img {
  position: relative;
  grid-area: pic;
  width: 400px;
  height: 225px;
  border-radius: 10px;
  overflow: hidden;
}

.article__type{
  position: absolute;
  border-radius: 5px;
  background-color: black;
  font-weight: bold;
  text-transform: lowercase;
  line-height: 100%;
  padding: 3px 6px;
  margin: 15px;
  z-index: 2;
}

.article__img {
  width: 400px;
  height: 225px;
  transition: 0.5s ease-out;
}

.article__header {
  grid-area: title;
  text-align: start;
}

.article__info {
  grid-area: info;
  align-self: end;
  text-align: end;
}

</style>