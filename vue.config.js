const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  base: '/mirea-game-news/',
  transpileDependencies: true,
  pages:{
    index:{
      entry: 'src/main.js',
      title: 'Игровые новости'
    }
  }
})
