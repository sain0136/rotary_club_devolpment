import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
import District from 'App/Models/District'
import Club from 'App/Models/Club'
import Project from 'App/Models/Project'
import RoleType from 'Contracts/Enums/RoleType'
import AreaFocus from 'Contracts/Enums/AreaFocus'
import Region from 'Contracts/Enums/Region'
import ProjectStatus from 'Contracts/Enums/ProjectStatus'
import { DateTime } from 'luxon'


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
    const role: RoleType = 5
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
    await clubUser.related('clubRole').attach({
      [1]: {
        club_role: RoleType[role],
        role_type: role,
      },
    })
    const newProj: Project = await Project.create({
      projectName: 'Restoration of African Water',
      grantType: 1,
      country: 'Ghana',
      areaFocus: AreaFocus[3],
      districtId: 1,
      createdBy: 1,
      region: Region[1],
      rotaryYear: 2022,
      fundingGoal: 5000,
      currentFunds: 0,
      projectStatus: ProjectStatus[1],
      estimatedCompletion: DateTime.fromFormat('2/14/2032', 'D'),
      projectTheme: 'This is an advanced life saveing project to save african water. God blessed',
    })
    const user1: User = await User.findOrFail(1)
    await newProj.related('projectRole').attach({
      [user1.userId]: {
        role: 1,
      },
    })
    const secPro: Project = await Project.create({
      projectName: 'Cornwall Ontario Park',
      grantType: 1,
      country: 'Canada',
      areaFocus: AreaFocus[3],
      districtId: 1,
      createdBy: 1,
      region: Region[1],
      rotaryYear: 2022,
      fundingGoal: 2000,
      currentFunds: 0,
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
  }
}
