<template>
  <div class="container">
      <div id="app">
        <div class="row">
          <div id="header" class="col-sm">
            <H1> Stillbank: A Super Simple Accounting App for Kids </H1>
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
                <li class="nav-item">
                  <router-link :to="{ name: 'Transaction', params: { id: $route.params.id }}" class="nav-link"><i class="fa fa-money" aria-hidden="true"></i> MY MONEY </router-link>
                </li>
                <li class="nav-item">
                  <router-link :to="{ name: 'Account', params: { id: $route.params.id }}" class="nav-link"><i class="fa fa-user" aria-hidden="true"></i> ABOUT ME </router-link>
                </li>
                <li class="nav-item">
                  <router-link :to="{ name: 'AdminAccount', params: { id: $route.params.id }}" class="nav-link"> ADMIN ACCOUNT </router-link>
                </li>
                <li class="nav-item">
                  <router-link :to="{ name: 'AdminTransaction', params: { id: $route.params.id }}" class="nav-link"> ADMIN TRANSACTION </router-link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <router-view />
      </div>
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
/*
BLACK #000000
PAYNE'S GREY #5D737E
SUNNY #FFF07C
HONEYDEW #F0F7EE
DARK SEA GREEN #87BBA2
*/
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

#app-panel {
  background-color: #F0F7EE;
}


#header, #top-nav, #footer {
  background-color: #FFF07C;
}

#top-content {
  padding: 5px;
}

.cell, .f-cell, .h-cell, .input-cell {
  margin: 2px;
}

.cell {
  background-color: #FFFFFF;
  color: #000000;
}


.h-cell , .amt {
  text-align: center;
}

.cell a,
.cell a:visited,
.cell a:hover,
.cell a:active {
  color: #000000;
}

</style>
