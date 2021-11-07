export async function getProjects() {
  const queryHelper = {club_id: 5}
  const res = await fetch('/api/project/clubProjects', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(queryHelper)
  })
  const data = await res.json()
  const projects = await data.projects
  const projectsArray = await projects[0] //??
  console.log(projectsArray)

  return await projectsArray
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