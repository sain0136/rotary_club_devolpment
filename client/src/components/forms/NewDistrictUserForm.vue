<template>
  <div>
    <form>
      <label>District ID</label> <br>
      <input type="number"
        v-model="districtId"> <br> <br>
      <label>Name</label> <br>
      <input type="text"
        v-model="name"> <br> <br>
      <label>Username</label> <br>
      <input type="text"
        v-model="username"> <br> <br>
      <label>Password</label> <br>
      <input type="text"
        v-model="password"> <br> <br>
      <button @click="addNewUser">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'NewDistrictForm',
  components: {

  },
  data() {
    return {
      districtId: 0,
      name: '',
      username: '',
      password: ''
    }
  },
  methods: {
    async addNewUser(event) {
      event.preventDefault()
      
      let userToAdd = {
        name: this.name,
        username: this.username,
        password: this.password
      }

      const res = await fetch(`/api/districts/${this.districtId}/users`, { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userToAdd)})

      this.$router.push('/admin/districtusers');
    }
  }
}
</script>

<style scoped>

form {
  text-align: center;
}

</style>