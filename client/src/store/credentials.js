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
  console.log(await data.verified)
  return await data.verified
}

// async function fetchDistrictAdmins(districtId) {
//   const res = await fetch('/api/user', {method: 'GET'})
//   const data = await res.json()
//   const allUsers = await data.allUsers 

//   const districtUsers = allUsers.filter(
//     user => user.district_id == districtId
//   )

//   const districtUsersWithRoles = districtUsers.filter(
//     user => user.role[0] != null
//   )
  
//   const districtAdmins = districtUsersWithRoles.filter(
//     user => user.role[0].role_type == 1)

//   return districtAdmins
// }

// async function fetchDistrictIds() {
//   const res = await fetch('/api/district', {method: 'GET'})
//   const data = await res.json()
//   const districts = await data.districts

//   const districtIds = []

//   districts.forEach(district => {
//     districtIds.push(district.district_id)
//   });

//   return districtIds
// }

// export async function getAdminsOfEachDistrict() {
//   let adminsOfEachDistrict = []
//   const districtIds = await fetchDistrictIds()

//   districtIds.forEach(districtId => {
//     adminsOfEachDistrict.push(
//       {
//         id: districtId,
//         admins: fetchDistrictAdmins(districtId)
//       }
//     )
//   })

//   return adminsOfEachDistrict
// }