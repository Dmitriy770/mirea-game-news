const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
      ? '/mirea-game-news/'
      : '/',
  transpileDependencies: true,
  pages:{
    index:{
      entry: 'src/main.js',
      title: 'Игровые новости'
    }
  }
})
