import project from './project'

export default {
  async index(id) {
    const projectById =
      await project.show(id)
    return await projectById.pledgesAssociated
  },

  async create(data) {
    const res = await fetch(
      'http://74.208.135.85/pledge',
      {
        method: 'POST',
        headers: {
          'Content-Type':
            'application/json',
        },
        body: JSON.stringify(data),
      },
    )
     data = await res.json()
    return data
  },
  async showPledges(id) {
    const queryHelper = {
      project_id: id,
    }

    const res = await fetch(
      'http://74.208.135.85/pledge/project/',
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
    return await data
  },
  
  async showPledgesByUser(id) {
    const queryHelper = {
      user_id: id,
    }

    const res = await fetch(
      'http://74.208.135.85/pledge/userPledges/',
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
    return await data
  },


  
}
