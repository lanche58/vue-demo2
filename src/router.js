import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from './views/home/Home';
import Cart from './views/cart/Cart';
import Address from './views/address/Address';

const routes = [
    {
      path: '/',
      component: Home
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/address',
      component: Address
    }
]

const router = new VueRouter({
  routes
});

export default router;