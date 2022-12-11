<template>
  <div class="container">
    <div class="menu">
      <input class="elements" type="text" placeholder="Поиск" v-model="search">
      <select class="elements" v-model="selected">
        <option value="pop" selected>По популярности</option>
        <option value="alphabet">По алфавиту</option>
        <option value="date">По дате</option>
      </select>
      <button class="button" @click="onClickReverse">
        <img src="@/assets/arrow-down-up.svg">
      </button>
    </div>
    <div class="posts">
      <v-post-card
          class="margin"
          v-for="article in getPosts"
          v-bind="article"
          :key="article.id"
          @click="$router.push(`/posts/${article.id}`)"
      />
      <p v-if="getPosts.length === 0" class="no-posts">
        Нет статей
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import axios from "axios"
import VPostCard from "@/components/VPostCard";
import {posts} from "@/data";

export default {
  name: 'HomeView',
  components: {VPostCard},
  data() {
    return {
      articles: [],
      selected: "pop",
      search: ""
    }
  },
  methods: {
    onClickReverse() {
      this.articles.reverse()
    }
  },
  computed: {
    getPosts() {
      return this.articles.filter(post => {
        return post.title.includes(this.search) || post.content.includes(this.search);
      });
    }
  },
  watch: {
    selected() {
      if (this.selected === "pop") {
        this.articles = this.articles.sort((a, b) => {
          return a.id > b.id;
        });
      } else if (this.selected === "alphabet") {
        this.articles = this.articles.sort((a, b) => {
          return a.title > b.title;
        });
      } else if (this.selected === "date") {
        this.articles = this.articles.sort((a, b) => {
          // console.log(a.date.replaceAll(".", '-'));
          let tmpA = new Date(...a.date.split('.').reverse());
          let temB = new Date(...b.date.split('.').reverse());
          // console.log(tmpA.getDate());
          return tmpA > temB;
        })
      }
    }
  },
  created() {
    // axios.get("http://localhost:3000/posts").then((res) => {
    //   console.log(res.data)
    //   this.articles = res.data;
    //   // console.log("deb", this.articles)
    // });

    this.articles = posts;
    console.log(location.href);
    // console.log(this.articles)
    // console.log(window.location.origin )
  }
}
</script>

<style scoped>

.container {
  display: flex;
  flex-direction: row-reverse;
  justify-content: start;
  width: calc(100% + 200px);
}

@media only screen and (max-width: 992px) {
  .container{
    flex-direction: column;
    width: 100%;
  }
}

.posts {
  width: calc(100% - 200px);
}

@media only screen and (max-width: 992px) {
  .posts{
    width: 100%;
  }
}

.no-posts{
  background-color: black;
  border-radius: 20px;
  padding: 10px;
  font-size: 1.5rem;
}

.menu {
  box-sizing: border-box;
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
  top: 10px;
  border-radius: 20px;
  width: 180px;
  height: max-content;
  background-color: black;
  margin-left: 20px;
  /*padding: 10px;*/
  padding: 5px;
}

.menu *{
  margin: 10px;
}

@media only screen and (max-width: 992px) {
  .menu{
    position: static;
    width: 100%;
    margin-left: 0;
    margin-bottom: 10px;
  }
}
/*.menu:hover{*/
/*  width: 150px;*/
/*}*/

.margin {
  margin: 10px 0;
}

.margin:first-child{
  margin-top: 0;
}

.margin:last-child {
  margin-bottom: 0;
}

.elements{
  border-radius: 5px;
  padding: 2px;
  font-size: 1.2rem;
}

.button{
  border-radius: 5px;
  font-size: 1.2rem;
  padding: 2px;
  transition: .3s all;
}

.button:hover{
  outline: white 1px solid;
}

.button img{
  margin: 0;
}
</style>