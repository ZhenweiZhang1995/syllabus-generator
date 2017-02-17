<template lang="html">
  <div class="grade">
    <br>
    <label class="label">Exam Schedule</label>
    <div class="control">
      <textarea class="textarea" placeholder="Class Prerequisites" v-model ="examdate"></textarea>
    </div>

    <br>
    <label class="label">Grading critiaria</label>
    <div class="control">
      <textarea class="textarea" placeholder="Class Prerequisites" v-model ="grading"></textarea>
    </div>
    <a class="button is-primary is-medium" @click="save()">Save Form</a>
  </div>
</template>

<script>
export default {
  data(){
    return{
      examdate: this.presets.examdate,
      grading: this.presets.grading,
    }
  },
  props:[
    'presets',
    'tab'
  ],
  methods:{
    save(){
      console.log('GradeForm -> save');
      this.$evt.$emit('save', {
        examdate: this.examdate,
        grading: this.grading,
      })
    }
  }
}
</script>

<style lang="css">
.grade{
  padding-left: 20%;
  padding-right: 20%;
}
</style>
