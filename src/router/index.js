import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Transaction from '@/components/Transaction';
import Account from '@/components/Account';
import AdminAccount from '@/components/Admin-Account';
import AdminTransaction from '@/components/Admin-Transaction';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home/',
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
      path: '/Admin/Account/',
      name: 'AdminAccount',
      component: AdminAccount,
    },
    {
      path: '/Admin/Transaction',
      name: 'AdminTransaction',
      component: AdminTransaction,
    },
  ],
});
