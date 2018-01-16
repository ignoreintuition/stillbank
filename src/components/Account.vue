<template>
  <div class="row" id="app-panel">
    <div id="top-content" class="col-sm">
      <div class="container">
        <h2> About Me </h2>
        <table class="table table-striped">
          <tr>
            <td> Name</td>
            <td> {{ data.name }} </td>
          </tr>
          <tr>
            <td> Allowance </td>
            <td> {{ data.allowance }} </td>
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
    const url = `http://localhost:3000/acct/${this.$route.params.id}`;
    $.get(url, (d) => {
      this.data = d;
    });
  },
};
</script>
