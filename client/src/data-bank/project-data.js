import store from '../store/index'

export async function getProjects() {
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
  const clubProjects = await getProjects()
  const userProjects = []

  //>>Filter method doesn't work for some reason
  clubProjects.forEach(project => {
    if(project.created_by == 28) { //>>TODO update it with the actual dynamic user Id logged in
      userProjects.push(project)
    }
  })

  return userProjects
}

export async function getProjectData(projectId) {
  const projects = await getProjects()
  let projectToReturn

  projects.forEach(project => {
    if(project.project_id == projectId) {
      projectToReturn = project
    }
  })
  
  return projectToReturn
}