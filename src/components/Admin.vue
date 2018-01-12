<template>

  <div class="row" id="app-panel">
    <div id="top-content" class="col-sm">
      <div class="container">
        <h2> Manage your kid's accounts </h2>
        <div class="row">
          <div class="h-cell col-3"> Date </div>
          <div class="h-cell col-3"> Transaction Type </div>
          <div class="h-cell col-3"> Amount </div>
        </div>
        <div v-for="t in data.transactions" class="row">
          <input class="col-3" v-model=t.date> </input>
          <input class="col-3" v-model=t.type> </input>
          <input class="col-3" v-model=t.amount> </input>
        </div>
        <h2> New Transaction </h2>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="newTransDate"> Date </label>
            <input id="newTransDate" type="date" class="col-3 form-control" v-model=newTrans.date> </input>
          </div>
          <div class="form-group">
            <label for="newTransType"> Type </label>
            <select id="newTransType" class="col-3 form-control" v-model=newTrans.type>
              <option value="credit"> Credit </option>
              <option value="credit"> Debit </option>
            </select>
          </div>
          <div class="form-group">
            <label for="newTransAmount"> Amount </label>
            <input id="newTransAmount" type="number" min = "0.01" step = "0.01" class="col-3 form-control" v-model=newTrans.amount> </input>
          </div>
          <div>
            <button type="submit"> submit </button>
          </div>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
window.jQuery = require('jquery');

const $ = window.jQuery;
export default {
  data() {
    return {
      data: {
        transactions: [],
      },
      newTrans: {},
    };
  },
  created() {
    const url = `http://localhost:3000/trans/?sid=${this.$route.params.id}`;
    $.get(url, (d) => {
      this.data.transactions = d;
    });
  },
  methods: {
    handleSubmit(evt) {
      evt.preventDefault()
      this.newTrans.accountID = this.$route.params.id;
      const url = `http://localhost:3000/`;
      $.post(url, this.newTrans);
      this.data.transactions.push(this.newTrans);
    },
  },
};
</script>
