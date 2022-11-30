<template>
  <article class="article">
    <h1 class="article__header">{{ article.title }}</h1>
    <p class="article__subtitle">
      <span class="article__type">{{ getType }}</span>{{article.date}}
    </p>
    <img class="article__img" :src="'http://localhost:8080/img/' + article.previewURL">
    <div class="div" v-html="article.content"></div>
  </article>
</template>

<script>
import axios from "axios";

export default {
  name: "PostView",
  data() {
    return {
      article: {}
    }
  },
  computed: {
    getType: function () {
      let type = "Другое"
      if (this.article.type === "news") {
        type = "Новости";
      }
      return type;
    }
  },
  created() {
    axios.get(`http://localhost:3000/posts/${this.$route.params.id}`,).then((res) => {
      // console.log(res.data)
      this.article = res.data;
    });
  }
}
</script>

<style scoped>
.article {
  background-color: black;
  border-radius: 20px;
  padding: 20px;
}

.article__header {
  font-size: 2.5rem;
}

.article__subtitle{
  margin-top: 15px;
  text-align: start;
  font-size: 0.8rem;
  font-weight: bold;
}

.article__type{
  border-radius: 5px;
  background-color: white;
  color: black;
  font-size: 1rem;
  font-weight: bold;
  text-transform: lowercase;
  line-height: 100%;
  padding: 3px 6px;
  z-index: 2;
  margin: 0 20px;
}

.article__img {
  width: calc(100% - 20px);
  border-radius: 5px;
  margin: 10px 20px 20px 20px;
}

.div >>> h2 {
  display: inline-block;
  margin-top: 40px;
  padding: 5px;
  border-radius: 10px;
  background-color: white;
  line-height: 100%;
  color: black;
}

.div >>> p {
  text-align: start;
  margin: 20px 0;
}

div >>> ul{
  text-align: start;
  margin: 20px;
}

div >>> ol{
  text-align: start;
  margin: 20px;
}
</style>