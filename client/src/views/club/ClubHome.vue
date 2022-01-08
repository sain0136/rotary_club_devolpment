<template>
  <div>
    <h1>Club {{$store.state.currentClubData.club_name}} Home</h1>
  </div>
</template>

<script>

import store from '../../store/index'

export default {
  name: 'ClubHome',
  data() {
    return {
    }
  },
}

</script>