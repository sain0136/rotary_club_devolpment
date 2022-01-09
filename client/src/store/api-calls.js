export async function fetchDistrictDataById(districtId) {
  const res = await fetch(`/api/district/${districtId}`, {
    method: 'GET'
  })
  const data = await res.json()
  return await data.districtById
}

export async function fetchClubDataById(clubId) {
  const res = await fetch(`/api/club/${clubId}`, {
    method: 'GET'
  })
  const data = await res.json()
  return await data.clubsById
}

export async function isSiteAdminValid(id, password) {
  if(id == 'apo' && password == 'apo88') {
    return true
  } else {
    return false
  }
}

export async function isUserValid(id, password) {

  const userToVerify = {
    user_id: id,
    password: password
  }

  const res = await fetch('/api/user/verify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userToVerify),
  })

  const data = await res.json()
  return await data.verified
}

export async function getAllClubMembers(clubId) {
  const queryHelper = {
    club_id: clubId
  }

  const res = await fetch('/api/clubmembers', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(queryHelper),
  })

  const data = await res.json()
  return await data.allMembers
}

export async function getDistrictProjects(districtId) {
  const queryHelper = {
    district_id: districtId
  }

  const res = await fetch('/api/project/districtProjects', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(queryHelper),
  })

  const data = await res.json()
  const allProjects = await data.projects
  
  return await allProjects
}

export async function getClubProjects(clubId) {
  const queryHelper = {
    club_id: clubId
  }
  
  const res = await fetch('/api/project/clubProjects', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(queryHelper)
  })
  
  const data = await res.json()
  const projects = await data.projects

  return await projects
}

export async function getUserProjects(userId) {
  const queryHelper = {
    user_id: userId
  }
  
  const res = await fetch('/api/project/usersProjects', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(queryHelper)
  })
  
  const data = await res.json()
  const projects = await data.usersProjects

  return await projects
}