<template>

  <div class="row" id="app-panel">
    <div id="top-content" class="col-sm">
    <form id="donate" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
      <input type="hidden" name="cmd" value="_s-xclick">
      <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----
      ">
      <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
      <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
    </form>

      <p> Welcome to Stillbank.  Our philosophy is that it is never too early to start learning how to manage
      money.  So regardless if you are earning money from doing chores around the house or saving up your
      birthday money it is important to be responsible with your money.  Set goals for yourself, categorize your
      transactions, and monitor how much money you have so you can save up and spend wisely. </p>
      <h2> What is a Still Bank? </h2>
      <img id="hero" src="../assets/img/bank.jpg">
      A still bank is a small bank with a slot in the top usually made of porcelain or ceramic.  You probably know them as
      piggy banks as that is the iconic staple of still banks historically.  These types of banks had often been used
      by children for storing their money which is why we have chosen it as the name of our program.  Think of StillBank
      as your modern "Piggy Bank" where parents deposit your allowance and track your spending.</p>
      <p><button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#signupModal" > Get Started Today</button></p>
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
      <p><button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#signupModal" > Sign Up </button></p>
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
          <form id = "signupForm" @submit.prevent="handleSubmit">
            <div class="modal-header">
              <h2 class="modal-title"> Signup </h2>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
          </div>
            <div class="modal-body">
              <div id="newUserMessage"> </div>
              <div class="form-group">
                <label for="newName" class="form-control-label"> Name </label>
                <input id="newName" name="username" class="col-12 form-control" v-model=newAcct.name required> </input>
              </div>
              <div class="form-group">
                <label for="newUsername" class="form-control-label"> User ID </label>
                <input id="newUsername" name="username" class="col-12 form-control" v-model=newAcct.login required> </input>
              </div>
              <div class="form-group">
                <label for="newEmail" class="form-control-label"> Email Address </label>
                <input id="newEmail" name="email" class="col-12 form-control"  v-model=newAcct.email required> </input>
              </div>
              <div class="form-group">
                <label for="newPassword" class="form-control-label"> Password </label>
                <input id="newPassword" name="password" class="col-12 form-control"  v-model=newAcct.password required> </input>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button id="submitButton" type="submit" class="btn btn-primary"> Submit </button>
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
      newAcct: {
        name: null,
        master: true,
        login: null,
        password: null,
        email: null,
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
    handleSubmit(evt) {
      evt.preventDefault();
      const url = `${process.env.REST_API}/addMasterAcct`;
      $.post(url, this.newAcct)
      .done(d => {
        if (d.error)
          document.getElementById("newUserMessage").innerHTML = "<p>Login Already Exists</p>";
        else {
          this.newAcct = {
            name: null,
            login: null,
            password: null,
            email: null,
          };
          $('#signupModal').modal('hide');
          $('#loginModal').modal('show');
          document.getElementById("loginMessage").innerHTML = "<p>Login in to get started</p>";
        }
      });
    },
  },
};
</script>
