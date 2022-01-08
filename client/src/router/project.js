import Project from '../views/club/Project'
import ViewProject from '../views/club/ViewProject'

import Pledges from '../views/club/Pledges'
import ViewPledges from '../views/club/ViewPledges'
import CreatePledge from '../views/club/CreatePledge'

import ClubProjects from '../views/club/ClubProjects'
import ViewClubProjects from '../views/club/ViewClubProjects'
import ViewUserProjects from '../views/club/loggedin/ViewUserProjects'
import EditProject from '../views/club/loggedin/EditProject'
import CreateProject from '../views/club/loggedin/CreateProject'

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
      name: 'ViewUserProjects'
    },
    {
      path: 'create',
      component: CreateProject,
      name: 'CreateProject'
    },
    {
      path: ':projectid',
      component: Project,
      name: 'Project',
      children: [
        {
          path: 'view',
          component: ViewProject,
          name: 'ViewProject'
        },                    
        {
          path: 'edit',
          component: EditProject,
          name: 'EditProject'
        },
        {
          path: 'pledges',
          component: Pledges,
          name: 'Pledges',
          children: [
            {
              path: 'view',
              component: ViewPledges,
              name: 'ViewPledges'
            },
            {
              path: 'create',
              component: CreatePledge,
              name: 'CreatePledge'
            },
          ]
        }
      ]
    }
  ]
}