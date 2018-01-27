<template>
  <div class="row" id="app-panel">
    <div id="top-content" class="col-sm">
      <div class="container">
        <h2> Account Details </h2>
        <p> From your account details you can see important information that pretains to your account.  This includes
        and cyclical (repeated) transactions such as allowances or debt payments.  You can also see a summary of how much money
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
            <td> Balance </td>
            <td> {{ data.balance }} </td>
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
        name: null,
        allowance: null,
      },
    };
  },
  created() {
    const url = `${process.env.REST_API}/acct/${this.$route.params.id}`;
    $.get(url, (d) => {
      this.data = d;
    });
  },
};
</script>
