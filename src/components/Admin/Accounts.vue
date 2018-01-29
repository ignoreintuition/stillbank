<template>
<div class="row" id="app-panel">
  <div id="top-content" class="col-sm">
    <div class="container">
      <h2> Manage your kids accounts </h2>
      <p> You want your kids to be independent so make sure they each have their own account and their own
      transaction ledger.  Set up automatic transactions for allowances and set reminders for when things need to be paid. </p>
    </div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th> View Transactions </th>
          <th> Name </th>
          <th> Balance </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="a in data.accts">
          <td>
            <router-link :to="{ name: 'AdminTransactions', params: { id: a.accountID }}" class="nav-link"> <i class="fa fa-pencil" aria-hidden="true"></i> </router-link>
          </td>
          <td> {{ a.name }} </td>
          <td> </td>
        </tr>
      </tbody>
    </table>
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
        acctID: null,
        accts: [],
      },
    };
  },
  created() {
    this.data.acctID = sessionStorage.getItem('sb.acctID');
    const url = `${process.env.REST_API}/adminAcct/${this.data.acctID}`;
    $.get(url, (d) => {
      this.data.accts = d;
    });
  },
};
</script>
