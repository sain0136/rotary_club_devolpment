import Admin from '../views/admin/Admin'

import ViewDistricts from '../views/admin/districts/ViewDistricts'
import CreateDistrict from '../views/admin/districts/CreateDistrict'
import EditDistrict from '../views/admin/districts/EditDistrict'

import ViewClubs from '../views/admin/clubs/ViewClubs'
import CreateClub from '../views/admin/clubs/CreateClub'
import EditClub from '../views/admin/clubs/EditClub'

import ViewUsers from '../views/admin/users/ViewUsers'
import CreateUser from '../views/admin/users/CreateUser'
import EditUser from '../views/admin/users/EditUser'

import store from '../store/index'

export default {
  path: '/admin',
  component: Admin,
  name: 'Admin',
  beforeEnter: (to, from, next) => {
    if(store.state.isSiteAdminLoggedIn) {
      next()
    } else {
      next(false)
    }
  },
  children: [
    //Districts
    {
      path: 'viewdistricts',
      component: ViewDistricts,
      name: 'ViewDistricts'
    },
    {
      path: 'createdistrict',
      component: CreateDistrict,
      name: 'NewDistrict'
    },
    {
      path: 'editdistrict',
      component: EditDistrict,
      name: 'EditDistrict'
    },
    //Clubs
    {
      path: 'viewclubs',
      component: ViewClubs,
    },
    {
      path: 'createclub',
      component: CreateClub,
    },
    {
      path: 'editclub',
      component: EditClub,
    },
    //Users
    {
      path: 'viewusers',
      component: ViewUsers
    },
    {
      path: 'createuser',
      component: CreateUser,
    },
    {
      path: 'edituser',
      component: EditUser,
    },
  ]
}