export default {
  
  async districtIndex(id) {
    const queryHelper = {
      district_id: id
    }
  
    const res = await fetch('/api/project/districtProjects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(queryHelper),
    })
  
    const data = await res.json()
    const allProjects = await data.projects
    
    return await allProjects
  },
  
  async clubIndex(id) {
    const queryHelper = {
      club_id: id
    }
    
    const res = await fetch('/api/project/clubProjects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(queryHelper)
    })
    
    const data = await res.json()
    const projects = await data.projects
  
    return await projects
  },

  async userIndex(id) {
    const queryHelper = {
      user_id: id
    }
    
    const res = await fetch('/api/project/usersProjects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(queryHelper)
    })
    
    const data = await res.json()
    const projects = await data.usersProjects
  
    return await projects
  },
}