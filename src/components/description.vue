<template lang="html">
  <div class="description">
    <br>
    <div class="control">
      <textarea class="textarea" placeholder="Class Description" v-model ="newItemContent"></textarea>
    </div>

    <br>
    <label class="label">Prequisite and Prior knowledge</label>
    <div class="control">
      <textarea class="textarea" placeholder="Class Prerequisites" v-model ="newItemContent"></textarea>
    </div>
  </div>

</template>

<script>
export default {
}
</script>

<style lang="css">
  .description{
    padding-left: 20%;
    padding-right: 20%;
  }
</style>
