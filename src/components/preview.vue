<template lang="html">
  <div id="pdf" class="preview">
    <p>
      {{ this.formData.attendence }}
    </p>
  </div>

</template>

<script>
export default {
  props: ['tab'],

  data () {
    return {
      formData: []
    }
  },

  mounted () {
    console.log('App -> mounted.')
    this.$evt.$on('save', this.formSubmitted)
  },

  beforeDestroy () {
    this.$evt.$off('save', this.formSubmitted)
  },
  methods: {
    formSubmitted (data) {
      console.log('App -> formSubmitted', data)

      this.formData.push({
        attendence: data.attendence,
        honor_code: data.honor_code,
        diversity:  data.diversity,
        special:    data.special
      })
    }
  }
}
</script>

<style lang="css">
</style>
