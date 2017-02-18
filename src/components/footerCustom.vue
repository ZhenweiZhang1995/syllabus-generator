<template lang="html">

  <footer class="footer footerCustom">
  <div class="container">
    <div class="content has-text-centered">
      <p>
        <strong>Syllabus Generator</strong> by <a href="https://github.com/ZhenweiZhang1995">Zhenwei Zhang &nbsp<i class="fa fa-github fa-2x"></i></a>
      </p>
      <p>
        <strong>Bulma</strong> by <a href="http://jgthms.com">Jeremy Thomas</a>
      </p>
      <p>
        <strong>Vue.js</strong> from <a href="https://vuejs.org">https://vuejs.org</a>
      </p>
      <p>
        <strong>font awesome</strong> from <a href="http://fontawesome.io">http://fontawesome.io</a>
        <!-- <a class="icon" href="https://github.com/jgthms/bulma">
          <i class="fa fa-github"></i>
        </a> -->
      </p>
    </div>
  </div>
</footer>
</template>

<script>
export default {
  props: ['tab']
}
</script>

<style lang="css">
 .fa{
   margin-top: -3px;
 }
 .footer{
   height: 60%;
 }
</style>
