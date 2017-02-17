<template lang="html">
  <div id="pdf" class="preview">

      <h1>{{ this.courseTitle }}{{ this.courseNumber }}{{ this.courseName }}</h1>
      <p>Instructor:{{ this.mrmrs }} {{ this.instructor }}</p>
      <p>Email: {{ this.email }}</p>
      <p>Class Time: {{ this.classDay }} {{ this.classTime }} </p>
      <p>Location: {{ this.classLocation }}</p>
      <p>Office Hour: {{ this.officeHourDay }}{{ this.officeHourTime }}</p>
      <p>Office Hour Location: {{ this.officeHourLocation }}</p>
      <p>Course Material: {{ this.material }}</p>
      <p>Course Website: {{ this.website }}</p>
      <label class="label">Class Description</label>
      <p>{{ this.classDescription }}</p>
      <label class="label">Prequisite and Prior knowledge</label>
      <p>{{ this.prequisite }}</p>
      <label class="label">Homework Description</label>
      <p>{{ this.AssignmentDescription }}</p>

      <!-- <p v-for="item in this.Assignmentitems" v-if="item.finished==false">
        <p>{{ this.item.homeworktype }}{{ this.item.assignNum }} : {{ this.item.itemDescription }}</p>
        <p>{{ this.item.itemContent }}</p>
      </p> -->

      <label class="label">Exam Schedule</label>
      <p>{{ this.examdate }}</p>
      <label class="label">Grading critiaria</label>
      <p>{{ this.grading }}</p>

      <label class="label">Class attendance</label>
      <p>{{ this.attendence }}</p>
      <label class="label">Honor Code and Plagiarism</label>
      <p>{{ this.honor_code }}</p>
      <label class="label">Diversity</label>
      <p>{{ this.diversity }}</p>
      <label class="label">Special Accommodations</label>
      <p>{{ this.special }}</p>

      <p v-for="item in this.additionalitems" v-if="item.finished==false">
        <h1>{{ this.item.itemTitle }}</h1>
        <p>{{ this.item.itemContent }}</p>
      </p>

  </div>

</template>

<script>
export default {
  props: ['tab'],

  data () {
    return {
      // formData: [],
      attendence:'',
      courseTitle:'',
      courseNumber:'',
      courseName:'',
      mrmrs:'',
      instructor:'',
      email:'',
      classDay:'',
      classTime:'',
      classLocation:'',
      officeHourDay:'',
      officeHourTime:'',
      officeHourLocation:'',
      material:'',
      website:'',
      classDescription:'',
      prequisite:'',
      AssignmentDescription:'',
      examdate:'',
      grading:'',
      attendance:'',
      diversity:'',
      honor_code:'',
      special:'',
      Assignmentitems:[],
      additionalitems:[],


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

      this.courseTitle = data.courseTitle;
      this.courseNumber = data.courseNumber;
      this.courseName = data.courseName;
      this.mrmrs      = data.mrmrs;
      this.instructor = data.instructor;
      this.email = data.email;
      this.classDay = data.classDay;
      this.classTime = data.classTime;
      this.classLocation = data.classLocation;
      this.officeHourDay = data.classLocation;
      this.officeHourTime = data.officeHourTime;
      this.officeHourLocation = data.officeHourLocation;
      this.material = data.material;
      this.website = data.website;
      this.classDescription = data.classDescription;
      this.prequisite = data.prequisite;
      this.AssignmentDescription = data.AssignmentDescription;
      this.examdate = data.examdate;
      this.grading = data.grading;
      this.attendance = data.attendance;
      this.honor_code = data.honor_code;
      this.diversity = data.diversity;
      this.special = data.special;
      this.Assignmentitems = data.Assignmentitems;
      this.additionalitems = data.additionalitems;
    },
  }
}
</script>

<style lang="css">
  .preview{
    padding-left: 20%;
    padding-right: 20%;
  }
</style>
