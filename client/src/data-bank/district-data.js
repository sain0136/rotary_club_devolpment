import store from '../store/index'

// export async function fetchDistrictData() {
//   const res = await fetch(`/api/district/${store.state.currentDistrictId}`, {
//     method: 'GET'
//   })
//   const data = await res.json()
//   return await data.districtById
// }

export async function fetchClubs() {
  const res = await fetch('/api/club', { method: "GET" });
  const data = await res.json();
  const clubs = data.clubs.filter(
    (club) => club.district_id == store.state.currentDistrictData.district_id
  );
  return clubs;
}

