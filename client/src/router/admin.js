import Admin from '../views/admin/Admin'

import ViewDistricts from '../views/admin/districts/ViewDistricts'
import CreateDistrict from '../views/admin/districts/CreateDistrict'
import EditDistrict from '../views/admin/districts/EditDistrict'

import ViewClubs from '../views/admin/clubs/ViewClubs'
import CreateClub from '../views/admin/clubs/CreateClub'
import EditClub from '../views/admin/clubs/EditClub'

import ViewDistrictAdmins from '../views/admin/district_admins/ViewDistrictAdmins'
import CreateDistrictAdmin from '../views/admin/district_admins/CreateDistrictAdmin'
import EditDistrictAdmin from '../views/admin/district_admins/EditDistrictAdmin'

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
      path: 'viewdistrictadmins',
      component: ViewDistrictAdmins
    },
    {
      path: 'createdistrictadmin',
      component: CreateDistrictAdmin,
    },
    {
      path: 'editdistrictadmin',
      component: EditDistrictAdmin,
    },
  ]
}