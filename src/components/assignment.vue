<template lang="html">
  <div class="assignment">
    <br>
    <label class="label">Homework Description</label>
    <div class="control">
      <textarea class="textarea" placeholder="Assignment Description" v-model ="AssignmentDescription">
      </textarea>
    </div>

    <p class="control has-addons has-addons-centered">
      <span class="select">
        <select>
          <option>Assignment</option>
          <option>Paper</option>
          <option>Project</option>
        </select>
      </span>
      <input class="input" type="text" placeholder="Number">
      <a class="button is-primary">
        Transfer
      </a>
    </p>

  </div>
</template>

<script>
export default {
  data(){
    return{
      AssignmentDescription:"",
    }
  }
}
</script>

<style lang="css">
  .assignment{
    padding-left: 20%;
    padding-right: 20%;
  }
</style>
