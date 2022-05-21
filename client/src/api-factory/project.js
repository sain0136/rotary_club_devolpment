import store from '../store/index'
import axios from 'axios'
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


    let fd = new FormData();
    fd.append('project_image',data.image )
    fd.append('project_name',data.project_name )
    fd.append('project_theme',data.project_theme )
    fd.append('area_focus',data.area_focus )
    fd.append('estimated_completion',data.estimated_completion )
    fd.append('funding_goal',data.funding_goal )
    fd.append('current_funds',data.current_funds )
    fd.append('created_by',data.created_by )
    fd.append('region',data.region )
    fd.append('rotary_year',data.rotary_year )
    fd.append('project_status',data.project_status )
    fd.append('country',data.country )
    fd.append('district_id',data.district_id )
    fd.append('role_type',data.role_type )
    fd.append('image',data.image )
    fd.append('grant_type',data.grant_type )

    axios
    .post("http://74.208.135.85/project", fd, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Request-Method": "POST"

      },
    })
    .then((res) => {
      console.log(res);
      return res
    })
    .catch((err) => {
      console.log(err);
    });
   /*  console.log('api call happening:')
    let image = data.image
    console.log(image)
    delete data.image
    console.log(data)
    let body = data
    body['image'] =image
    const res = await fetch(
      'http://74.208.135.85/project',
      {
        method: 'POST',
     
        body: fd
      },
    )
    console.log(await res.json())  */

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
