import store from '../store/index'

export async function getClubData() {
  const res = await fetch(`/api/club/${store.state.currentClubId}`, {
    method: 'GET'
  })
  const data = await res.json()
  return await data.clubsById
}

export async function getSocials() {
  const clubSocialToQuery = {
    isThisDistrict: false,
    object_id: store.state.currentClubId
  }

  const res = await fetch('/api/allUrls', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(clubSocialToQuery)
  })

  const data = await res.json()
  const clubInfo = await data.club
  const clubSocials = await clubInfo.socialmedia

  return await clubSocials
}

export async function getSocialLink(socialType) {
  const clubSocials = await getSocials()
  let linkToReturn

  clubSocials.forEach(socialLink => {
    if(socialLink.url_type === socialType) {
      linkToReturn = socialLink.url
    }
  })
  return linkToReturn
}