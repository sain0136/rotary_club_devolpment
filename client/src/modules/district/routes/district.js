import AppDistrict from '../views/AppDistrict.vue'

import DistrictAbout from '../views/DistrictAbout'
import DistrictHome from '../views/DistrictHome'
import DistrictLogin from '../views/DistrictLogin'
import DistrictContactUs from '../views/DistrictContactUs'
import DistrictEdit from '../views/DistrictEdit'
import DistrictProjects from '../views/DistrictProjects'

import AppClubs from '../views/clubs/AppClubs'
import ClubsView from '../views/clubs/ClubsView'
import ClubCreate from '../views/clubs/ClubCreate'
import ClubEdit from '../views/clubs/ClubEdit'

import store from '../../../store/index'

export default {
  path: '/district/:id',
  component: AppDistrict,
  name: 'AppDistrict',
  children: [
    {
      path: 'home',
      component: DistrictHome,
      name: 'DistrictHome',
    },
    {
      path: 'about',
      component: DistrictAbout,
      name: 'DistrictAbout',
    },
    {
      path: 'contact-us',
      component: DistrictContactUs,
      name: 'DistrictContactUs',
    },
    {
      path: 'login',
      component: DistrictLogin,
      name: 'DistrictLogin',
      beforeEnter: (to, from, next) => {
        if (
          store.state
            .isDistrictAdminLoggedIn ||
          store.state
            .isSiteAdminLoggedIn
        ) {
          next(false)
          window.location.replace('./')
        } else {
          next()
        }
      },
    },
    {
      path: 'projects',
      component: DistrictProjects,
      name: 'DistrictProjects',
    },
    {
      path: 'edit',
      component: DistrictEdit,
      name: 'DistrictEdit',
      beforeEnter: (to, from, next) => {
        if (store.state.isDistrictAdminLoggedIn ||
            store.state.isSiteAdminLoggedIn
        ) {
          next()
        } else {
          next(false)
        }
      },
    },
    {
      path: 'clubs',
      component: AppClubs,
      name: 'AppClubs',
      children: [
        {
          path: 'view',
          component: ClubsView,
          name: 'ClubsView',
        },
        {
          path: 'create',
          component: ClubCreate,
          name: 'ClubCreate',
          beforeEnter: (to, from, next) => {
            if (store.state.isDistrictAdminLoggedIn ||
                store.state.isSiteAdminLoggedIn
            ) {
              next()
            } else {
              next(false)
            }
          },
        },
        {
          path: ':clubid/edit',
          component: ClubEdit,
          beforeEnter: (to, from, next) => {
            if (
              store.state.isDistrictAdminLoggedIn ||
              store.state.isSiteAdminLoggedIn
            ) {
              next()
            } else {
              next(false)
            }
          },
        },
      ],
    },
  ],
}
