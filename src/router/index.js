import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Transaction from '@/components/Transaction';
import Account from '@/components/Account';
import Admin from '@/components/Admin';


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
      path: '/Admin/:id',
      name: 'Admin',
      component: Admin,
    },
  ],
});
