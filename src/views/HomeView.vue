<template>
  <article class="article" v-for="article in articles">
    <img class="img" :src="article.preview">
    <h1>{{ article.title }}</h1>
  </article>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from "axios"

export default {
  name: 'HomeView',
  data() {
    return {
      articles: []
    }
  },

  created() {
    axios.get("http://localhost:3000/posts").then((res) => {
      console.log(res.data)
      this.articles = res.data;
      console.log("deb", this.articles)
    });
    console.log(this.articles)
  }
}
</script>

<style scoped>
.article {
  height: 400px;
  background-color: black;
  border-radius: 20px;
  margin: 10px 0;

  display: flex;
  flex-direction: row;
  align-items: center;
}

.img{
  border-radius: 10px;
  height: 300px ;

}
</style>