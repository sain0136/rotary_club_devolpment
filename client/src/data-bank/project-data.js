import store from '../store/index'

export async function getDistrictProjects() {
  const res = await fetch('/api/project', {
    method: 'GET'
  })
  const data = await res.json()
  const allProjects = await data.allProjects
  
  return await allProjects
}

export async function getClubProjects() {
  const queryHelper = {club_id: store.state.currentClubId}
  const res = await fetch('/api/project/clubProjects', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(queryHelper)
  })
  const data = await res.json()
  const projects = await data.projects
  // console.log(projectsArray)

  return await projects
}

export async function getUserProjects() {
  const clubProjects = await getDistrictProjects()
  const userProjects = []

  //>>Filter method doesn't work for some reason
  clubProjects.forEach(project => {
    if(project.created_by == store.state.loggedInClubUserId) {
      userProjects.push(project)
    }
  })

  return userProjects
}

export async function getProjectData(projectId) {
  const projects = await getDistrictProjects()
  let projectToReturn

  projects.forEach(project => {
    if(project.project_id == projectId) {
      projectToReturn = project
    }
  })
  
  return projectToReturn
}