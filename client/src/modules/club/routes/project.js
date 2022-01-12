import AppProject from '../views/projects/AppProject'
import ProjectPageView from '../views/projects/ProjectPageView'

import AppClubProjects from '../views/projects/AppClubProjects'
import ClubProjectsView from '../views/projects/ClubProjectsView'
import UserProjectsView from '../views/projects/UserProjectsView'
import ProjectEdit from '../views/projects/ProjectEdit'
import ProjectCreate from '../views/projects/ProjectCreate'

import AppPledges from '../views/projects/pledges/AppPledges'
import PledgesView from '../views/projects/pledges/PledgesView'
import PledgeCreate from '../views/projects/pledges/PledgeCreate'

export default {
  path: 'projects',
  component: AppClubProjects,
  name: 'AppClubProjects',
  children: [
    {
      path: 'view-all',
      component: ClubProjectsView,
      name: 'ClubProjectsView',
    },
    {
      path: 'view-user-projects',
      component: UserProjectsView,
      name: 'UserProjectsView',
    },
    {
      path: 'create',
      component: ProjectCreate,
      name: 'ProjectCreate',
    },
    {
      path: ':projectid',
      component: AppProject,
      name: 'AppProject',
      children: [
        {
          path: 'view',
          component: ProjectPageView,
          name: 'ProjectPageView',
        },
        {
          path: 'edit',
          component: ProjectEdit,
          name: 'ProjectEdit',
        },
        {
          path: 'pledges',
          component: AppPledges,
          name: 'AppPledges',
          children: [
            {
              path: 'view',
              component: PledgesView,
              name: 'PledgesView',
            },
            {
              path: 'create',
              component: PledgeCreate,
              name: 'PledgeCreate',
            },
          ],
        },
      ],
    },
  ],
}
