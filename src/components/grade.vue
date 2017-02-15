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
      examdate:"Exam 1 is on 4/1/2017",
      grading:"A student’s numerical grade will be based on the final course average, in computing which the"+
"graded work will be weighted as follows:"+
"- Regular homework assignments: 15%;"+
"- In-class midterm examination (two exams): 20% each; and one quiz: 5%;"+
"- Final exam: 40%."+
"The only one worst homework grade will be dropped when computing the final course average."+
"The letter grades will be assigned based on numerical grades using the following scale: A(93),"+
"A-(90), B+(87), B(83), B-(80), C+(77), C(73), C-(70), D+(65), D(60).",
    }
  },
  props: ['tab']
}
</script>

<style lang="css">
.grade{
  padding-left: 20%;
  padding-right: 20%;
}
</style>
