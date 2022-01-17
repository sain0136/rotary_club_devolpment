export default {
  async index(data) {
    const isDistrict = data.isThisDistrict
    //POST method is used in place of the GET method here
    const res = await fetch('/api/allUrls', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })

    const linkData = await res.json()
    console.log(await linkData)
    
    if(isDistrict) {
      return await linkData.district.socialmedia
    } else {
      return await linkData.club.socialmedia
    }
  },

  async show(id) {
    const res = await fetch(`/api/url/${id}`, {
      method: 'GET'
    })
    const data = await res.json()
    return await data.urlById  
  },

  async create(data) {
    const res = await fetch('/api/url', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
  },

  async update(id, data) {
    const res = await fetch(`/api/url/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
  },

  async delete(id) {
    const res = await fetch(`/api/url/${id}`, {
      method: 'DELETE'
    })
  }
}