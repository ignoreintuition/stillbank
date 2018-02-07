<template>
  <div class="row" id="app-panel">
    <div id="top-content" class="col-sm">
      <div class="container">
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
