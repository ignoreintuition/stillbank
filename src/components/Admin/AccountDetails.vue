<template>
  <div class="row" id="app-panel">
    <div id="top-content" class="col-sm">
      <div class="container">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link :to="{ name: 'AdminAccounts' }" > Accounts </router-link></li>
          <li class="breadcrumb-item active">Settings</li>
        </ol>
        <h2> Account Settings </h2>
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
      from: null,
    };
  },
  methods: {
    formatCurrency(value) {
      const val = (value / 1).toFixed(2);
      return `$${val.toString()}`;
    },
  },
  created() {
    const url = `${process.env.REST_API}/acct/${this.$route.params.id}`;
    $.get(url, (d) => {
      this.data = d;
    });
  },
};
</script>
