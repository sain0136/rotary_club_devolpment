export default {
  async index(id) {
    const res = await fetch(
      'http://74.208.135.85/club',
      {
        method: 'GET',
      },
    )
    const data = await res.json()
    const clubs = data.clubs.filter(
      club => club.district_id == id,
    )
    return clubs
  },

  async show(id) {
    const res = await fetch(
      `http://74.208.135.85/club/${id}`,
      { method: 'GET' },
    )
    const data = await res.json()
    return await data.clubsById
  },

  async create(data) {
    const res = await fetch(
      'http://74.208.135.85/club',
      {
        method: 'POST',
        headers: {
          'Content-Type':
            'application/json',
        },
        body: JSON.stringify(data),
      },
    )

    console.log(await res.json())
  },

  async update(id, data) {
    console.log('id', id)
    console.log('data', data)

    const res = await fetch(
      `http://74.208.135.85/club/${id}`,
      {
        method: 'Put',
        headers: {
          'Content-Type':
            'application/json',
        },
        body: JSON.stringify(data),
      },
    )
    console.log(await res.json())
  },

  async delete(id) {
    const res = await fetch(
      `http://74.208.135.85/club/${id}`,
      {
        method: 'DELETE',
      },
    )
  },
}
