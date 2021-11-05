import store from '../store/index'

export async function fetchClubData() {
  const res = await fetch(`/api/club/${store.state.currentClubId}`, {
    method: 'GET'
  })
  const data = await res.json()
  return await data.clubsById
}