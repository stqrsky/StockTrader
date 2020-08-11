import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue'
import { routes } from './routes';
import store from './store/store';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-stock-trader-6978c.firebaseio.com/';

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

const router = new VueRouter({
  mode: 'history',      // URLs , no #
  routes                // routes: routes, ES6-syntax used
});

new Vue({
  el: '#app',
  router,               // routes: routes, ES6-syntax used
  store,
  render: h => h(App)
})
