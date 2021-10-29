import _District from '../views/district/_District'

import DistrictAbout from '../views/district/DistrictAbout'
import DistrictHome from '../views/district/DistrictHome'
import DistrictLogin from '../views/district/DistrictLogin'
import DistrictContactUs from '../views/district/DistrictContactUs'

import ViewClubs from '../views/district/ViewClubs'
import CreateClub from '../views/district/loggedin/CreateClub'
import EditClub from '../views/district/loggedin/EditClub'

import store from '../store/index'

export default {
  path: '/',
  component: _District,
  name: '_District',
  children: [
    {
      path: 'about',
      component: DistrictAbout,
      name: 'About'
    },
    {
      path: 'contactus',
      component: DistrictContactUs,
      name: 'ContactUs'
    },
    {
      path: 'home',
      component: DistrictHome,
      name: 'Home'
    },
    {
      path: 'login',
      component: DistrictLogin,
      name: 'Login'
    },
    {
      path: 'clubs',
      component: ViewClubs
    },
    {
      path: 'createclub',
      component: CreateClub,
      beforeEnter: (to, from, next) => {
        if(store.state.isDistrictAdminLoggedIn || 
           store.state.isSiteAdminLoggedIn) {
          next()
        } else {
          next(false)
        }
      }
    },
    {
      path: 'editclub',
      component: EditClub,
      name: 'EditClub',
      beforeEnter: (to, from, next) => {
        if(store.state.isDistrictAdminLoggedIn || 
          store.state.isSiteAdminLoggedIn) {
         next()
       } else {
         next(false)
       }
      }
    },
  ]
}