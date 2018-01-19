<template>
  <div class="container">
      <div id="app">
        <div id="header" class="row">
          <div class="col-sm-12"> <H1> STILLBANK </H1> </div>
          <div class="col-sm-12"> <H2> Money Management for Kids - Made Simple </H2>  </div>
        </div>
        <div id="top-nav" class="row">
          <nav class="navbar navbar-expand-lg navbar-light">
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav">
                <li v-if="this.$route.path == '/'" class="nav-item">
                  <router-link :to="{ name: 'Home' }" class="nav-link"> HOME </router-link>
                </li>
                <li v-if="this.$route.path != '/' &&  this.$route.name.indexOf('Admin') == -1" class="nav-item">
                  <router-link :to="{ name: 'Transaction', params: { id: $route.params.id }}" class="nav-link"><i class="fa fa-money" aria-hidden="true"></i> MY MONEY </router-link>
                </li>
                <li v-if="this.$route.path != '/' && this.$route.name.indexOf('Admin') == -1" class="nav-item">
                  <router-link :to="{ name: 'Account', params: { id: $route.params.id }}" class="nav-link"><i class="fa fa-user" aria-hidden="true"></i> ABOUT ME </router-link>
                </li>
                <li v-if="this.$route.path != '/' && this.$route.name.indexOf('Admin') == -1" class="nav-item">
                  <router-link :to="{ name: 'Budget', params: { id: $route.params.id }}" class="nav-link"><i class="fa fa-question-circle" aria-hidden="true"></i> WHERE'S MY MONEY </router-link>
                </li>
                <li v-if="this.$route.name.indexOf('Admin') > -1" class="nav-item">
                  <router-link :to="{ name: 'AdminTransactions', params: { id: $route.params.id }}" class="nav-link"> TRANSACTIONS </router-link>
                </li>
                <li v-if="this.$route.name.indexOf('Admin') > -1" class="nav-item">
                  <router-link :to="{ name: 'AdminAccounts', params: { id: $route.params.id }}" class="nav-link"> ACCOUNTS </router-link>
                </li>
                <li v-if="this.$route.path != '/'" class="nav-item">
                  <router-link :to="{ name: 'Home' }" class="nav-link"> LOGOUT </router-link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <router-view />
      <div class="row">
        <div id="footer" class="col-sm">
          <p> Copyright 2018 Resurgence Web Design </p>
        </div>
      </div>
    </div></template>

<script>
export default {
  name: 'app',
};
</script>

<style>

@font-face {
  font-family: "Amaranth";
  src: url('./assets/fonts/Amaranth-Regular.ttf') format("truetype");
}
body {
  background-image: url('./assets/img/light-veneer.png');
}

h1, h2, h3, h4, h5 {
  font-family: 'Amaranth', sans-serif;
}

i {
  color: #000000;
}

.filterPanel {
  padding-bottom: 5px;
}

#app-panel {
  background-color: #FFFFFF;
  padding-bottom: 20px;
  padding-top: 20px;
}

#header, #top-nav, #footer {
  background-color: #FFF07C;
}

</style>
