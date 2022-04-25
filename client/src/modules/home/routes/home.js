
import AppHome from '../../home/views/AppHome.vue'
import AllDistricts from '../views/allDistricts/AppAllDistricts.vue'
import AllProjects from '../views/allProjects/AppAllProjects.vue'
import Home from '../views/Home.vue'
import DistrictCard from '../components/DistrictCards.vue'
import AboutUs from '../views/About.vue'



export default {
path:'/',
name:'Home',
component: AppHome,
children: [
  {
    path: '/',
    component: Home,
    name: 'Home',
  },
  {
    path:'about',
    component:AboutUs,
    name:'AboutUs',
  }
  ,
    {
        path: 'districts',
        component: AllDistricts,
        name: 'AllDistricts',
        children:[
          { 
          path: '/home',
          component: DistrictCard,
          name: 'DistrictCards',
        }
         
        ]
      },
      {
        path: 'projects',
        component: AllProjects,
        name: 'AllProjects',
      }
]
}