import store from '../store/index'

export default {
  async districtIndex(id) {
    const queryHelper = {
      district_id: id,
    }

    const res = await fetch(
      'http://74.208.135.85/project/districtProjects',
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
    const allProjects =
      await data.allProjects

    return await allProjects
  },

  async indexPagination(id,limit,current) {
    const queryHelper = {
      district_id: id,
      limit:limit,
      current_page:current 
      
    }
    const res = await fetch(
      'http://74.208.135.85/project/paginate',
      {
        method: 'POST',
        headers: {
          'Content-Type':
            'application/json',
        },body: JSON.stringify(queryHelper),
      },
    )
    const page = await res.json()
    return page
  },
  

  async clubIndex(id) {
    const queryHelper = {
      club_id: id,
    }

    const res = await fetch(
      'http://74.208.135.85/project/clubProjects',
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
    const projects = await data.projects

    return await projects
  },

  async userIndex(id) {
    const queryHelper = {
      user_id: id,
    }

    const res = await fetch(
      'http://74.208.135.85/project/usersProjects',
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
    const projects =
      await data.usersProjects
    return await projects
  },

  /**
   * This call is used as the "get project by id" route
   */
  async show(id) {
    const queryHelper = {
      project_id: id,
    }

    const res = await fetch(
      'http://74.208.135.85/project/showProjectByIdPost',
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
    return await data.ProjectById
  },

  async create(data) {
    console.log('api call happening:')

    console.log(data)

    const res = await fetch(
      'http://74.208.135.85/project',
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
    data['project_id']=id
    const res = await fetch(
     'http://74.208.135.85/project/updateById',
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
  async deleteById( id) {

    const queryHelper = {
      project_id: id,
    }


    const res = await fetch(
      `http://74.208.135.85/project/delete`,
      {
        method: 'POST',
        headers: {
          'Content-Type':
            'application/json',
        },
        body: JSON.stringify(queryHelper),
      },
    )
    const data = await res.json()
    return await data
  }
}
