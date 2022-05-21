import {createRouter, createWebHistory} from 'vue-router'
import adminlogin from '../modules/admin/routes/adminlogin'
import admin from '../modules/admin/routes/admin'
import district from '../modules/district/routes/district'
import club from '../modules/club/routes/club'
// import AdminLogin from '../modules/admin/views/AdminLogin.vue'
import home from '../modules/home/routes/home'
// import exit from '../router/exit.vue'
import store from '../store/index'

const routes = [
  home,
  admin,
  adminlogin,
  district,
  club,
  { 
    //exit path and compent are irlevent code i believ further testing but before ente 
    //href is what important
 /*  path: "/exit",
  component: exit, */
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
    /* path: "/exit",
    component: exit, */
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
  scrollBehavior: async function (to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    } else {
      console.log("moving to top of the page");
      window.scrollTo(0, 0);
    }
 },
})

export default router 