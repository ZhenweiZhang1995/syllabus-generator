<template>
  <div id="app">
    <hero></hero>
    <br>
    <tabs>
      <tab name = "Basic" :selected ="true">
        <h1>Introduction of the course</h1>
        <basic></basic>
      </tab>
      <tab name = "Description">
        <h1>Class Description</h1>
        <description></description>
      </tab>
      <tab name = "Homework">
        <h1>Homework & Assignments</h1>
        <assignment></assignment>
      </tab>
      <tab name = "Exam & Grades">
        <h1>Exam & Grades</h1>
        <grade></grade>
      </tab>
      <tab name = "Additional">
        <h1>Addtional</h1>
        <additional :presets="presets"></additional>
      </tab>
      <tab name = "Preview">
        <h1>Preview of your syllabus</h1>
      </tab>
    </tabs>
    <br>
    <br>
    <br>
    <br>
    <br>
    <!-- <footerCustom></footerCustom> -->
  </div>
</template>

<script>

import tabs from './components/tabs.vue'
import tab from './components/tab.vue'
import hero from './components/hero.vue'
import basic from './components/basic.vue'
import description from './components/description.vue'
import additional from './components/additional.vue'
import assignment from './components/assignment.vue'
import grade from './components/grade.vue'
import footerCustom from './components/footerCustom.vue'
import axios from 'axios'



export default {
  name: 'app',
  data () {
    return {
      // currentQuestion : 20,
      presets:[]
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
    additional,
    assignment,
    grade,
    footerCustom
  },

  mounted () {
    // console.log('App -> mounted.');
    axios.get('/preset/preset.json')
      .then((response) => {
        console.log(response.data)
        this.presets = response.data
      })
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
