export async function isUniqueEmail(emailToTest) {
  const res = await fetch('/api/district', {method: 'GET'})
  const data = await res.json()
  const districts = data.districts
  await districts.forEach(district => {
    if(district.district_email == emailToTest) {
      console.log(emailToTest)
      return false
    }
  })
  return true
}