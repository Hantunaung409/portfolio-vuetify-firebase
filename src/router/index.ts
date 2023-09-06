import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {auth} from '../firebase/index'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
    beforeEnter: (to, from, next) => {
      const user = auth.currentUser;
      if(!user){
        next();
      }else{
        next({ name: 'admin'});
      }
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue'),
    beforeEnter: (to, from, next) => {
      const user = auth.currentUser;
      if(user){
        next();
      }else{
        next({ name: 'home'});
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
