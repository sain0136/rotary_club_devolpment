import Admin from '../views/admin/Admin'
import NewDistrict from '../views/admin/NewDistrict'
import ViewDistricts from '../views/admin/ViewDistricts'
import EditDistrict from '../views/admin/EditDistrict'
import NewClub from '../views/admin/NewClub'
import EditClub from '../views/admin/EditClub'
import Users from '../views/admin/Users'
import NewDistrictUser from '../views/admin/NewDistrictUser'

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
    {
      path: 'newdistrict',
      component: NewDistrict,
      name: 'NewDistrict'
    },
    {
      path: 'viewdistricts',
      component: ViewDistricts,
      name: 'ViewDistricts'
    },
    {
      path: 'editdistrict',
      component: EditDistrict,
      name: 'EditDistrict'
    },
    {
      path: 'newclub',
      component: NewClub,
    },
    {
      path: 'editclub',
      component: EditClub,
    },
    {
      path: 'newdistrictuser',
      component: NewDistrictUser
    },
    {
      path: 'viewusers',
      component: Users,
    },
  ]
}