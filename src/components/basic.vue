<template lang="html">
  <div class="basic">
    <br>
    <label class="label">Course Title</label>
    <p class="control has-addons">
      <span class="select">
        <select v-model="courseTitle">
          <option value="BUSI">BUSI</option>
          <option value="COMM">COMM</option>
          <option value="COMP">COMP</option>
          <option value="ENGL">ENGL</option>
          <option value="MATH">MATH</option>
          <option value="MEJO">MEJO</option>
        </select>
      </span>
      <input class="input is-expanded" type="text" placeholder="three digit number (e.g. 583)" v-model="courseNumber">
    </p>

    <br>
    <label class="label">Course Name</label>
    <p class="control">
      <input class="input" type="text" placeholder="Multimedia Programming" v-model="courseName">
    </p>

    <br>
    <label class="label">Instructor</label>
    <p class="control has-addons">
      <span class="select">
        <select v-model="mrmrs">
          <option value="Mr.">Mr.</option>
          <option value="Mrs.">Mrs.</option>
          <option value="Miss">Miss</option>
        </select>
      </span>
      <input class="input is-expanded" type="text" placeholder="Instructor's name" v-model="instructor">
    </p>

    <br>
    <label class="label">Instructor E-mail</label>
    <p class="control">
      <input class="input" type="text" placeholder="zhenwei@live.unc.edu" v-model="email">
    </p>

    <br>
    <label class="label">Class Time</label>
    <p class="control has-addons">
      <span class="select">
        <select v-model="classDay">
          <option value="Mon/Wed/Fri">Mon/Wed/Fri</option>
          <option value="Tue/Thur">Tue/Thur</option>
        </select>
      </span>
      <input class="input is-expanded" type="text" placeholder="e.p. 5:30pm - 6:45pm" v-model="classTime">
    </p>

    <br>
    <label class="label">Location</label>
    <p class="control">
      <input class="input" type="text" placeholder="Carroll 009" v-model="classLocation">
    </p>

    <br>
    <label class="label">Office Hour</label>
    <p class="control has-addons">
      <span class="select">
        <select v-model="officeHourDay">
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
        </select>
      </span>
      <input class="input is-expanded" type="text" placeholder="e.p. 1:00pm - 2:00pm" v-model="officeHourTime">
    </p>

    <br>
    <label class="label">Office Hour Location</label>
    <p class="control">
      <input class="input" type="text" placeholder="Carroll 011" v-model="officeHourLocation">
    </p>

    <br>
    <label class="label">Course Material</label>
    <p class="control">
      <input class="input" type="text" placeholder="Introduction to JavaScript" v-model="material">
    </p>

    <br>
    <label class="label">Course Website</label>
    <p class="control">
      <input class="input" type="text" placeholder="mejo.unc.edu" v-model="website">
    </p>

    <a class="button is-primary is-medium" @click="save()">Save Form</a>

  </div>
</template>

<script>
export default {
  props: ['tab'],
  data(){
    return{
      courseTitle:'MEJO',
      courseNumber:'583',
      courseName:'Multimedia Programming',
      mrmrs:'Mr.',
      instructor:'Seth Wright',
      email:'wrightsa@unc.edu',
      classDay:'Mon/Wed/Fri',
      classTime:' 5:00 - 6:45pm',
      classLocation:'Carroll 009',
      officeHourDay:'Monday',
      officeHourTime:'1:00 - 2:00pm',
      officeHourLocation:'Student Union',
      material:'Intro to JavaScript',
      website:'www.unc.edu',

    }
  },
  methods:{
    save(){
      console.log('BasicForm -> save');
      this.$evt.$emit('save', {
        courseTitle: this.courseTitle,
        courseNumber: this.courseNumber,
        courseName:  this.courseName,
        mrmrs: this.mrmrs,
        instructor: this.instructor,
        email: this.email,
        classDay: this.classDay,
        classTime: this.classTime,
        classLocation: this.classLocation,
        officeHourDay: this.officeHourDay,
        officeHourTime: this.officeHourTime,
        officeHourLocation: this.officeHourLocation,
        material: this.material,
        website: this.website,
      })
    }
  }
}
</script>

<style lang="css">
  .basic{
    padding-left: 30%;
    padding-right: 30%;
  }
</style>
