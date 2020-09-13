import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
    },
    {
      path: '/articles/:id?',
      name: 'articles',
      component: () => import(/* webpackChunkName: "articles" */ './views/Articles.vue'),
    },
    {
      path: '/api',
      name: 'api',
      component: () => import(/* webpackChunkName: "about" */ './views/API.vue'),
    },
  ],
});
