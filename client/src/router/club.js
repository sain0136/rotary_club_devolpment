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
      name: 'ClubLogin'
    },
    {
      path: 'users',
      component: ClubUsers,
      name: 'ClubUsers',
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