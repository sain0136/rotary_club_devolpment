import {createRouter, createWebHistory} from 'vue-router'
import adminlogin from '../modules/admin/routes/adminlogin'
import admin from '../modules/admin/routes/admin'
import district from '../modules/district/routes/district'
import club from '../modules/club/routes/club'
import AdminLogin from '../modules/admin/views/AdminLogin.vue'
import home from '../modules/home/routes/home'
import exit from '../router/exit.vue'
import store from '../store/index'

const routes = [
  home,
  admin,
  adminlogin,
  district,
  club,
  { 
  path: "/exit",
  component: exit,
  beforeEnter(to, from, next) {
    try {
    const districtSocials  =
    store.state.districtSocials  
    
    console.log(districtSocials)    
          const flink = districtSocials.find(({url_type})=> url_type === 1)
          window.location.href = "https://" +flink.url;
    }catch(error){
      console.log(error)
    }
    
    
    },
    name:'externalFacebook',

  },
  { 
    path: "/exit",
    component: exit,
    beforeEnter(to, from, next) {
       try { 
      const districtSocials  =
      store.state.districtSocials 
     
      console.log(districtSocials)    
            const flink = districtSocials.find(({url_type})=> url_type === 2) 
            window.location.href = "https://" +flink.url;
          }catch(error){    
           
            console.log(error + 'hi')
          }
  
      
      },
      name:'externalTwitter',
  
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router 