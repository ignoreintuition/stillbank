<template>
<div class="row" id="app-panel">
  <div id="top-content" class="col-sm">
    <div class="container">
      <h2> The Ledger </h2>
      <p> A ledger is a list of every time you get money (a debit) and spend money (a credit).  Using the
      filters below you can adjust the date range for the transactions displayed.  Your balance (total of all
      debits and credits) shows how much money you actually have </p>
  
      <!-- Filter Panel -->
      <div class='filterPanel'>
        <form @submit.prevent="updateDate" class="form-inline">
          <label class="sr-only" for="inlineFormInput">StartDate</label>
          <input type="date" class="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" v-model=data.startDate>
          <label class="sr-only" for="inlineFormInput">EndDate</label>
          <input type="date" class="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" v-model=data.endDate>
        </form>
      </div>

      <table class="table table-striped">
        <thead>
          <tr>
            <th> Edit </th>
            <th> Date </th>
            <th> Debit </th>
            <th> Credit </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="t in filterTrans">
            <td>
                <button @click="itemClicked(t)"><i class="fa fa-pencil" aria-hidden="true"></i></button>
            </td>
            <td> {{ t.date }} </td>
            <td> <div class="debit" v-if="t.type === 'debit'"> {{ formatCurrency(t.amount) }} </div></td>
            <td> <div class="credit" v-if="t.type === 'credit'"> -{{ formatCurrency(t.amount) }} </div></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Update Transaction Modal -->
  <div class="modal fade" id="updateTransModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <form @submit.prevent="handleUpdate">
          <div class="modal-header">
            <h2 class="modal-title"> Update Transaction </h2>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="updateTransDate" class="form-control-label"> Date </label>
              <input readonly id="updateTransDate" type="date" class="col-12 form-control" v-model=updateTrans.date required> </input>
            </div>
            <div class="form-group">
              <label for="updateTransType" class="form-control-label"> Type </label>
              <input readonly id="updateTransType" class="col-12 form-control" v-model=updateTrans.type required> </input>
            </div>
            <div class="form-group">
              <label for="updateTransAmount" class="form-control-label"> Amount </label>
              <input readonly id="updateTransAmount" class="col-12 form-control" v-model=updateTrans.amount required> </input>
            </div>
            <div class="form-group">
              <label for="updateTransCategory" class="form-control-label"> Category </label>
              <input id="updateTransCategory" type="text" class="col-12 form-control" v-model=updateTrans.category> </input>
            </div>
            <div class="form-group">
              <label for="updateTransComment" class="form-control-label"> Comments </label>
              <input id="updateTransComment" type="text" class="col-12 form-control" v-model=updateTrans.comment> </input>
            </div>
            <div>
              <input id="_id" type="hidden" v-model=updateTrans._id> </input>
              <input id="accountID" type="hidden" v-model=updateTrans.accountID> </input>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary"> Submit </button>
          </div>
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
        acctID: null,
        transactions: [],
        startDate: '2020-01-01',
        endDate: '2020-12-31',
      },
      updateTrans: {
        _id: null,
        date: null,
        type: null,
        amount: null,
        comment: null,
        category: null,
      },
    };
  },
  computed: {
    filterTrans(){
      return this.data.transactions.filter(t =>
        t.date >= this.data.startDate && t.date <= this.data.endDate )
    }
  },
  created() {
    this.data.acctID = sessionStorage.getItem('sb.acctID');
    const url = `${process.env.REST_API}/getTrans/${this.data.acctID}`;
    $.get(url, (d) => {
      this.data.transactions = d;
    });
  },
  methods: {
    itemClicked(item) {
      this.updateTrans._id = item._id;
      this.updateTrans.date = item.date;
      this.updateTrans.type = item.type;
      this.updateTrans.amount = item.amount;
      this.updateTrans.comment = item.comment;
      this.updateTrans.accountID = item.accountID;
      this.updateTrans.category = item.category;
      $('#updateTransModal').modal('show');
    },
    handleUpdate(evt) {
      evt.preventDefault();
      const url = `${process.env.REST_API}/updateTrans/${this.updateTrans._id}`;
      $.post(url, this.updateTrans);
      const i = this.data.transactions.map(item => item._id).indexOf(this.updateTrans._id);
      this.data.transactions.splice(i, 1, this.updateTrans);
      $('#updateTransModal').modal('hide');
      this.updateTrans = {
        _id: null,
        date: null,
        type: null,
        amount: null,
        comment: null,
        category: null,
      };
    },

    formatCurrency(value) {
      const val = (value / 1).toFixed(2);
      return `$${val.toString()}`;
    },
    updateDate() {
      console.log('update date');
    },
  },
};
</script>
