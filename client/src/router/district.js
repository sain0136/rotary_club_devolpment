import _District from '../views/district/_District'

import DistrictAbout from '../views/district/DistrictAbout'
import DistrictHome from '../views/district/DistrictHome'
import DistrictLogin from '../views/district/DistrictLogin'
import DistrictContactUs from '../views/district/DistrictContactUs'
import EditDistrict from '../views/district/loggedin/EditDistrict'

import _Clubs from '../views/district/_Clubs'
import ViewClubs from '../views/district/ViewClubs'
import DistrictProjects from '../views/district/DistrictProjects'
import CreateClub from '../views/district/loggedin/CreateClub'
import EditClub from '../views/district/loggedin/EditClub'

import store from '../store/index'

export default {
  path: '/district/:id',
  component: _District,
  name: '_District',
  children: [
    {
      path: 'home',
      component: DistrictHome,
      name: 'DistrictHome'
    },
    {
      path: 'about',
      component: DistrictAbout,
      name: 'DistrictAbout'
    },
    {
      path: 'contact-us',
      component: DistrictContactUs,
      name: 'DistrictContactUs'
    },
    {
      path: 'login',
      component: DistrictLogin,
      name: 'DistrictLogin'
    },
    {
      path: 'projects',
      component: DistrictProjects,
      name: 'DistrictProjects'
    },
    {
      path: 'edit',
      component: EditDistrict,
      name: 'EditDistrict',
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
      path: 'clubs',
      component: _Clubs,
      name: '_Clubs',
      children: [
        {
          path: 'view',
          component: ViewClubs,
          name: 'ViewClubs'
        },
        {
          path: 'create',
          component: CreateClub,
          name: 'CreateClub',
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
          path: ':clubid/edit',
          component: EditClub,
          beforeEnter: (to, from, next) => {
            if(store.state.isDistrictAdminLoggedIn || 
              store.state.isSiteAdminLoggedIn) {
             next()
           } else {
             next(false)
           }
          }
        }
      ]
    },
  ]
}