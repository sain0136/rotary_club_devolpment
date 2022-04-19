import {createRouter, createWebHistory} from 'vue-router'
import adminlogin from '../modules/admin/routes/adminlogin'
import admin from '../modules/admin/routes/admin'
import district from '../modules/district/routes/district'
import club from '../modules/club/routes/club'
import AdminLogin from '../modules/admin/views/AdminLogin.vue'

const routes = [
  {
    path:'/',
    name:'Landing',
    component: AdminLogin
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