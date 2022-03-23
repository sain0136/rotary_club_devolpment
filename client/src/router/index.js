import {createRouter, createWebHistory} from 'vue-router'

import Landing from '../components/LandingPage.vue'

import adminlogin from '../modules/admin/routes/adminlogin'
import admin from '../modules/admin/routes/admin'
import district from '../modules/district/routes/district'
import club from '../modules/club/routes/club'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  admin,
  adminlogin,
  district,
  club
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router 