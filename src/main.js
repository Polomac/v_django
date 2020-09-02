import Vue from 'vue';
import vuescroll from 'vuescroll';
import { sync } from 'vuex-router-sync';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

sync(store, router);

Vue.config.productionTip = false;

Vue.use(vuescroll);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
