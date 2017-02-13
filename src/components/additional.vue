<template lang="html">
  <div class="additional">
    <br>
    <label class="label">Honor Code and Plagiarism</label>
    <div class="control">
      <textarea class="textarea" placeholder="Class Description" v-model ="honor_code">
      </textarea>
    </div>

    <br>
    <label class="label">Diversity</label>
    <div class="control">
      <textarea class="textarea" placeholder="Class Prerequisites" v-model ="diversity"></textarea>
    </div>

    <br>
    <label class="label">Special Accommodations</label>
    <div class="control">
      <textarea class="textarea" placeholder="Class Prerequisites" v-model ="special"></textarea>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      honor_code: "It is expected that each student in this course will conduct himself or herself within the guidelines of the UNC"+
"honor code. All academic work should be done with the high level of honesty and integrity this university demands."+
"You are expected to produce your own work in this class. If you have any questions about your responsibility or"+
"your instructor’s responsibility as a faculty member under the Honor Code, please talk with me or Senior Associate"+
"Dean Charlie Tuggle, or you may speak with a representative of the Student Attorney Office or the Office of the"+
"Dean of Students.",
      diversity:"The University’s policy on Prohibiting Harassment and Discrimination is outlined in the 2011-2012 Undergraduate"+
"Bulletin http://www.unc.edu/ugradbulletin/. UNC is committed to providing an inclusive and welcoming"+
"environment for all members of our community and does not discriminate in offering access to its educational"+
"programs and activities on the basis of age, gender, race, color, national origin, religion, creed, disability, veteran’s"+
"status, sexual orientation, gender identity, or gender expression.",
      special:"If you require special accommodations to attend or participate in this course, please let the instructor know as "+
"soon as possible. If you need information about disabilities visit the Accessibility Services website at https://"+
"accessibility.unc.edu/",
    }

  }
}
</script>

<style lang="css">
  .additional{
    padding-left: 20%;
    padding-right: 20%;
  }
</style>
