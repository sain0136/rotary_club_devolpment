export default {
  async index() {
    const res = await fetch(
      'http://74.208.135.85/district',
      { method: 'GET' },
    )
    const data = await res.json()
    return data.districts
  },

  async show(id) {
    const res = await fetch(
      `http://74.208.135.85/district/${id}`,
      {
        method: 'GET',
      },
    )
    const data = await res.json()
    return await data.districtById
  },

  async delete(id) {
    const res = await fetch(
      `http://74.208.135.85/district/${id}`,
      {
        method: 'DELETE',
      },
    )
  },

  async create(data) {
    const res = await fetch(
      'http://74.208.135.85/district',
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

  async indexPagination(data) {
    const res = await fetch(
      'http://74.208.135.85/districtClubs/paginate',
      {
        method: 'POST',
        headers: {
          'Content-Type':
            'application/json',
        },
        body: JSON.stringify(data),
      },
    )
    const page = await res.json()
    return page
  },

  async update(id, data) {
    const res = await fetch(
      `http://74.208.135.85/district/${id}`,
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

  async getDistricts() {
    const res = await fetch(
      'http://74.208.135.85/district',
      { method: 'GET' },
    )
    const data = await res.json()
    return data.districts
  },

  async allClubsInDistrict(districtId) {
    const payload = {
      district_id: districtId,
    }
    const res = await fetch(
      'http://74.208.135.85/districtClubs',
      {
        method: 'POST',
        headers: {
          'Content-Type':
            'application/json',
        },
        body: JSON.stringify(payload),
      },
    )
    const data = await res.json()
    return data
  },
}
