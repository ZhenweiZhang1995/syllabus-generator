<template>
  <div>
    <div class="fixAtTop">
      <div class="tabs is-centered is-medium ">
        <!-- <transition name= "fade"> -->
          <ul>
              <li v-for="(tab, index) in tabs" :class="{ 'is-active': tab.isActive }" >
                  <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>

              </li>
          </ul>
        <!-- </transision> -->
      </div>

      <progress class="progress is-primary" max="100" :value="currentQuestion">70%</progress>
    </div>
      <div class="tabs-detail">
          <slot></slot>
      </div>
      <a class="button is-primary is-large is-pulled-right" v-if="formContinue()" @click ="">Next &nbsp
        <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
      </a>
      <a class="button is-primary is-large is-pulled-right" @click ="printPDF()" v-else>Get a PDF version of your syllabus &nbsp
        <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
      </a>



      <!-- How
      to
      select
      next
      tab?(maybe by detecting index and make index increase
      by 1 each time? But need help with getting index or
      making it a global variable) -->

      <!-- The index problem is also related to the animation of progress bar.
      Which needs index/num of total table in order to show current progress -->
  </div>
</template>

<script>

export default {
  data() {
      return {
        tabs: [],
        currentQuestion : 20,
        lastTab:'',
      };
  },
  // props:{
  //   'index'
  // }
  mounted () {
    console.log(this.$children);
    // this.tabIndex = this.index;

  },
  created() {
      this.tabs = this.$children;
  },
  methods: {
      selectTab(selectedTab) {
          this.tabs.forEach(tab => {
              tab.isActive = (tab.name == selectedTab.name);
          });
      },
      formContinue(){
        // this.lastTab = this.tabs[this.tabs.length-1];
        // alert(this.lastTab.name);

        // How Should I get the last tab name in array tab[]?????

        // alert(window.location.hash);   // .hash will return #preview but it only work when I refresh the whole page
        return window.location.hash  != "#preview";
      }
  },

}
</script>

<style>
.button{
  margin-right: 15%;
  margin-top: 2%;
  margin-bottom: 5%;
}

/*.tabs li.is-active a{
  color:#3273dc;
  border-bottom-color:#3273dc;
}*/
</style>
