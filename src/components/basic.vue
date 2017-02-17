<template lang="html">
  <div class="basic">
    <br>
    <label class="label">Course Title</label>
    <p class="control has-addons">
      <span class="select">
        <select v-model="courseTitle">
          <option value="busi">BUSI</option>
          <option value="comm">COMM</option>
          <option value="comp">COMP</option>
          <option value="engl">ENGL</option>
          <option value="math">MATH</option>
          <option value="mejo">MEJO</option>
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
          <option value="mr">Mr.</option>
          <option value="mrs">Mrs.</option>
          <option value="miss">Miss</option>
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
          <option value="monwedfri">Mon/Wed/Fri</option>
          <option value="tuethur">Tue/Thur</option>
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
          <option value="mon">Monday</option>
          <option value="tue">Tuesday</option>
          <option value="wed">Wednesday</option>
          <option value="thur">Thursday</option>
          <option value="fri">Friday</option>
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
      courseTitle:'mejo',
      courseNumber:'',
      courseName:'',
      mrmrs:'mr',
      instructor:'',
      email:'',
      classDay:'monwedfri',
      classTime:'',
      classLocation:'',
      officeHourDay:'mon',
      officeHourTime:'',
      officeHourLocation:'',
      material:'',
      website:'',

    }
  },
  methods:{
    save(){
      console.log('BasicForm -> save');
      this.$evt.$emit('save', {
        attendence: this.attendence,
        honor_code: this.honor_code,
        diversity:  this.diversity,
        special: this.special,
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
