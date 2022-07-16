<template>
  <!-- district matching  Form wrapper -->
  <div class="form-container">
    <!-- district Matching  Header -->
    <section class="page-title">
      <div class="auto-container">
        <div class="inner-box">
          <h1>
            District Matching
          </h1>
        </div>
        <div></div>
      </div>
    </section>
    <h3>
      District Matching Grants Club
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
          <h4
            style="
            text-decoration: underline;
           "
          >
            Section A
          </h4>
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
                matchingProject.project_name
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
                matchingProject.project_theme
              "
              label="Describe in detail the project and implementation plan."
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
                matchingProject.country
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
                matchingProject.region
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
                matchingProject.start_date
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
                matchingProject.estimated_completion
              "
              label="Estimated completion date"
              type="date"
            />
          </div>

          <!-- Area of focus- checkboxes- Figure out a more elegant solution  -->
          <div
            class="form-inputs-checkboxes"
          >
            <div class="error-div">
              <span
                class="form-error"
                id="area-form-error"
                v-if="
                  v$.area_focus.$error
                "
              >
                You must choose at least
                one are of focus
              </span>
            </div>
            <h5
              style="
    text-decoration: underline;
"
            >
              Areas of Focus
            </h5>
            <div class="checkbox">
              <BaseCheckBox
                v-model="
                  matchingProject
                    .area_focus
                    .Peace_Conflict_Prevention
                "
                :label="areaOfFocus[0]"
              />
              <BaseCheckBox
                v-model="
                  matchingProject
                    .area_focus
                    .Disease_Prevention_And_Treatment
                "
                :label="areaOfFocus[1]"
              />
              <BaseCheckBox
                v-model="
                  matchingProject
                    .area_focus
                    .Water_And_Sanitation
                "
                :label="areaOfFocus[2]"
              />
              <BaseCheckBox
                v-model="
                  matchingProject
                    .area_focus
                    .Maternal_And_Child_Health
                "
                :label="areaOfFocus[3]"
              />
              <BaseCheckBox
                v-model="
                  matchingProject
                    .area_focus
                    .Basic_Education_And_Literacy
                "
                :label="areaOfFocus[4]"
              />
              <BaseCheckBox
                v-model="
                  matchingProject
                    .area_focus
                    .Economic_And_Community_Development
                "
                :label="areaOfFocus[5]"
              />
              <BaseCheckBox
                v-model="
                  matchingProject
                    .area_focus
                    .Environment
                "
                :label="areaOfFocus[6]"
              />
            </div>
          </div>
        </div>
        <hr />
        <!--         Primary Contact        -->

        <div class="form-inputs">
          <div class="inner">
            <div>
              <h4>Primary Contact</h4>

              <BaseInputs
                v-model="
                  matchingProject
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
                  matchingProject
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
                  matchingProject
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
                  matchingProject
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
                  matchingProject
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
              <h4>Alternate Contact</h4>

              <BaseInputs
                v-model="
                  matchingProject
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
                  matchingProject
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
                  matchingProject
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
                  matchingProject
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
                  matchingProject
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
        <hr />
        <!-- Host Club infor -->
        <h3>
          Host Club Information
        </h3>
        <!-- Rotary Club of  -->
        <div class="error-div">
          <span
            class="form-error"
            id="area-form-error"
            v-if="
              v$.host_club_name.$error
            "
          >
            Must fill in the host clubs
            Rotary name!
          </span>
        </div>
        <div
          class="form-inputs"
          style="
    margin-bottom: .5rem;
"
        >
          <BaseInputs
            v-model="
              matchingProject
                .hostclub_information
                .host_club_name
            "
            label="Host Club of"
            type="text"
            span="Required "
          />
        </div>
        <!-- District number  -->
        <div class="error-div">
          <span
            class="form-error"
            id="area-form-error"
            v-if="
              v$.district_number.$error
            "
          >
            Enter your host clubs'
            district Number!
          </span>
        </div>
        <div
          class="form-inputs"
          style="
    margin-bottom: .5rem;
"
        >
          <BaseInputs
            v-model="
              matchingProject
                .hostclub_information
                .district_number
            "
            label="District #:"
            type="text"
            span="Required "
          />
        </div>
        <!-- district country   -->
        <div
          class="error-div"
          style="
    margin-bottom: .5rem;
"
        >
          <span
            class="form-error"
            id="area-form-error"
            v-if="
              v$.district_country.$error
            "
          >
            Enter your host clubs'
            district country!
          </span>
        </div>
        <div class="form-inputs">
          <BaseSelect
            v-model="
              matchingProject
                .hostclub_information
                .district_country
            "
            label="Country"
            :options="countryList"
          />
        </div>
        <!-- district primary contact    -->
        <h4>
          Host Club Primary Contact
        </h4>
        <div class="error-div">
          <span
            class="form-error"
            id="area-form-error"
            v-if="
              v$.host_primary_contact
                .$error
            "
          >
            Fill in primary contacts
            information!
          </span>
        </div>
        <div class="form-inputs">
          <BaseInputs
            v-model="
              matchingProject
                .hostclub_information
                .host_primary_contact
                .name
            "
            label="Name:"
            type="text"
            span="Required "
          />
        </div>
        <div class="form-inputs">
          <BaseInputs
            v-model="
              matchingProject
                .hostclub_information
                .host_primary_contact
                .address
            "
            label="Address:"
            type="text"
            span="Required "
          />
        </div>
        <div class="form-inputs">
          <BaseInputs
            v-model="
              matchingProject
                .hostclub_information
                .host_primary_contact
                .phone
            "
            label="Phone:"
            type="text"
            span="Required "
          />
        </div>
        <div class="form-inputs">
          <BaseInputs
            v-model="
              matchingProject
                .hostclub_information
                .host_primary_contact
                .email
            "
            label="Email:"
            type="text"
            span="Required "
          />
        </div>
        <div class="form-inputs">
          <BaseInputs
            v-model="
              matchingProject
                .hostclub_information
                .host_primary_contact
                .fax
            "
            label="Fax:"
            type="text"
            span=" "
          />
        </div>
        <hr />
        <!--         IMAGE UPLOAD            -->
        <h3
          v-if="
            isThisEditOrCreateProp !=
              'view'
          "
          style="text-decoration:underline;"
        >
          Upload Cover Image
        </h3>
        <h6
          v-if="
            isThisEditOrCreateProp !=
              'view'
          "
          style="text-align: center;"
        >
          *If you dont upload your own
          cover image, then a default
          image will be shown.
        </h6>
        <div
          v-if="
            isThisEditOrCreateProp !=
              'view'
          "
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
    <!-- page 2  Matching Form -->
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
                text-decoration: underline;

          "
        >
          Page 2
        </h3>

        <!-- Section A   -->
        <!--          Extra Discription        -->
        <div class="error-div">
          <span
            class="form-error"
            id="area-form-error"
            v-if="
              v$.location_city.$error
            "
          >
            Must fill in!
          </span>
        </div>
        <div class="form-inputs">
          <BaseInputs
            v-model="
              matchingProject
                .hostclub_information
                .location_city
            "
            label="What City/Village will the project take place?"
            span="Required"
            type="text"
          />
        </div>
        <!--          Extra Discription        -->
        <div class="error-div">
          <span
            class="form-error"
            id="area-form-error"
            v-if="
              v$.location_country.$error
            "
          >
            Must fill in!
          </span>
        </div>
        <div class="form-inputs">
          <BaseSelect
            v-model="
              matchingProject
                .hostclub_information
                .location_country
            "
            label="What Country will the project take place?"
            span="Required"
            :options="countryList"
          />
        </div>
        <h5>
          Create an itemized list of the
          specific objectives of the
          project (one per line)
        </h5>
        <!--         Objective Add          -->
        <div class="form-inputs">
          <BaseInputs
            v-model="objectiveItem"
            label="Objective"
            type="text"
          />
        </div>
        <div
          class="styled-pagination"
          v-if="
            isThisEditOrCreateProp !=
              'view'
          "
        >
          <ul class="clearfix">
            <li>
              <a
                @click="
                  addToObjectives(
                    objectiveItem,
                  )
                "
                >Add to List</a
              >
            </li>
          </ul>
        </div>
        <!--         Objective  table          -->
        <table
          v-if="
            matchingProject
              .hostclub_information
              .listOfObjectives != 0
          "
        >
          <th>Objectives</th>
          <tr
            id="budget-information"
            v-for="(item,
            index) in matchingProject
              .hostclub_information
              .listOfObjectives"
            :key="index"
          >
            <td>
              {{ item }}
            </td>
            <td>
              <button
                v-if="
                  isThisEditOrCreateProp !=
                    'view'
                "
                title="Delete Project"
                class="crud-buttons"
                @click="
                  deleteObjectiveByIndex(
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
        </table>

        <!-- Section B -->
        <!--          Extra Discription Q1        -->
        <hr />
        <h4
          style="
    text-decoration: underline;
"
        >
          Section B
        </h4>
        <div class="error-div">
          <span
            class="form-error"
            id="area-form-error"
            v-if="
              v$
                .host_sponsor_planned_project_description
                .$error
            "
          >
            Must be between 50 - 2000
            characters long!
          </span>
        </div>
        <div class="form-inputs">
          <BaseTextArea
            v-model="
              matchingProject
                .hostclub_information
                .host_sponsor_planned_project_description
            "
            label="1. Describe how the Host sponsor (in other country) planned this project."
            span="Must be 50 to 2000 characters long"
          />
        </div>

        <!--          Extra Discription Q2        -->
        <div class="error-div">
          <span
            class="form-error"
            id="area-form-error"
            v-if="
              v$.host_commit_description
                .$error
            "
          >
            Must be between 50 - 2000
            characters long!
          </span>
        </div>
        <div class="form-inputs">
          <BaseTextArea
            v-model="
              matchingProject
                .hostclub_information
                .host_commit_description
            "
            label="2. Describe how the host sponsor will commit their time and expertise during the implementation of the project to ensure success. Provide specific examples of activities or tasks for which the host sponsor will be responsibility."
            span="Must be 50 to 2000 characters long"
          />
        </div>

        <!--          Extra Discription Q3        -->

        <div class="error-div">
          <span
            class="form-error"
            id="area-form-error"
            v-if="
              v$
                .international_commit_description
                .$error
            "
          >
            Must be between 50 - 2000
            characters long!
          </span>
        </div>
        <div class="form-inputs">
          <BaseTextArea
            v-model="
              matchingProject
                .hostclub_information
                .international_commit_description
            "
            label="3. Describe how the international sponsor will commit their time and expertise during the implementation of the project to ensure success. Provide specific examples of activities or tasks for which the international sponsor will be responsibility."
            span="Must be 50 to 2000 characters long"
          />
        </div>

        <!--          Extra Discription Q4        -->

        <div class="error-div">
          <span
            class="form-error"
            id="area-form-error"
            v-if="
              v$
                .sponsor_publicize_description
                .$error
            "
          >
            Must be between 50 - 2000
            characters long!
          </span>
        </div>
        <div class="form-inputs">
          <BaseTextArea
            v-model="
              matchingProject
                .hostclub_information
                .sponsor_publicize_description
            "
            label="4. How do the sponsors plan to publicize this project?"
            span="Must be 50 to 2000 characters long"
          />
        </div>
        <!-- Section C -->
        <!--            Org Name         -->
        <hr />
        <h4
          style="    text-decoration: underline;
"
        >
          Section C
        </h4>
        <div class="error-div">
          <span
            class="form-error"
            id="area-form-error"
            v-if="v$.sectionC.$error"
          >
            Fill out Section!
          </span>
        </div>
        <div class="form-inputs">
          <BaseInputs
            v-model="
              matchingProject
                .hostclub_information
                .sectionC
                .organization_name
            "
            label="Name of Cooperation Organization"
            type="text"
            span="Required"
          />
        </div>
        <div class="form-inputs">
          <BaseInputs
            v-model="
              matchingProject
                .hostclub_information
                .sectionC.address
            "
            label="Address"
            type="text"
            span="Required"
          />
        </div>
        <div class="form-inputs">
          <BaseInputs
            v-model="
              matchingProject
                .hostclub_information
                .sectionC
                .website_address
            "
            label="Website"
            type="text"
            span=""
          />
        </div>
        <!--          Contact   Person      -->
        <div class="error-div">
          <span
            class="form-error"
            id="area-form-error"
            v-if="v$.sectionC.$error"
          >
            Fill out Section!
          </span>
        </div>
        <div class="form-inputs">
          <div class="inner">
            <div>
              <h5>
                Cooperating Organization
                Contact
              </h5>

              <BaseInputs
                v-model="
                  matchingProject
                    .hostclub_information
                    .sectionC
                    .cooperating_organizations[0]
                    .contact_person.name
                "
                type="text"
                label="Name"
                span="Enter Full Name"
              />
            </div>
            <div>
              <BaseInputs
                v-model="
                  matchingProject
                    .hostclub_information
                    .sectionC
                    .cooperating_organizations[0]
                    .contact_person
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
                  matchingProject
                    .hostclub_information
                    .sectionC
                    .cooperating_organizations[0]
                    .contact_person
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
                  matchingProject
                    .hostclub_information
                    .sectionC
                    .cooperating_organizations[0]
                    .contact_person
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
                  matchingProject
                    .hostclub_information
                    .sectionC
                    .cooperating_organizations[0]
                    .contact_person.fax
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

    <!-- page 3  Matching Form -->
    <div
      class="form-page-1"
      v-if="formPage == 3"
    >
      <form @submit.prevent="">
        <h3
          style="
    margin-bottom: 2rem;text-decoration: underline;
"
        >
          Page 3
        </h3>
        <!--         ESectionC q1     -->
        <div class="error-div">
          <span
            class="form-error"
            id="area-form-error"
            v-if="
              v$
                .cooperating_organizations_roles_description
                .$error
            "
          >
            Must be between 150 - 2000
            characters long!
          </span>
        </div>
        <div class="form-inputs">
          <BaseTextArea
            v-model="
              matchingProject
                .hostclub_information
                .sectionC
                .cooperating_organizations_roles_description
            "
            label="1. Provide background information about the cooperating organization(s) including the role they will play in the project activity."
            span="Must be 150 to 2000 characters long"
          />
        </div>

        <!--          ESectionC q2        -->
        <div class="error-div">
          <span
            class="form-error"
            id="area-form-error"
            v-if="
              v$
                .cooperating_organizations_identify_members
                .$error
            "
          >
            Must be between 150 - 2000
            characters long!
          </span>
        </div>
        <div class="form-inputs">
          <BaseTextArea
            v-model="
              matchingProject
                .hostclub_information
                .sectionC
                .cooperating_organizations_identify_members
            "
            label="2. Identify any members of the host or international sponsors who are project committee members, employees, board members or officers of one of the cooperating organizations. "
            span=""
          />
        </div>
        <!-- Section D -->

        <hr
          style="margin-top: 5rem; margin-bottom: 5rem;"
        />

        <h3
          style="text-decoration: underline;"
        >
          Section D
        </h3>
        <div class="error-div">
          <span
            class="form-error"
            id="area-form-error"
            v-if="v$.sectionD.$error"
          >
            Please fill out each
            question with 150 - 2000
            characters.
          </span>
        </div>
        <div class="form-inputs">
          <BaseTextArea
            v-model="
              matchingProject
                .extra_descriptions
                .sectionD
                .community_benefit
            "
            label="1. Describe how the project will benefit the community or address a community need?  How many beneficiaries are anticipated?  How were the beneficiaries involved in the planning?"
            span="Required"
          />
        </div>
        <div class="form-inputs">
          <BaseTextArea
            v-model="
              matchingProject
                .extra_descriptions
                .sectionD
                .project_accountability
            "
            label="2. Who will operate, secure and maintain the items purchased with grant funds and ensure the items are properly maintained and repaired so they continue to function? This includes equipment, assets and materials"
            span="Required"
          />
        </div>
        <div class="form-inputs">
          <BaseTextArea
            v-model="
              matchingProject
                .extra_descriptions
                .sectionD
                .ownership_project
            "
            label="3. At the end of the project, who will own the items purchased with grant funds? This includes equipment, assets and materials.Items cannot be owned by a Rotary Club or Rotarian(s)"
            span="Required"
          />
        </div>
        <div class="form-inputs">
          <BaseTextArea
            v-model="
              matchingProject
                .extra_descriptions
                .sectionD
                .inventory_project
            "
            label="4. Who will maintain an inventory of the items purchased with grant funds including location after distribution?"
            span="Required"
          />
        </div>
        <div class="form-inputs">
          <BaseTextArea
            v-model="
              matchingProject
                .extra_descriptions
                .sectionD
                .customs_clearance
            "
            label="5. What arrangements have been made for customs clearance if items will be purchased and shipped from outside the project country?"
            span="Required"
          />
        </div>
        <!-- Section E -->
        <hr
          style="margin-top: 5rem; margin-bottom: 5rem;"
        />
        <h3
          style="text-decoration: underline;"
        >
          Section E
        </h3>
        <div class="error-div">
          <span
            class="form-error"
            id="area-form-error"
            v-if="v$.sectionE.$error"
          >
            Please fill out each
            question with 150 - 2000
            characters.
          </span>
        </div>
        <div class="form-inputs">
          <BaseTextArea
            v-model="
              matchingProject
                .extra_descriptions
                .sectionE
                .project_capacity
            "
            label="1. How will the project build capacity in the host community?"
            span="Required"
          />
        </div>
        <div class="form-inputs">
          <BaseTextArea
            v-model="
              matchingProject
                .extra_descriptions
                .sectionE
                .project_sustainment
            "
            label="2. How will the outcomes of the project be sustained over time after the funding has been expended?"
            span="Required"
          />
        </div>
        <!--objective measures- checkboxes- Figure out a more elegant solution  -->
        <div
          class="form-inputs-checkboxes"
        >
          <h5
            style="text-align:center
        ;"
          >
            Identify how the progress
            toward the objectives will
            be measured? Check all that
            apply & include samples if
            applicable.
          </h5>
          <div class="error-div">
            <span
              class="form-error"
              id="area-form-error"
              v-if="v$.sectionE.$error"
            >
              You must choose at least
              one
            </span>
          </div>
          <div
            style="
    margin-top: 2rem;
    margin-left: 32rem;
"
          >
            <BaseCheckBox
              v-model="
                matchingProject
                  .extra_descriptions
                  .sectionE.e.Surveys
              "
              :label="
                measurableHtmlList[0]
              "
            />
            <BaseCheckBox
              v-model="
                matchingProject
                  .extra_descriptions
                  .sectionE.e
                  .Questionnaires
              "
              :label="
                measurableHtmlList[1]
              "
            />
            <BaseCheckBox
              v-model="
                matchingProject
                  .extra_descriptions
                  .sectionE.e
                  .Observations
              "
              :label="
                measurableHtmlList[2]
              "
            />
            <BaseCheckBox
              v-model="
                matchingProject
                  .extra_descriptions
                  .sectionE.e
                  .Tests_Of_Knowledge
              "
              :label="
                measurableHtmlList[3]
              "
            />
            <BaseCheckBox
              v-model="
                matchingProject
                  .extra_descriptions
                  .sectionE.e.Interviews
              "
              :label="
                measurableHtmlList[4]
              "
            />
            <BaseCheckBox
              v-model="
                matchingProject
                  .extra_descriptions
                  .sectionE.e
                  .Focus_Groups
              "
              :label="
                measurableHtmlList[5]
              "
            />
            <BaseCheckBox
              v-model="
                matchingProject
                  .extra_descriptions
                  .sectionE.e
                  .Video_Media
              "
              :label="
                measurableHtmlList[6]
              "
            />
            <BaseCheckBox
              v-model="
                matchingProject
                  .extra_descriptions
                  .sectionE.e
                  .Documents_Materials_Collections
              "
              :label="
                measurableHtmlList[6]
              "
            />
          </div>
        </div>
      </form>
    </div>
    <!-- page 4  Matching Form -->
    <div
      class="form-page-1"
      v-if="formPage == 4"
    >
      <form @submit.prevent="">
        <h3>
          Page 4
        </h3>

        <h4
          style="margin-top: 5rem; margin-bottom: 5rem;"
        >
          Section F - Budget Summary and
          Financing Summary
        </h4>
        <!--         Q1        -->

        <div class="error-div">
          <span
            class="form-error"
            id="area-form-error"
            v-if="v$.sectionF.$error"
          >
            Must be filled!
          </span>
        </div>
        <div class="form-inputs">
          <BaseInputs
            v-model="
              matchingProject
                .hostclub_information
                .sectionF
                .local_currency_name
            "
            label="Name of Local Currency:"
            span=""
          />
        </div>
        <div class="form-inputs">
          <BaseInputs
            v-model="
              matchingProject
                .hostclub_information
                .sectionF.exchange_rate
            "
            label="Exchange Rate to 1 USD:"
            span=""
          />
        </div>
        <!-- <div class="form-inputs">
          <BaseInputs
            v-model="
              matchingProject.currency_date_entered
            "
            label="Date Entered:"
            type="date"
          />
        </div> -->
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
            label="Budget Item:"
            type="text"
          />
        </div>
        <div class="form-inputs">
          <BaseInputs
            v-model="budgetSupplierName"
            label="Supplier/Vendor:"
            type="text"
          />
        </div>
        <div class="form-inputs">
          <BaseInputs
            v-model="
              budgetItemCostLocalCurrency
            "
            label="Amount in Local:"
            type="number"
          />
        </div>

        <div class="form-inputs">
          <BaseInputs
            v-model="budgetItemCost"
            label="Amount in USD:"
            type="number"
          />
        </div>
        <div
          class="styled-pagination"
          v-if="
            isThisEditOrCreateProp !=
              'view'
          "
        >
          <ul class="clearfix">
            <li>
              <a
                @click="
                  addToBudget(
                    budgetItemName,
                    budgetItemCost,
                    budgetSupplierName,
                    budgetItemCostLocalCurrency,
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
            matchingProject.itemized_budget !=
              0
          "
        >
          <th>Item Name</th>
          <th>Supplier/Vendor</th>
          <th>Local Currency Cost</th>
          <th>Cost</th>
          <th
            v-if="
              isThisEditOrCreateProp !=
                'view'
            "
          >
            Delete Item
          </th>
          <tr
            id="budget-information"
            v-for="(item,
            index) in matchingProject.itemized_budget"
            :key="index"
          >
            <td>
              {{ item.itemName }}
            </td>
            <td>
              {{ item.supplierName }}
            </td>
            <td>
              {{
                item.itemCostLocalCurrency
              }}
            </td>
            <td>
              {{ item.itemCost }}
            </td>
            <td
              v-if="
                isThisEditOrCreateProp !=
                  'view'
              "
            >
              <button
                v-if="
                  isThisEditOrCreateProp !=
                    'view'
                "
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
            Your total anticapted
            funding cannot exceed your
            budget estimatied costs!
          </span>
        </div>
        <div class="form-inputs">
          <BaseInputs
            v-model="
              matchingProject.intial_sponsor_club_contribution
            "
            type="number"
            label="Sponsor club contribution:"
          />
        </div>
        <!--          Co-operating organisation contribution      -->

        <div class="form-inputs">
          <BaseInputs
            v-model="
              matchingProject.co_operating_organisation_contribution
            "
            label="Co-operating organisations contribution:"
            type="number"
          />
        </div>
        <!-- District Matching Grant request*:-->
        <div class="error-div">
          <span
            class="form-error"
            id="area-form-error"
            v-if="
              v$
                .district_matching_grant_request
                .$error
            "
          >
            Your request cannot exceed
            the Matching Grant request
            limit.
          </span>
        </div>
        <div class="form-inputs">
          <BaseInputs
            v-model="
              matchingProject.district_matching_grant_request
            "
            label="District Matching Grant request*:"
            type="number"
          />
        </div>
        <!--  Total anticipated project funding:      -->
        <div
          class="form-inputs"
          style="display: flex;/* justify-content: center; */margin-top: 1em;flex-direction: column;align-items: center;"
        >
          <h6>
            Total Anticipated Cost In
            Local Currency:$
            {{
              sumOfItemsCostInHostCurrency
            }}&nbsp;{{
              matchingProject
                .hostclub_information
                .sectionF
                .local_currency_name
            }}
          </h6>
          <h6
            style="
    margin-top: 1rem;
"
          >
            Total Anticipated Cost:$
            {{ sumOfItemsCost }} USD
          </h6>

          <h6
            v-if="
              isThisEditOrCreateProp
            "
          >
            Total Anticipated
            Funding/Current Funds:$
            {{
              sumOfAnticipatedFunding
            }}
            USD
          </h6>
        </div>
        <h5>
          District 7040 will match club
          funds 1:1 up to a maximum of
          $10,000 on a first-come basis
          depending upon availability of
          DDF.
        </h5>
        <h5 style="color: red;">
          Here is your current Matching
          Grant Request limit: $
          {{
            districtMatchingGrantRequestLimit
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
                >Create DM Project</a
              >
            </li>

            <li
              v-if="
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
                >Update this DM
                Project</a
              >
            </li>
            <li>
              <a @click="cancel()"
                >Cancel</a
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
              formPage < 4
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
import { requiredIf } from '@vuelidate/validators'
import {
  onBeforeUpdate,
  watchEffect,
} from 'vue-demi'
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
        currency_date_entered: '',

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
            e: {
              Surveys: false,
              Questionnaires: false,
              Observations: false,
              Tests_Of_Knowledge: false,
              Interviews: false,
              Focus_Groups: false,
              Video_Media: false,
              Documents_Materials_Collections: false,
            },
          },
        },
        hostclub_information: {
          host_club_name: '',
          district_number: '',
          district_country: '',
          location_city: '',
          location_country: '',
          location_community: '',
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
      countryList:
        Resources.countryList,
      regionList: Resources.regionList,
      objectiveItem: '',
      areaOfFocus:
        Resources.areaOfFocus,
      criteriaList:
        Resources.DistrictMatchingCriteria,
      measurableHtmlList:
        Resources.measurableList,
      thereIsErrors: false,
      //   track what page of the application we are on
      formPage: 1,
      // intial amount on edit
      pledgeAmountIntial: 0,
    }
  },
  //   created hook
  async created() {
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
        store.state.currentClubData
          .club_id,
      )
    }
    if (
      this.isThisEditOrCreateProp ==
      'edit'
    ) {
      await this.prePopulateFields()
      let otherAmount =
        parseFloat(
          this.matchingProject
            .intial_sponsor_club_contribution,
        ) +
        parseFloat(
          this.matchingProject
            .co_operating_organisation_contribution,
        ) +
        parseFloat(
          this.matchingProject
            .district_matching_grant_request,
        )

      this.pledgeAmountIntial =
        parseFloat(
          this.matchingProject
            .anticipated_funding,
        ) - parseFloat(otherAmount)
      console.log(
        'this intial ' +
          parseFloat(
            this.pledgeAmountIntial,
          ),
      )
    }
    if (
      this.isThisEditOrCreateProp ==
      'view'
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
      collection.forEach(element => {
        element.readOnly = true
      })
      textareaCollection.forEach(
        element => {
          element.readOnly = true
        },
        element.setAttribute(
          'disabled',
          '',
        ),
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
  async updated() {
    if (
      this.isThisEditOrCreateProp ==
      'view'
    ) {
      const collection = document.getElementsByTagName(
        'input',
      )
      const textareaCollection = document.getElementsByTagName(
        'textarea',
      )
      const selectCollection = document.getElementsByTagName(
        'select',
      )
      collection.forEach(element => {
        element.readOnly = true
        element.setAttribute(
          'disabled',
          '',
        )
      })
      textareaCollection.forEach(
        element => {
          element.readOnly = true
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
              3000,
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
      host_club_name: {
        requiredIfFuction: requiredIf(
          this.matchingProject
            .hostclub_information
            .host_club_name == '',
        ),
      },
      district_number: {
        requiredIfFuction: requiredIf(
          this.matchingProject
            .hostclub_information
            .district_number == '',
        ),
      },
      district_country: {
        requiredIfFuction: requiredIf(
          this.matchingProject
            .hostclub_information
            .district_country == '',
        ),
      },
      location_city: {
        requiredIfFuction: requiredIf(
          this.matchingProject
            .hostclub_information
            .location_city == '',
        ),
      },
      location_country: {
        requiredIfFuction: requiredIf(
          this.matchingProject
            .hostclub_information
            .location_country == '',
        ),
      },
      host_primary_contact: {
        validateHostPrimary: this
          .validateHostPrimaryContact,
      },
      listOfObjectives: {
        requiredIf: requiredIf(
          !this.matchingProject
            .hostclub_information
            .listOfObjectives,
        ),
      },
      host_sponsor_planned_project_description: {
        requiredIf: requiredIf(
          this.matchingProject
            .hostclub_information
            .host_sponsor_planned_project_description ==
            '' ||
            this.matchingProject
              .hostclub_information
              .host_sponsor_planned_project_description
              .length < 50 ||
            this.matchingProject
              .hostclub_information
              .host_sponsor_planned_project_description
              .length > 3000,
        ),
      },
      host_commit_description: {
        requiredIf: requiredIf(
          this.matchingProject
            .hostclub_information
            .host_commit_description ==
            '' ||
            this.matchingProject
              .hostclub_information
              .host_commit_description
              .length < 50 ||
            this.matchingProject
              .hostclub_information
              .host_commit_description
              .length > 3000,
        ),
      },
      international_commit_description: {
        requiredIf: requiredIf(
          this.matchingProject
            .hostclub_information
            .international_commit_description ==
            '' ||
            this.matchingProject
              .hostclub_information
              .international_commit_description
              .length < 50 ||
            this.matchingProject
              .hostclub_information
              .international_commit_description
              .length > 3000,
        ),
      },
      district_matching_grant_request: {
        requiredIfFuction: requiredIf(
          this.matchingProject
            .district_matching_grant_request >
            this
              .districtMatchingGrantRequestLimit,
        ),
      },
      intial_sponsor_club_contribution: {
        requiredIf: this
          .validateFunding,
      },
      sponsor_publicize_description: {
        requiredIf: requiredIf(
          this.matchingProject
            .hostclub_information
            .sponsor_publicize_description ==
            '' ||
            this.matchingProject
              .hostclub_information
              .sponsor_publicize_description
              .length < 50 ||
            this.matchingProject
              .hostclub_information
              .sponsor_publicize_description
              .length > 3000,
        ),
      },
      sectionC: {
        validateSection: this
          .validateSectionC,
      },
      cooperating_organizations_roles_description: {
        requiredIf: requiredIf(
          this.matchingProject
            .hostclub_information
            .sectionC
            .cooperating_organizations_roles_description ==
            '' ||
            this.matchingProject
              .hostclub_information
              .sectionC
              .cooperating_organizations_roles_description
              .length < 50 ||
            this.matchingProject
              .hostclub_information
              .sectionC
              .cooperating_organizations_roles_description
              .length > 3000,
        ),
      },
      cooperating_organizations_identify_members: {
        requiredIf: requiredIf(
          this.matchingProject
            .hostclub_information
            .sectionC
            .cooperating_organizations_identify_members ==
            '' ||
            this.matchingProject
              .hostclub_information
              .sectionC
              .cooperating_organizations_identify_members
              .length < 50 ||
            this.matchingProject
              .hostclub_information
              .sectionC
              .cooperating_organizations_identify_members
              .length > 3000,
        ),
      },
      sectionD: {
        verifySectionD: this
          .verifySectionD,
      },
      sectionE: {
        verifySectionE: this
          .verifySectionE,
      },
      sectionF: {
        verifySectionF: this
          .verifySectionF,
      },
    }
  },
  //   methods
  methods: {
    // validation methods
    verifySectionD() {
      let validErrors = false
      let questions = this
        .matchingProject
        .extra_descriptions.sectionD
      for (let [
        key,
        value,
      ] of Object.entries(questions)) {
        if (
          value == '' ||
          value < 100 ||
          value > 1000
        ) {
          validErrors = true
        }
      }
      if (validErrors) {
        return false
      } else {
        return true
      }
    },
    verifySectionF() {
      let validErrors = false
      let questions = this
        .matchingProject
        .hostclub_information.sectionF
      for (let [
        key,
        value,
      ] of Object.entries(questions)) {
        if (value == '') {
          validErrors = true
        }
      }
      if (validErrors) {
        return false
      } else {
        return true
      }
    },
    verifySectionE() {
      let validErrors = false
      let questions = this
        .matchingProject
        .extra_descriptions.sectionE

      for (let [
        key,
        value,
      ] of Object.entries(questions)) {
        if (key == 'e') {
        } else {
          if (
            value == '' ||
            value.length < 100 ||
            value.length > 1000
          ) {
            validErrors = true
          }
        }
      }
      const asArray = Object.entries(
        questions.e,
      )
      const filtered = asArray.filter(
        ([key, value]) => value == true,
      )
      if (filtered.length > 0) {
      } else {
        validErrors = true
      }
      if (validErrors) {
        return false
      } else {
        return true
      }
    },
    async validateSectionC() {
      let empty = false
      let coOp = this.matchingProject
        .hostclub_information.sectionC
        .cooperating_organizations
      coOp.forEach(element => {
        for (let [
          key,
          value,
        ] of Object.entries(element)) {
          if (
            value === '' &&
            key != 'website_address'
          ) {
            empty = true
          }
          if (key == 'contact_person') {
            if (
              value === '' &&
              key != 'fax'
            ) {
              empty = true
            }
          }
        }
      })
      if (empty) {
        return false
      } else {
        return true
      }
    },
    validateHostPrimaryContact() {
      let contactList = this
        .matchingProject
        .hostclub_information
        .host_primary_contact
      let empty = false
      for (let [
        key,
        value,
      ] of Object.entries(
        contactList,
      )) {
        if (
          value === '' &&
          key != 'fax'
        ) {
          empty = true
        }
      }
      if (empty) {
        return false
      } else {
        return true
      }
    },
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
        } else
          this.createDistrictMatchingProject()
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
      this.matchingProject.district_matching_grant_request =
        projectToEdit.district_matching_grant_request

      this.matchingProject.rotary_year =
        projectToEdit.rotary_year
      this.matchingProject.currency_date_entered =
        projectToEdit.hostclubInformationObject.sectionF.currency_date_entered
      this.matchingProject.image_link =
        projectToEdit.image_link
      this.matchingProject.created_by =
        projectToEdit.created_by
      this.matchingProject.hostclub_information =
        projectToEdit.hostclubInformationObject
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
        this.matchingProject.currency_date_entered,
      )
      this.matchingProject.start_date = mydate1.toLocaleDateString(
        'en-US',
      )
      this.matchingProject.estimated_completion = mydate2.toLocaleDateString(
        'en-US',
      )
      this.matchingProject.currency_date_entered = mydate3.toLocaleDateString(
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
          .district_matching_grant_request +
        this.pledgeAmountIntial
      //   dates setting
      var mydate1 = new Date(
        this.matchingProject.start_date,
      )
      var mydate2 = new Date(
        this.matchingProject.estimated_completion,
      )
      var mydate3 = new Date(
        this.matchingProject.currency_date_entered,
      )
      this.matchingProject.start_date = mydate1.toLocaleDateString(
        'en-US',
      )
      this.matchingProject.estimated_completion = mydate2.toLocaleDateString(
        'en-US',
      )
      this.matchingProject.currency_date_entered = mydate3.toLocaleDateString(
        'en-US',
      )
      this.matchingProject.hostclub_information.sectionF.currency_date_entered = mydate3.toLocaleDateString(
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
    //add to objective list
    addToObjectives(item) {
      const itemString = item
      this.matchingProject.hostclub_information.listOfObjectives.push(
        itemString,
      )
    },
    //delete  objectives list
    deleteObjectiveByIndex(index) {
      this.matchingProject.hostclub_information.listOfObjectives.splice(
        index,
        1,
      )
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
    districtMatchingGrantRequestLimit() {
      let limit = 0
      if (
        this.matchingProject
          .intial_sponsor_club_contribution <
        10000.0
      ) {
        limit = this.matchingProject
          .intial_sponsor_club_contribution
      } else {
        limit = 10000.0
      }
      return parseFloat(limit)
    },
    sumOfAnticipatedFunding() {
      let sum = 0
      if (
        this.isThisEditOrCreateProp ==
        'create'
      ) {
        let intial = (sum =
          parseFloat(
            this.matchingProject
              .intial_sponsor_club_contribution,
          ) +
          parseFloat(
            this.matchingProject
              .co_operating_organisation_contribution,
          ) +
          parseFloat(
            this.matchingProject
              .district_matching_grant_request,
          ))
        return sum
      } else if (
        this.isThisEditOrCreateProp ==
        'edit'
      ) {
        sum =
          parseFloat(
            this.matchingProject
              .intial_sponsor_club_contribution,
          ) +
          parseFloat(
            this.matchingProject
              .co_operating_organisation_contribution,
          ) +
          parseFloat(
            this.matchingProject
              .district_matching_grant_request,
          ) +
          parseFloat(
            this.pledgeAmountIntial,
          )
        return sum
      }
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
/* check box stling */
.checkbox {
  text-align: -webkit-center;
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
  justify-content: center;
  margin-bottom: 0.5rem;
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
