import {createRouter, createWebHistory} from 'vue-router'
import admin from './admin'

const routes = [
  admin,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router 