import Vue from 'vue';
import vuescroll from 'vuescroll';
import { sync } from 'vuex-router-sync';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import vuetify from './plugins/vuetify';

sync(store, router);

Vue.config.productionTip = false;

Vue.use(vuescroll);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
