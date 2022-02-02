import AppClub from '../views/AppClub'

import ClubAbout from '../views/ClubAbout'
import ClubContactUs from '../views/ClubContactUs'
import ClubHome from '../views/ClubHome'
import ClubLogin from '../views/ClubLogin'

import ClubUsers from '../views/users/AppClubUsers'
import ClubUsersView from '../views/users/ClubUsersView'
import CreateClubUser from '../views/users/ClubUserCreate'
import ClubUserEdit from '../views/users/ClubUserEdit'
import ClubUserProfile from '../views/users/ClubUserProfile'

import project from './project'

import store from '../../../store/index'

export default {
  path: '/club/:id',
  component: AppClub,
  name: 'AppClub',
  children: [
    {
      path: 'about',
      component: ClubAbout,
      name: 'ClubAbout',
    },
    {
      path: 'contact-us',
      component: ClubContactUs,
      name: 'ClubContactUs',
    },
    {
      path: 'home',
      component: ClubHome,
      name: 'ClubHome',
    },
    {
      path: 'login',
      component: ClubLogin,
      name: 'ClubLogin',
      beforeEnter: (to, from, next) => {
        if (
          store.state
            .isClubAdminLoggedIn ||
          store.state
            .isDistrictAdminLoggedIn ||
          store.state
            .isSiteAdminLoggedIn
        ) {
          next(false)
          window.location.replace(
            './home',
          )
        } else {
          next()
        }
      },
    },
    {
      path: 'users',
      component: ClubUsers,
      name: 'AppClubUsers',
      beforeEnter: (to, from, next) => {
        if (
          store.state.isClubAdminLoggedIn ||
          store.state.isDistrictAdminLoggedIn ||
          store.state.isSiteAdminLoggedIn
        ) {
          next()
        } else {
          next(false)
          window.location.replace('../login')
        }
      },
      children: [
        {
          path: 'view',
          component: ClubUsersView,
          name: 'ClubUsersView',
        },
        {
          path: 'create',
          component: CreateClubUser,
          name: 'CreateClubUser',
        },
        {
          path: ':userid/edit',
          component: ClubUserEdit,
          name: 'ClubUserEdit',
        },
        {
          path: ':userid/profile',
          component: ClubUserProfile,
          name: 'ClubUserProfile'
        }
      ],
    },
    project,
  ],
}
