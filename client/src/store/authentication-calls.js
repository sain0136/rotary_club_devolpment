export async function isSiteAdminValid(id, password) {
  if(id == 'admin' && password == 'password1234') {
    return true
  } else {
    return false
  }
}
// deleteable
/* export async function isUserValid(id, password) {

  const userToVerify = {
    user_id: id,
    password: password
  }

  const res = await fetch('http://74.208.135.85/user/verify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userToVerify),
  })

  const data = await res.json()
  return await data.Verified
} */

export async function isValid(userData) {

  console.log(userData)

  const res = await fetch('http://74.208.135.85/user/verify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  })
  const data = await res.json()
  console.log(await data)
  return await data
}
/* // is email unique
async function isUniqueEmail(
  emailToTest,
) {
  const res = await fetch(
    '74.208.135.85/district',
    { method: 'GET' },
  )
  const data = await res.json()
  const districts = data.districts
  await districts.forEach(district => {
    if (
      district.district_email ==
      emailToTest
    ) {
      console.log(emailToTest)
      return false
    }
  })
  return true
}
 */