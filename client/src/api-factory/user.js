export default {
  async index() {
    const res = await fetch(
      'http://74.208.135.85/user/',
      { method: 'GET' },
    )
    const data = await res.json()
    return await data.allUsers
  },

  async show(id) {
    const res = await fetch(
      `http://74.208.135.85/user/${id}`,
      {
        method: 'GET',
      },
    )
    const data = await res.json()
    return await data.userById
  },
  async showJson(id) {
    const queryHelper = {
      user_id: id,
    }

    const res = await fetch(
      'http://74.208.135.85/user/json',
      {
        method: 'POST',
        headers: {
          'Content-Type':
            'application/json',
        },
        body: JSON.stringify(
          queryHelper,
        ),
      },
    )

    const data = await res.json()
    return await data.userById
  },

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
