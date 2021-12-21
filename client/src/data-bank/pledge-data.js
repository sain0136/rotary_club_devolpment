import store from '../store/index'

export async function getAllPledges() {
  const res = await fetch('/api/pledge', {
    method: 'GET'
  })
  const data = await res.json()
  const projects = await data.allProjects
  const projectArray = await projects.filter(project => project.project_id == store.state.currentProjectId)
  const project = await projectArray[0]
  const pledges = await project.pledgesAssociated

  return await pledges
}