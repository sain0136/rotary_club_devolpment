export async function getProjects() {
  // const res = await fetch('/api/club', {method: 'GET'})
  // const data = await res.json()
  // const projects = data.projects.filter(
  //   (project) => project.club_id == store.state.currentClubId
  // )
  // return projects
  return [
    {
      id: 1,
      name: 'Apo',
      description: 'Bepo'
    }
  ]
}