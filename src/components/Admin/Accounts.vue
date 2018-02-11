<template>
<div class="row" id="app-panel">
  <div id="top-content" class="col-sm">
    <div class="container">
    <ol class="breadcrumb">
      <li class="breadcrumb-item active">Accounts</li>
    </ol>
      <h2> Manage your kids accounts </h2>
      <p> You want your kids to be independent so make sure they each have their own account and their own
      transaction ledger.  Set up automatic transactions for allowances and set reminders for when things need to be paid. </p>
      <table class="table table-striped">
        <thead>
          <tr>
            <th> Delete </th>
            <th> Account </th>
            <th> Ledger </th>
            <th> Name </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="a in filterAcct">
            <td class="t-button">
              <a href="javascript:;" @click="deleteAcct(a)"> <i class="fa fa-trash" aria-hidden="true"></i> </a>
            </td>
            <td class="t-button">
            <router-link :to="{ name: 'AdminAccountDetails', params: { id: a.accountID }}" > <i class="fa fa-user" aria-hidden="true"></i> </router-link>
            </td>
            <td class="t-button">
              <router-link :to="{ name: 'AdminTransactions', params: { id: a.accountID }}" > <i class="fa fa-list" aria-hidden="true"></i> </router-link>
            </td>
            <td> {{ a.name }} </td>
          </tr>
        </tbody>
      </table>
      <button type="button" class="btn btn-primary btn-lg btn-block" data-toggle="modal" data-target="#newAcctModal">
        Add Account
      </button>
    </div>
  </div>

  <!-- New Account Modal -->
  <div class="modal fade" id="newAcctModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <form @submit.prevent="handleSubmit">
          <div class="modal-header">
            <h2 class="modal-title"> New Account </h2>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
          </div>
          <div class="modal-body">
          <div id="newUserMessage"> </div>
            <div class="form-group">
              <label for="newAcctNm" class="form-control-label"> Name </label>
              <input id="newTransDate" type="text" class="col-12 form-control" v-model=newAcct.name required> </input>
            </div>
            <div class="form-group">
              <label for="newAcctStartBal" class="form-control-label"> Starting Balance </label>
              <input id="newTransAmount" type="number" min="0.00" step="0.25" class="col-12 form-control" v-model=newAcct.startBal required> </input>
            </div>
            <div class="form-group">
              <label for="newLogin" class="form-control-label"> Login </label>
              <input id="newTransLogin" type="text" class="col-12 form-control" v-model=newAcct.login required> </input>
            </div>
            <div class="form-group">
              <label for="newPassword" class="form-control-label"> Password </label>
              <input id="newTransPassword" type="password" class="col-12 form-control" v-model=newAcct.password required> </input>
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

  <!-- Delete Account Modal -->
  <div class="modal fade" id="deleteAcctModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <form @submit.prevent="handleDelete">
          <div class="modal-header">
            <h2 class="modal-title"> Delete Account </h2>
            <input id="_id" type="hidden" v-model=currAcct._id> </input>
            <input id="accountID" type="hidden" v-model=currAcct.accountID> </input>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
          </div>
          <div class="modal-body">
            Are you sure you want to delete this account?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Dismiss</button>
            <button type="submit" class="btn btn-danger"> Delete </button>
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
        accts: [],
      },
      newAcct: {
        name: null,
        masterAccountID: null,
        startBal: null,
        login: null,
        password: null,
      },
      currAcct: {
        _id: null,
        name: null,
        masterAccountID: null,
        startBal: null,
        login: null,
        password: null,
        accountID: null,
      }
    };
  },
  computed: {
    filterAcct(){
      return this.data.accts.filter(t => t.accountID !== t.masterAccountID )
    },
  },
  methods: {
    refreshData() {
      this.data.acctID = sessionStorage.getItem('sb.acctID');
      const url = `${process.env.REST_API}/adminAcct/${this.data.acctID}`;
      $.get(url, (d) => {
        this.data.accts = d;
      });
    },
    handleSubmit(evt) {
      evt.preventDefault();
      this.newAcct.masterAccountID = this.data.acctID;
      const url = `${process.env.REST_API}/addAcct`;
      $.post(url, this.newAcct)
      .done(d => {
        if (d.error)
          document.getElementById("newUserMessage").innerHTML = "<p>Login Already Exists</p>";
        else {
          this.newAcct.accountID = d;
          this.data.accts.push(this.newAcct);
          this.newAcct = {
            name: null,
            masterAccountID: null,
            startBal: null,
            login: null,
            password: null,
            total: null,
          };
          $('#newAcctModal').modal('hide');
        }
      });
    },
    formatCurrency(value) {
      const val = (value / 1).toFixed(2);
      return `$${val.toString()}`;
    },
    handleDelete(evt){
      evt.preventDefault();
      const url = `${process.env.REST_API}/deleteAcct/${this.currAcct.accountID}`;
      const self = this;
      $('#deleteAcctModal').modal('hide');
      $.ajax({
        url,
        type: 'DELETE',
        contentType: 'text/plain',
        success() {
          const i = self.data.accts.map(item => {
            return item.accountID
          }).indexOf(self.currAcct.accountID);
          self.data.accts.splice(i, 1);
        },
      });
    },
    deleteAcct(item){
      $('#deleteAcctModal').modal('show');
      this.currAcct = item;
    }
  },
  mounted() {
    this.refreshData();
  },
};
</script>
