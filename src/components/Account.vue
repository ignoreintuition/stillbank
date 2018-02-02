<template>
  <div class="row" id="app-panel">
    <div id="top-content" class="col-sm">
      <div class="container">
        <h2> Account Details </h2>
        <p> From your account details you can see important information that pertains to your account.  This includes
        any cyclical (repeated) transactions such as allowances or debt payments.  You can also see a summary of how much money
        you have in your account which is called your Balance.</p>
        <table class="table">
          <tr>
            <td>
              <a href="#"><i class="fa fa-pencil" aria-hidden="true"></i></a>
            </td>
            <td> Name </td>
            <td> {{ data.name }} </td>
          </tr>
          <tr>
            <td></td>
            <td> Allowance </td>
            <td> {{ data.allowance }} </td>
          </tr>
          <tr>
            <td></td>
            <td> Starting Balance </td>
            <td> {{ data.startBal }} </td>
          </tr>
          <tr>
            <td></td>
            <td> Balance </td>
            <td> {{ data.total }} </td>
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
};
</script>
