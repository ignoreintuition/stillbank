<template>
<div class="row" id="app-panel">
  <div id="top-content" class="col-sm">
    <div class="container">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><router-link :to="{ name: 'AdminAccounts' }" > Accounts </router-link></li>
      <li class="breadcrumb-item active">Transactions</li>
    </ol>
    <h2> Manage Your Kid's Ledger </h2>
      <p> Diligence is critical to keeping your kids on track for saving money.  By regularly updating the transactions in their account they
      can get immediate feedback on where their money is going.  The better the records you keep the better they will understand what it means
      to save money.  Think about it as you are the banker and your kids are the customer. </p>
      <!-- Filter Panel -->
      <div class='filterPanel'>
        <form @submit.prevent="updateDate" class="form-inline">
          <label class="sr-only" for="inlineFormInput">StartDate</label>
          <input type="date" class="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" v-model=data.startDate>
          <label class="sr-only" for="inlineFormInput">EndDate</label>
          <input type="date" class="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" v-model=data.endDate>
        </form>
      </div>

      <button type="button" class="btn btn-primary btn-lg btn-block" data-toggle="modal" data-target="#newTransModal">
        Add Transaction
      </button>
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
            <td> {{t.date}} </td>
            <td> <div class="debit" v-if="t.type === 'debit'"> {{ formatCurrency(t.amount) }} </div></td>
            <td> <div class="credit" v-if="t.type === 'credit'"> -{{ formatCurrency(t.amount) }} </div></td>
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
              <input id="newTransDate" type="date" class="col-12 form-control" v-model=newTrans.date required> </input>
            </div>
            <div class="form-group">
              <label for="newTransType" class="form-control-label"> Type </label>
              <select id="newTransType" class="col-12 form-control" v-model=newTrans.type required>
                  <option value="credit"> Credit </option>
                  <option value="debit"> Debit </option>
              </select>
            </div>
            <div class="form-group">
              <label for="newTransAmount" class="form-control-label"> Amount </label>
              <input id="newTransAmount" type="number" min="0.01" step="0.01" class="col-12 form-control" v-model=newTrans.amount required> </input>
            </div>
            <div class="form-group">
              <label for="newTransComment" class="form-control-label"> Comments </label>
              <input id="newTransComment" type="text" class="col-12 form-control" v-model=newTrans.comment> </input>
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
              <input id="updateTransDate" type="date" class="col-12 form-control" v-model=updateTrans.date required> </input>
            </div>
            <div class="form-group">
              <label for="updateTransType" class="form-control-label"> Type </label>
              <select id="updateTransType" class="col-12 form-control" v-model=updateTrans.type required>
                  <option value="credit"> Credit </option>
                  <option value="debit"> Debit </option>
              </select>
            </div>
            <div class="form-group">
              <label for="updateTransAmount" class="form-control-label"> Amount </label>
              <input id="updateTransAmount" type="number" min="0.01" step="0.01" class="col-12 form-control" v-model=updateTrans.amount required> </input>
            </div>
            <div class="form-group">
              <label for="updateTransCategory" class="form-control-label"> Category </label>
              <input id="updateTransCategory" type="text" class="col-12 form-control" v-model=updateTrans.category> </input>
            </div>
            <div>
            <input id="_id" type="hidden" v-model=updateTrans._id> </input>
            <input id="accountID" type="hidden" v-model=updateTrans.accountID> </input>
            </div>
            <div class="form-group">
              <label for="updateTransComment" class="form-control-label"> Comments </label>
              <input id="updateTransComment" type="text" class="col-12 form-control" v-model=updateTrans.comment> </input>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button @click="handleDelete(updateTrans._id)" type="button" class="btn btn-danger"> Delete </button>
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
        startDate: '2018-01-01',
        endDate: '2018-12-31',
      },
      newTrans: {
        date: null,
        type: null,
        amount: null,
        category: null,
        comment: null,
      },
      updateTrans: {
        _id: null,
        date: null,
        type: null,
        amount: null,
        category: null,
        comment: null,
      },
    };
  },
  created() {
    const url = `${process.env.REST_API}/getTrans/${this.$route.params.id}`;
    $.get(url, (d) => {
      this.data.transactions = d;
    });
  },
  computed: {
    filterTrans(){
      return this.data.transactions.filter(t =>
        t.date >= this.data.startDate && t.date <= this.data.endDate )
    }
  },
  methods: {
    handleSubmit(evt) {
      const self = this;
      evt.preventDefault();
      this.newTrans.accountID = this.$route.params.id;
      const url = `${process.env.REST_API}/`;
      $.post(url, this.newTrans, function(d){
        self.data.transactions.push(d);
      });
      $('#newTransModal').modal('hide');
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
        category: null,
        comment: null,
      };
    },
    handleDelete(_id) {
      const url = `${process.env.REST_API}/deleteTrans/${_id}`;
      const self = this;
      $('#updateTransModal').modal('hide');
      $.ajax({
        url,
        type: 'DELETE',
        contentType: 'text/plain',
        success() {
          const i = self.data.transactions.map(item => item._id).indexOf(_id);
          self.data.transactions.splice(i, 1);
        },
      });
    },
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
    formatCurrency(value) {
      const val = (value / 1).toFixed(2);
      return `$${val.toString()}`;
    },
  },
};
</script>
