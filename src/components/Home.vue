<template>

  <div class="row" id="app-panel">
    <div id="top-content" class="col-sm">
      <p> Welcome to Stillbank.  Our philosophy is that it is never too early to start learning how to manage
      money.  So regarless if you are earning money from doing chores around the house or saving up your
      birthday money it is important to be responsible. </p>
      <h2> What is a Still Bank? </h2>
      A still bank is a small bank with a slot in the top usually made of porcelain or ceramic.  You probably know them as
      piggy banks as that is the iconic staple of still banks historically.  These types of banks had often been used
      by children for storing their money which is why we have chosen it as the name of our program.  
      <h2> Kids </h2>
      <p> Managing your money can be scary.  At the same time it can be a very rewarding experience as well.
      As an adult you will learn that knowing how much money you have in your account.  As a kid it is the best time
      to start learning that skill.  Your mom or dad will keep track of depositing (adding money) and withdrawing (taking money out)
      of your account so you will always know how much you have.  You can then categorize your spending so you will
      know where you money is going. </p>
      <router-link class="btn btn-primary btn-lg" role="button" :to="{ name: 'Transaction', params: { id: 1 }}"> Kids Login </router-link>
      <h2> Parents </h2>
      <p> Start teaching your kids about money management.  Set up a Stillbank account and you can show your kids at any time
      how much money they have from allowances, gifts, etc.  Deduct money on the fly when they make a purchase.  Help them to set goals.
      Teach them how to track their spending and set up budgets.  </p>
      <router-link class="btn btn-primary btn-lg" role="button" :to="{ name: 'AdminTransactions', params: { id: 1 }}"> Adult Login </router-link>
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
