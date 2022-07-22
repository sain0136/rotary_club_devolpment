<template>
  <div class="form-container">
    <section class="page-title">
      <div class="auto-container">
        <div class="inner-box">
          <h1>
            Club Project
          </h1>
        </div>
      </div>
    </section>
    <form @submit.prevent="">
      <h3 style="text-align: center;">
        Name & describe your Project
      </h3>
      <!--            Project Title         -->
      <div class="error-div">
        <span
          class="form-error"
          id="area-form-error"
          v-if="v$.project_name.$error"
        >
          Must fill in name
        </span>
      </div>
      <div class="form-inputs">
        <BaseInputs
          v-model="project.project_name"
          label="Project Title"
          type="text"
          span="Must be 5 to 10 characters long"
        />
      </div>
      <!--            project description         -->
      <div class="error-div">
        <span
          class="form-error"
          id="area-form-error"
          v-if="v$.project_theme.$error"
        >
          Your description is not 150 to
          2000 characters long
        </span>
      </div>
      <div class="form-inputs">
        <BaseTextArea
          v-model="
            project.project_theme
          "
          label="Describe the project and its objectives"
          span="Must be 150 to 2000 characters long"
        />
      </div>
      <!--       countries              -->
      <div class="error-div">
        <span
          class="form-error"
          id="area-form-error"
          v-if="v$.country.$error"
        >
          You must pick a country
        </span>
      </div>
      <div class="form-inputs">
        <BaseSelect
          v-model="project.country"
          label="Country"
          :options="countryList"
        />
      </div>
      <!--          Area of Focus           -->
      <div
        class="form-inputs-checkboxes"
      >
        <hr />
        <h3 style="padding-top: 1em;">
          Areas of Focus
        </h3>
        <span
          class="form-error"
          id="area-form-error"
          v-if="v$.area_focus.$error"
        >
          Please choose at least one
          area of focus!
        </span>
        <BaseCheckBox
          v-model="
            project.area_focus
              .Peace_Conflict_Prevention
          "
          :label="areaOfFocus[0]"
        />
        <BaseCheckBox
          v-model="
            project.area_focus
              .Disease_Prevention_And_Treatment
          "
          :label="areaOfFocus[1]"
        />
        <BaseCheckBox
          v-model="
            project.area_focus
              .Water_And_Sanitation
          "
          :label="areaOfFocus[2]"
        />
        <BaseCheckBox
          v-model="
            project.area_focus
              .Maternal_And_Child_Health
          "
          :label="areaOfFocus[3]"
        />
        <BaseCheckBox
          v-model="
            project.area_focus
              .Basic_Education_And_Literacy
          "
          :label="areaOfFocus[4]"
        />
        <BaseCheckBox
          v-model="
            project.area_focus
              .Economic_And_Community_Development
          "
          :label="areaOfFocus[5]"
        />
        <BaseCheckBox
          v-model="
            project.area_focus
              .Environment
          "
          :label="areaOfFocus[6]"
        />
      </div>
      <!--  <div class="form-inputs">
        <BaseSelect
          v-model="project.area_focus"
          label="Area of Focus"
          :options="areaOfFocus"
        />
      </div> -->
      <!--          Funding Goal           -->
      <div class="error-div">
        <span
          class="form-error"
          id="area-form-error"
          v-if="v$.funding_goal.$error"
        >
          Your funding goal is required!
        </span>
      </div>
      <div class="form-inputs">
        <BaseInputs
          v-model="project.funding_goal"
          label="Funding Goal"
          type="number"
          span="Enter your Funding Goal in USD"
        />
      </div>
      <!--          Current\Starting Funds           -->
      <div class="error-div">
        <span
          class="form-error"
          id="area-form-error"
          v-if="
            v$.anticipated_funding
              .$error
          "
        >
          Your anticipated funds cannot
          be greater then your funding
          goals!
        </span>
      </div>
      <div class="form-inputs">
        <BaseInputs
          v-model="
            project.anticipated_funding
          "
          label="Current\Anticipated Funds"
          type="number"
          span="Enter your Anticipated Funds in USD"
        />
      </div>

      <!--            Region         -->
      <div class="error-div">
        <span
          class="form-error"
          id="area-form-error"
          v-if="v$.region.$error"
        >
          You must choose a region!
        </span>
      </div>
      <div class="form-inputs">
        <BaseSelect
          v-model="project.region"
          label="Region"
          :options="regionList"
        />
      </div>
      <!--         estimated completion            -->
      <div class="form-inputs">
        <BaseInputs
          v-model="
            project.estimated_completion
          "
          label="Estimated completion"
          type="date"
        />
      </div>
      <!--         IMAGE UPLOAD            -->
      <div
        class="form-inputs"
        v-if="
          editOrCreateProp != 'view' &&
            editOrCreateProp !=
              'approval'
        "
      >
        <input
          accept="image/*"
          type="file"
          class="col-md-4 control-label"
          @change="
            handleFileChange(
              $event.target.files,
            )
          "
        />
        <label>{{ Image }}</label>
        <span
          id="titleHelpInline"
          class="form-text"
        >
          Upload an img
        </span>
      </div>
      <!--                     -->

      <!--                     -->
      <div
        class="styled-pagination text-center"
      >
        <ul class="clearfix">
          <button
            @submit.prevent=""
            v-if="
              editOrCreateProp == 'edit'
            "
            @click="
              () => validateForm()
            "
          >
            Update
          </button>
          <button
            @submit.prevent=""
            v-else-if="
              editOrCreateProp ==
                'create'
            "
            @click="
              () => validateForm()
            "
          >
            Submit
          </button>
          <button
            v-if="
              editOrCreateProp != 'view'
            "
            @submit.prevent=""
            @click="() => redirect()"
          >
            Cancel
          </button>
          <button
            v-if="
              editOrCreateProp == 'view'
            "
            @submit.prevent=""
            @click="() => redirect()"
          >
            Back
          </button>
        </ul>
      </div>
      <div class="approval-box">
        <div class="inner-approval">
          <div class="project-facts">
            <h1
              style="
    text-align: center;
"
            >
              Creater Contact
            </h1>
            <ul>
              <li>
                <strong
                  >Project
                  creator:</strong
                >{{
                  projectCreatorInformation.createdByName
                }}
              </li>
              <li>
                <strong
                  >Creator email: </strong
                >{{
                  projectCreatorInformation.email
                }}
              </li>
              <li>
                <strong
                  >Creator
                  phone#:</strong
                >{{
                  projectCreatorInformation.phoneNumber
                }}
              </li>

              <li>
                <strong>Club:</strong
                >{{
                  projectCreatorInformation.clubName
                }}
              </li>
            </ul>
            <div
              class="styled-pagination text-center"
            >
              <ul class="clearfix">
                <button
                  @click="
                    () => approve()
                  "
                >
                  Approve this Project
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import BaseInputs from '../../formParts/BaseInputs.vue'
import BaseSelect from '../../formParts/BaseSelect.vue'
import ProjectApi from '../../../api-factory/project'
import store from '../../../store/index'
import Resource from '../../../Resources.js'
import BaseCheckBox from '../../formParts/BaseCheckBox.vue'
import BaseTextArea from '../../formParts/BaseTextArea.vue'
import useValidate from '@vuelidate/core'
import {
  maxValue,
  required,
  maxLength,
  minLength,
  email,
  requiredIf,
} from '@vuelidate/validators'

export default {
  components: {
    BaseInputs,
    BaseSelect,
    BaseCheckBox,
    BaseTextArea,
  },
  props: {
    projectIdProp: Number,
    editOrCreateProp: String,
    projectLabel: String,
    projectSentProp: Object,
  },
  data() {
    return {
      projectCreatorInformation: {
        createdByName: '',
        email: '',
        phoneNumber: '',
        clubName: '',
      },
      project: {
        area_focus: {
          Peace_Conflict_Prevention: false,
          Disease_Prevention_And_Treatment: false,
          Water_And_Sanitation: false,
          Maternal_And_Child_Health: false,
          Basic_Education_And_Literacy: false,
          Economic_And_Community_Development: false,
          Environment: false,
        },
        project_name: '',
        project_theme: '',
        country: '',
        grant_type: 1,
        estimated_completion: '',
        funding_goal: 0,
        anticipated_funding: 0,
        created_by: 0,
        region: '',
        rotary_year: 2022,
        image_link: '',
        project_status: 1,
        image: null,
        district_id: 0,
        club_id: 0,
        role_type: 1,
      },
      countryList: Resource.countryList,
      regionList: Resource.regionList,
      areaOfFocus: Resource.areaOfFocus,
      //Validation variables
      v$: useValidate(),
    }
  },
  async created() {
    if (
      this.projectLabel === 'District'
    ) {
      this.project.created_by =
        store.state.loggedInDistrictUserId
      this.project.district_id =
        store.state.loggedInDistrictId
    } else {
      this.project.created_by =
        store.state.loggedInClubUserId
      this.project.club_id =
        store.state.loggedInClubId
    }
    if (
      this.editOrCreateProp == 'edit'
    ) {
      await this.prePopulateFields()
    }
    if (
      this.editOrCreateProp == 'view' ||
      this.editOrCreateProp ==
        'approval'
    ) {
      await this.prePopulateFields()
      const collection = document.getElementsByTagName(
        'input',
      )
      const textareaCollection = document.getElementsByTagName(
        'textarea',
      )
      const selectCollection = document.getElementsByTagName(
        'select',
      )
      const checkboxCollection = document.querySelectorAll(
        'input[type=checkbox]',
      )

      collection.forEach(element => {
        element.readOnly = true
      })
      checkboxCollection.forEach(
        element => {
          element.setAttribute(
            'disabled',
            '',
          )
        },
      )
      textareaCollection.forEach(
        element => {
          element.readOnly = true
          element.setAttribute(
            'disabled',
            '',
          )
        },
      )
      selectCollection.forEach(
        element => {
          element.setAttribute(
            'disabled',
            '',
          )
        },
      )
    }
  },

  validations() {
    return {
      area_focus: {
        validateAreaOFocus: this
          .validateAreaOFocus,
      },
      project_name: {
        requiredIfFuction: requiredIf(
          this.project.project_name ==
            '',
        ),
      },
      project_theme: {
        requiredIfFuction: requiredIf(
          this.project.project_theme ==
            '' ||
            this.project.project_theme
              .length < 200 ||
            this.project.project_theme
              .length > 2000,
        ),
      },
      country: {
        required: this.validateCountry,
      },
      funding_goal: {
        required: requiredIf(
          this.project.funding_goal <=
            0,
        ),
      },
      anticipated_funding: {
        maxValue: this.validateFunding,
      },
      region: {
        required: this.validateRegion,
      },
    }
  },
  methods: {
    async approve() {
      if (
        confirm(
          'Are you sure you want to approve this project?',
        ) == true
      ) {
        await ProjectApi.changeProjectStatus(
          this.projectIdProp,
          4,
        )
        this.redirect()
      }
    },
    validateRegion() {
      if (this.project.region != '') {
        return true
      } else {
        return false
      }
    },
    validateCountry() {
      if (this.project.country != '') {
        return true
      } else {
        return false
      }
    },
    validateFunding() {
      if (
        parseFloat(
          this.project
            .anticipated_funding,
        ) >
        parseFloat(
          this.project.funding_goal,
        )
      ) {
        return false
      } else {
        return true
      }
    },

    validateAreaOFocus() {
      const asArray = Object.entries(
        this.project.area_focus,
      )
      const filtered = asArray.filter(
        ([key, value]) => value == true,
      )
      if (filtered.length > 0) {
        return true
      } else return false
    },
    async validateForm() {
      await this.v$.$validate()
      console.log(this.v$.$errors)
      if (!this.v$.$error) {
        if (
          this.editOrCreateProp ==
          'edit'
        ) {
          this.updateProject()
        } else this.createProject()
      }
    },
    handleFileChange(event) {
      // handle file changes
      let file = event[0]
      const fileReader = new FileReader()
      console.log(event[0])
      this.project.image = event[0]
    },

    async prePopulateFields() {
      const projectToEditMaster = await ProjectApi.show(
        this.projectIdProp,
      )
      console.log(projectToEditMaster)
      this.projectCreatorInformation.createdByName =
        ' ' +
        projectToEditMaster
          .creatorInformation.fullName
      this.projectCreatorInformation.email =
        ' ' +
        projectToEditMaster
          .creatorInformation.email
      this.projectCreatorInformation.phoneNumber =
        ' ' +
        projectToEditMaster
          .creatorInformation.phone
      if (
        projectToEditMaster.districtName
      ) {
        this.projectCreatorInformation.districtName =
          ' ' +
          projectToEditMaster.districtName
      }

      this.projectCreatorInformation.clubName =
        ' ' +
        projectToEditMaster.clubName
      const projectToEdit =
        projectToEditMaster.ProjectById
      this.project.area_focus =
        projectToEdit.areaFocusObject
      this.project.project_name =
        projectToEdit.project_name
      this.project.project_theme =
        projectToEdit.project_theme
      this.project.country =
        projectToEdit.country

      this.project.estimated_completion =
        projectToEdit.estimated_completion
      this.project.funding_goal =
        projectToEdit.funding_goal
      this.project.anticipated_funding =
        projectToEdit.anticipated_funding

      this.project.grant_type =
        projectToEdit.grant_type

      this.project.region =
        projectToEdit.region

      this.project.image_link =
        projectToEdit.image_link
    },
    async updateProject() {
      console.log(
        'updating new project',
      )

      var mydate = new Date(
        this.project.estimated_completion,
      )
      this.project.estimated_completion = mydate.toLocaleDateString(
        'en-US',
      )

      const projectToEdit = this.project

      console.log(
        'updating new project',
        projectToEdit,
      )
      await ProjectApi.update(
        this.projectIdProp,
        projectToEdit,
      )
      console.log('updated')
      this.redirect()
    },
    async createProject() {
      console.log(
        'creating new project',
      )

      var mydate = new Date(
        this.project.estimated_completion,
      )
      this.project.estimated_completion = mydate.toLocaleDateString(
        'en-US',
      )
      const projectToCreate = this
        .project
      await ProjectApi.create(
        projectToCreate,
      )
      console.log('hi')
      this.redirect()
    },
    redirect() {
      if (
        this.projectLabel ==
        'DistrictChairApproval'
      ) {
        this.$router.push({
          name: 'DistrictHome',
        })
      } else {
        this.$router.push('../../home')
      }
    },
  },
}
</script>

<style scoped>
.approval-box {
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}
.inner-approval {
  height: 20rem;

  box-shadow: #ffb607 0px 2px 8px 0px;
  width: 50%;
}
.project-facts {
  min-height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
}
.form-container {
  display: flex;
  flex-direction: column;
  min-height: 60%;
}
.auto-container {
  position: static;
  max-width: 1200px;
  padding: 0px 15px;
  margin: 0 auto;
}

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
}
section {
  margin-bottom: 3em;
}
.form-inputs {
  display: flex;
  justify-content: center;
  padding: 1em 1em;
}
.styled-pagination ul {
  position: relative;
  display: inline-block;
}

.styled-pagination button {
  position: relative;
  display: block;
  float: left;
  margin: 1em 4px 4px 4px;
  color: #ffffff;
  padding: 6px 20px;
  border: 0px;
  line-height: 22px;
  text-transform: uppercase;
  background-color: #3a3a3a;
}

.styled-pagination {
  position: relative;
  display: flex;
  justify-content: center;
}
button:hover {
  color: #ffffff;
  background-color: #ffb607;
  -webkit-transition: all 500ms ease;
}
.form-inputs-checkboxes {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2em;
}
.form-error {
  color: red;
  font-size: 12px;
  padding: 0%;
}
.error-div {
  text-align: center;
}
</style>
