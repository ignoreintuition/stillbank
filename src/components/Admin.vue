<template>

  <div class="row" id="app-panel">
    <div id="top-content" class="col-sm">
      <h2> Manage your kid's accounts </h2>
      <div class="container">
        <div class="row">
          <div class="h-cell col-3"> Date </div>
          <div class="h-cell col-3"> Transaction Type </div>
          <div class="h-cell col-3"> Amount </div>
        </div>
        <div v-for="t in data.transactions" class="row">
          <input class="col-3" v-model=t.date> </input>
          <input class="col-3" v-model=t.type> </input>
          <input class="col-3" v-model=t.amount> </input>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
window.jQuery = require('jquery');

const $ = window.jQuery;
export default {
  data() {
    return {
      data: {
        primaryAccountID: null,
        subAccountID: null,
        name: null,
        startDate: null,
        endDate: null,
        startBal: null,
        endBal: null,
        transactions: [],
      },
    };
  },
  created() {
    const url = `http://localhost:3000/trans/?sid=${this.$route.params.id}`;
    $.get(url, (d) => {
      this.data = d;
    });
  },
};
</script>
