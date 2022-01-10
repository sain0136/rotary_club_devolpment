import Admin from '../views/admin/_Admin'

import AdminHome from '../views/admin/AdminHome'

import Districts from '../views/admin/districts/_Districts'
import ViewDistricts from '../views/admin/districts/ViewDistricts'
import CreateDistrict from '../views/admin/districts/CreateDistrict'
import EditDistrict from '../views/admin/districts/EditDistrict'

import DistrictAdmins from '../views/admin/district-admins/_DistrictAdmins'
import ViewDistrictAdmins from '../views/admin/district-admins/ViewDistrictAdmins'
import CreateDistrictAdmin from '../views/admin/district-admins/CreateDistrictAdmin'
import EditDistrictAdmin from '../views/admin/district-admins/EditDistrictAdmin'

import store from '../store/index'

export default {
  path: '/admin',
  component: Admin,
  name: 'Admin',
  beforeEnter: (to, from, next) => {
    if (store.state.isSiteAdminLoggedIn) {
      next()
    } else {
      next(false)
      window.location.replace(
        '/adminlogin',
      )
    }
  },
  children: [
    {
      path: 'home',
      component: AdminHome,
      name: 'AdminHome',
    },
    {
      path: 'districts',
      component: Districts,
      name: 'Districts',
      children: [
        {
          path: 'view',
          component: ViewDistricts,
          name: 'ViewDistricts',
        },
        {
          path: 'create',
          component: CreateDistrict,
          name: 'NewDistrict',
        },
        {
          path: 'edit',
          component: EditDistrict,
          name: 'EditDistrict',
        },
      ],
    },
    {
      path: 'district-admins',
      component: DistrictAdmins,
      children: [
        {
          path: 'view',
          component: ViewDistrictAdmins,
        },
        {
          path: 'create',
          component: CreateDistrictAdmin,
        },
        {
          path: ':userid/edit',
          component: EditDistrictAdmin,
        },
      ],
    },
  ],
}
