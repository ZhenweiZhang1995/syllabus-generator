<template>
  <div id="app">
    <hero class="noprint"></hero>
    <br>

    <div class="fixAtTop noprint">
      <!-- <div class="is-centered is-medium "> -->
        <!-- <transition name= "fade"> -->
        <div class="tabs is-centered is-medium">
          <ul>
              <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
                  <a :href="tab.href" @click="changeTab(tab)">{{ tab.title }}</a>
              </li>
          </ul>
        </div>
        <!-- </transision> -->
      <!-- </div> -->
      <!-- <transition name= "fade"> -->
      <progress class="progress is-primary" max="100" :value="currentQuestion"></progress>
    <!-- </transition> -->
    </div>

    <div v-if="activeTab" class="content has-text-centered">
      <transition name="slide-fade">
        <welcome v-if="activeTab.componentName === 'welcome'" :tab="activeTab" :presets="presets"></welcome>
        <basic v-if="activeTab.componentName === 'basic'" :tab="activeTab" :presets="presets"></basic>
        <description v-if="activeTab.componentName === 'description'" :tab="activeTab" :presets="presets"></description>
        <assignment v-if="activeTab.componentName === 'assignment'" :tab="activeTab" :presets="presets"></assignment>
        <grade v-if="activeTab.componentName === 'grade'" :tab="activeTab" :presets="presets"></grade>
        <additional v-if="activeTab.componentName === 'additional'" :tab="activeTab" :presets="presets"></additional>
        <preview v-if="activeTab.componentName === 'preview'" :tab="activeTab"></preview>
      </transition>
    </div>

    <a class="button button-style is-primary is-large is-pulled-left noprint" v-if="" @click ="prev()">Previous &nbsp
      <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
    </a>
    <a class="button button-style is-primary is-large is-pulled-right" v-if="formContinue()" @click ="next()">Next &nbsp
      <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
    </a>

    <a class="button button-style is-primary is-large is-pulled-right noprint tooltip" @click ="printPDF()" v-else>Get a PDF version of your syllabus &nbsp
      <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
      <span class="tooltiptext">Click on "Destination" and choose "Save as PDF"</span>
    </a>

    <footerCustom class ="margin-modify noprint"></footerCustom>
  </div>
</template>

<script>

// import tabs from './components/tabs.vue'
// import tab from './components/tab.vue'
import hero from './components/hero.vue'
import basic from './components/basic.vue'
import description from './components/description.vue'
import additional from './components/additional.vue'
import assignment from './components/assignment.vue'
import grade from './components/grade.vue'
import preview from './components/preview.vue'
import footerCustom from './components/footerCustom.vue'
import welcome from './components/welcome.vue'
import axios from 'axios'



export default {
  name: 'app',

  data () {
    return {
      activeTab: null,
      // currentQuestion : 0,
      isActive: false,
      tabs: [
      {
        title: 'Welcome',
        text: 'Introduction of the Site',
        componentName: 'welcome',
        isActive: false,
        },
      {
        title: 'Basic',
        text: 'Introduction of the course',
        componentName: 'basic',
        isActive: false,
      },
      {
        title: 'Description',
        text: 'Class Description',
        componentName: 'description',
        isActive: false,
      },
      {
        title: 'Homework',
        text: 'Homework & Assignments',
        componentName: 'assignment',
        isActive: false,
      },
      {
        title: 'Exam & Grades',
        text: 'Exam & Grades',
        componentName: 'grade',
        isActive: false,
      },
      {
        title: 'Additional',
        text: 'Additional',
        componentName: 'additional',
        isActive: false,
      },
      {
        title: 'Preview',
        text: 'Preview of your syllabus',
        componentName: 'preview',
        isActive: false,
      },
    ],
    // ,
      presets:[],
    }
  },

  computed:{
    href() {
        return '#' + this.title.toLowerCase().replace(/ /g, '-');
    },
    currentQuestion(){
      return ((this.tabs.indexOf(this.activeTab)+1)/this.tabs.length)*100;
    }
  },
  methods:{
    changeTab (t) {
      this.cancelActive();
      this.activeTab = t;
      t.isActive = true;
    },
    formContinue(){
      var currentIndex = this.tabs.indexOf(this.activeTab);
      return currentIndex < (this.tabs.length-1);
    },
    next () {
      this.cancelActive();
      var currentIndex = this.tabs.indexOf(this.activeTab)
      currentIndex++
      if (currentIndex > this.tabs.length - 1) {
        currentIndex = 0
      }
      this.activeTab = this.tabs[currentIndex];
      this.tabs[currentIndex].isActive = true;
    },
    prev () {
      this.cancelActive();
      var currentIndex = this.tabs.indexOf(this.activeTab)
      currentIndex--
      if (currentIndex < 0) {
        currentIndex = this.tabs.length - 1
      }
      this.activeTab = this.tabs[currentIndex];
      this.tabs[currentIndex].isActive = true;
    },
    cancelActive(){
      for( var i=0;i<this.tabs.length;i++){
        this.tabs[i].isActive = false;
      }
    },
    printPDF(){
      window.print();
    }

  },

  components: {
    hero,
    basic,
    description,
    additional,
    assignment,
    grade,
    footerCustom,
    preview,
    welcome
  },

  mounted () {
    console.log('App -> mounted.');
    this.activeTab = this.tabs[0];
    this.tabs[0].isActive = true;


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
  .content{
    padding: 3%;
  }

  .slide-fade-enter-active {
  transition: all 1s ease;
  }
  /*.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }*/
  .slide-fade-enter, .slide-fade-leave-to
  {
  transform: translateX(10px);
  opacity: 0;
  }
  .button-style{
    margin-right: 15%;
    /*margin-top: 2%;*/
    margin-bottom: 5%;
    margin-left: 15%;
  }
  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }
  .margin-modify{
    margin-top: 8%;
    /*height:20%;*/
  }

  @media print{
    .noprint{
      display:none;
    }
  }

  .tooltip .tooltiptext {
      visibility: hidden;
      width: 470px;
      background-color: black;
      color: #fff;
      text-align: center;
      border-radius: 7px;
      padding: 5px 0;
      position: absolute;
      z-index: 1;
      top: 150%;
      left: 50%;
      margin-left: -235px;
      /*opacity: 0.7;*/
      opacity: 0;
      transition: opacity 0.8s;
  }

  .tooltip .tooltiptext::after {
      content: "";
      position: absolute;
      bottom: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: transparent transparent black transparent;
  }

  .tooltip:hover .tooltiptext {
      visibility: visible;
      opacity:0.7;
  }

  .progress{
    transition: width 1s;
    transition-timing-function: ease-in-out;
  }
</style>

<style type="text/css" media="print">
@page {
    size: auto;   /* auto is the initial value */
    margin: 0;  /* this affects the margin in the printer settings */
}
</style>
