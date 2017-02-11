<template>
  <div id="app">
    <Tab> </Tab>
  </div>
</template>

<script>

import Tab from './components/Tab'


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
    Tab
  }

}
</script>

<style>

</style>
