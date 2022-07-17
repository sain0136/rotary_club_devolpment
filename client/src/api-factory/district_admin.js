export default {
  async index() {
    const res = await fetch(
      'http://74.208.135.85/districtAdmins',
      { method: 'GET' },
    )
    const data = await res.json()
    return data.allAdmins
  },

  async show() {},

  async create(data) {
    const res = await fetch(
      'http://74.208.135.85/user',
      {
        method: 'POST',
        headers: {
          'Content-Type':
            'application/json',
        },
        body: JSON.stringify(data),
      },
    )
    if (res.status == 500) {
      return false
    } else {
      return true
    }
  },

  async update(id, data) {
    const res = await fetch(
      `http://74.208.135.85/user/${id}`,
      {
        method: 'Put',
        headers: {
          'Content-Type':
            'application/json',
        },
        body: JSON.stringify(data),
      },
    )
    if (res.status == 500) {
      return false
    } else {
      return true
    }
  },

  async delete(id) {
    const res = await fetch(
      `http://74.208.135.85/user/${id}`,
      {
        method: 'DELETE',
      },
    )
  },
}
