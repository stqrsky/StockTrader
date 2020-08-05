import Vue from 'vue'
import VueRouter from 'vue-router';

import App from './App.vue'
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',      // URLs , no #
  routes                // routes: routes, ES6-syntax used
});

new Vue({
  el: '#app',
  router,               // routes: routes, ES6-syntax used
  render: h => h(App)
})
