import store from '../store/index'

export async function fetchDistrictData() {
  const res = await fetch(`/api/district/${store.state.currentDistrictId}`, {
    method: 'GET'
  })
  const data = await res.json()
  return await data.districtById
}