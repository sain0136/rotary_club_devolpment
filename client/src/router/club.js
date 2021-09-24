import _Club from '../views/club/_Club'

import ClubAbout from '../views/club/ClubAbout'
import ClubContactUs from '../views/club/ClubContactUs'
import ClubHome from '../views/club/ClubHome'
import ClubLogin from '../views/club/ClubLogin'
import ClubProjects from '../views/club/ClubProjects'
import ClubUsers from '../views/club/ClubProjects'

import Donate from '../views/club/loggedin/Donate'
import EditClub from '../views/club/loggedin/EditClub'
import EditProject from '../views/club/loggedin/EditProject'

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
      path: 'contactus',
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
      path: 'projects',
      component: ClubProjects,
      name: 'ClubProjects'
    },
    {
      path: 'users',
      component: ClubUsers,
      name: 'ClubUsers'
    },
    {
      path: 'donate',
      component: Donate,
      name: 'Donate'
    },
    {
      path: 'edit-clup',
      component: EditClub,
      name: 'EditClub'
    },
    {
      path: 'edit-project',
      component: EditProject,
      name: 'EditProject'
    },
  ]
}