<template>
  <div class="row" id="app-panel">
    <div id="top-content" class="col-sm">
      <div class="container">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link :to="{ name: 'AdminAccounts' }" > Accounts </router-link></li>
        <li class="breadcrumb-item active">Settings</li>
      </ol>
      <h2> Account Settings </h2>
        <table class="table">
          <tr>
            <td>
              <a href="#"><i class="fa fa-pencil" aria-hidden="true"></i></a>
            </td>
            <td> Name </td>
            <td> {{ data.name }} </td>
          </tr>
          <tr>
            <td>
              <a href="#"><i class="fa fa-pencil" aria-hidden="true"></i></a>
            </td>
            <td> Password </td>
            <td> ******** </td>
          </tr>
          <tr>
            <td>
            </td>
            <td> Total </td>
            <td> {{formatCurrency(data.total)}} </td>
          </tr>
        </table>
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
    test(){
      console.log('test');
    },
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
