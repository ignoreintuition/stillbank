<template>
  <div class="row" id="app-panel">
    <div id="top-content" class="col-sm">
      <div class="container">
        <h2> Account Details </h2>
        <p> From your account details you can see important information that pertains to your account.  This includes
        any cyclical (repeated) transactions such as allowances or debt payments.  You can also see a summary of how much money
        you have in your account which is called your Balance.</p>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name" class="form-control-label"> Name </label>
            <input id="name" type="text" class="col-6 form-control" v-model=data.name required> </input>
          </div>
          <div class="form-group">
            <label for="password" class="form-control-label"> Password </label>
            <input id="password" type="password" class="col-6 form-control" v-model=data.password required> </input>
          </div>
          <div class="form-group">
            <label for="total" class="form-control-label"> Total </label>
            <input readonly id="total" class="col-6 form-control" required :value="formatCurrency(data.total)">  </input>
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
  methods: {
    formatCurrency(value) {
      const val = (value / 1).toFixed(2);
      return `$${val.toString()}`;
    },
  },
  created() {
    this.data.acctID = sessionStorage.getItem('sb.acctID');
    const url = `${process.env.REST_API}/acct/${this.data.acctID}`;
    $.get(url, (d) => {
      this.data = d;
    });
  },
};
</script>
