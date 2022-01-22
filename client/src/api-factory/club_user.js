export default {

  async index(id) {
    const queryHelper = {
      club_id: id
    }
  
    const res = await fetch('/api/clubmembers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(queryHelper),
    })
  
    const data = await res.json()
    return await data.allMembers
  },

  async show(id) {
    const queryHelper = {
      user_id: id
    }

    const res = await fetch('/api/user/json', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(queryHelper),
    })

    const data = await res.json()
    return await data.userById
  }

}