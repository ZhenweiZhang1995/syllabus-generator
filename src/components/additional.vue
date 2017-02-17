<template lang="html">
  <div class="additional">
    <br>
    <label class="label">Class attendance</label>
    <div class="control">
      <textarea class="textarea" placeholder="Class Description" v-model ="attendence">
      </textarea>
    </div>

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


    <br>

    <section>
      <!-- <div class="card"> -->
    <template v-for="item in items">
      <transition name="fade">
        <div v-show ="!item.finished">
          <div>
            <br>
            <!-- <label class="label">{{ item.itemTitle }}</label> -->
            <input type="text" class="input center-input" placeholder="Item Title" v-model ="item.itemTitle"/>
          </div>
            <textarea class="textarea"  placeholder="Item Content" v-model ="item.itemContent"></textarea>
            <br>
            <div class="control">
              <a class="button is-primary" @click="done(item)">Delete</a>
            </div>
        </div>
      </transition>
    </template>

    </section>

    <div class="control has-addons has-addons-centered adjustSize">
      <a class="button is-primary is-medium" @click="addItem">Add New Item</a>
    </div>

    <a class="button is-primary is-medium" @click="save">Save Form</a>


  </div>
</template>

<script>
export default {
  props:[
    'presets',
    'tab'
  ],

  data(){
    return{
      attendence: this.presets.attendence,
      honor_code: this.presets.honor_code,
      diversity:  this.presets.diversity,
      special: this.presets.special,
      newItemTitle: '',
      newItemContent: '',
      finished: false,
      editing: false,
      items: [{
        itemTitle: "Seek for help",
        itemContent: "Your can seek for help from me anytime by e-mail/by appointment",
        finished: false,
        editing: false
      }]
      }

  },

  methods: {
    cancel() {
        this.newItemTitle = '';
        this.newItemContent = '';
      },
      addItem() {
        this.items.push({
          itemTitle: this.newItemTitle,
          itemContent: this.newItemContent,
          finished: false,
          editing: false
        })
        this.newItemTitle = '';
        this.newItemContent = '';
      },
      done(i) {
        i.finished = true;
      },
      save(){
        console.log('TimerForm -> save');
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
  .additional{
    padding-left: 20%;
    padding-right: 20%;
  }
  .center-input{
    text-align:center;
  }
  .adjustSize{
    height: 40px;
  }
</style>
