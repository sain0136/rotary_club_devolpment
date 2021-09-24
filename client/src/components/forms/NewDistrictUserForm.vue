<template>
  <div>
    <form>
      <label for="name">District ID</label> <br>
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
        name: this.districtName,
        username: this.username,
        password: this.password
      }

      // const res = await fetch('/api/districts', { 
      //   method: 'POST', 
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(districtToAdd)})
      // console.log(res)

      this.$router.push('/admin/users');
    }
  }
}
</script>

<style scoped>

form {
  text-align: center;
}

</style>