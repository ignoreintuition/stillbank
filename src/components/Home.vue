<template>

  <div class="row" id="app-panel">
    <div id="top-content" class="col-sm">
      <p> Welcome to Stillbank.  Our philosophy is that it is never too early to start learning how to manage
      money.  So regarless if you are earning money from doing chores around the house or saving up your
      birthday money it is important to be responsible. </p>
      <h2> What is a Still Bank? </h2>
      <img id="hero" src="../assets/img/bank.jpg">
      A still bank is a small bank with a slot in the top usually made of porcelain or ceramic.  You probably know them as
      piggy banks as that is the iconic staple of still banks historically.  These types of banks had often been used
      by children for storing their money which is why we have chosen it as the name of our program.
      <h2> Kids </h2>
      <p> Managing your money can be scary.  At the same time it can be a very rewarding experience as well.
      As an adult you will learn that knowing how much money you have in your account.  As a kid it is the best time
      to start learning that skill.  Your mom or dad will keep track of depositing (adding money) and withdrawing (taking money out)
      of your account so you will always know how much you have.  You can then categorize your spending so you will
      know where you money is going. </p>
      <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#loginModal">Login</button>
      <h2> Parents </h2>
      <p> Start teaching your kids about money management.  Set up a Stillbank account and you can show your kids at any time
      how much money they have from allowances, gifts, etc.  Deduct money on the fly when they make a purchase.  Help them to set goals.
      Teach them how to track their spending and set up budgets.  </p>
      <router-link class="btn btn-primary btn-lg" role="button" :to="{ name: 'AdminTransactions', params: { id: 1 }}"> Login </router-link>
    </div>
    <!-- Login Modal -->
    <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <form id = "loginForm" @submit.prevent="handleLogin">
            <div class="modal-header">
              <h2 class="modal-title"> Login </h2>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label for="username" class="form-control-label"> User ID </label>
                <input id="username" name="username" class="col-12 form-control"  required> </input>
              </div>
              <div class="form-group">
                <label for="password" class="form-control-label"> Password </label>
                <input type="password" id="password" name="password" class="col-12 form-control"> </input>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary"> Submit </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- Signup Modal -->
    <div class="modal fade" id="signupModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <form id = "signupForm">
            <div class="modal-header">
              <h2 class="modal-title"> Signup </h2>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
              Stillbank is in closed beta and is not currently taking sign ups.
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
          </form>
        </div>
      </div>
    </div>  </div>
</template>

<script>
window.jQuery = require('jquery');

const $ = window.jQuery;

export default {
  data() {
    return {
      data: {
        auth: 1,
      },
    };
  },
  methods: {
    handleLogin(evt) {
      evt.preventDefault();
      const url = `${process.env.REST_API}/login`;
      $.post(url, $("#loginForm").serialize(), function(d){
        if (d.accountID) {
          sessionStorage.setItem('sb.acctID', d.accountID);
          if(d.masterAccountID === d.accountID) {
            window.location.href =`${window.location.href}Admin/Accounts/`;
            sessionStorage.setItem('sb.master', false);
          }
          else{
            window.location.href =`${window.location.href}Transaction/`;
            sessionStorage.setItem('sb.master', true);
          }
          $('#loginModal').modal('hide');
        } else
        console.log("failed");
      });
    },
  },
};
</script>
