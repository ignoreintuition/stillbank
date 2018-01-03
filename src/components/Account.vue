<template>
<div class="row" id="app-panel">
  <div id="top-content" class="col-sm">
    <h2> About Me </h2>
    <div class="row">
      <div class="container">
        <div class="row">
          <div class="h-cell col-2"> Name </div>
          <div class="cell col-2"> {{ data.name }} </div>
        </div>
        <div class="row">
          <div class="h-cell col-2"> Allowance </div>
          <div class="cell col-2"> {{ data.allowance }} </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
const $ = window.jQuery;

export default {
  name: 'Account',
  data() {
    return {
      data: {
        name: null,
        allowance: null,
      },
    };
  },
  created() {
    $.get('http://localhost:3000/acct/?sid=1', (d) => {
      this.data = d;
    });
  },
};
</script>
