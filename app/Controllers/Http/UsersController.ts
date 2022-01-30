import Hash from '@ioc:Adonis/Core/Hash'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Club from 'App/Models/Club'
import District from 'App/Models/District'
import User from 'App/Models/User'
import RoleType from 'Contracts/Enums/RoleType'

export default class UsersController {
  public async index({ response }: HttpContextContract) {
    const allUsers: User[] = await User.all()
    for await (const user of allUsers) {
      if (user.clubId !== null && user.clubId !== undefined) {
        user.role = await user.related('clubRole').pivotQuery().where({ user_id: user.userId })
      } else {
        user.role = await user.related('districtRole').pivotQuery().where({ user_id: user.userId })
      }
    }
    return response.json({ allUsers })
  }
  public async create({}: HttpContextContract) {}

  public async passwordVerfication({ request, response }: HttpContextContract) {
    const password: string = request.input('password')
    const id: number = request.input('user_id')
    const districtOrClubId: number = request.input('id')

    const userById: User = await User.findOrFail(id)

    let verifiedAndAccessGranted: Boolean = false
    if (
      (await Hash.verify(userById.password, password)) &&
      userById.districtId == districtOrClubId
    ) {
      verifiedAndAccessGranted = true
    } else if (
      (await Hash.verify(userById.password, password)) &&
      userById.clubId == districtOrClubId
    ) {
      verifiedAndAccessGranted = true
    } else {
      return response.json({ Verified: verifiedAndAccessGranted })
    }

    if (userById.clubId !== null && userById.clubId !== undefined) {
      userById.role = await userById
        .related('clubRole')
        .pivotQuery()
        .where({ user_id: userById.userId })
    } else {
      userById.role = await userById
        .related('districtRole')
        .pivotQuery()
        .where({ user_id: userById.userId })
    }
    return response.json({
      Verified: verifiedAndAccessGranted,
      Hash: userById.password,
      PlainText: password,
    })
  }
  public async jsonGetById({ request, response }: HttpContextContract) {
    const id: number = request.input('user_id')
    const userById: User = await User.findOrFail(id)
    if (userById.clubId !== null && userById.clubId !== undefined) {
      userById.role = await userById
        .related('clubRole')
        .pivotQuery()
        .where({ user_id: userById.userId })
    } else {
      userById.role = await userById
        .related('districtRole')
        .pivotQuery()
        .where({ user_id: userById.userId })
    }
    return response.json({ userById })
  }

  public async store({ request, response }: HttpContextContract) {
    const membershipId: string = request.input('membership_id')
    const firstname: string = request.input('firstname')
    const lastname: string = request.input('lastname')
    const address: string = request.input('address')
    const userCity: string = request.input('user_city')
    const userPostal: string = request.input('user_postal')
    const userProvince: string = request.input('user_province')
    const userCountry: string = request.input('user_country')
    const phone: string = request.input('phone')
    const email: string = request.input('email')
    const password: string = request.input('password')
    const clubId: number = request.input('club_id')
    const districtId: number = request.input('district_id')

    const districtRole: String = request.input('district_role')
    const clubRole: String = request.input('club_role')
    const role: RoleType = request.input('role_type')

    const newUser: User = await User.create({
      membershipId: membershipId,
      firstname: firstname,
      lastname: lastname,
      address: address,
      userCity: userCity,
      userPostal: userPostal,
      userProvince: userProvince,
      userCountry: userCountry,
      phone: phone,
      email: email,
      password: password,
      clubId: clubId,
      districtId: districtId,
    })

    if (clubId !== null && clubId !== undefined) {
      const club: Club = await Club.findOrFail(clubId)
      if (clubRole == null || clubRole == undefined) {
        await newUser.related('clubRole').attach({
          [club.clubId]: {
            club_role: RoleType[role],
            role_type: role,
          },
        })
      } else {
        await newUser.related('clubRole').attach({
          [club.clubId]: {
            club_role: clubRole,
            role_type: role,
          },
        })
      }
    } else if (districtId !== null && districtId !== undefined) {
      const district: District = await District.findOrFail(districtId)
      if (districtRole == null || districtRole == undefined) {
        await newUser.related('districtRole').attach({
          [district.districtId]: {
            district_role: RoleType[role],
            role_type: role,
          },
        })
      } else {
        await newUser.related('districtRole').attach({
          [district.districtId]: {
            district_role: districtRole,
            role_type: role,
          },
        })
      }
    }

    const roleTitle = async (role: number) => {
      return RoleType[role]
    }

    return response.json({
      created: 'a new user',
      newUser,
      Admin_type: await roleTitle(role),
    })
  }

  public async show({ params, response }: HttpContextContract) {
    const userId: number = parseInt(params.id)
    const userById: User = await User.findOrFail(userId)

    return response.json({ userById })
  }

  public async edit({}: HttpContextContract) {}

  public async update({ request, params, response }: HttpContextContract) {
    const userId: number = parseInt(params.id)
    const old = await User.findOrFail(userId)
    const userToBeUpdated: User = await User.findOrFail(userId)
    const membershipId: string = request.input('membership_id')
    const firstname: string = request.input('firstname')
    const lastname: string = request.input('lastname')
    const address: string = request.input('address')
    const userCity: string = request.input('user_city')
    const userPostal: string = request.input('user_postal')
    const userProvince: string = request.input('user_province')
    const userCountry: string = request.input('user_country')
    const phone: string = request.input('phone')
    const email: string = request.input('email')
    const password: string = request.input('password')
    const clubId: number = request.input('club_id')
    const districtId: number = request.input('district_id')

    const updatedUser: User = await userToBeUpdated
      .merge({
        membershipId: membershipId,
        firstname: firstname,
        lastname: lastname,
        address: address,
        userCity: userCity,
        userPostal: userPostal,
        userProvince: userProvince,
        userCountry: userCountry,
        phone: phone,
        email: email,
        password: password,
        clubId: clubId,
        districtId: districtId,
      })
      .save()

    return response.json({ updatedUser, Hello: 'old file below', old })
  }

  public async destroy({ request, params, response }: HttpContextContract) {
    const userId: number = parseInt(params.id)
    const isThisDistrict: boolean = request.input('isThisDistrict')
    const old = await User.findOrFail(userId)
    if (isThisDistrict) {
      const userToBeDeleted: User = await User.findOrFail(userId)
      const districtId: any = userToBeDeleted.districtId
      await userToBeDeleted.related('districtRole').detach()
      await userToBeDeleted.delete()
      const allDistrictMembers: User[] = await User.query()
        .select()
        .where({ districtId: districtId })
      return response.json({ DistrictMembers: allDistrictMembers, Deleted: 'old user below', old })
    } else {
      const userToBeDeleted: User = await User.findOrFail(userId)
      const clubID: any = userToBeDeleted.clubId
      await userToBeDeleted.related('clubRole').detach()
      await userToBeDeleted.delete()
      const allClubsMembers: User[] = await User.query().select().where({ clubID: clubID })

      return response.json({ ClubMembers: allClubsMembers, Deleted: 'old user below', old })
    }
  }
}
