import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Transaction from '@/components/Transaction';
import Account from '@/components/Account';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Transaction/',
      name: 'Transaction',
      component: Transaction,
    },
    {
      path: '/Account',
      name: 'Account',
      component: Account,
    },
  ],
});
