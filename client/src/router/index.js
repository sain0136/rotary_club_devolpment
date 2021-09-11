import {createRouter, createWebHistory} from 'vue-router'
import adminlogin from './adminlogin'
import admin from './admin'
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