import AppClub from '../views/AppClub'

import ClubAbout from '../views/ClubAbout'
import ClubContactUs from '../views/ClubContactUs'
import ClubHome from '../views/ClubHome'
import ClubLoginApp from '../views/ClubLogin'
import ClubProjects from '../views/ClubProjects.vue'
import ClubAdminTabApp from '../../club/views/admin/ClubAdminTabApp.vue'
import MyClubProfile from '../components/admin/MyClubProfile.vue'

import store from '../../../store/index'
import ProjectCardDetailsApp from '../../../components/common/Project/ProjectCardDetailsApp.vue'
import ProjectCardDetails from '../../../components/common/Project/ProjectCardDetails.vue'
import ProjectPledgeForm from '../../../components/common/Project/ProjectPledgeForm'

import ClubMembers from '../../club/views/users/ClubMembers.vue'
import EditClub from '../views/admin/EditClub.vue'
import MyClubProjectsApp from '../views/projects/MyClubProjectsApp.vue'
import ClubProjectsView from '../views/projects/ClubProjectsView.vue'
import ClubProjectCreate from '../views/projects/ClubProjectCreate.vue'
import ClubProjectPledgesView from '../views/projects/pledges/ClubProjectPledgesView.vue'
import ClubProjectEdit from '../views/projects/ClubProjectEdit.vue'

export default {
  path: '/club/:id',
  component: AppClub,
  name: 'AppClub',
  children: [
    {
      path: 'about',
      component: ClubAbout,
      name: 'ClubAbout',
    },
    {
      path: 'contact-us',
      component: ClubContactUs,
      name: 'ClubContactUs',
    },
    {
      path: 'projects',
      component: ClubProjects,
      name: 'ClubProjects',
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
      path: 'home',
      component: ClubHome,
      name: 'ClubHome',
    },
    {
      path: 'login',
      component: ClubLoginApp,
      name: 'ClubLoginApp',
      beforeEnter: (to, from, next) => {
        if (
          store.state
            .isClubAdminLoggedIn ||
          store.state
            .isDistrictAdminLoggedIn ||
          store.state
            .isSiteAdminLoggedIn ||
          store.state.isClubUserLoggedIn
        ) {
          next(false)
          window.location.replace(
            './home',
          )
        } else {
          next()
        }
      },
    },

    {
      path: 'admin',
      component: ClubAdminTabApp,
      name: 'ClubAdminTabApp',
      children: [
        {
          path: 'profile',
          component: MyClubProfile,
          name: 'MyClubProfile',
        },
        {
          path: 'members',
          component: ClubMembers,
          name: 'ClubMembers',
        },
        {
          path: 'editclub',
          component: EditClub,
          name: 'EditClub',
        },
        {
          path: 'myprojects',
          component: MyClubProjectsApp,
          name: 'MyClubProjectsApp',
          children: [
            {
              //view your Club projects
              path: 'view',
              component: ClubProjectsView,
              name: 'ClubProjectsView',
            },
            {
              //create page, pass up props to form,
              path: 'create',
              component: ClubProjectCreate,
              name: 'ClubProjectCreate',
              props: true,
            },
            {
              //create page, pass up props to form,
              path: 'edit',
              component: ClubProjectEdit,
              name: 'ClubProjectEdit',
              props: true,
            },
            {
              //create page, pass up props to form,
              path: 'pledges',
              component: ClubProjectPledgesView,
              name:
                'ClubProjectPledgesView',
              props: true,
            },
          ],
        },
      ],
    },
  ],
}
