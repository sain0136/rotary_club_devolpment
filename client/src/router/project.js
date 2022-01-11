import Project from '../views/club/projects/_Project'
import ViewProjectPage from '../views/club/projects/ViewProjectPage'

import ClubProjects from '../views/club/projects/_ClubProjects'
import ViewClubProjects from '../views/club/projects/ViewClubProjects'
import ViewUserProjects from '../views/club/projects/ViewUserProjects'
import EditProject from '../views/club/projects/EditProject'
import CreateProject from '../views/club/projects/CreateProject'

import Pledges from '../views/club/projects/pledges/_Pledges'
import ViewPledges from '../views/club/projects/pledges/ViewPledges'
import CreatePledge from '../views/club/projects/pledges/CreatePledge'

export default {
  path: 'projects',
  component: ClubProjects,
  name: 'ClubProjects',
  children: [
    {
      path: 'view-all',
      component: ViewClubProjects,
      name: 'ViewClubProjects',
    },
    {
      path: 'view-user-projects',
      component: ViewUserProjects,
      name: 'ViewUserProjects',
    },
    {
      path: 'create',
      component: CreateProject,
      name: 'CreateProject',
    },
    {
      path: ':projectid',
      component: Project,
      name: 'Project',
      children: [
        {
          path: 'view',
          component: ViewProjectPage,
          name: 'ViewProjectPage',
        },
        {
          path: 'edit',
          component: EditProject,
          name: 'EditProject',
        },
        {
          path: 'pledges',
          component: Pledges,
          name: 'Pledges',
          children: [
            {
              path: 'view',
              component: ViewPledges,
              name: 'ViewPledges',
            },
            {
              path: 'create',
              component: CreatePledge,
              name: 'CreatePledge',
            },
          ],
        },
      ],
    },
  ],
}
