<template lang="html">
  <div class="assignment">
    <br>
    <label class="label">Homework Description</label>
    <div class="control">
      <textarea class="textarea" placeholder="Assignment Description" v-model ="AssignmentDescription">
      </textarea>
    </div>
    <br>
    <br>

    <section>
    <template v-for="item in items">
      <transition name="fade">
        <div v-show ="!item.finished">

            <div class="control is-grouped">
                  <span class="select">
                    <select v-model ="item.homeworktype">
                      <option value="assign">Assignment</option>
                      <option value="paper">Paper</option>
                      <option value="proj">Project</option>
                    </select>
                  </span>
              <input class="input" type="text" placeholder="Number" v-model ="item.assignNum">
              <input class="input is-expanded" type="text" placeholder="Description" v-model ="item.itemDescription">
              <!-- <p class="control">
                <a class="button is-primary" @click="addItem">+</a>
              </p> -->
            </div>
            <p class="control">
              <textarea class="textarea" placeholder="Requirments" v-model ="item.itemContent"></textarea>
            </p>
            <div class="control">
              <a class="button is-primary" @click="done(item)">Delete</a>
            </div>
        </div>
      </transition>
    </template>

    </section>

  <!-- <form class="addProject">
    <br>
    <div class="control is-grouped">
          <span class="select">
            <select>
              <option>Assignment</option>
              <option>Paper</option>
              <option>Project</option>
            </select>
          </span>
      <input class="input" type="text" placeholder="Number" v-model ="newAssignNum">
      <input class="input is-expanded" type="text" placeholder="Description" v-model ="newItemDescription">
      <p class="control">
        <a class="button is-info" @click="addItem">+</a>
      </p>
    </div>
    <p class="control">
      <textarea class="textarea" placeholder="Requirments" v-model ="newItemContent"></textarea>
    </p>
  </form> -->

    <p class="control has-addons has-addons-centered adjustSize">
      <a class="button is-primary is-medium" @click="addItem">Add New Assignment/Paper/Project</a>
    </p>



  </div>
</template>

<script>
export default {
  data(){
    return{
      AssignmentDescription:"",
      newHomeworktype:'',
      newAssignNum:'',
      newItemDescription:'',
      newItemContent:'',
      finished: false,
      editing: false,
      items: [{
        homeworktype:'',
        assignNum:'1',
        itemDescription:"Write an essay about UNC in general",
        itemContent:"This should be 10k words long,single space",
        finished: false,
        editing: false,
      }]
    }
  },
  props: ['tab'],
  methods: {
    cancel() {
        this.newHomeworktype ='';
        this.newAssignNum = '';
        this.newItemDescription = '';
        this.newItemContent = '';
      },
      addItem() {
        this.items.push({
          homeworktype:this.newHomeworktype,
          assignNum:this.newAssignNum,
          itemDescription: this.newItemDescription,
          itemContent: this.newItemContent,
          finished: false,
          editing: false
        })
        this.newHomeworktype ='';
        this.newAssignNum = '';
        this.newItemDescription = '';
        this.newItemContent = '';
      },
      done(i) {
        i.finished = true;
      },
  },
}
</script>

<style lang="css">
  .assignment{
    padding-left: 20%;
    padding-right: 20%;
  }
  .adjustSize{
    height: 40px;
  }
</style>
