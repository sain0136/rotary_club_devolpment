
export default {
  async index() {
    const res = await fetch('/api/district', { method: 'GET'})
    const data = await res.json()
    return data.districts
  },
  
  async show(id) {
    const res = await fetch(`/api/district/${id}`, {
      method: 'GET'
    })
    const data = await res.json()
    return await data.districtById
  },

  async delete(id) {
    const res = await fetch(`/api/district/${id}`, {
      method: 'DELETE'
    })
  },
  
  async create(data) {
    const res = await fetch('/api/district', { 
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
  },
  
  async update(id, data) {
    const res = await fetch(`/api/district/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
  },

  async getDistricts() {
    const res = await fetch('/api/district', { method: 'GET'})
    const data = await res.json()
    return data.districts
  },
}