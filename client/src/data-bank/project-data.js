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

export async function getProjectData(projectId) {
  const projects = await getProjects()
  let projectToReturn

  projects.forEach(project => {
    if(project.project_id == projectId) {
      console.log(project)
      projectToReturn = project
    }
  })
  
  return projectToReturn
}