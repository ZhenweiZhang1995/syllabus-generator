<template>
  <div id="app">
    <hero></hero>
    <br>
    <tabs>
      <progress class="progress is-primary" value="30" max="100">30%</progress>
      <tab name = "First Tab" :selected ="true">
        <h1>This is the first tab</h1>
      </tab>
      <tab name = "Second Tab">
        <h1>This is the second tab</h1>
      </tab>
      <tab name = "Third Tab">
        <h1>This is the third tab</h1>
      </tab>
    </tabs>
  </div>
</template>

<script>

import tabs from './components/tabs.vue'
import tab from './components/tab.vue'
import hero from './components/hero.vue'



export default {
  name: 'app',

  mounted () {
    console.log('App -> mounted.')
  },

  // data () {
  //   return {
  //     msg: 'Welcome to Your Vue.js App'
  //   }
  // },

  components: {
    tabs,
    tab,
    hero
  }

}

</script>

<style>

</style>
