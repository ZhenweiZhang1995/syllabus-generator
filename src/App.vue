<template>
  <div id="app">
    <hero></hero>
    <br>
    <tabs>
      <tab v-for="tabnav in tabnavs">
        {{ tabnav.title }}
        <basic v-if="this.activeTab.componentName === 'basic'"></basic>
        <description v-if="this.activeTab.componentName === 'description'"></description>
        <assignment v-if="this.activeTab.componentName === 'assignment'"></assignment>
        <grade v-if="this.activeTab.componentName === 'grade'"></grade>
        <additional v-if="this.activeTab.componentName === 'additional'"></additional>
        <preview v-if="this.activeTab.componentName === 'preview'"></preview>

      </tab>
      <!-- <tab name = "Basic" :selected ="true">
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
      </tab> -->

    </tabs>
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
import preview from './components/preview.vue'
import footerCustom from './components/footerCustom.vue'
import axios from 'axios'



export default {
  name: 'app',
  props:{
    activeTab:{componentName:'basic'}
  },
  data () {
    return {
      // activeTab: null,
      tabnavs: [
      {
        title: 'Basic',
        text: 'Introduction of the course',
        componentName: 'basic',
      },
      {
        title: 'Description',
        text: 'Class Description',
        componentName: 'description'
      },
      {
        title: 'Homework',
        text: 'Homework & Assignments',
        componentName: 'assignment'
      },
      {
        title: 'Exam & Grades',
        text: 'Exam & Grades',
        componentName: 'grade'
      },
      {
        title: 'Additional',
        text: 'Additional',
        componentName: 'additional'
      },
      {
        title: 'Preview',
        text: 'Preview of your syllabus',
        componentName: 'preview'
      },
    ],
    // ,
      // presets:[],
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
