import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
import District from 'App/Models/District'
import Club from 'App/Models/Club'
import Url from 'App/Models/Url'
import Project from 'App/Models/Project'
import RoleType from 'Contracts/Enums/RoleType'

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
        districtDescription:"Every seeder file must extend the BaseSeeder class and implement the run method.The following example uses a Lucid model to create multiple users. However, you can also use the Database query builder directly. In other words, seeders don't care what you write inside the run method."
      },
      {
        districtName: 'District 1234',
        districtEmail: 'theValley@gmail.com',
        meetingLocation: 'PPC center',
        meetingFrequency: 'Daily',
        charterDate: '4/10/2009',
        districtPresident: 'Sebastien Saintrose',
        districtDescription:"Every seeder file must extend the BaseSeeder class and implement the run method.The following example uses a Lucid model to create multiple users. However, you can also use the Database query builder directly. In other words, seeders don't care what you write inside the run method."
      },
    ])
    await Club.createMany([
      {
        clubName:'Cornwall',
        clubAddress:'239 Pitt Street',
        clubCity: 'Cornwall',
        clubPostal:'K2C 4V5',
        clubProvince: 'Ontario',
        clubCountry:'Canada',
        clubPhone:'613-330-5496',
        clubEmail:'cornwallian12@gmail.com',
        charterDate:'12/09/2021',
        motherClub:'African 7045',
        districtId:1
      },
      {
        clubName:'Brockville',
        clubAddress:'3543 Sud Street',
        clubCity: 'CornwBrockvilleall',
        clubPostal:'R4H 4V5',
        clubProvince: 'Ontario',
        clubCountry:'Canada',
        clubPhone:'613-234-5211',
        clubEmail:'brokallian12@gmail.com',
        charterDate:'04/09/2021',
        motherClub:'dell 7045',
        districtId:1
      },
    ])
    const newUser: User= await User.create(
      {
        membershipId: '123513',
        firstname: "John",
        lastname: "Saint Rose ",
        address: "234 bluders ave",
        userCity: "cornwall",
        userPostal: "K4V 2VC",
        userProvince: "Ontario",
        userCountry: "Canada",
        phone: "613-330-5423",
        email: "jssr26@gmail.com",
        password:"123456",
        districtId: 1,
      })
      const role: RoleType = 1
      await newUser.related('districtRole').attach({
        [1]: {
          district_role: RoleType[role],
          role_type: role,
        },
      })
      const clubUser: User= await User.create(
        {
          membershipId: '12323513',
          firstname: "Sandy",
          lastname: "Rosemen ",
          address: "544 ilop ave",
          userCity: "brockville",
          userPostal: "K4V 5D4",
          userProvince: "Ontario",
          userCountry: "Canada",
          phone: "613-455-6733",
          email: "admintyyy@gmail.com",
          password:"123456",
          clubId: 1,
        })
        await clubUser.related('clubRole').attach({
          [1]: {
            club_role: RoleType[role],
            role_type: role,
          },
        })
        await Project.create({
          projectName:'Restoration of African Water',
          country:'Ghana',
          areaFocus:3,
          districtId:1,
          createdBy:1,
          region:1,
          rotaryYear:2022,
          fundingGoal:5000,
          currentFunds:0,
          projectStatus:1,
          extraDescriptions:JSON.stringify({
            districtProjectDescription:'This is an advanced life saveing project to save african water. God blessed',
          })
        })
  }
}
