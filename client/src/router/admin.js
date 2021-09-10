import Admin from '../views/Admin'
import AdminLoggedIn from '../views/AdminLoggedIn'

export default {
  path: '/admin',
  component: Admin,
  children: [
    {
      // admin/login
      path: 'login',
      component: AdminLoggedIn
    }
  ]
}