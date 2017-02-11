<template>
  <div>
      <div class="tabs">
          <ul>
              <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
                  <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
              </li>
              <!-- <li class="is-active"><a href="#">Picture</a></li>
              <li><a href="#">Music</a></li> -->
          </ul>
      </div>

      <div class="tabs-detail">
          <slot></slot>
      </div>
  </div>
</template>

<script>
// import tab from './components/tab.vue'

export default {
  data() {
      return { tabs: [] };
  },
  mounted () {
    console.log(this.$children)
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
  }

}
</script>

<style>

</style>
