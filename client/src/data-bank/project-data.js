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

// export async function getProjectById(id) {
//   const projects = await getProjects()

//   projects.forEach(project => {
//     of)_
//   })

//   const projectById = projects.filter(project => {
//     project.project_id == id
//   })
//   return projectById
//   // return projectById[0]
// }

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