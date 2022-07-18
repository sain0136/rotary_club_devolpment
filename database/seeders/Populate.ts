import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
import District from 'App/Models/District'
import Club from 'App/Models/Club'
import Project from 'App/Models/Project'
import RoleType from 'Contracts/Enums/RoleType'
import Region from 'Contracts/Enums/Region'
import ProjectStatus from 'Contracts/Enums/ProjectStatus'
import { DateTime } from 'luxon'
import GrantType from 'Contracts/Enums/GrantType'

export default class PopulateSeeder extends BaseSeeder {
  public async run() {
    await District.createMany([
      {
        districtName: 'District 7042',
        districtEmail: 'district7042@gmail.com',
        meetingLocation: 'Cornwall center',
        meetingFrequency: 'Bi-Weekly',
        charterDate: '1/10/2021',
        districtPresident: 'John Stewert',
        meetingCity: 'Cornwall',
        districtPhone: '613-989-9000',
        districtDescription:
          "These are better (and almost always) handled at the database level instead of the application level. It's the job of the DBMS to enforce this kind of referential integrity assuming you define your schema correctly so that entities are correctly linked together, via foreign keys.",
      },
      {
        districtName: 'District 6098',
        districtEmail: 'apoVue@gmail.com',
        meetingLocation: 'Lac center',
        meetingFrequency: 'Monthly',
        charterDate: '4/10/2021',
        districtPresident: 'Daivd Polista',
        meetingCity: 'Ottawa',
        districtPhone: '613-233-5633',
        districtDescription:
          "Every seeder file must extend the BaseSeeder class and implement the run method.The following example uses a Lucid model to create multiple users. However, you can also use the Database query builder directly. In other words, seeders don't care what you write inside the run method.",
      },
      {
        districtName: 'District 1234',
        districtEmail: 'theValley@gmail.com',
        meetingLocation: 'PPC center',
        meetingFrequency: 'Daily',
        charterDate: '4/10/2009',
        districtPresident: 'Sebastien Saintrose',
        meetingCity: 'Toronto',
        districtPhone: '613-343-1123',
        districtDescription:
          "Every seeder file must extend the BaseSeeder class and implement the run method.The following example uses a Lucid model to create multiple users. However, you can also use the Database query builder directly. In other words, seeders don't care what you write inside the run method.",
      },
    ])
    await Club.createMany([
      {
        clubName: 'Cornwall',
        clubAddress: '239 Pitt Street',
        clubCity: 'Cornwall',
        clubPostal: 'K2C 4V5',
        clubProvince: 'Ontario',
        clubCountry: 'Canada',
        clubPhone: '613-330-5496',
        clubEmail: 'cornwallian12@gmail.com',
        charterDate: '12/09/2021',
        motherClub: 'African 7045',
        districtId: 1,
      },
      {
        clubName: 'Brockville',
        clubAddress: '3543 Sud Street',
        clubCity: 'CornwBrockvilleall',
        clubPostal: 'R4H 4V5',
        clubProvince: 'Ontario',
        clubCountry: 'Canada',
        clubPhone: '613-234-5211',
        clubEmail: 'brokallian12@gmail.com',
        charterDate: '04/09/2021',
        motherClub: 'dell 7045',
        districtId: 1,
      },
    ])
    const guest: User = await User.create({
      membershipId: '',
      firstname: 'John',
      lastname: 'Doe',
      address: '234 bluders ave',
      userCity: 'cornwall',
      userPostal: 'K4V 2VC',
      userProvince: 'Ontario',
      userCountry: 'Canada',
      phone: '',
      email: '',
      password: '123456',
      districtId: 1,
    })
    let role: RoleType = 8
    await guest.related('districtRole').attach({
      [1]: {
        district_role: RoleType[role],
        role_type: role,
      },
    })
    const newUser: User = await User.create({
      membershipId: '123513',
      firstname: 'John',
      lastname: 'Saint Rose ',
      address: '234 bluders ave',
      userCity: 'cornwall',
      userPostal: 'K4V 2VC',
      userProvince: 'Ontario',
      userCountry: 'Canada',
      phone: '613-330-5423',
      email: 'jssr26@gmail.com',
      password: '123456',
      districtId: 1,
    })
    role = 1
    await newUser.related('districtRole').attach({
      [1]: {
        district_role: RoleType[role],
        role_type: role,
      },
    })

    const clubUser: User = await User.create({
      membershipId: '12323513',
      firstname: 'Sandy',
      lastname: 'Rosemen ',
      address: '544 ilop ave',
      userCity: 'brockville',
      userPostal: 'K4V 5D4',
      userProvince: 'Ontario',
      userCountry: 'Canada',
      phone: '613-455-6733',
      email: 'admintyyy@gmail.com',
      password: '123456',
      clubId: 1,
    })
    role = 7
    await clubUser.related('clubRole').attach({
      [1]: {
        club_role: RoleType[role],
        role_type: role,
      },
    })
    const newProj: Project = await Project.create({
      projectName: 'Peter and Ghana',
      grantType: GrantType[1],
      country: 'Ghana',
      areaFocus: JSON.stringify({
        Peace_Conflict_Prevention: false,
        Disease_Prevention_And_Treatment: true,
        Water_And_Sanitation: false,
        Maternal_And_Child_Health: false,
        Basic_Education_And_Literacy: true,
        Economic_And_Community_Development: false,
        Environment: false,
      }),
      districtId: 1,
      createdBy: 2,
      region: Region[1],
      rotaryYear: 2022,
      fundingGoal: 5000,
      anticipatedFunding: 500,
      projectStatus: ProjectStatus[1],
      estimatedCompletion: DateTime.fromFormat('2/14/2032', 'D'),
      projectTheme:
        'This is an advanced life saveing project to save african water in Ghana! To the the moon! ',
    })
    const user1: User = await User.findOrFail(1)
    await newProj.related('projectRole').attach({
      [user1.userId]: {
        role: 1,
      },
    })

    const secPro: Project = await Project.create({
      projectName: 'Cornwall Ontario Park',
      grantType: GrantType[1],
      country: 'Canada',
      areaFocus: JSON.stringify({
        Peace_Conflict_Prevention: false,
        Disease_Prevention_And_Treatment: true,
        Water_And_Sanitation: false,
        Maternal_And_Child_Health: false,
        Basic_Education_And_Literacy: false,
        Economic_And_Community_Development: false,
        Environment: false,
      }),
      districtId: 1,
      createdBy: 2,
      region: Region[1],
      rotaryYear: 2022,
      fundingGoal: 2000,
      anticipatedFunding: 200,
      projectStatus: ProjectStatus[1],
      projectTheme: 'Fixing up Cornwall appearence with the best park',
      estimatedCompletion: DateTime.fromFormat('5/14/2022', 'D'),
    })
    const user2: User = await User.findOrFail(1)
    await secPro.related('projectRole').attach({
      [user2.userId]: {
        role: 1,
      },
    })

    const thirdPro: Project = await Project.create({
      projectName: 'Africa Project',
      grantType: GrantType[2],
      country: 'France',
      areaFocus: JSON.stringify({
        Peace_Conflict_Prevention: true,
        Disease_Prevention_And_Treatment: false,
        Water_And_Sanitation: false,
        Maternal_And_Child_Health: true,
        Basic_Education_And_Literacy: false,
        Economic_And_Community_Development: false,
        Environment: false,
      }),
      extraDescriptions: JSON.stringify({
        benefit_community_description:
          'follows the introduction; discusses the controlling idea, using facts, arguments, analysis, examples, and other information.',
        non_financial_participation:
          'SCIENTISTS HAVE LEARNED TO SUPPLEMENT THE SENSE OF SIGHT IN NUMEROUS WAYS. In front of the tiny pupil of the eye they put, on Mount Palomar, a great monocle 200 inches in diameter, and with it see 2000 times farther into the depths of space',
        co_operating_organisation_letter:
          'In a coherent paragraph, each sentence relates clearly to the topic sentence or controlling idea, but there is more to coherence than this. If a paragraph is coherent, each sentence flows smoothly into the next without obvious shifts or jumps. ',
        primary_contact: {
          name: 'John Smith',
          address: '2625 Carling Ave, Ottawa, ON K2B 6V3',
          phone: '613-898-5444',
          email: 'lop@fred.com',
          fax: '',
        },
        secondary_contact: {
          name: 'Jam Butteers',
          address: '2625 Carling Ave, Ottawa, ON K2B 6V3',
          phone: '613-955-8888',
          email: 'jssr#4@gmail.com',
          fax: '',
        },
      }),
      itemisedBudget: JSON.stringify([
        { itemName: 'TV', itemCost: 2000 },
        { itemName: 'Pool', itemCost: 500 },
      ]),
      startDate: DateTime.fromFormat('7/23/2022', 'D'),
      intialSponsorClubContribution: 500,
      coOperatingOrganisationContribution: 100,
      districtSimplifiedGrantRequest: 250,
      districtId: 1,
      createdBy: 2,
      region: Region[4],
      rotaryYear: 2022,
      fundingGoal: 2500,
      anticipatedFunding: 850,
      projectStatus: ProjectStatus[1],
      projectTheme:
        'the first section of a paragraph; should include the topic sentence and any other sentences at the beginning of the paragraph that give background information or provide a transition.',
      estimatedCompletion: DateTime.fromFormat('5/14/2022', 'D'),
    })
    const user3: User = await User.findOrFail(2)
    await thirdPro.related('projectRole').attach({
      [user3.userId]: {
        role: 1,
      },
    })

    const fourthProj: Project = await Project.create({
      projectName: 'Cornwall Rebuilding',
      grantType: GrantType[1],
      country: 'France',
      areaFocus: JSON.stringify({
        Peace_Conflict_Prevention: true,
        Disease_Prevention_And_Treatment: true,
        Water_And_Sanitation: false,
        Maternal_And_Child_Health: false,
        Basic_Education_And_Literacy: true,
        Economic_And_Community_Development: true,
        Environment: false,
      }),
      clubId: 1,
      createdBy: 2,
      region: Region[1],
      rotaryYear: 2022,
      fundingGoal: 2500,
      anticipatedFunding: 1400,
      projectStatus: ProjectStatus[1],
      estimatedCompletion: DateTime.fromFormat('2/14/2032', 'D'),
      projectTheme:
        'This is an advanced life saveing project to save african water in Ghana! To the the moon! ',
    })
    const user4: User = await User.findOrFail(3)
    await fourthProj.related('projectRole').attach({
      [user4.userId]: {
        role: 1,
      },
    })
  }
}
