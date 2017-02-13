<template lang="html">
  <div class="basic">
    <br>
    <label class="label">Course Title</label>
    <p class="control has-addons">
      <span class="select">
        <select>
          <option>BUSI</option>
          <option>COMM</option>
          <option>COMP</option>
          <option>ENGL</option>
          <option>MATH</option>
          <option>MEJO</option>
        </select>
      </span>
      <input class="input is-expanded" type="text" placeholder="three digit number (e.g. 583)">
    </p>

    <br>
    <label class="label">Course Name</label>
    <p class="control">
      <input class="input" type="text" placeholder="Multimedia Programming">
    </p>

    <br>
    <label class="label">Instructor</label>
    <p class="control has-addons">
      <span class="select">
        <select>
          <option>Mr.</option>
          <option>Mrs.</option>
          <option>Miss</option>
        </select>
      </span>
      <input class="input is-expanded" type="text" placeholder="Instructor's name">
    </p>

    <br>
    <label class="label">Instructor E-mail</label>
    <p class="control">
      <input class="input" type="text" placeholder="zhenwei@live.unc.edu">
    </p>

    <br>
    <label class="label">Class Time</label>
    <p class="control has-addons">
      <span class="select">
        <select>
          <option>Mon/Wed/Fri</option>
          <option>Tue/Thur</option>
        </select>
      </span>
      <input class="input is-expanded" type="text" placeholder="e.p. 5:30pm - 6:45pm">
    </p>

    <br>
    <label class="label">Location</label>
    <p class="control">
      <input class="input" type="text" placeholder="Carroll 009">
    </p>

    <br>
    <label class="label">Office Hour</label>
    <p class="control has-addons">
      <span class="select">
        <select>
          <option>Monday</option>
          <option>Tuesday</option>
          <option>Wednesday</option>
          <option>Thursday</option>
          <option>Friday</option>
        </select>
      </span>
      <input class="input is-expanded" type="text" placeholder="e.p. 1:00pm - 2:00pm">
    </p>

    <br>
    <label class="label">Office Hour Location</label>
    <p class="control">
      <input class="input" type="text" placeholder="Carroll 011">
    </p>

    <br>
    <label class="label">Course Material</label>
    <p class="control">
      <input class="input" type="text" placeholder="Introduction to JavaScript">
    </p>

    <br>
    <label class="label">Course Website</label>
    <p class="control">
      <input class="input" type="text" placeholder="mejo.unc.edu">
    </p>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
  .basic{
    padding-left: 30%;
    padding-right: 30%;
  }
</style>
