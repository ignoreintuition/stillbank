<template>
<div class="row" id="app-panel">
  <div id="top-content" class="col-sm">
    <div class="container">
      <h2>Account Register </h2>
      <p>An account register shows you how much money you have spent as well as how much you have earned </p>
      <p>Transactions for {{data.name}} from {{data.startDate}} to {{data.endDate}}</p>
      <table class="table table-striped">
        <thead>
          <tr>
            <th> Edit </th>
            <th> Date </th>
            <th> Transaction Type </th>
            <th> Amount </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="t in data.transactions">
            <td>
              <a href="#"><i class="fa fa-pencil" aria-hidden="true"></i></a>
            </td>
            <td> {{ t.date }} </td>
            <td> {{ t.type }} </td>
            <td> {{ t.amount }} </td>
          </tr>
        </tbody>
      </table>
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
    const url = `http://localhost:3000/getTrans/${this.$route.params.id}`;
    $.get(url, (d) => {
      this.data.transactions = d;
    });
  },
};
</script>
