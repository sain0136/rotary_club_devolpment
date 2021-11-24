import _Club from '../views/club/_Club'

import ClubAbout from '../views/club/ClubAbout'
import ClubContactUs from '../views/club/ClubContactUs'
import ClubHome from '../views/club/ClubHome'
import ClubLogin from '../views/club/ClubLogin'
import ClubProjects from '../views/club/ClubProjects'

import ClubUsers from '../views/club/loggedin/ClubUsers'
import CreateClubUser from '../views/club/loggedin/CreateClubUser'
import EditClubUser from '../views/club/loggedin/EditClubUser'

import Project from '../views/club/Project'

import UserProjects from '../views/club/loggedin/UserProjects'
import Donate from '../views/club/loggedin/Donate'
import EditClub from '../views/club/loggedin/EditClub'
import EditProject from '../views/club/loggedin/EditProject'
import CreateProject from '../views/club/loggedin/CreateProject'

export default {
  path: '/club',
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
      path: 'userprojects',
      component: UserProjects,
      name: 'UserProjects'
    },
    {
      path: 'createproject',
      component: CreateProject,
      name: 'CreateProject'
    },
    {
      path: 'project',
      component: Project,
      name: 'Project'
    },
    {
      path: 'users',
      component: ClubUsers,
      name: 'ClubUsers'
    },
    {
      path: 'createclubuser',
      component: CreateClubUser,
      name: 'CreateClubUser'
    },
    {
      path: 'editclubuser',
      component: EditClubUser,
      name: 'EditClubUser'
    },
    {
      path: 'donate',
      component: Donate,
      name: 'Donate'
    },
    {
      path: 'editclub',
      component: EditClub,
      name: 'EditClub'
    },
    {
      path: 'editproject',
      component: EditProject,
      name: 'EditProject'
    },
  ]
}