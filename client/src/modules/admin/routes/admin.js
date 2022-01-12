import Admin from '../views/AppAdmin'

import AdminHome from '../views/AdminHome'

import Districts from '../views/districts/AppDistricts'
import ViewDistricts from '../views/districts/ViewDistricts'
import CreateDistrict from '../views/districts/CreateDistrict'
import EditDistrict from '../views/districts/EditDistrict'

import DistrictAdmins from '../views/district-admins/AppDistrictAdmins'
import ViewDistrictAdmins from '../views/district-admins/ViewDistrictAdmins'
import CreateDistrictAdmin from '../views/district-admins/CreateDistrictAdmin'
import EditDistrictAdmin from '../views/district-admins/EditDistrictAdmin'

import store from '../../../store/index'

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
