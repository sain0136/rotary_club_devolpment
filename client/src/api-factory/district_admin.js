export default {

  async index() {
    const res = await fetch('/api/user', { method: 'GET'})
    const data = await res.json()
    return data.allUsers
  },

  async show() {

  },

  async create(data) {
    const res = await fetch('/api/user', { 
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })

    // console.log(userToCreate)
    // console.log(await res.json())
  }, 

  async update(id, data) {
    const res = await fetch(`/api/user/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
  },

  async delete(id) {
    const res = await fetch(`/api/user/${id}`, {
      method: 'DELETE'
    })
  }
}