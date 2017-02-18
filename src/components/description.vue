<template lang="html">
  <div class="description">
    <br>
    <label class="label">Class Description</label>
    <div class="control">
      <textarea class="textarea" placeholder="Class Description" v-model ="classDescription"></textarea>
    </div>

    <br>
    <label class="label">Prequisite and Prior knowledge</label>
    <div class="control">
      <textarea class="textarea" placeholder="Class Prerequisites" v-model ="prequisite"></textarea>
    </div>
    <a class="button is-primary is-medium" @click="save()">Save Form</a>
  </div>

</template>

<script>
export default {
  data(){
    return{
      prequisite:"There is no prerequisite in this class",
      classDescription:this.presets.classDescription,
    }
  },
  methods:{
    save(){
      console.log('DescriptionForm -> save');
      this.$evt.$emit('save', {
        classDescription: this.classDescription,
        prequisite: this.prequisite,
      })
    }
  },
  props:[
    'presets',
    'tab'
  ]
}
</script>

<style lang="css">
  .description{
    padding-left: 20%;
    padding-right: 20%;
  }
</style>
