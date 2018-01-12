<template>

  <div class="row" id="app-panel">
  <div id="top-content" class="col-sm">
    <h2>Account Register </h2>
    <p>An account register shows you how much money you have spent as well as how much you have earned </p>
    <p>Transactions for {{data.name}} from {{data.startDate}} to {{data.endDate}}</p>
  </div>
  <div class="container">
    <div class="row">
      <div class="h-cell col-1"></div>
      <div class="h-cell col-3"> Date </div>
      <div class="h-cell col-3"> Transaction Type </div>
      <div class="h-cell col-3"> Amount </div>
    </div>
    <div v-for="t in data.transactions" class="row">
      <div class="cell col-1">
        <a href="#"><i class="fa fa-pencil" aria-hidden="true"></i></a>
      </div>
      <div class="cell col-3"> {{ t.date }} </div>
      <div class="cell col-3"> {{ t.type }} </div>
      <div class="cell amt col-3"> {{ t.amount }} </div>
    </div>
    <div class="row">
      <div class="f-cell col-1"></div>
      <div class="f-cell col-3">  </div>
      <div class="f-cell col-3"> Balance </div>
      <div class="f-cell amt col-3"> {{data.endBal}} </div>
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
        transactions: [],
      },
    };
  },
  created() {
    const url = `http://localhost:3000/trans/?sid=${this.$route.params.id}`;
    $.get(url, (d) => {
      this.data.transactions = d;
    });
  },
};
</script>
