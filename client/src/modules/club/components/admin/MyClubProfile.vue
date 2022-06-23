<template>
  <div>
    <section class="page-title">
      <div class="inner-box">
        <h1 class="club-page-title">
          My Profile
        </h1>
      </div>
    </section>
    <ClubUserForm
      isEditOrCreate="Edit"
      :clubIdProp="clubID"
    />
  </div>
</template>

<script>
import ClubUserForm from '../../../../components/common/Forms/ClubUserForm.vue'
import store from '../../../../store/index'
export default {
  name: 'MyClubProfile',
  components: {
    ClubUserForm,
  },
  data() {
    return {
      clubID: 0,
    }
  },
  created() {
    this.clubID =
      store.state.currentClubData.club_id
  },
}
</script>

<style scoped>
.page-title h1 {
  font-size: 72px;
  margin-bottom: 0px;
  font-weight: 800;
  color: #ffffff;
  text-transform: capitalize;
}
.page-title {
  position: relative;
  padding: 30px 0px 40px;
  background-size: cover;
  text-align: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(../../assets/image-3.jpg);
}
.inner-box {
  position: relative;
}
</style>
