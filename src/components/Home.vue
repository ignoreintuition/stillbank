<template>

  <div class="row" id="app-panel">
    <div id="top-content" class="col-sm">
      <h2> Welcome to Stillbank </h2>
      <p> Stillbank if the fun, easy way to track your money </p>
      <h3> Kids </h3>
      <p> Stillbank if a fun, easy way to keep track of you money.  Just have your parent or gaurdian create an account
      and start putting tracking your money.  </p>
      <router-link class="btn btn-primary btn-lg" role="button" :to="{ name: 'Transaction', params: { id: 1 }}"> Kids Login </router-link>
      <h3> Parents </h3>
      <p> Start teaching your kids about money management.  Set up a Stillbank account and you can show your kids at any time
      how much money they have from allowances, gifts, etc.  Deduct money on the fly when they make a purchase.  Help them to set goals.
      Teach them how to track their spending and set up budgets.  </p>
      <router-link class="btn btn-primary btn-lg" role="button" :to="{ name: 'Admin', params: { id: 1 }}"> Adult Login </router-link>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      data: {
        auth: 1,
      },
    };
  },
};
</script>
