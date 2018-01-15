<template>
<div class="row" id="app-panel">
  <div id="top-content" class="col-sm">
    <div class="container">
      <h2> Manage your kid's accounts </h2>
      <button type="button" class="btn btn-primary btn-lg btn-block" data-toggle="modal" data-target="#newTransModal">
          Add Transaction
        </button>
      <table class="table table-striped">
        <thead>
          <tr>
            <th> Edit </th>
            <th> Date </th>
            <th> Transaction Type </th>
            <th> Amount </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="t in data.transactions">
            <td>
              <button @click="itemClicked(t)"><i class="fa fa-pencil" aria-hidden="true"></i></button>
            </td>
            <td> {{t.date}} </td>
            <td> {{t.type}}</td>
            <td> {{t.amount}}</td>
          </tr>
        </tbody>
      </table>
      <button type="button" class="btn btn-primary btn-lg btn-block" data-toggle="modal" data-target="#newTransModal">
          Add Transaction
        </button>
    </div>
  </div>

  <!-- New Transaction Modal -->
  <div class="modal fade" id="newTransModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <form @submit.prevent="handleSubmit">
          <div class="modal-header">
            <h2 class="modal-title"> New Transaction </h2>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="newTransDate" class="form-control-label"> Date </label>
              <input id="newTransDate" type="date" class="col-12 form-control" v-model=newTrans.date> </input>
            </div>
            <div class="form-group">
              <label for="newTransType" class="form-control-label"> Type </label>
              <select id="newTransType" class="col-12 form-control" v-model=newTrans.type>
                  <option value="credit"> Credit </option>
                  <option value="credit"> Debit </option>
                </select>
            </div>
            <div class="form-group">
              <label for="newTransAmount" class="form-control-label"> Amount </label>
              <input id="newTransAmount" type="number" min="0.01" step="0.01" class="col-12 form-control" v-model=newTrans.amount> </input>
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
              <input id="updateTransDate" type="date" class="col-12 form-control" v-model=updateTrans.date> </input>
            </div>
            <div class="form-group">
              <label for="updateTransType" class="form-control-label"> Type </label>
              <input id="updateTransType" class="col-12 form-control" v-model=updateTrans.type> </input>
            </div>
            <div class="form-group">
              <label for="updateTransAmount" class="form-control-label"> Amount </label>
              <input id="updateTransAmount" class="col-12 form-control" v-model=updateTrans.amount> </input>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-danger"> Delete </button>
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
        transactions: [],
      },
      newTrans: {
        date: null,
        type: null,
        amount: null,
      },
      updateTrans: {
        date: null,
        type: null,
        amount: null,
      },
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
      evt.preventDefault();
      this.newTrans.accountID = this.$route.params.id;
      const url = 'http://localhost:3000/';
      $.post(url, this.newTrans);
      this.data.transactions.push(this.newTrans);
      $('#newTransModal').modal('hide');
      this.newTrans.date = null;
      this.newTrans.type = null;
      this.newTrans.amount = null;
    },
    handleUpdate(evt) {
      evt.preventDefault();
    },
    handleDelete(evt) {
      evt.preventDefault();
    },
    itemClicked(item) {
      this.updateTrans.date = item.date;
      this.updateTrans.type = item.type;
      this.updateTrans.amount = item.amount;
      $('#updateTransModal').modal('show');
    },
  },
};
</script>
