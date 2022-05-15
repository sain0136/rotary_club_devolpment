export async function isSiteAdminValid(id, password) {
  if(id == 'admin' && password == 'password1234') {
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
  return await data.Verified
}

export async function isValid(userData) {

  console.log(userData)

  const res = await fetch('/api/user/verify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  })
  const data = await res.json()
  console.log(await data)
  return await data
}