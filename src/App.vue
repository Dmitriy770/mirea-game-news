<template>
  <transition name="aside">
    <aside class="aside" v-if="isShowLeftPanel">
      <nav></nav>
      <h1 class="aside__h1">Игровые новости</h1>
      <button></button>
    </aside>
  </transition>
  <div class="wrapper">
    <header ref="observer" class="header">
    </header>
    <main class="main">
      <router-view/>
    </main>
    <footer class="footer"></footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowLeftPanel: false
    }
  },
  mounted() {
    let options = {
      rootMargin: '45px',
      threshold: 0.1
    }
    let callback = (entries, observer) => {
      console.log(entries[0]);
      if (entries[0].isIntersecting) {
        this.isShowLeftPanel = false;
      } else {
        this.isShowLeftPanel = true;
      }
    };
    let observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer)
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;

  background-image: url("@/assets/background.svg");
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.wrapper {
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  width: 60%;
  margin: 0 auto;
}

.header {
  grid-area: header;
  background: black;
  border-radius: 20px;
  height: 60px;
  margin: 10px;
}

.main {
  grid-area: main;
  /*background: black;*/
  border-radius: 20px;
  flex-grow: 1;
  /*height: 200vh;*/
  margin: 10px;
}

.footer {
  grid-area: footer;
  background-color: black;
  border-radius: 20px;
  height: 80px;
  margin: 10px;
}

.aside {
  top: 5px;
  left: 5px;
  bottom: 5px;
  position: fixed;
  background-color: black;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.aside__h1{
  writing-mode: vertical-rl;
  text-orientation: upright;
  font-size: 2rem;
}

.aside-enter-active {
  transition: all 0.3s ease-out;
}

.aside-leave-active {
  transition: all 0.3s ease-out;
}

.aside-enter-from {
  transform: translateX(-80px);
}

.aside-enter-to {
  transform: translateX(0);
}

.aside-leave-to {
  transform: translateX(-80px);
  /*opacity: 0;*/
}
</style>
