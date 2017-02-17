<template>
  <div id="app">
    <hero></hero>
    <br>

    <div class="fixAtTop">
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
      <transition name= "fade">
      <progress class="progress is-primary" max="100" :value="currentQuestion">70%</progress>
    </transition>
    </div>

    <div v-if="activeTab" class="content has-text-centered">
      <transition name="slide-fade">
        <basic v-if="activeTab.componentName === 'basic'" :tab="activeTab" :presets="presets"></basic>
        <description v-if="activeTab.componentName === 'description'" :tab="activeTab" :presets="presets"></description>
        <assignment v-if="activeTab.componentName === 'assignment'" :tab="activeTab" :presets="presets"></assignment>
        <grade v-if="activeTab.componentName === 'grade'" :tab="activeTab" :presets="presets"></grade>
        <additional v-if="activeTab.componentName === 'additional'" :tab="activeTab" :presets="presets"></additional>
        <preview v-if="activeTab.componentName === 'preview'" :tab="activeTab"></preview>
      </transition>
    </div>


    <a class="button button-style is-primary is-large is-pulled-left" v-if="" @click ="prev()">Previous &nbsp
      <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
    </a>
    <a class="button button-style is-primary is-large is-pulled-right" v-if="formContinue()" @click ="next()">Next &nbsp
      <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
    </a>
    <a class="button button-style is-primary is-large is-pulled-right" @click ="printPDF()" v-else>Get a PDF version of your syllabus &nbsp
      <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
    </a>



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

    <!-- </tabs> -->
    <br>
    <br>
    <br>
    <br>
    <footerCustom></footerCustom>
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
      return ((this.tabs.indexOf(this.activeTab)+1)/6)*100;
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
    preview
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
</style>
