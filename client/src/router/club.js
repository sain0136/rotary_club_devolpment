import _Club from '../views/club/_Club'

import ClubAbout from '../views/club/ClubAbout'
import ClubContactUs from '../views/club/ClubContactUs'
import ClubHome from '../views/club/ClubHome'
import ClubLogin from '../views/club/ClubLogin'

import ClubUsers from '../views/club/loggedin/ClubUsers'
import ViewClubUsers from '../views/club/loggedin/ViewClubUsers'
import CreateClubUser from '../views/club/loggedin/CreateClubUser'
import EditClubUser from '../views/club/loggedin/EditClubUser'

import project from './project'

import store from '../store/index'

export default {
  path: '/club/:id',
  component: _Club,
  name: '_Club',
  children: [
    {
      path: 'about',
      component: ClubAbout,
      name: 'ClubAbout'
    },
    {
      path: 'contact-us',
      component: ClubContactUs,
      name: 'ClubContactUs'
    },
    {
      path: 'home',
      component: ClubHome,
      name: 'ClubHome'
    },
    {
      path: 'login',
      component: ClubLogin,
      name: 'ClubLogin',
      beforeEnter: (to, from, next) => {
        if(store.state.isClubAdminLoggedIn || 
           store.state.isDistrictAdminLoggedIn ||
           store.state.isSiteAdminLoggedIn) {
          next(false)
          window.location.replace('./home')
        } else {
          next()
        }
      },
    },
    {
      path: 'users',
      component: ClubUsers,
      name: 'ClubUsers',
      beforeEnter: (to, from, next) => {
        if(store.state.isClubAdminLoggedIn || 
           store.state.isSiteAdminLoggedIn) {
          next()
        } else {
          next(false)
          // window.location.replace(`/club/${store.state.currentClubData.club_id}/login`)
        }
      },
      children: [
        {
          path: 'view',
          component: ViewClubUsers,
          name: 'ViewClubUsers'
        },
        {
          path: 'create',
          component: CreateClubUser,
          name: 'CreateClubUser'
        },
        {
          path: ':userid/edit',
          component: EditClubUser,
          name: 'EditClubUser'
        },
      ]
    },
    project
  ]
}