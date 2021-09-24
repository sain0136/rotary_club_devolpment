import _District from '../views/district/_District'

import DistrictAbout from '../views/district/DistrictAbout'
import DistrictHome from '../views/district/DistrictHome'
import DistrictLogin from '../views/district/DistrictLogin'
import DistrictContactUs from '../views/district/DistrictContactUs'
import DistrictClubs from '../views/district/DistrictClubs'

import DistrictApprove from '../views/district/loggedin/DistrictApprove'
import DistrictCurrentProjects from '../views/district/loggedin/DistrictCurrentProjects'
import DistrictGlobalGrants from '../views/district/loggedin/DistrictGlobalGrants'
import DistrictMatchingGrant from '../views/district/loggedin/DistrictMatchingGrant'
import DistrictSimplifiedGrant from '../views/district/loggedin/DistrictSimplifiedGrant'
import DistrictVerifyClubQual from '../views/district/loggedin/DistrictVerifyClubQual'
import DistrictVerifyTrainAttend from '../views/district/loggedin/DistrictVerifyTrainAttend'

import DistrictNewClub from '../views/district/loggedin/DistrictNewClub'

import EditDistrict from '../views/admin/EditDistrict'
import EditClub from '../views/admin/EditClub'
import ClubUsers from '../views/admin/ClubUsers'

import store from '../store/index'

export default {
  path: '/district/:id',
  component: _District,
  name: '_District',
  children: [
    {
      path: 'about',
      component: DistrictAbout,
      name: 'About'
    },
    {
      path: 'approve',
      component: DistrictApprove,
      name: 'Approve'
    },
    {
      path: 'contactus',
      component: DistrictContactUs,
      name: 'ContactUs'
    },
    {
      path: 'current-projects',
      component: DistrictCurrentProjects,
      name: 'CurrentProjects'
    },
    {
      path: 'global-grants',
      component: DistrictGlobalGrants,
      name: 'GlobalGrants'
    },
    {
      path: 'home',
      component: DistrictHome,
      name: 'Home'
    },
    {
      path: 'login',
      component: DistrictLogin,
      name: 'Login'
    },
    {
      path: 'matching-grant',
      component: DistrictMatchingGrant,
      name: 'MatchingGrant'
    },
    {
      path: 'clubs',
      component: DistrictClubs
    },
    {
      path: 'simplified-grant',
      component: DistrictSimplifiedGrant,
      name: 'SimplifiedGrant'
    },
    {
      path: 'verify-club-qual',
      component: DistrictVerifyClubQual,
      name: 'VerifyClubQual'
    },
    {
      path: 'verify-train-attend',
      component: DistrictVerifyTrainAttend,
      name: 'VerifyTrainAttend'
    },
    {
      path: 'edit-district',
      component: EditDistrict,
      name: 'EditDistrict'
    },
    {
      path: 'newclub',
      component: DistrictNewClub,
      beforeEnter: (to, from, next) => {
        if(store.state.isDistrictAdminLoggedIn || 
           store.state.isSiteAdminLoggedIn) {
          next()
        } else {
          next(false)
        }
      }
    },
    
    {
      path: 'edit-club',
      component: EditClub,
      name: 'EditClub',
      beforeEnter: (to, from, next) => {
        if($store.state.isDistrictAdminLoggedIn) {
          next()
        } else {
          next(false)
        }
      }
    },
    {
      path: 'club-users',
      component: ClubUsers,
      name: 'ClubUsers'
    },
  ]
}