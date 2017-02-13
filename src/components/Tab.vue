<template lang="html">
  <div>
    <transition name="slide-fade">
      <div v-show="isActive" class ="content has-text-centered"><slot></slot></div>
    <!-- <div><slot></slot></div> -->
    </transition>
  </div>
</template>

<script>
export default {
  props: {
      name: { required: true },
      selected: { default: false }
  },
  data() {
      return {
          isActive: false
      };
  },
  computed: {
      href() {
          return '#' + this.name.toLowerCase().replace(/ /g, '-');
      }
  },
  mounted() {
      this.isActive = this.selected;
  }
}
</script>

<style lang="css">

  .content{
    padding: 3%;
  }

  .slide-fade-enter-active {
  transition: all .8s ease;
  }
  /*.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }*/
  .slide-fade-enter, .slide-fade-leave-to
  {
  transform: translateX(10px);
  opacity: 0;
  }
</style>
