export default {
  async index(data) {
    const isDistrict =
      data.isThisDistrict
    //POST method is used in place of the GET method here
    const res = await fetch(
      'http://74.208.135.85/allUrls',
      {
        method: 'POST',
        headers: {
          'Content-Type':
            'application/json',
        },
        body: JSON.stringify(data),
      },
    )

    const linkData = await res.json()

    if (isDistrict) {
      return await linkData.district
        .socialmedia
    } else {
      return await linkData.club
        .socialmedia
    }
  },

  async show(id) {
    const res = await fetch(
      `http://74.208.135.85/url/${id}`,
      {
        method: 'GET',
      },
    )
    const data = await res.json()
    return await data.urlById
  },

  async create(data) {
    const res = await fetch(
      'http://74.208.135.85/url',
      {
        method: 'POST',
        headers: {
          'Content-Type':
            'application/json',
        },
        body: JSON.stringify(data),
      },
    )
  },

  async update(id, data) {
    const res = await fetch(
      `http://74.208.135.85/url/${id}`,
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
      `http://74.208.135.85/url/${id}`,
      {
        method: 'DELETE',
      },
    )
  },
}
