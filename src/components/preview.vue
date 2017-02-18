<template lang="html">
  <div id="pdf" class="preview">

      <br>
      <h1>{{ this.courseTitle }}{{ this.courseNumber }} : &nbsp{{ this.courseName }}</h1>
      <br>
    <div class = "changesize">

      <p><strong>Instructor:  </strong>{{ this.mrmrs }}&nbsp{{ this.instructor }}</p>
      <p><strong>Email:  </strong>{{ this.email }}</p>
      <p><strong>Class Time:  </strong>{{ this.classDay }} {{ this.classTime }} </p>
      <p><strong>Location:  </strong>{{ this.classLocation }}</p>
      <p><strong>Office Hour:  </strong>{{ this.officeHourDay }}{{ this.officeHourTime }}</p>
      <p><strong>Office Hour Location:  </strong>{{ this.officeHourLocation }}</p>
      <p><strong>Course Material:  </strong>{{ this.material }}</p>
      <p><strong>Course Website:  </strong>{{ this.website }}</p>
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
      <p>{{ this.attendance }}</p>
      <label class="label">Honor Code and Plagiarism</label>
      <p>{{ this.honor_code }}</p>
      <label class="label">Diversity</label>
      <p>{{ this.diversity }}</p>
      <label class="label">Special Accommodations</label>
      <p>{{ this.special }}</p>

    </div>

      <!-- <p v-for="item in this.additionalitems" v-if="item.finished==false">
        <h1>{{ this.item.itemTitle }}</h1>
        <p>{{ this.item.itemContent }}</p>
      </p> -->

  </div>

</template>

<script>
export default {
  props: ['tab'],

  // watch: {
  // input: function () {
  //   if (isLocalStorage() /* function to detect if localstorage is supported*/) {
  //     localStorage.setItem('storedData', this.input)
  //     }
  //   }
  // },

  data () {
    return {
      // formData: [],
      attendance:'',
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
    // this.$evt.$on('saveAdditional', this.formSubmitted)
  },

  beforeDestroy () {
    this.$evt.$off('save', this.formSubmitted)
    // this.$evt.$off('saveAdditional', this.formSubmitted)
  },
  methods: {
    formSubmitted (data) {
      console.log('App -> formSubmitted', data);

      // The if statement listed below is used to guarantee that data
      // will not be override to null when changing Tab. The method is
      // a bit stupid but it works lol.

      if(data.courseTitle){
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
      }

      if(data.prequisite){
        this.classDescription = data.classDescription;
        this.prequisite = data.prequisite;
      }


      if(data.Assignmentitems){
        this.Assignmentitems = data.Assignmentitems;
        this.AssignmentDescription = data.AssignmentDescription;
      }

      if(data.examdate){
        this.examdate = data.examdate;
        this.grading = data.grading;
      }

      if(data.diversity){
        this.attendance = data.attendance;
        this.honor_code = data.honor_code;
        this.diversity = data.diversity;
        this.special = data.special;
        this.additionalitems = data.additionalitems;
      }
      // this.Assignmentitems = data.Assignmentitems;
    },
  }
}
</script>

<style lang="css">
  .preview{
    padding-left: 20%;
    padding-right: 20%;
  }

  .changesize{
    font-size: 110%;
    text-align: left;
  }
</style>
