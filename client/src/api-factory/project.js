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
    const allProjects = await data.allProjects

    return await allProjects
  },

  async indexPagination(
    id,
    limit,
    current,
    districtOrClub,
  ) {
    const queryHelper = {
      id: id,
      limit: limit,
      current_page: current,
      district_boolean: districtOrClub,
    }
    const res = await fetch(
      'http://74.208.135.85/project/paginate',
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
    const projects = await data.projects
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
    let fd = new FormData()
    fd.append(
      'project_image',
      data.image,
    )
    fd.append(
      'project_name',
      data.project_name,
    )
    fd.append(
      'project_theme',
      data.project_theme,
    )
    fd.append(
      'area_focus',
      JSON.stringify(data.area_focus),
    )
    fd.append(
      'estimated_completion',
      data.estimated_completion,
    )
    fd.append(
      'funding_goal',
      data.funding_goal,
    )
    fd.append(
      'anticipated_funding',
      data.anticipated_funding,
    )
    fd.append(
      'created_by',
      data.created_by,
    )
    fd.append('region', data.region)
    fd.append(
      'rotary_year',
      data.rotary_year,
    )
    fd.append(
      'project_status',
      data.project_status,
    )
    fd.append('country', data.country)
    if (data.club_id > 0) {
      fd.append('club_id', data.club_id)
    } else {
      fd.append(
        'district_id',
        data.district_id,
      )
    }

    fd.append(
      'role_type',
      data.role_type,
    )
    fd.append('image', data.image)
    fd.append(
      'grant_type',
      data.grant_type,
    )

    axios
      .post(
        'http://74.208.135.85/project',
        fd,
        {
          headers: {
            'Content-Type':
              'multipart/form-data',
            'Access-Control-Request-Method':
              'POST',
          },
        },
      )
      .then(res => {
        console.log(res)
        return res
      })
      .catch(err => {
        console.log(err)
      })
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
  async createDsg(data) {
    let fd = new FormData()

    fd.append(
      'role_type',
      data.role_type,
    )
    fd.append(
      'grant_type',
      data.grant_type,
    )
    fd.append(
      'rotary_year',
      data.rotary_year,
    )
    fd.append(
      'project_status',
      data.project_status,
    )

    fd.append(
      'project_name',
      data.project_name,
    )
    fd.append(
      'project_theme',
      data.project_theme,
    )
    fd.append('country', data.country)
    fd.append('region', data.region)
    fd.append(
      'start_date',
      data.start_date,
    )
    fd.append(
      'estimated_completion',
      data.estimated_completion,
    )

    fd.append(
      'area_focus',
      JSON.stringify(data.area_focus),
    )

    fd.append(
      'extra_descriptions',
      JSON.stringify(
        data.extra_descriptions,
      ),
    )

    fd.append(
      'itemised_budget',
      JSON.stringify(
        data.itemised_budget,
      ),
    )

    fd.append(
      'attached_letters',
      JSON.stringify(
        data.attached_letters,
      ),
    )
    fd.append(
      'project_funding',
      JSON.stringify(
        data.project_funding,
      ),
    )
    fd.append(
      'hostclub_information',
      JSON.stringify(
        data.hostclub_information,
      ),
    )

    fd.append(
      'intial_sponsor_club_contribution',
      data.intial_sponsor_club_contribution,
    )
    fd.append(
      'co_operating_organisation_contribution',
      data.co_operating_organisation_contribution,
    )
    fd.append(
      'district_simplified_grant_request',
      data.district_simplified_grant_request,
    )

    fd.append(
      'funding_goal',
      data.funding_goal,
    )
    fd.append(
      'anticipated_funding',
      data.anticipated_funding,
    )

    fd.append('image', data.image)
    fd.append(
      'project_image',
      data.image,
    )

    fd.append(
      'created_by',
      data.created_by,
    )
    fd.append(
      'district_id',
      data.district_id,
    )
    if (data.club_id != null) {
      fd.append('club_id', data.club_id)
    }

    axios
      .post(
        'http://74.208.135.85/project',
        fd,
        {
          headers: {
            'Content-Type':
              'multipart/form-data',
            'Access-Control-Request-Method':
              'POST',
          },
        },
      )
      .then(res => {
        console.log(res)
        return res
      })
      .catch(err => {
        console.log(err)
      })
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
  async createMatching(data) {
    let fd = new FormData()
    fd.append(
      'role_type',
      data.role_type,
    )
    fd.append(
      'grant_type',
      data.grant_type,
    )
    fd.append(
      'rotary_year',
      data.rotary_year,
    )
    fd.append(
      'project_status',
      data.project_status,
    )

    fd.append(
      'project_name',
      data.project_name,
    )
    fd.append(
      'project_theme',
      data.project_theme,
    )
    fd.append('country', data.country)
    fd.append('region', data.region)
    fd.append(
      'start_date',
      data.start_date,
    )
    fd.append(
      'estimated_completion',
      data.estimated_completion,
    )

    fd.append(
      'area_focus',
      JSON.stringify(data.area_focus),
    )

    fd.append(
      'extra_descriptions',
      JSON.stringify(
        data.extra_descriptions,
      ),
    )

    fd.append(
      'itemised_budget',
      JSON.stringify(
        data.itemized_budget,
      ),
    )

    fd.append(
      'attached_letters',
      JSON.stringify(
        data.attached_letters,
      ),
    )

    fd.append(
      'hostclub_information',
      JSON.stringify(
        data.hostclub_information,
      ),
    )

    fd.append(
      'intial_sponsor_club_contribution',
      data.intial_sponsor_club_contribution,
    )
    fd.append(
      'co_operating_organisation_contribution',
      data.co_operating_organisation_contribution,
    )
    fd.append(
      'district_matching_grant_request',
      data.district_matching_grant_request,
    )

    fd.append(
      'funding_goal',
      data.funding_goal,
    )
    fd.append(
      'anticipated_funding',
      data.anticipated_funding,
    )

    fd.append('image', data.image)
    fd.append(
      'project_image',
      data.image,
    )

    fd.append(
      'created_by',
      data.created_by,
    )
    fd.append(
      'district_id',
      data.district_id,
    )
    if (data.club_id != null) {
      fd.append('club_id', data.club_id)
    }

    axios
      .post(
        'http://74.208.135.85/project',
        fd,
        {
          headers: {
            'Content-Type':
              'multipart/form-data',
            'Access-Control-Request-Method':
              'POST',
          },
        },
      )
      .then(res => {
        console.log(res)
        return res
      })
      .catch(err => {
        console.log(err)
      })
  },

  async update(id, data) {
    let fd = new FormData()
    fd.append('project_id', id)
    fd.append(
      'project_name',
      data.project_name,
    )
    fd.append(
      'project_theme',
      data.project_theme,
    )
    fd.append(
      'area_focus',
      JSON.stringify(data.area_focus),
    )
    fd.append(
      'estimated_completion',
      data.estimated_completion,
    )
    fd.append(
      'funding_goal',
      data.funding_goal,
    )
    fd.append(
      'anticipated_funding',
      data.anticipated_funding,
    )
    fd.append(
      'created_by',
      data.created_by,
    )
    fd.append('region', data.region)
    fd.append(
      'rotary_year',
      data.rotary_year,
    )
    fd.append(
      'project_status',
      data.project_status,
    )
    fd.append('country', data.country)
    fd.append('grant_type', 1)
    if (data.image == null) {
      fd.append(
        'image',
        data.image_link,
      )
    } else {
      fd.append('image', data.image)
      fd.append(
        'project_image',
        data.image,
      )
    }
    axios
      .post(
        'http://74.208.135.85/project/updateById',
        fd,
        {
          headers: {
            'Content-Type':
              'multipart/form-data',
            'Access-Control-Request-Method':
              'POST',
          },
        },
      )
      .then(res => {
        console.log(res)
        return res
      })
      .catch(err => {
        console.log(err)
      })
  },
  async updateDsg(data, projectID) {
    let fd = new FormData()
    fd.append('project_id', projectID)

    fd.append(
      'role_type',
      data.role_type,
    )
    fd.append('grant_type', 2)
    fd.append(
      'rotary_year',
      data.rotary_year,
    )

    fd.append(
      'project_name',
      data.project_name,
    )
    fd.append(
      'project_theme',
      data.project_theme,
    )
    fd.append('country', data.country)
    fd.append('region', data.region)
    fd.append(
      'start_date',
      data.start_date,
    )
    fd.append(
      'estimated_completion',
      data.estimated_completion,
    )

    fd.append(
      'area_focus',
      JSON.stringify(data.area_focus),
    )

    fd.append(
      'extra_descriptions',
      JSON.stringify(
        data.extra_descriptions,
      ),
    )

    fd.append(
      'itemised_budget',
      JSON.stringify(
        data.itemised_budget,
      ),
    )

    fd.append(
      'attached_letters',
      JSON.stringify(
        data.attached_letters,
      ),
    )
    fd.append(
      'project_funding',
      JSON.stringify(
        data.project_funding,
      ),
    )
    fd.append(
      'hostclub_information',
      JSON.stringify(
        data.hostclub_information,
      ),
    )

    fd.append(
      'intial_sponsor_club_contribution',
      data.intial_sponsor_club_contribution,
    )
    fd.append(
      'co_operating_organisation_contribution',
      data.co_operating_organisation_contribution,
    )
    fd.append(
      'district_simplified_grant_request',
      data.district_simplified_grant_request,
    )

    fd.append(
      'funding_goal',
      data.funding_goal,
    )
    fd.append(
      'anticipated_funding',
      data.anticipated_funding,
    )
    if (data.image == null) {
      fd.append(
        'image',
        data.image_link,
      )
    } else {
      fd.append('image', data.image)
      fd.append(
        'project_image',
        data.image,
      )
    }

    fd.append(
      'created_by',
      data.created_by,
    )
    fd.append(
      'district_id',
      data.district_id,
    )
    if (data.club_id != null) {
      fd.append('club_id', data.club_id)
    }
    axios
      .post(
        'http://74.208.135.85/project/updateById',
        fd,
        {
          headers: {
            'Content-Type':
              'multipart/form-data',
            'Access-Control-Request-Method':
              'POST',
          },
        },
      )
      .then(res => {
        console.log(res)
        return res
      })
      .catch(err => {
        console.log(err)
      })
  },
  async updateMatching(
    data,
    projectID,
  ) {
    let fd = new FormData()
    fd.append('project_id', projectID)

    fd.append(
      'role_type',
      data.role_type,
    )
    fd.append(
      'grant_type',
      data.grant_type,
    )
    fd.append(
      'rotary_year',
      data.rotary_year,
    )
    fd.append(
      'project_status',
      data.project_status,
    )

    fd.append(
      'project_name',
      data.project_name,
    )
    fd.append(
      'project_theme',
      data.project_theme,
    )
    fd.append('country', data.country)
    fd.append('region', data.region)
    fd.append(
      'start_date',
      data.start_date,
    )
    fd.append(
      'estimated_completion',
      data.estimated_completion,
    )

    fd.append(
      'area_focus',
      JSON.stringify(data.area_focus),
    )

    fd.append(
      'extra_descriptions',
      JSON.stringify(
        data.extra_descriptions,
      ),
    )

    fd.append(
      'itemised_budget',
      JSON.stringify(
        data.itemized_budget,
      ),
    )

    fd.append(
      'attached_letters',
      JSON.stringify(
        data.attached_letters,
      ),
    )

    fd.append(
      'hostclub_information',
      JSON.stringify(
        data.hostclub_information,
      ),
    )

    fd.append(
      'intial_sponsor_club_contribution',
      data.intial_sponsor_club_contribution,
    )
    fd.append(
      'co_operating_organisation_contribution',
      data.co_operating_organisation_contribution,
    )
    fd.append(
      'district_matching_grant_request',
      data.district_matching_grant_request,
    )

    fd.append(
      'funding_goal',
      data.funding_goal,
    )
    fd.append(
      'anticipated_funding',
      data.anticipated_funding,
    )

    fd.append('image', data.image)
    fd.append(
      'project_image',
      data.image,
    )

    fd.append(
      'created_by',
      data.created_by,
    )
    fd.append(
      'district_id',
      data.district_id,
    )
    if (data.club_id != null) {
      fd.append('club_id', data.club_id)
    }

    axios
      .post(
        'http://74.208.135.85/project/updateById',
        fd,
        {
          headers: {
            'Content-Type':
              'multipart/form-data',
            'Access-Control-Request-Method':
              'POST',
          },
        },
      )
      .then(res => {
        console.log(res)
        return res
      })
      .catch(err => {
        console.log(err)
      })
  },

  async deleteById(id) {
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
        body: JSON.stringify(
          queryHelper,
        ),
      },
    )
    const data = await res.json()
    return await data
  },
}
