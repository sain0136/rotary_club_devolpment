<template>
  <section class="page-title">
    <div class="auto-container">
      <div class="inner-box">
        <h1
          v-if="
            isThisMyPledges != 'yes'
          "
        >
          Pledges
        </h1>
        <h1
          v-else-if="
            isThisMyPledges == 'yes'
          "
        >
          Your Pledges
        </h1>
      </div>
    </div>
  </section>
  <div class="auto-container">
    <Section
      class="header-2"
      v-if="isThisMyPledges != 'yes'"
    >
      <h3>
        Here are all the pledges for
        this project:
      </h3>
      <br />
      <h3>
        <strong
          >{{
            project.project_name
          }}
          Project</strong
        >
      </h3>
      <hr />
    </Section>
    <Section
      class="header-2"
      v-else-if="
        isThisMyPledges == 'yes'
      "
    >
      <h3>
        Here are all the pledge you have
        made:
      </h3>
    </Section>
    <ProjectPledgesTable
      v-if="isThisMyPledges != 'yes'"
      :projectIds="project.project_id"
    />
    <ProjectPledgesTable
      v-if="isThisMyPledges == 'yes'"
      :isThisMyPledges="'yes'"
      :userIdProp="userId"
    />
  </div>
</template>

<script>
import store from '../../../../../store/index'
import projectApi from '../../../../../api-factory/project'
import ProjectPledgesTable from '../../../../../components/common/Pledges/ProjectPledgesTable.vue'

export default {
  name: 'ClubProjectPledgesView',
  components: {
    ProjectPledgesTable,
  },

  props: {
    isThisMyPledges: String,
    projectId: Number,
  },
  data() {
    return {
      project: {},
      userId:
        store.state.loggedInClubUserId,
    }
  },
  async created() {
    if (
      typeof this.projectId ==
        'number' ||
      typeof this.projectId == 'string'
    ) {
      this.project = await projectApi.show(
        this.projectId,
      )
    } else {
    }
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
  text-align: center;
}

.page-title .inner-box {
  position: relative;
}
.page-title {
  position: relative;
  padding: 30px 0px 40px;
  background-size: cover;
  text-align: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(../../../assets/image-3.jpg);
  margin-bottom: 6%;
}
h3 {
  text-align: center;
}
.header-2 {
  margin-bottom: 4em;
}
hr {
  border: 0.1em solid #ffb607;
}
</style>
