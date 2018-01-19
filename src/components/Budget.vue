<template>
<div class="row" id="app-panel">
  <div id="top-content" class="col-sm">
    <div class="container">
      <h2> The Budget </h2>
      <p> A budget is a way of seeing where all your money is coming from and where it is going.  This is very important
      if you want to know why you don't have the money to buy the things that you want.  By categorizing your transactions
      you can group together similar transactions and get a better idea of what you are spending your money on over longer
      periods of time.  You can then use this information to make informed decisions about how you intend to spend
      your money in the future </p>
      <p>Currently displaying transactions for {{data.name}} from {{data.startDate}} to {{data.endDate}}</p>
      <div class='filterPanel'>
        <form @submit.prevent="updateDate" class="form-inline">
          <label class="sr-only" for="inlineFormInput">StartDate</label>
          <input type="date" class="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" v-model=data.startDate>
          <label class="sr-only" for="inlineFormInput">EndDate</label>
          <input type="date" class="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" v-model=data.endDate>
          <button type="submit" class="btn btn-primary">Update</button>
        </form>
      </div>
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
        startDate: "2018-01-01",
        endDate: "2018-12-31",
      },
    };
  },
  created() {
    const url = `http://localhost:3000/getTrans/${this.$route.params.id}`;
    $.get(url, (d) => {
      this.data.transactions = d;
    });
  },
  methods: {
    formatCurrency(value) {
      const val = (value / 1).toFixed(2);
      return `$ ${val.toString()}`;
    },
    updateDate() {
      console.log('update date');
    }
  },
};
</script>
