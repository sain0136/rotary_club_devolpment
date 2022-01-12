import Admin from '../views/AppAdmin'

import AdminHome from '../views/AdminHome'

import Districts from '../views/districts/AppDistricts'
import DistrictsViews from '../views/districts/DistrictsView'
import DistrictCreate from '../views/districts/DistrictCreate'
import DistrictEdit from '../views/districts/DistrictEdit'

import DistrictAdmins from '../views/district-admins/AppDistrictAdmins'
import DistrictAdminsViews from '../views/district-admins/DistrictAdminsView'
import DistrictAdminCreate from '../views/district-admins/DistrictAdminCreate'
import DistrictAdminEdit from '../views/district-admins/DistrictAdminEdit'

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
          component: DistrictsViews,
          name: 'DistrictsViews',
        },
        {
          path: 'create',
          component: DistrictCreate,
          name: 'NewDistrict',
        },
        {
          path: 'edit',
          component: DistrictEdit,
          name: 'DistrictEdit',
        },
      ],
    },
    {
      path: 'district-admins',
      component: DistrictAdmins,
      children: [
        {
          path: 'view',
          component: DistrictAdminsViews,
        },
        {
          path: 'create',
          component: DistrictAdminCreate,
        },
        {
          path: ':userid/edit',
          component: DistrictAdminEdit,
        },
      ],
    },
  ],
}
