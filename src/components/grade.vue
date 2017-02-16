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
}
</script>

<style lang="css">
.grade{
  padding-left: 20%;
  padding-right: 20%;
}
</style>
