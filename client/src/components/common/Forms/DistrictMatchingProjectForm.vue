<template> </template>

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
  name: 'DistrictMatchingProjectForm',
  components: {
    BaseInputs,
    BaseSelect,
    BaseCheckBox,
    BaseTextArea,
  },
  props: {
    //props for  how to construct the page
    isThisEditOrCreateProp: String,
    isThisDistrictOrClubProp: String,
    projectIdProp: Number,
  },
  data() {
    return {
      matchingProject: {
        //preset project attributes
        role_type: 1,
        grant_type: 3,
        rotary_year: 2022,
        project_status: 1,
        //project object attrib
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
        //  additional presets
        funding_goal: 0,
        anticipated_funding: 0,

        image: null,
        image_link: '',

        created_by: 0,
        district_id: 0,
        club_id: 0,
        // extra attributes
        intial_sponsor_club_contribution: 0,
        co_operating_organisation_contribution: 0,
        district_matching_grant_request: 0,

        itemized_budget: [],

        extra_descriptions: {
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
          sectionD: {
            community_benefit: '',
            project_accountability: '',
            ownership_project: '',
            inventory_project: '',
            customs_clearance: '',
          },
          sectionE: {
            project_capacity: '',
            project_sustainment: '',
            progress_measures:
              Resources.measurable,
          },
        },
        hostclub_information: {
          host_club_name: '',
          district_number: '',
          district_country: '',
          location_city: '',
          location_country: '',
          host_primary_contact: {
            name: '',
            address: '',
            phone: '',
            email: '',
            fax: '',
          },
          listOfObjectives: [],
          host_sponsor_planned_project_description:
            '',
          host_commit_description: '',
          international_commit_description:
            '',
          sponsor_publicize_description:
            '',
          sectionC: {
            cooperating_organizations: [
              {
                organization_name: '',
                address: '',
                contact_person: {
                  name: '',
                  address: '',
                  phone: '',
                  email: '',
                  fax: '',
                },
                website_address: '',
              },
            ],
            cooperating_organizations_roles_description:
              '',
            cooperating_organizations_identify_members:
              '',
          },
          sectionF: {
            local_currency_name: '',
            exchange_rate: '',
            currency_date_entered: '',
          },
        },
        attached_letters: {},
      },
      //   validation
      v$: useValidate(),
      // budget
      budgetItemCost: 0,
      budgetItemName: '',
      budgetSupplierName: '',
      budgetItemCostLocalCurrency: 0,

      //   html and other code
      measurableHtmlList:
        Resources.measurableList,
      thereIsErrors: false,
      //   track what page of the application we are on
      formPage: 1,
    }
  },
  //   created hook
  created() {
    if (
      this.isThisDistrictOrClubProp ==
        'District' &&
      this.isThisEditOrCreateProp ==
        'create'
    ) {
      this.matchingProject.created_by = parseInt(
        store.state
          .loggedInDistrictUserId,
      )
      this.matchingProject.district_id = parseInt(
        store.state.loggedInDistrictId,
      )
    } else if (
      this.isThisEditOrCreateProp ==
      'create'
    ) {
      this.matchingProject.created_by = parseInt(
        store.state.loggedInClubUserId,
      )
      this.matchingProject.club_id = parseInt(
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
  //   Validation hook for vueladiate
  validations() {
    return {
      project_name: {
        requiredIfFuction: requiredIf(
          this.matchingProject
            .project_name == '',
        ),
      },
      project_theme: {
        requiredIfFuction: requiredIf(
          this.matchingProject
            .project_theme == '' ||
            this.matchingProject
              .project_theme.length <
              200 ||
            this.matchingProject
              .project_theme.length >
              2000,
        ),
      },
      country: {
        requiredIfFuction: requiredIf(
          this.matchingProject
            .country == '',
        ),
      },
      region: {
        requiredIfFuction: requiredIf(
          this.matchingProject.region ==
            '',
        ),
      },
      start_date: {
        requiredIfFuction: requiredIf(
          this.matchingProject
            .start_date == '',
        ),
      },
      estimated_completion: {
        requiredIfFuction: requiredIf(
          this.matchingProject
            .estimated_completion == '',
        ),
      },
      area_focus: {
        validateAreaOFocus: this
          .validateAreaOFocus,
      },
      benefit_community_description: {
        requiredIfFuction: requiredIf(
          this.matchingProject
            .extra_descriptions
            .benefit_community_description ==
            '' ||
            this.matchingProject
              .extra_descriptions
              .benefit_community_description
              .length > 2000 ||
            this.matchingProject
              .extra_descriptions
              .benefit_community_description
              .length > 150,
        ),
      },
      non_financial_participation: {
        requiredIfFuction: requiredIf(
          this.matchingProject
            .extra_descriptions
            .non_financial_participation
            .length > 2000,
        ),
      },
      co_operating_organisation_letter: {
        requiredIfFuction: requiredIf(
          this.matchingProject
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
          this.matchingProject
            .district_simplified_grant_request >
            this
              .districtSimplifiedGrantRequestLimit,
        ),
      },
    }
  },
  //   methods
  methods: {
    // validation methods
    validateFunding() {
      let sum = 0
      this.matchingProject.itemized_budget.forEach(
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
        this.matchingProject.area_focus,
      )
      const filtered = asArray.filter(
        ([key, value]) => value == true,
      )
      if (filtered.length > 0) {
        return true
      } else return false
    },
    // validate whole form
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
    //Prepopulate form
    async prePopulateFields() {
      const projectToEdit = await ProjectApi.show(
        this.projectIdProp,
      )
      this.matchingProject.project_name =
        projectToEdit.project_name
      this.matchingProject.project_theme =
        projectToEdit.project_theme
      this.matchingProject.country =
        projectToEdit.country
      this.matchingProject.region =
        projectToEdit.region

      this.matchingProject.start_date =
        projectToEdit.start_date
      this.matchingProject.estimated_completion =
        projectToEdit.estimated_completion

      this.matchingProject.funding_goal =
        projectToEdit.funding_goal
      this.matchingProject.anticipated_funding =
        projectToEdit.anticipated_funding
      this.matchingProject.intial_sponsor_club_contribution =
        projectToEdit.intial_sponsor_club_contribution
      this.matchingProject.co_operating_organisation_contribution =
        projectToEdit.co_operating_organisation_contribution
      this.matchingProject.district_simplified_grant_request =
        projectToEdit.district_simplified_grant_request

      this.matchingProject.rotary_year =
        projectToEdit.rotary_year

      this.matchingProject.image_link =
        projectToEdit.image_link
      this.matchingProject.created_by =
        projectToEdit.created_by
      this.matchingProject.hostclub_information =
        projectToEdit.hostclub_information
      this.matchingProject.extra_descriptions =
        projectToEdit.extraDescriptionsObject
      this.matchingProject.itemized_budget =
        projectToEdit.itemisedBudgetArray
      this.matchingProject.area_focus =
        projectToEdit.areaFocusObject
      //could delete
      if (projectToEdit.club_id > 0) {
        this.matchingProject.club_id =
          projectToEdit.club_id
      }
      this.matchingProject.district_id =
        projectToEdit.district_id
    },
    // create the project
    async createDistrictMatchingProject() {
      // parse inputs for money into floats
      this.matchingProject.intial_sponsor_club_contribution = parseFloat(
        this.matchingProject
          .intial_sponsor_club_contribution,
      )
      this.matchingProject.co_operating_organisation_contribution = parseFloat(
        this.matchingProject
          .co_operating_organisation_contribution,
      )
      this.matchingProject.district_matching_grant_request = parseFloat(
        this.matchingProject
          .district_matching_grant_request,
      )
      // set funds
      this.matchingProject.funding_goal = this.sumOfItemsCost
      this.matchingProject.anticipated_funding =
        this.matchingProject
          .intial_sponsor_club_contribution +
        this.matchingProject
          .co_operating_organisation_contribution +
        this.matchingProject
          .district_matching_grant_request
      //   dates setting
      var mydate1 = new Date(
        this.matchingProject.start_date,
      )
      var mydate2 = new Date(
        this.matchingProject.estimated_completion,
      )
      var mydate3 = new Date(
        this.matchingProject.hostclub_information.currency_date_entered,
      )
      this.matchingProject.start_date = mydate1.toLocaleDateString(
        'en-US',
      )
      this.matchingProject.estimated_completion = mydate2.toLocaleDateString(
        'en-US',
      )
      this.matchingProject.hostclub_information.currency_date_entered = mydate3.toLocaleDateString(
        'en-US',
      )
      //   creation
      const projectToCreate = this
        .matchingProject
      if (
        this.isThisDistrictOrClubProp ==
        'District'
      ) {
        delete projectToCreate.club_id
        await ProjectApi.createMatching(
          projectToCreate,
        )
      } else {
        await ProjectApi.createMatching(
          projectToCreate,
        )
      }
      this.redirect()
    },
    // update project
    async updateProject(projectId) {
      // parse inputs for money into floats
      this.matchingProject.intial_sponsor_club_contribution = parseFloat(
        this.matchingProject
          .intial_sponsor_club_contribution,
      )
      this.matchingProject.co_operating_organisation_contribution = parseFloat(
        this.matchingProject
          .co_operating_organisation_contribution,
      )
      this.matchingProject.district_matching_grant_request = parseFloat(
        this.matchingProject
          .district_matching_grant_request,
      )
      // set funds
      this.matchingProject.funding_goal = this.sumOfItemsCost
      this.matchingProject.anticipated_funding =
        this.matchingProject
          .intial_sponsor_club_contribution +
        this.matchingProject
          .co_operating_organisation_contribution +
        this.matchingProject
          .district_matching_grant_request
      //   dates setting
      var mydate1 = new Date(
        this.matchingProject.start_date,
      )
      var mydate2 = new Date(
        this.matchingProject.estimated_completion,
      )
      var mydate3 = new Date(
        this.matchingProject.hostclub_information.currency_date_entered,
      )
      this.matchingProject.start_date = mydate1.toLocaleDateString(
        'en-US',
      )
      this.matchingProject.estimated_completion = mydate2.toLocaleDateString(
        'en-US',
      )
      this.matchingProject.hostclub_information.currency_date_entered = mydate3.toLocaleDateString(
        'en-US',
      )
      //   update
      const projectToUpdate = this
        .matchingProject

      if (
        this.isThisDistrictOrClubProp ==
        'District'
      ) {
        delete projectToUpdate.club_id
        console.log(projectToUpdate)
        await ProjectApi.updateMatching(
          projectToUpdate,
          projectId,
        )
      } else {
        console.log(projectToUpdate)
        await ProjectApi.updateMatching(
          projectToUpdate,
          projectId,
        )
      }

      console.log('updated')
      this.redirect()
    },
    // Store an image
    handleFileChange(event) {
      this.matchingProject.image =
        event[0]
    },
    // addto itemized budget
    addToBudget(
      itemName,
      itemCost,
      supplierName,
      itemCostLocal,
    ) {
      const budgetItemObject = {}
      budgetItemObject.itemName = itemName
      budgetItemObject.itemCost = parseFloat(
        itemCost,
      )
      budgetItemObject.supplierName = supplierName
      budgetItemObject.itemCostLocalCurrency = parseFloat(
        itemCostLocal,
      )
      this.matchingProject.itemized_budget.push(
        budgetItemObject,
      )
    },
    //  delete item from the budget
    deleteItemByIndex(index) {
      this.matchingProject.itemized_budget.splice(
        index,
        1,
      )
    },
    // see if there are any errors to hide certain error html
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
    // change pages
    mutateCurrentPage(nextOrPrev) {
      if (nextOrPrev == 1) {
        this.formPage =
          this.formPage - 1
      } else {
        this.formPage =
          this.formPage + 1
      }
    },
    // Redirect based on if district or club
    redirect() {
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
    // cancel button
    cancel() {
      this.redirect()
    },
  },
  //computed hooks for budget and anticipated
  computed: {
    // sum of itemized
    sumOfItemsCost() {
      let sum = 0
      this.matchingProject.itemized_budget.forEach(
        item => {
          sum = sum + item.itemCost
        },
      )
      return sum
    },
    sumOfItemsCostInHostCurrency() {
      let sum = 0
      this.matchingProject.itemized_budget.forEach(
        item => {
          sum =
            sum +
            item.itemCostLocalCurrency
        },
      )
      return sum
    },
  },
}
</script>

<style scoped></style>
