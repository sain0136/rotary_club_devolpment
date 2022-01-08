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