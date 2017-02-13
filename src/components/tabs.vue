<template>
  <div>
    <div class="fixAtTop">
      <div class="tabs is-centered is-medium ">
        <!-- <transition name= "fade"> -->
          <ul>
              <li v-for="(tab, index) in tabs" :class="{ 'is-active': tab.isActive }" >
                  <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
                  <!-- @click="updateProgress(index)" -->
              </li>
          </ul>
        <!-- </transision> -->
      </div>
      <!-- <progress class="progress is-primary" max="100" value="70">70%</progress> -->
      <progress class="progress is-primary" max="100" :value="currentQuestion">70%</progress>
    </div>
      <div class="tabs-detail">
          <slot></slot>
      </div>
      <a class="button is-primary is-large is-pulled-right" @click ="">Next</a>
      <!-- How
      to
      select
      next
      tab? -->
  </div>
</template>

<script>

export default {
  data() {
      return {
        tabs: [],
        currentQuestion : 20,
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
</style>
