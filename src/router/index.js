import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Help from '../views/Help.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/bantuan',
    name: 'help',
    component: Help,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
