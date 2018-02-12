<template>
  <div class="row" id="app-panel">
    <div id="top-content" class="col-sm">
      <div class="container">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active">Settings</li>
        </ol>
        <h2> Account Settings </h2>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name" class="form-control-label"> Name </label>
            <input readonly id="name" type="text" class="col-6 form-control" v-model=data.name required> </input>
          </div>
          <div class="form-group">
            <label for="password" class="form-control-label"> Password </label>
            <input id="password" type="password" class="col-6 form-control" required> </input>
          </div>
          <div>
            <button type="submit" class="btn btn-primary"> Update </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
const $ = window.jQuery;

export default {
  name: 'Account',
  data() {
    return {
      data: {
        acctID: null,
        name: null,
        allowance: null,
        total: null,
        startBal: null,
      },
    };
  },
  created() {
    this.data.acctID = sessionStorage.getItem('sb.acctID');
    const url = `${process.env.REST_API}/acct/${this.data.acctID}`;
    $.get(url, (d) => {
      this.data = d;
    });
  },
  methods: {
    handleSubmit(evt) {
      evt.preventDefault();
      const url = `${process.env.REST_API}/updatePassword/${this.data.accountID}`;
      const pw = (document.getElementById("password").value);
      $.post(url, {'password': pw});
    },
  },
};
</script>
