<template>
  <div class="form-container">
    <section class="page-title">
      <div class="auto-container">
        <div class="inner-box">
          <h1>
            Create Or Edit Projects
          </h1>
        </div>
      </div>
    </section>
    <form @submit.prevent="">
      <h3 style="text-align: center;">
        Name & describe your Project
      </h3>
      <!--                     -->

      <div class="form-inputs">
        <BaseInputs
          v-model="project.project_name"
          label="Project Title"
          type="text"
          span="Must be 5 to 10 characters long"
        />
      </div>
      <!--                     -->
      <div class="form-inputs">
        <BaseInputs
          v-model="
            project.project_theme
          "
          label="Project description"
          type="text"
          span="Must be 5 to 50 characters long"
        />
      </div>
      <!--                     -->

      <div class="form-inputs">
        <BaseSelect
          v-model="project.country"
          label="Country"
          :options="countryList"
        />
      </div>
      <!--                     -->

      <div class="form-inputs">
        <BaseSelect
          v-model="project.area_focus"
          label="Area of Focus"
          :options="areaOfFocus"
        />
      </div>
      <!--                     -->
      <div class="form-inputs">
        <BaseInputs
          v-model="project.funding_goal"
          label="Funding Goal"
          type="text"
          span="Enter your Funding Goal in USD"
        />
      </div>
      <!--                     -->
      <div class="form-inputs">
        <BaseInputs
          v-model="
            project.current_funds
          "
          label="Current\Starting Funds"
          type="text"
          span="Enter your starting Funds in USD"
        />
      </div>

      <!--                     -->
      <div class="form-inputs">
        <BaseSelect
          v-model="project.region"
          label="Region"
          :options="regionList"
        />
      </div>
      <!--                     -->
      <div class="form-inputs">
        <BaseInputs
          v-model="
            project.estimated_completion
          "
          label="Estimated completion"
          type="date"
        />
      </div>

      <!--                     -->

      <!--                     -->
      <div
        class="styled-pagination text-center"
      >
        <ul class="clearfix">
          <button
            v-if="
              editOrCreateProp == 'edit'
            "
            type="submit"
            @click="
              () => updateProject()
            "
          >
            Update
          </button>
          <button
            v-else
            type="submit"
            @click="
              () => createProject()
            "
          >
            Submit
          </button>
          <button
            type="submit"
            @click="() => redirect()"
          >
            Cancel
          </button>
        </ul>
      </div>
    </form>
  </div>
</template>

<script>
import BaseInputs from '../formParts/BaseInputs.vue'
import BaseSelect from '../formParts/BaseSelect.vue'
import ProjectApi from '../../api-factory/project'
import store from '../../store/index'

export default {
  components: {
    BaseInputs,
    BaseSelect,
  },
  props: {
    projectIdProp: Number,
    editOrCreateProp: String,
    projectLabel: String,
    projectSentProp: Object,
  },
  data() {
    return {
      project: {
        area_focus: '',
        project_name: '',
        project_theme: '',
        country: '',
        grant_type: 1,
        estimated_completion: '',
        funding_goal: 0,
        current_funds: 0,
        created_by: 0,
        region: '',
        rotary_year: 2022,
        image_link: '',
        project_status: 1,

        district_id: 0,

        role_type: 1,
      },
      countryList: [
        'Afghanistan',
        'Albania',
        'Algeria',
        'American Samoa',
        'Andorra',
        'Angola',
        'Anguilla',
        'Antarctica',
        'Antigua and Barbuda',
        'Argentina',
        'Armenia',
        'Aruba',
        'Australia',
        'Austria',
        'Azerbaijan',
        'Bahamas (the)',
        'Bahrain',
        'Bangladesh',
        'Barbados',
        'Belarus',
        'Belgium',
        'Belize',
        'Benin',
        'Bermuda',
        'Bhutan',
        'Bolivia (Plurinational State of)',
        'Bonaire, Sint Eustatius and Saba',
        'Bosnia and Herzegovina',
        'Botswana',
        'Bouvet Island',
        'Brazil',
        'British Indian Ocean Territory (the)',
        'Brunei Darussalam',
        'Bulgaria',
        'Burkina Faso',
        'Burundi',
        'Cabo Verde',
        'Cambodia',
        'Cameroon',
        'Canada',
        'Cayman Islands (the)',
        'Central African Republic (the)',
        'Chad',
        'Chile',
        'China',
        'Christmas Island',
        'Cocos (Keeling) Islands (the)',
        'Colombia',
        'Comoros (the)',
        'Congo (the Democratic Republic of the)',
        'Congo (the)',
        'Cook Islands (the)',
        'Costa Rica',
        'Croatia',
        'Cuba',
        'Curaçao',
        'Cyprus',
        'Czechia',
        "Côte d'Ivoire",
        'Denmark',
        'Djibouti',
        'Dominica',
        'Dominican Republic (the)',
        'Ecuador',
        'Egypt',
        'El Salvador',
        'Equatorial Guinea',
        'Eritrea',
        'Estonia',
        'Eswatini',
        'Ethiopia',
        'Falkland Islands (the) [Malvinas]',
        'Faroe Islands (the)',
        'Fiji',
        'Finland',
        'France',
        'French Guiana',
        'French Polynesia',
        'French Southern Territories (the)',
        'Gabon',
        'Gambia (the)',
        'Georgia',
        'Germany',
        'Ghana',
        'Gibraltar',
        'Greece',
        'Greenland',
        'Grenada',
        'Guadeloupe',
        'Guam',
        'Guatemala',
        'Guernsey',
        'Guinea',
        'Guinea-Bissau',
        'Guyana',
        'Haiti',
        'Heard Island and McDonald Islands',
        'Holy See (the)',
        'Honduras',
        'Hong Kong',
        'Hungary',
        'Iceland',
        'India',
        'Indonesia',
        'Iran (Islamic Republic of)',
        'Iraq',
        'Ireland',
        'Isle of Man',
        'Israel',
        'Italy',
        'Jamaica',
        'Japan',
        'Jersey',
        'Jordan',
        'Kazakhstan',
        'Kenya',
        'Kiribati',
        "Korea (the Democratic People's Republic of)",
        'Korea (the Republic of)',
        'Kuwait',
        'Kyrgyzstan',
        "Lao People's Democratic Republic (the)",
        'Latvia',
        'Lebanon',
        'Lesotho',
        'Liberia',
        'Libya',
        'Liechtenstein',
        'Lithuania',
        'Luxembourg',
        'Macao',
        'Madagascar',
        'Malawi',
        'Malaysia',
        'Maldives',
        'Mali',
        'Malta',
        'Marshall Islands (the)',
        'Martinique',
        'Mauritania',
        'Mauritius',
        'Mayotte',
        'Mexico',
        'Micronesia (Federated States of)',
        'Moldova (the Republic of)',
        'Monaco',
        'Mongolia',
        'Montenegro',
        'Montserrat',
        'Morocco',
        'Mozambique',
        'Myanmar',
        'Namibia',
        'Nauru',
        'Nepal',
        'Netherlands (the)',
        'New Caledonia',
        'New Zealand',
        'Nicaragua',
        'Niger (the)',
        'Nigeria',
        'Niue',
        'Norfolk Island',
        'Northern Mariana Islands (the)',
        'Norway',
        'Oman',
        'Pakistan',
        'Palau',
        'Palestine, State of',
        'Panama',
        'Papua New Guinea',
        'Paraguay',
        'Peru',
        'Philippines (the)',
        'Pitcairn',
        'Poland',
        'Portugal',
        'Puerto Rico',
        'Qatar',
        'Republic of North Macedonia',
        'Romania',
        'Russian Federation (the)',
        'Rwanda',
        'Réunion',
        'Saint Barthélemy',
        'Saint Helena, Ascension and Tristan da Cunha',
        'Saint Kitts and Nevis',
        'Saint Lucia',
        'Saint Martin (French part)',
        'Saint Pierre and Miquelon',
        'Saint Vincent and the Grenadines',
        'Samoa',
        'San Marino',
        'Sao Tome and Principe',
        'Saudi Arabia',
        'Senegal',
        'Serbia',
        'Seychelles',
        'Sierra Leone',
        'Singapore',
        'Sint Maarten (Dutch part)',
        'Slovakia',
        'Slovenia',
        'Solomon Islands',
        'Somalia',
        'South Africa',
        'South Georgia and the South Sandwich Islands',
        'South Sudan',
        'Spain',
        'Sri Lanka',
        'Sudan (the)',
        'Suriname',
        'Svalbard and Jan Mayen',
        'Sweden',
        'Switzerland',
        'Syrian Arab Republic',
        'Taiwan',
        'Tajikistan',
        'Tanzania, United Republic of',
        'Thailand',
        'Timor-Leste',
        'Togo',
        'Tokelau',
        'Tonga',
        'Trinidad and Tobago',
        'Tunisia',
        'Turkey',
        'Turkmenistan',
        'Turks and Caicos Islands (the)',
        'Tuvalu',
        'Uganda',
        'Ukraine',
        'United Arab Emirates (the)',
        'United Kingdom of Great Britain and Northern Ireland (the)',
        'United States Minor Outlying Islands (the)',
        'United States of America (the)',
        'Uruguay',
        'Uzbekistan',
        'Vanuatu',
        'Venezuela (Bolivarian Republic of)',
        'Viet Nam',
        'Virgin Islands (British)',
        'Virgin Islands (U.S.)',
        'Wallis and Futuna',
        'Western Sahara',
        'Yemen',
        'Zambia',
        'Zimbabwe',
        'Åland Islands',
      ],
      regionList: [
        'Africa',
        'Central America',
        'North America',
        'South America',
        'Asia',
        'South East Asia',
        'Eastern Europe',
        'Western Europe',
        'Middle East',
      ],
      areaOfFocus: [
        'Peace Conflict Prevention',
        'Disease Prevention And Treatment',
        'Water And Sanitation',
        'Maternal And Child Health',
        'Basic Education And Literacy',
        'Economic And Community Development',
        'Environment',
      ],
    }
  },
  created() {
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
    }
    if (
      this.editOrCreateProp == 'edit'
    ) {
      this.prePopulateFields()
    }
  },
  methods: {
    validateDistrict() {},
    async prePopulateFields() {
      const projectToEdit = await ProjectApi.show(
        this.projectIdProp,
      )
      console.log(projectToEdit)
      this.project.area_focus =
        projectToEdit.area_focus
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
      this.project.current_funds =
        projectToEdit.current_funds
    
      this.project.region =
        projectToEdit.region
     
      this.project.image_link =
        projectToEdit.image_link
     
  
    },
    convertDate(dateConvert) {},
    async updateProject() {
      console.log(
        'updating new project',
      )

      var mydate = new Date(
        this.project.estimated_completion,
      )
      console.log(
        this.project
          .estimated_completion,
      )
      this.project.estimated_completion = mydate.toLocaleDateString(
        'en-US',
      )
      const projectToEdit = this.project
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
      console.log(
        this.project
          .estimated_completion,
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
    redirect(code) {
      this.$router.push({
        name: 'DistrictProjectsView',
      })
    },
  },
}
</script>

<style scoped>
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
  background-image: url(../../assets/image-3.jpg);
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

.clearfix {
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
</style>
