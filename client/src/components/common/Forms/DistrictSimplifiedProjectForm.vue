<template>
  <!-- district Simplifed Form wrapper -->
  <div class="form-container">
    <!-- district Simplifed Header -->
    <section class="page-title">
      <div class="auto-container">
        <div class="inner-box">
          <h1>
            District Simplified
          </h1>
        </div>
        <div></div>
      </div>
    </section>
    <h3>
      District Simplified Grants Club
      Application Form – 2022-23
    </h3>
    <hr />
    <!-- page 1  Simplifed Form -->
    <div
      class="form-page-1"
      v-if="formPage == 1"
    >
      <form @submit.prevent="">
        <h3>
          Name & describe your
          Project--Page 1
        </h3>
        <!-- Criteria List -->
        <div class="criteria">
          <h4
            style="
              text-decoration: underline;
              text-decoration-color: #ffb607;
            "
          >
            Criteria
          </h4>

          <ul>
            <li
              v-for="listItem in criteriaList"
              :key="listItem"
            >
              {{ listItem }}
            </li>
          </ul>
          <hr />
          <br />
        </div>
        <div class="input-wrapper">
          <!--            Project Title         -->
          <div class="error-div">
            <span
              class="form-error"
              id="area-form-error"
              v-if="
                v$.project_name.$error
              "
            >
              Must fill project title
              name
            </span>
          </div>
          <div class="form-inputs">
            <BaseInputs
              v-model="
                simplifiedProject.project_name
              "
              label="Project Title"
              type="text"
              span="Must be 5 to 10 characters long"
            />
          </div>

          <!--     project description         -->
          <div class="error-div">
            <span
              class="form-error"
              id="area-form-error"
              v-if="
                v$.project_theme.$error
              "
            >
              Project description must
              be between 150 to 2000
              character long
            </span>
          </div>
          <div class="form-inputs">
            <BaseTextArea
              v-model="
                simplifiedProject.project_theme
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
              You must choose a country.
            </span>
          </div>
          <div class="form-inputs">
            <BaseSelect
              v-model="
                simplifiedProject.country
              "
              label="Country"
              :options="countryList"
            />
          </div>
          <!--            Region         -->
          <div class="error-div">
            <span
              class="form-error"
              id="area-form-error"
              v-if="v$.region.$error"
            >
              You must choose a region.
            </span>
          </div>
          <div class="form-inputs">
            <BaseSelect
              v-model="
                simplifiedProject.region
              "
              label="Region"
              :options="regionList"
            />
          </div>
          <!--         start date            -->
          <div class="error-div">
            <span
              class="form-error"
              id="area-form-error"
              v-if="
                v$.start_date.$error
              "
            >
              You must choose a start
              date.
            </span>
          </div>
          <div class="form-inputs">
            <BaseInputs
              v-model="
                simplifiedProject.start_date
              "
              label="Start Date:"
              type="date"
            />
          </div>
          <!--         estimated completion date           -->
          <div class="error-div">
            <span
              class="form-error"
              id="area-form-error"
              v-if="
                v$.estimated_completion
                  .$error
              "
            >
              You must choose a a
              completed date.
            </span>
          </div>
          <div class="form-inputs">
            <BaseInputs
              v-model="
                simplifiedProject.estimated_completion
              "
              label="Estimated completion date"
              type="date"
            />
          </div>

          <!-- Area of focus- checkboxes- Figure out a more elegant solution  -->
          <div
            class="form-inputs-checkboxes"
          >
            <hr />
            <div class="error-div">
              <span
                class="form-error"
                id="area-form-error"
                v-if="
                  v$.area_focus.$error
                "
              >
                You must choose
                objective measures
              </span>
            </div>
            <h5>Areas of Focus</h5>

            <BaseCheckBox
              v-model="
                simplifiedProject
                  .area_focus
                  .Peace_Conflict_Prevention
              "
              :label="areaOfFocus[0]"
            />
            <BaseCheckBox
              v-model="
                simplifiedProject
                  .area_focus
                  .Disease_Prevention_And_Treatment
              "
              :label="areaOfFocus[1]"
            />
            <BaseCheckBox
              v-model="
                simplifiedProject
                  .area_focus
                  .Water_And_Sanitation
              "
              :label="areaOfFocus[2]"
            />
            <BaseCheckBox
              v-model="
                simplifiedProject
                  .area_focus
                  .Maternal_And_Child_Health
              "
              :label="areaOfFocus[3]"
            />
            <BaseCheckBox
              v-model="
                simplifiedProject
                  .area_focus
                  .Basic_Education_And_Literacy
              "
              :label="areaOfFocus[4]"
            />
            <BaseCheckBox
              v-model="
                simplifiedProject
                  .area_focus
                  .Economic_And_Community_Development
              "
              :label="areaOfFocus[5]"
            />
            <BaseCheckBox
              v-model="
                simplifiedProject
                  .area_focus
                  .Environment
              "
              :label="areaOfFocus[6]"
            />
          </div>
        </div>
        <hr />
        <!--         IMAGE UPLOAD            -->
        <h5>Upload Cover Image</h5>
        <h6 style="text-align: center;">
          *If you dont upload one a
          default image will be shown.
        </h6>
        <div
          class="form-inputs"
          style="
            justify-content: center;
            margin-top: 3em;
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
      </form>
    </div>
    <!-- page 2  Simplifed Form -->
    <div
      class="form-page-1"
      v-if="formPage == 2"
    >
      <form
        @submit.prevent=""
        id="form-page2"
      >
        <h3
          style="
            text-align: center;
            padding-bottom: 2em;
          "
        >
          Name & describe your
          Project--Page 2
        </h3>
        <!--          Extra Discription        -->
        <div class="error-div">
          <span
            class="form-error"
            id="area-form-error"
            v-if="
              v$
                .benefit_community_description
                .$error
            "
          >
            Your description is not 150
            to 2000 characters long.
          </span>
        </div>
        <div class="form-inputs">
          <BaseTextArea
            v-model="
              simplifiedProject
                .extra_descriptions
                .benefit_community_description
            "
            label="Describe how the project will benefit the community or address a community need"
            span="Must be 150 to 2000 characters long"
          />
        </div>
        <!--          Extra Discription        -->
        <div class="error-div">
          <span
            class="form-error"
            id="area-form-error"
            v-if="
              v$
                .non_financial_participation
                .$error
            "
          >
            This area cannot exceed 2000
            characters
          </span>
        </div>
        <div class="form-inputs">
          <BaseTextArea
            v-model="
              simplifiedProject
                .extra_descriptions
                .non_financial_participation
            "
            label="Describe the non-financial participation by Rotarians in the project"
            span="Must be 150 to 2000 characters long"
          />
        </div>
        <!--          Extra Discription        -->
        <div class="error-div">
          <span
            class="form-error"
            id="area-form-error"
            v-if="
              v$
                .co_operating_organisation_letter
                .$error
            "
          >
            This area cannot exceed 2000
            characters
          </span>
        </div>
        <div class="form-inputs">
          <BaseTextArea
            v-model="
              simplifiedProject
                .extra_descriptions
                .co_operating_organisation_letter
            "
            label="If a co-operating organisation will be involved in the project, provide a letter stating its role in the project and how Rotarians will interface with the organisation."
            span="Must be 150 to 2000 characters long"
          />
        </div>
        <!--         Primary Contact        -->

        <div class="form-inputs">
          <div class="inner">
            <div>
              <hr />
              <h4>Primary Contact</h4>

              <BaseInputs
                v-model="
                  simplifiedProject
                    .extra_descriptions
                    .primary_contact
                    .name
                "
                type="text"
                label="Name"
                span="Enter Full Name"
              />
            </div>
            <div>
              <BaseInputs
                v-model="
                  simplifiedProject
                    .extra_descriptions
                    .primary_contact
                    .address
                "
                label="Address"
                span="Enter address"
                type="text"
              />
            </div>
            <div>
              <BaseInputs
                v-model="
                  simplifiedProject
                    .extra_descriptions
                    .primary_contact
                    .email
                "
                label="Email"
                span="Enter Email"
                type="email"
              />
            </div>
            <div>
              <BaseInputs
                v-model="
                  simplifiedProject
                    .extra_descriptions
                    .primary_contact
                    .phone
                "
                label="phone"
                span="Enter phone"
                type="text"
              />
            </div>
            <div>
              <BaseInputs
                v-model="
                  simplifiedProject
                    .extra_descriptions
                    .primary_contact.fax
                "
                label="fax"
                span="Enter fax#"
                type="text"
              />
            </div>
          </div>
        </div>
        <!--         Secondary Contact        -->

        <div class="form-inputs">
          <div class="inner">
            <div>
              <hr />
              <h4>Secondary Contact</h4>

              <BaseInputs
                v-model="
                  simplifiedProject
                    .extra_descriptions
                    .secondary_contact
                    .name
                "
                type="text"
                label="Name"
                span="Enter Full Name"
              />
            </div>
            <div>
              <BaseInputs
                v-model="
                  simplifiedProject
                    .extra_descriptions
                    .secondary_contact
                    .address
                "
                label="Address"
                span="Enter address"
                type="text"
              />
            </div>
            <div>
              <BaseInputs
                v-model="
                  simplifiedProject
                    .extra_descriptions
                    .secondary_contact
                    .email
                "
                label="Email"
                span="Enter Email"
                type="email"
              />
            </div>
            <div>
              <BaseInputs
                v-model="
                  simplifiedProject
                    .extra_descriptions
                    .secondary_contact
                    .phone
                "
                label="phone"
                span="Enter phone"
                type="text"
              />
            </div>
            <div>
              <BaseInputs
                v-model="
                  simplifiedProject
                    .extra_descriptions
                    .secondary_contact
                    .fax
                "
                label="fax"
                span="Enter fax#"
                type="text"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
    <!-- page 3  Simplifed Form -->
    <div
      class="form-page-3"
      v-if="formPage == 3"
    >
      <form
        @submit.prevent=""
        id="form-page3"
      >
        <h3
          style="
            text-align: center;
            padding-bottom: 2em;
          "
        >
          Name & describe your
          Project--Page 3
        </h3>
        <h5>
          Provide a complete, detailed
          and itemised budget for the
          entire project. (Supporting
          documents may be requested.)
        </h5>
        <!--         Budget Add          -->
        <div class="form-inputs">
          <BaseInputs
            v-model="budgetItemName"
            label="Name"
            type="text"
          />
        </div>
        <div class="form-inputs">
          <BaseInputs
            v-model="budgetItemCost"
            label="Enter item cost in USD"
            type="number"
          />
        </div>
        <div class="styled-pagination">
          <ul class="clearfix">
            <li>
              <a
                @click="
                  addToBudget(
                    budgetItemName,
                    budgetItemCost,
                  )
                "
                >Add to Budget</a
              >
            </li>
          </ul>
        </div>
        <!--         Budget table          -->
        <table
          v-if="
            simplifiedProject.itemised_budget !=
              0
          "
        >
          <th>Item Name</th>
          <th>Cost</th>
          <th>Delete Item</th>
          <tr
            id="budget-information"
            v-for="(item,
            index) in simplifiedProject.itemised_budget"
            :key="index"
          >
            <td>
              {{ item.itemName }}
            </td>
            <td>
              {{ item.itemCost }}
            </td>
            <td>
              <button
                title="Delete Project"
                class="crud-buttons"
                @click="
                  deleteItemByIndex(
                    index,
                  )
                "
              >
                <font-awesome-icon
                  class="social-icon"
                  icon="trash-alt"
                ></font-awesome-icon>
              </button>
            </td>
          </tr>
          <tfoot>
            <tr>
              <th></th>
              <th>Total Cost:</th>
              <th>
                USD${{ sumOfItemsCost }}
              </th>
            </tr>
          </tfoot>
        </table>
        <h3>
          Provide a breakdown of the
          project funding
        </h3>
        <!--          Sponsor club contribution       -->
        <div class="error-div">
          <span
            class="form-error"
            id="area-form-error"
            v-if="
              v$
                .intial_sponsor_club_contribution
                .$error
            "
          >
            Your total anticipated
            funding cannot exceed your
            budget estimatied costs!
          </span>
        </div>
        <div class="form-inputs">
          <BaseInputs
            v-model="
              simplifiedProject.intial_sponsor_club_contribution
            "
            type="number"
            label="Sponsor club contribution:"
          />
        </div>
        <!--          Co-operating organisation contribution      -->

        <div class="form-inputs">
          <BaseInputs
            v-model="
              simplifiedProject.co_operating_organisation_contribution
            "
            label="Co-operating organisation contribution:"
            type="number"
          />
        </div>
        <!-- District Simplified Grant request*:-->
        <div class="error-div">
          <span
            class="form-error"
            id="area-form-error"
            v-if="
              v$
                .district_simplified_grant_request
                .$error
            "
          >
            Your request cannot exceed
            the DSG Grant request limit.
          </span>
        </div>
        <div class="form-inputs">
          <BaseInputs
            v-model="
              simplifiedProject.district_simplified_grant_request
            "
            label="District Simplified Grant request*:"
            type="number"
          />
        </div>
        <!--  Total anticipated project funding:      -->
        <div
          class="form-inputs"
          style="
            justify-content: center;
            margin-top: 1em;
          "
        ></div>
        <h6>
          Total Anticipated Cost:$
          {{ sumOfItemsCost }} USD
        </h6>
        <h6>
          Total Anticipated
          Funding/Current Funds:$
          {{ sumOfAnticipatedFunding }}
          USD
        </h6>
        <h5>
          * DSG grants will be limited
          to 0.50 - $1 on the first
          $5,000 of club contribution to
          a maximum grant of $2,500USD.
        </h5>
        <h5 style="color: red;">
          Here is your current DSG Grant
          request limit: $
          {{
            districtSimplifiedGrantRequestLimit
          }}
          USD
        </h5>
        <hr />
        <div>
          <h5
            style="color:red"
            v-if="thereIsErrors == true"
          >
            Cannot submit-Form Errors
            please review form
          </h5>
        </div>
        <div class="styled-pagination">
          <ul class="clearfix">
            <li
              v-if="
                isThisEditOrCreateProp ==
                  'create'
              "
            >
              <a @click="validateForm()"
                >Create DSG Project</a
              >
            </li>
            <li
              v-if="
                isThisEditOrCreateProp ==
                  'create'
              "
            >
              <a @click="cancel()"
                >Cancel</a
              >
            </li>
            <li
              v-else-if="
                isThisEditOrCreateProp ==
                  'edit'
              "
            >
              <a
                @click="
                  validateForm(
                    projectIdProp,
                  )
                "
                >Update this DSG
                Project</a
              >
            </li>
          </ul>
        </div>
        <h2>
          Applications must be submitted
          no later than April 30, 2022
          for review.
        </h2>
      </form>
    </div>
    <!--Form Page Buttons -->
    <div class="styled-pagination">
      <ul class="clearfix">
        <li v-if="formPage > 1">
          <a
            class="prev"
            @click="
              mutateCurrentPage(1)
            "
            >Previous Page</a
          >
        </li>
        <li
          v-if="
            formPage >= 1 &&
              formPage < 3
          "
        >
          <a
            class="next"
            @click="
              mutateCurrentPage(2)
            "
            >Next Page</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Resources from '../../../Resources'
import BaseCheckBox from '../../formParts/BaseCheckBox.vue'
import BaseInputs from '../../formParts/BaseInputs.vue'
import BaseSelect from '../../formParts/BaseSelect.vue'
import BaseTextArea from '../../formParts/BaseTextArea.vue'
import ProjectApi from '../../../api-factory/project'
import store from '../../../store/index'
import useValidate from '@vuelidate/core'
import {
  maxValue,
  required,
  maxLength,
  minLength,
  email,
  requiredIf,
} from '@vuelidate/validators'
import { watchEffect } from 'vue-demi'

export default {
  name: 'DistrictSimplifiedProjectForm',
  components: {
    BaseInputs,
    BaseSelect,
    BaseCheckBox,
    BaseTextArea,
  },
  props: {
    isThisEditOrCreateProp: String,
    isThisDistrictOrClubProp: String,
    projectIdProp: Number,
  },
  data() {
    return {
      simplifiedProject: {
        role_type: 1,
        grant_type: 2,
        rotary_year: 2022,
        project_status: 1,

        project_name: '',
        project_theme: '',
        country: '',
        region: '',
        start_date: '',
        estimated_completion: '',

        area_focus: {
          Peace_Conflict_Prevention: false,
          Disease_Prevention_And_Treatment: false,
          Water_And_Sanitation: false,
          Maternal_And_Child_Health: false,
          Basic_Education_And_Literacy: false,
          Economic_And_Community_Development: false,
          Environment: false,
        },
        extra_descriptions: {
          benefit_community_description:
            '',
          non_financial_participation:
            '',
          co_operating_organisation_letter:
            '',
          primary_contact: {
            name: '',
            address: '',
            phone: '',
            email: '',
            fax: '',
          },
          secondary_contact: {
            name: '',
            address: '',
            phone: '',
            email: '',
            fax: '',
          },
        },
        //Validation variables

        itemised_budget: [],

        attached_letters: [],
        project_funding: [],
        hostclub_information: [],

        intial_sponsor_club_contribution: 0,
        co_operating_organisation_contribution: 0,
        district_simplified_grant_request: 0,

        funding_goal: 0,
        anticipated_funding: 0,

        image: null,
        image_link: '',

        created_by: 0,
        district_id: 0,
        club_id: 0,
      },
      v$: useValidate(),
      budgetItemCost: 0,
      budgetItemName: '',
      thereIsErrors: false,
      areaOfFocus:
        Resources.areaOfFocus,
      criteriaList:
        Resources.DistrictSimplifiedCriteria,
      countryList:
        Resources.countryList,
      regionList: Resources.regionList,
      formPage: 1,
    }
  },
  created() {
    if (
      this.isThisDistrictOrClubProp ==
        'District' &&
      this.isThisEditOrCreateProp ==
        'create'
    ) {
      this.simplifiedProject.created_by = parseInt(
        store.state
          .loggedInDistrictUserId,
      )
      this.simplifiedProject.district_id = parseInt(
        store.state.loggedInDistrictId,
      )
    } else if (
      this.isThisEditOrCreateProp ==
      'create'
    ) {
      this.simplifiedProject.created_by = parseInt(
        store.state.loggedInClubUserId,
      )
      this.simplifiedProject.club_id = parseInt(
        store.state.loggedInClubId,
      )
    }
    if (
      this.isThisEditOrCreateProp ==
      'edit'
    ) {
      this.prePopulateFields()
    }
  },
  validations() {
    return {
      project_name: {
        requiredIfFuction: requiredIf(
          this.simplifiedProject
            .project_name == '',
        ),
      },
      project_theme: {
        requiredIfFuction: requiredIf(
          this.simplifiedProject
            .project_theme == '' ||
            this.simplifiedProject
              .project_theme.length <
              200 ||
            this.simplifiedProject
              .project_theme.length >
              2000,
        ),
      },
      country: {
        requiredIfFuction: requiredIf(
          this.simplifiedProject
            .country == '',
        ),
      },
      region: {
        requiredIfFuction: requiredIf(
          this.simplifiedProject
            .region == '',
        ),
      },
      start_date: {
        requiredIfFuction: requiredIf(
          this.simplifiedProject
            .start_date == '',
        ),
      },
      estimated_completion: {
        requiredIfFuction: requiredIf(
          this.simplifiedProject
            .estimated_completion == '',
        ),
      },
      area_focus: {
        validateAreaOFocus: this
          .validateAreaOFocus,
      },
      benefit_community_description: {
        requiredIfFuction: requiredIf(
          this.simplifiedProject
            .extra_descriptions
            .benefit_community_description ==
            '' ||
            this.simplifiedProject
              .extra_descriptions
              .benefit_community_description
              .length > 2000 ||
            this.simplifiedProject
              .extra_descriptions
              .benefit_community_description
              .length > 150,
        ),
      },
      non_financial_participation: {
        requiredIfFuction: requiredIf(
          this.simplifiedProject
            .extra_descriptions
            .non_financial_participation
            .length > 2000,
        ),
      },
      co_operating_organisation_letter: {
        requiredIfFuction: requiredIf(
          this.simplifiedProject
            .extra_descriptions
            .co_operating_organisation_letter
            .length > 2000,
        ),
      },
      intial_sponsor_club_contribution: {
        requiredIf: this
          .validateFunding,
      },
      district_simplified_grant_request: {
        requiredIfFuction: requiredIf(
          this.simplifiedProject
            .district_simplified_grant_request >
            this
              .districtSimplifiedGrantRequestLimit,
        ),
      },
    }
  },
  methods: {
    cancel() {
      this.redirect()
    },
    validateFunding() {
      let sum = 0
      this.simplifiedProject.itemised_budget.forEach(
        item => {
          sum = sum + item.itemCost
        },
      )
      let total = this
        .sumOfAnticipatedFunding
      if (total > sum) {
        return false
      } else {
        return true
      }
    },
    validateAreaOFocus() {
      const asArray = Object.entries(
        this.simplifiedProject
          .area_focus,
      )
      const filtered = asArray.filter(
        ([key, value]) => value == true,
      )
      if (filtered.length > 0) {
        return true
      } else return false
    },
    async validateForm(prop) {
      await this.v$.$validate()
      console.log(this.v$.$errors)
      if (!this.v$.$error) {
        this.thereIsErrors = false
        if (
          this.isThisEditOrCreateProp ==
          'edit'
        ) {
          this.updateProject(prop)
        } else this.createDsgProject()
      } else {
        this.thereAreErrors()
      }
    },
    async thereAreErrors() {
      this.thereIsErrors = true
      watchEffect(() => {
        if (this.v$.$error) {
          this.thereIsErrors = true
        } else {
          this.thereIsErrors = false
        }
      })
    },
    async prePopulateFields() {
      const projectToEdit = await ProjectApi.show(
        this.projectIdProp,
      )
      this.simplifiedProject.project_name =
        projectToEdit.project_name
      this.simplifiedProject.project_theme =
        projectToEdit.project_theme
      this.simplifiedProject.country =
        projectToEdit.country
      this.simplifiedProject.region =
        projectToEdit.region

      this.simplifiedProject.start_date =
        projectToEdit.start_date
      this.simplifiedProject.estimated_completion =
        projectToEdit.estimated_completion

      this.simplifiedProject.funding_goal =
        projectToEdit.funding_goal
      this.simplifiedProject.anticipated_funding =
        projectToEdit.anticipated_funding
      this.simplifiedProject.intial_sponsor_club_contribution =
        projectToEdit.intial_sponsor_club_contribution
      this.simplifiedProject.co_operating_organisation_contribution =
        projectToEdit.co_operating_organisation_contribution
      this.simplifiedProject.district_simplified_grant_request =
        projectToEdit.district_simplified_grant_request

      this.simplifiedProject.rotary_year =
        projectToEdit.rotary_year

      this.simplifiedProject.image_link =
        projectToEdit.image_link
      this.simplifiedProject.created_by =
        projectToEdit.created_by

      this.simplifiedProject.extra_descriptions =
        projectToEdit.extraDescriptionsObject
      this.simplifiedProject.itemised_budget =
        projectToEdit.itemisedBudgetArray
      this.simplifiedProject.area_focus =
        projectToEdit.areaFocusObject
      //could delete
      if (projectToEdit.club_id > 0) {
        this.simplifiedProject.club_id =
          projectToEdit.club_id
      }
      this.simplifiedProject.district_id =
        projectToEdit.district_id
    },
    async createDsgProject() {
      console.log(
        'creating new project',
      )
      /* this.simplifiedProject.extra_descriptions.benefit_community_description = this.benefit_community_description
      this.simplifiedProject.extra_descriptions.non_financial_participation = this.non_financial_participation
      this.simplifiedProject.extra_descriptions.co_operating_organisation_letter = this.co_operating_organisation_letter */

      this.simplifiedProject.intial_sponsor_club_contribution = parseFloat(
        this.simplifiedProject
          .intial_sponsor_club_contribution,
      )
      this.simplifiedProject.co_operating_organisation_contribution = parseFloat(
        this.simplifiedProject
          .co_operating_organisation_contribution,
      )
      this.simplifiedProject.district_simplified_grant_request = parseFloat(
        this.simplifiedProject
          .district_simplified_grant_request,
      )

      this.simplifiedProject.funding_goal = this.sumOfItemsCost
      this.simplifiedProject.anticipated_funding =
        this.simplifiedProject
          .intial_sponsor_club_contribution +
        this.simplifiedProject
          .co_operating_organisation_contribution +
        this.simplifiedProject
          .district_simplified_grant_request

      var mydate1 = new Date(
        this.simplifiedProject.start_date,
      )
      var mydate2 = new Date(
        this.simplifiedProject.estimated_completion,
      )

      this.simplifiedProject.estimated_completion = mydate2.toLocaleDateString(
        'en-US',
      )
      this.simplifiedProject.start_date = mydate1.toLocaleDateString(
        'en-US',
      )

      const projectToCreate = this
        .simplifiedProject
      if (
        this.isThisDistrictOrClubProp ==
        'District'
      ) {
        delete projectToCreate.club_id
        await ProjectApi.createDsg(
          projectToCreate,
        )
      } else {
        await ProjectApi.createDsg(
          projectToCreate,
        )
      }
      this.redirect()
    },
    async updateProject(projectId) {
      console.log(
        'updating new project',
      )

      this.simplifiedProject.intial_sponsor_club_contribution = parseFloat(
        this.simplifiedProject
          .intial_sponsor_club_contribution,
      )
      this.simplifiedProject.co_operating_organisation_contribution = parseFloat(
        this.simplifiedProject
          .co_operating_organisation_contribution,
      )
      this.simplifiedProject.district_simplified_grant_request = parseFloat(
        this.simplifiedProject
          .district_simplified_grant_request,
      )

      this.simplifiedProject.funding_goal = this.sumOfItemsCost
      this.simplifiedProject.anticipated_funding =
        this.simplifiedProject
          .intial_sponsor_club_contribution +
        this.simplifiedProject
          .co_operating_organisation_contribution +
        this.simplifiedProject
          .district_simplified_grant_request

      var mydate1 = new Date(
        this.simplifiedProject.start_date,
      )

      var mydate1 = new Date(
        this.simplifiedProject.start_date,
      )
      var mydate2 = new Date(
        this.simplifiedProject.estimated_completion,
      )
      this.simplifiedProject.estimated_completion = mydate2.toLocaleDateString(
        'en-US',
      )
      this.simplifiedProject.start_date = mydate1.toLocaleDateString(
        'en-US',
      )

      const projectToUpdate = this
        .simplifiedProject

      if (
        this.isThisDistrictOrClubProp ==
        'District'
      ) {
        delete projectToUpdate.club_id
        console.log(projectToUpdate)
        await ProjectApi.updateDsg(
          projectToUpdate,
          projectId,
        )
      } else {
        console.log(projectToUpdate)
        await ProjectApi.updateDsg(
          projectToUpdate,
          projectId,
        )
      }

      console.log('updated')
      this.redirect()
    },
    mutateCurrentPage(nextOrPrev) {
      if (nextOrPrev == 1) {
        this.formPage =
          this.formPage - 1
      } else {
        this.formPage =
          this.formPage + 1
      }
    },
    redirect(code) {
      if (
        this.isThisDistrictOrClubProp ==
        'Club'
      ) {
        this.$router.push('../../home')
      } else {
        this.$router.push({
          name: 'DistrictProjectsView',
        })
      }
    },
    addToBudget(itemName, itemCost) {
      const budgetItemObject = {}
      budgetItemObject.itemName = itemName
      budgetItemObject.itemCost = parseFloat(
        itemCost,
      )

      this.simplifiedProject.itemised_budget.push(
        budgetItemObject,
      )
      console.log(
        JSON.stringify(
          this.simplifiedProject
            .itemised_budget,
        ),
      )
    },
    deleteItemByIndex(index) {
      this.simplifiedProject.itemised_budget.splice(
        index,
        1,
      )
    },
    handleFileChange(event) {
      // handle file change event and store imag
      this.simplifiedProject.image =
        event[0]
    },
  },
  computed: {
    sumOfItemsCost() {
      let sum = 0
      this.simplifiedProject.itemised_budget.forEach(
        item => {
          sum = sum + item.itemCost
        },
      )

      return sum
    },
    sumOfAnticipatedFunding() {
      let sum = 0
      sum =
        parseFloat(
          this.simplifiedProject
            .intial_sponsor_club_contribution,
        ) +
        parseFloat(
          this.simplifiedProject
            .co_operating_organisation_contribution,
        ) +
        parseFloat(
          this.simplifiedProject
            .district_simplified_grant_request,
        )

      return sum
    },
    districtSimplifiedGrantRequestLimit() {
      let limit = 0
      if (
        this.simplifiedProject
          .intial_sponsor_club_contribution <
        5000.0
      ) {
        limit =
          this.simplifiedProject
            .intial_sponsor_club_contribution *
          0.5
      } else {
        limit = 2500.0
      }
      return limit
    },
  },
}
</script>

<style scoped>
/* form wrapers Stylings */
.form-container {
  display: flex;
  flex-direction: column;
  min-height: 60%;
}
/* Page Header Stylings */
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
.page-title .inner-box {
  position: relative;
}
.page-title h1 {
  font-size: 72px;
  margin-bottom: 0px;
  font-weight: 800;
  color: #ffffff;
  text-transform: capitalize;
  text-align: center;
}
h3 {
  text-align: center;
  margin-top: 2rem;
  font-weight: 600;
}
hr {
  border: 0.1em solid #ffb607;
}
/* form stylings */
form h3,
h4,
h5 {
  text-align: center;
  margin-top: 2rem;
  font-weight: 600;
}
form .input-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 0.8em;
}
#form-page2 {
  display: flex;
  flex-direction: column;
  row-gap: 1.2em;
}

/* form inputs/checkboxes page  stylings */
.form-checkboxes {
  display: flex;
  flex-direction: column;
}
.form-inputs {
  display: flex;
  flex-direction: row;
  flex: 1 1 0;
  flex-wrap: nowrap;
  row-gap: 0.5em;
}
.form-inputs h3 {
  align-self: center;
}
/* criteria  styling  */
.criteria {
  display: flex;
  flex-direction: column;
}
ul {
  margin-bottom: 3em;
}
/* Page 3 styling*/
.form-page-3 h2 {
  font-weight: bolder;
  text-align: center;
}
.form-page-3 h6 {
  font-weight: 900;
  font-family: 'Lato', sans-serif;
  font-size: 1em;
  color: #000000;
  line-height: 1.8em;
  justify-self: center;
  text-align: center;
}

/* primary and secondary contact form stylings */
#form-page2 .inner {
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  flex-wrap: nowrap;
  margin-top: 1em;
}

/* next and prev button */
.styled-pagination {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.clearfix {
  margin-top: 2em;
}
.styled-pagination li {
  position: relative;
  display: block;
  float: left;
  margin: 0px 4px 4px 4px;
}
.styled-pagination li a {
  color: #ffffff;
  padding: 6px 20px;
  border: 0px;
  line-height: 22px;
  text-transform: uppercase;
  background-color: #3a3a3a;
}
a {
  color: #337ab7;
  text-decoration: none;
  font-weight: 700;
  text-align: center;
  height: 35px;
  font-size: 1em;
}
li a:hover {
  color: #ffffff;
  background-color: #ffb607;
}
.button-sub {
  display: flex;
  flex-direction: row;
  column-gap: 0.5em;
}
/* Errro */
.form-error {
  color: red;
  font-size: 12px;
  padding: 0%;
}
.error-div {
  text-align: center;
}
</style>
