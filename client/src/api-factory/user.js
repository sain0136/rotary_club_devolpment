export default {

  async index() {
    const res = await fetch('/api/user/', {method: 'GET'})
    const data = await res.json()
    return await data.allUsers
  },

  async show(id) {
    const res = await fetch(`/api/user/${id}`, {
      method: 'GET'
    })
    const data = await res.json()
    return await data.userById
  }
}