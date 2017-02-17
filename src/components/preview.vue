<template lang="html">
  <div id="pdf" class="preview">
    <p>


      <!-- I HAVE ONLY EMIT FROM ADDITIONAL.VUE NOW SO LINE 5 SHOULD BE WORKING. -->
      <!-- {{ this.formData[0].examdate }} -->
      <!-- I HAVE ONLY EMIT FROM ADDITIONAL.VUE NOW SO LINE 5 SHOULD BE WORKING. -->



      <!-- <h1>{{ this.formData.courseTitle }}{{ this.formData.courseNumber }}{{ this.formData.courseName }}</h1>
      <p>Instructor:{{ this.formData.mrmrs }} {{ this.formData.instructor }}</p>
      <p>Email: {{ this.formData.email }}</p>
      <p>Class Time: {{ this.formData.classDay }} {{ this.formData.classTime }} </p>
      <p>Location: {{ this.formData.classLocation }}</p>
      <p>Office Hour: {{ this.formData.officeHourDay }}{{ this.formData.officeHourTime }}</p>
      <p>Office Hour Location: {{ this.formData.officeHourLocation }}</p>
      <p>Course Material: {{ this.formData.material }}</p>
      <p>Course Website: {{ this.formData.website }}</p>
      <label class="label">Class Description</label>
      <p>{{ this.formData.classDescription }}</p>
      <label class="label">Prequisite and Prior knowledge</label>
      <p>{{ this.formData.prequisite }}</p>
      <label class="label">Homework Description</label>
      <p>{{ this.formData.AssignmentDescription }}</p> -->

      <!-- <p v-for="item in this.formData.items" v-if="item.finished==false">
        <p>{{ this.formData.item.homeworktype }}{{ this.formData.item.assignNum }} : {{ this.formData.item.itemDescription }}</p>
        <p>{{ this.formData.item.itemContent }}</p>
      </p> -->

      <label class="label">Exam Schedule</label>
      <p>{{ this.formData.examdate }}</p>
      <label class="label">Grading critiaria</label>
      <p>{{ this.formData.grading }}</p>

      <label class="label">Class attendance</label>
      <p>{{ this.formData.attendence }}</p>
      <label class="label">Honor Code and Plagiarism</label>
      <p>{{ this.formData.honor_code }}</p>
      <label class="label">Diversity</label>
      <p>{{ this.formData.diversity }}</p>
      <label class="label">Special Accommodations</label>
      <p>{{ this.formData.special }}</p>
    </p>
  </div>

</template>

<script>
export default {
  props: ['tab'],

  data () {
    return {
      formData: [],
      // latestform:[]
    }
  },

  mounted () {
    console.log('Preview -> mounted.')
    this.$evt.$on('save', this.formSubmitted)
  },

  beforeDestroy () {
    this.$evt.$off('save', this.formSubmitted)
  },
  methods: {
    formSubmitted (data) {
      console.log('App -> formSubmitted', data);

      this.formData.push({
        attendence: data.attendence,
        honor_code: data.honor_code,
        diversity:  data.diversity,
        special:    data.special
      })
    },
    // latestform(){
    //   return this.formData[this.formData.length-1];
    // }
  }
}
</script>

<style lang="css">
</style>
