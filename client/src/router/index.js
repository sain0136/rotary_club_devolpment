import {createRouter, createWebHistory} from 'vue-router'
import adminlogin from '../modules/admin/routes/adminlogin'
import admin from '../modules/admin/routes/admin'
import district from './district'
import club from './club'

const routes = [
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