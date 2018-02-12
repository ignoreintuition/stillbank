<template>
  <div id="content" class="container">
      <div id="app">
        <div id="header" class="row">
          <div class="col-12">
            <div class="row">
              <div class="col-md-2 col-4">
                <img id="logo" src="./assets/img/logo.png">
              </div>
              <div class="col-md-10 col-8">
                <H1> StillBank </H1>
                <H2> Money Management for Kids </H2>
              </div>
            </div>
          </div>
        </div>
        <div id="top-nav" class="row">
          <nav class="navbar navbar-expand-lg navbar-light">
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <router-link :to="{ name: 'Home' }" class="nav-link"> HOME </router-link>
                </li>
                <li v-if="!auth()" class="nav-item">
                  <a href="#" data-toggle="modal" data-target="#loginModal" class="nav-link"> LOGIN </a>
                </li>
                <li v-if="!auth()" class="nav-item">
                  <a href="#" data-toggle="modal" data-target="#signupModal" class="nav-link"> SIGN UP </a>
                </li>
                <li v-if="auth() && !master()" class="nav-item">
                  <router-link :to="{ name: 'Transaction' }" class="nav-link"><i class="fa fa-money" aria-hidden="true"></i> MY MONEY </router-link>
                </li>
                <li v-if="auth() && !master()" class="nav-item">
                  <router-link :to="{ name: 'Account' }" class="nav-link"><i class="fa fa-user" aria-hidden="true"></i> ABOUT ME </router-link>
                </li>
                <li v-if="auth() && !master()" class="nav-item">
                  <router-link :to="{ name: 'Budget' }" class="nav-link"><i class="fa fa-question-circle" aria-hidden="true"></i> BUDGET & GOALS </router-link>
                </li>
                <li v-if="auth() && master()" class="nav-item">
                  <router-link :to="{ name: 'AdminAccounts' }" class="nav-link"> ACCOUNTS </router-link>
                </li>
                <li v-if="auth() && master()" class="nav-item">
                  <router-link :to="{ name: 'AdminSettings' }" class="nav-link"> SETTINGS </router-link>
                </li>
                <li v-if="auth()" class="nav-item">
                  <router-link :to="{ name: 'Home' }" class="nav-link" onclick="sessionStorage.clear();"> LOGOUT </router-link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <router-view />
      <div id="footer" class="row">
        <div class="col-6">
          <p> Copyright 2018 Resurgence Web Design </p>
        </div>
        <div class="col-6 right">
          <p> Logo via <a href="http://logomakr.com" title="Logo Makr">LogoMakr.com</a></p>
        </div>
      </div>
    </div></template>

<script>
export default {
  name: 'app',
  methods: {
    auth() {
      return (sessionStorage.getItem('sb.acctID')) ? true : false;
    },
    master(){
      return (sessionStorage.getItem('sb.master') == 'true') ? true : false;
    }
  },
}
</script>
