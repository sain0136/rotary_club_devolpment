import AppDistrict from '../views/AppDistrict.vue'

import DistrictAbout from '../views/DistrictAbout'
import DistrictHome from '../views/DistrictHome'
import DistrictLogin from '../views/DistrictLogin'
import DistrictContactUs from '../views/DistrictContactUs'
import DistrictEdit from '../views/DistrictEdit'
import DistrictProjects from '../views/DistrictProjects'

import AppClubs from '../views/clubs/AppClubs'
import ClubsView from '../views/clubs/ClubsView'
import ClubCreate from '../views/clubs/ClubCreate'
import ClubEdit from '../views/clubs/ClubEdit'
import store from '../../../store/index'

import ProjectPledgeForm from '../../../components/common/Project/ProjectPledgeForm'
import ProjectCardDetailsApp from '../../../components/common/Project/ProjectCardDetailsApp.vue'
import adminTab from '../views/DistrictAdminApp.vue'
import userEditApp from '../../district/views/ClubUsers/userEditApp.vue'
import DistrictProfile from '../views/DistrictAdminProfile.vue'
import DistrictEdit2 from '../components/DistrictEdit.vue'
import DistrictProjectApp from '../../district/views/Project/DistrictProjectApp.vue'
import DistrictProjectsView from '../../district/views/Project/DistrictProjectsView.vue'
import DistrictProjectCreate from '../../district/views/Project/DistrictProjectCreate.vue'
import DistrictProjectEdit from '../../district/views/Project/DistrictProjectEdit.vue'
import ProjectCardDetails from '../../../components/common/Project/ProjectCardDetails.vue'
import DistrictProjectPledgesView from '../../district/views/DistrictProjectPledgesView.vue'
import DistrictEditForm from '../../district/components/DistrictEditForm.vue'
import DistrictEditHome from '../../district/views/DistrictEditHome.vue'
import DistrictProjectsApprovals from '../../district/views/Project/DistrictProjectsApprovals.vue'
import ProjectsViewAndApprove from '../../district/views/Project/ProjectsView/ProjectsViewAndApprove.vue'

export default {
  path: '/district/:id',
  component: AppDistrict,
  name: 'AppDistrict',
  beforeEnter: (to, from, next) => {
    window.scrollTo(0, 0)
    next()
  },
  children: [
    {
      path: 'home',
      component: DistrictHome,
      name: 'DistrictHome',
    },
    {
      path: 'about',
      component: DistrictAbout,
      name: 'DistrictAbout',
    },
    {
      path: 'contact-us',
      component: DistrictContactUs,
      name: 'DistrictContactUs',
    },
    {
      path: 'login',
      component: DistrictLogin,
      name: 'DistrictLogin',
      beforeEnter: (to, from, next) => {
        if (
          store.state
            .isDistrictAdminLoggedIn ||
          store.state
            .isSiteAdminLoggedIn
        ) {
          next(false)
          window.location.replace('./')
        } else {
          next()
        }
      },
    },
    {
      path: 'projects',
      component: DistrictProjects,
      name: 'DistrictProjects',
    },
    {
      path: 'details',
      component: ProjectCardDetailsApp,
      name: 'ProjectCardDetailsApp',
      props: true,
      children: [
        {
          path: '',
          component: ProjectCardDetails,
          name: 'ProjectCardDetails',
          props: true,
        },
        {
          path: 'pledge',
          component: ProjectPledgeForm,
          name: 'ProjectPledgeForm',
          props: true,
        },
      ],
    },

    {
      path: 'edit',
      component: DistrictEdit,
      name: 'DistrictEdit',
      beforeEnter: (to, from, next) => {
        if (
          store.state
            .isDistrictAdminLoggedIn ||
          store.state
            .isSiteAdminLoggedIn
        ) {
          next()
        } else {
          next(false)
        }
      },
    },
    {
      path: 'clubs',
      component: AppClubs,
      name: 'AppClubs',
      children: [
        {
          path: 'view',
          component: ClubsView,
          name: 'ClubsView',
        },
        {
          path: 'create',
          component: ClubCreate,
          name: 'ClubCreate',
          beforeEnter: (
            to,
            from,
            next,
          ) => {
            if (
              store.state
                .isDistrictAdminLoggedIn ||
              store.state
                .isSiteAdminLoggedIn
            ) {
              next()
            } else {
              next(false)
            }
          },
        },
        {
          path: 'user',
          component: userEditApp,
          name: 'userEditApp',
          props: true,
        },
        {
          path: ':clubid/edit',
          component: ClubEdit,
          beforeEnter: (
            to,
            from,
            next,
          ) => {
            if (
              store.state
                .isDistrictAdminLoggedIn ||
              store.state
                .isSiteAdminLoggedIn
            ) {
              next()
            } else {
              next(false)
            }
          },
        },
      ],
    },
    {
      path: 'admin',
      component: adminTab,
      name: 'AdminTab',
      children: [
        {
          path: 'profile',
          component: DistrictProfile,
          name: 'ProfileView',
        },
        {
          path: 'view',
          component: DistrictEditHome,
          name: 'DistrictEditHome',
          children: [
            {
              path: 'info',
              component: DistrictEdit2,
              name: 'DistrictEdit2',
            },
            {
              path: 'edit',
              component: DistrictEditForm,
              name: 'DistrictEditForm',
            },
          ],
        },
        {
          path: 'myprojects',
          component: DistrictProjectApp,
          name: 'DistrictProjectApp',
          children: [
            {
              //view your district projects
              path: 'view',
              component: DistrictProjectsView,
              name:
                'DistrictProjectsView',
            },
            {
              //create page, pass up props to form,
              path: 'create',
              component: DistrictProjectCreate,
              name:
                'DistrictProjectCreate',
              props: true,
            },
            {
              //create page, pass up props to form,
              path: 'edit',
              component: DistrictProjectEdit,
              name:
                'DistrictProjectEdit',
              props: true,
            },
            {
              //create page, pass up props to form,
              path: 'pledges',
              component: DistrictProjectPledgesView,
              name:
                'DistrictProjectPledgesView',
              props: true,
            },
            {
              //view your district projects for approval
              path: 'approvals',
              component: DistrictProjectsApprovals,
              name:
                'DistrictProjectsApprovals',
            },
            {
              path: 'approve',
              component: ProjectsViewAndApprove,
              name:
                'ProjectsViewAndApprove',
              props: true,
            },
          ],
        },
      ],
    },
  ],
}
