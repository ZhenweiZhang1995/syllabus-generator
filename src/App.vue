<template>
  <div id="app">
    <hero></hero>
    <br>
    <tabs>
      <!-- <progress class="progress is-primary" max="100" :value="currentQuestion">70%</progress> -->
      <tab name = "Basic" :selected ="true">
        <h1>Introduction of the course</h1>
        <basic></basic>
      </tab>
      <tab name = "Description">
        <h1>Class Description</h1>
        <description></description>
      </tab>
      <tab name = "Assignments & Grades">
        <h1>Assignments & Grades</h1>
      </tab>
      <tab name = "Key Date">
        <h1>Key Date</h1>
      </tab>
      <tab name = "Additional">
        <h1>Addtional</h1>
        <additional></additional>
      </tab>
    </tabs>
  </div>
</template>

<script>

import tabs from './components/tabs.vue'
import tab from './components/tab.vue'
import hero from './components/hero.vue'
import basic from './components/basic.vue'
import description from './components/description.vue'
import additional from './components/additional.vue'
// import nextBtn from './components/nextBtn.vue'



export default {
  name: 'app',

  mounted () {
    console.log('App -> mounted.');
  },

  data () {
    return {
      currentQuestion : 20,
    }
  },
  computed:{
    updateProgress(){
      this.currentQuestion +=10;
    }
  },

  components: {
    tabs,
    tab,
    hero,
    basic,
    description,
    additional
    // nextBtn
  }

}
</script>


<style>

  .fixed {
  	position: fixed;
  	top: 0;
  	height: 90px;
  	z-index: 1;
    background-color: white;
    width:1440px;
  }

</style>
