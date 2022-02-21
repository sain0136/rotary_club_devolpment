export default {
  async index() {
    const res = await fetch(
      '74.208.135.85/districtAdmins',
      { method: 'GET' },
    )
    const data = await res.json()
    return data.allAdmins
  },

  async show() {},

  async create(data) {
    const res = await fetch(
      '74.208.135.85/user',
      {
        method: 'POST',
        headers: {
          'Content-Type':
            'application/json',
        },
        body: JSON.stringify(data),
      },
    )

    // console.log(userToCreate)
    // console.log(await res.json())
  },

  async update(id, data) {
    const res = await fetch(
      `74.208.135.85/user/${id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type':
            'application/json',
        },
        body: JSON.stringify(data),
      },
    )
  },

  async delete(id) {
    const res = await fetch(
      `74.208.135.85/user/${id}`,
      {
        method: 'DELETE',
      },
    )
  },
}
