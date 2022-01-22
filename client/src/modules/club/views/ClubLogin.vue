<template>
  <div>
    <div class="club-page-head">
      <h1 class="club-page-title">
        SIGN IN
      </h1>
    </div> <br> <br>
    <ClubLoginForm />
  </div>
</template>

<script>
import ClubLoginForm from '../components/ClubLoginForm.vue'

export default {
  name: 'ClubLogin',
  components: {
    ClubLoginForm,
  },
}
</script>
