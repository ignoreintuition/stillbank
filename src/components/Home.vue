<template>

  <div class="row" id="app-panel">
    <div id="top-content" class="col-sm">
      <p> Welcome to Stillbank.  Our philosophy is that it is never too early to start learning how to manage
      money.  So regardless if you are earning money from doing chores around the house or saving up your
      birthday money it is important to be responsible with your money.  Set goals for yourself, categorize your
      transactions, and monitor how much money you have so you can save up and spend wisely. </p>
      <h2> What is a Still Bank? </h2>
      <img id="hero" src="../assets/img/bank.jpg">
      A still bank is a small bank with a slot in the top usually made of porcelain or ceramic.  You probably know them as
      piggy banks as that is the iconic staple of still banks historically.  These types of banks had often been used
      by children for storing their money which is why we have chosen it as the name of our program.  Think of StillBank
      as your modern "Piggy Bank" where parents deposit your allowance and track your spending.
      <h2> Kids </h2>
      <p> Managing your money can be scary.  At the same time it can be a very rewarding experience.
      As an adult you always need to know how much money you have in your account.  As a kid it is the best time
      to start learning that skill.  Your mom or dad will keep track of depositing (adding money) and withdrawing (taking money out)
      of your account so you will always know how much you have.  You can then categorize your spending so you will
      know where you money is going. From your account page you can see how much money you have in total and set goals for
      your savings</p>
      <h2> Parents </h2>
      <p> It's time to start teaching your kids about money management.  Set up a Stillbank account and you can show your kids at any time
      how much money they have from allowances, gifts, etc.  Deduct money on the fly when they make a purchase.  Help them to set goals.
      Teach them how to track their spending and set up budgets.  </p>
      <p> The process is simple.  Once you have added accounts for each of your kids in the StillBank app and set their starting Balance
      you can start helping them manage their money.  If you buy something for them out of their allowance deduct that money from their
      account.  If they earned money from doing a chore add money to their account.  Encourage them to check their ledger regularly to
      see how much money they have, categorize their transactions, and make notes so they remember why they spent their money.  Then have them
      look at their spending by category and set up short and long term goals.
      </p>
      <p> Most of all: make sure they are having FUN </p>
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
              <div id="loginMessage"> </div>
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
              <button id="loginButton" type="submit" class="btn btn-primary"> Submit </button>
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
              Stillbank is currently in closed beta.  If you would like to be included as a beta tester
              email <a href="mailto:brian@resurgencewebdesign.com">brian@resurgencewebdesign.com</a>.
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
      document.getElementById("loginButton").disabled = true;
      evt.preventDefault();
      const url = `${process.env.REST_API}/login`;
      $.post(url, $("#loginForm").serialize(), function(d){
        if (d.accountID) {
          sessionStorage.setItem('sb.acctID', d.accountID);
          if(d.masterAccountID === d.accountID) {
            sessionStorage.setItem('sb.master', true);
            window.location.href =`${window.location.href}Admin/Accounts/`;
          }
          else{
            sessionStorage.setItem('sb.master', false);
            window.location.href =`${window.location.href}Transaction/`;
          }
          $('#loginModal').modal('hide');
        } else
          document.getElementById("loginMessage").innerHTML = "<p>Login Failed</p>";
        document.getElementById("loginButton").disabled = false;
        });
    },
  },
};
</script>
