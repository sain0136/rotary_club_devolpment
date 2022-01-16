export default {

  async index(id) {
    const res = await fetch('/api/club', { 
      method: "GET" 
    })
    const data = await res.json()
    const clubs = data.clubs.filter(
    (club) => club.district_id == id)
    return clubs
  },

  async show(id) {
    const res = await fetch(`/api/club/${id}`, 
        {method: 'GET'}
      )
      const data = await res.json()
      return await data.clubsById
  },

  async create(data) {
    const res = await fetch('/api/club', { 
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })

    console.log(await res.json())
  },

  async update(id, data) {
    const res = await fetch(`/api/club/${id}`, { 
      method: 'PATCH', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
  },

  async delete(id) {
    const res = await fetch(`/api/club/${id}`, {
      method: 'DELETE'
    })
  }


}