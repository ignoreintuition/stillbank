import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Transaction from '@/components/Transaction';
import Account from '@/components/Account';
import Budget from '@/components/Budget';
import AdminTransactions from '@/components/Admin/Transactions';
import AdminAccounts from '@/components/Admin/Accounts';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Transaction/:id',
      name: 'Transaction',
      component: Transaction,
    },
    {
      path: '/Account/:id',
      name: 'Account',
      component: Account,
    },
    {
      path: '/Budget/:id',
      name: 'Budget',
      component: Budget,
    },
    {
      path: '/Admin/Transactions/:id',
      name: 'AdminTransactions',
      component: AdminTransactions,
    },
    {
      path: '/Admin/Accounts/:id',
      name: 'AdminAccounts',
      component: AdminAccounts,
    },
  ],
});
