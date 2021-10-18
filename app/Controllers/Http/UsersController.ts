import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Club from 'App/Models/Club'
import District from 'App/Models/District'
import User from 'App/Models/User'
import RoleType from 'Contracts/Enums/RoleType'

export default class UsersController {
  public async index({ response }: HttpContextContract) {
    const allUsers = await User.all()
    return response.json({ allUsers })
  }
  public async create({}: HttpContextContract) {}

  public async jsonGetById({ request, response }: HttpContextContract) {
    const id: number = request.input('id')
    const userById = await User.findOrFail(id)
    return response.json({ userById })
  }

  public async store({ request, response }: HttpContextContract) {
    const membershipId = request.input('membership_id')
    const firstname = request.input('firstname')
    const lastname = request.input('lastname')
    const address = request.input('address')
    const userCity = request.input('user_city')
    const userPostal = request.input('user_postal')
    const userProvince = request.input('user_province')
    const userCountry = request.input('user_country')
    const phone = request.input('phone')
    const email = request.input('email')
    const password = request.input('password')
    const clubId = request.input('club_id')
    const districtId = request.input('district_id')

    const districtRole = request.input('district_role')
    const clubRole = request.input('club_role')
    const role: RoleType = request.input('role_type')

    const newUser = await User.create({
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
      let club = await Club.findOrFail(clubId)
      await newUser.related('clubRole').attach({
        [club.clubId]: {
          club_role: clubRole,
          role_type: role,
        },
      })
    } else if (districtId !== null && districtId !== undefined) {
      let district = await District.findOrFail(districtId)

      await newUser.related('districtRole').attach({
        [district.districtId]: {
          district_role: districtRole,
          role_type: role,
        },
      })
    }

    const roleTitle = async (role: number) => {
      return RoleType[role]
    }

    return response.json({ created: 'a new user', newUser, Admin_type: await roleTitle(role) })
  }

  public async show({ params, response }: HttpContextContract) {
    const userById = await User.findOrFail(params.id)
    return response.json({ userById })
  }

  public async edit({}: HttpContextContract) {}

  public async update({ request, params, response }: HttpContextContract) {
    let old = await User.findOrFail(params.id)
    const userToBeUpdated = await User.findOrFail(params.id)
    const membershipId = request.input('membership_id')
    const firstname = request.input('firstname')
    const lastname = request.input('lastname')
    const address = request.input('address')
    const userCity = request.input('user_city')
    const userPostal = request.input('user_postal')
    const userProvince = request.input('user_province')
    const userCountry = request.input('user_country')
    const phone = request.input('phone')
    const email = request.input('email')
    const password = request.input('password')
    const clubId = request.input('club_id')
    const districtId = request.input('district_id')

    const updatedUser = await userToBeUpdated
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
    const isThisDistrict: boolean = request.input('isThisDistrict')
    let old = await User.findOrFail(params.id)
    if (isThisDistrict) {
      const userToBeDeleted = await District.findOrFail(params.id)
      await userToBeDeleted.related('districtRole').detach()
      await userToBeDeleted.delete()
      return response.json({ Deleted: 'old user below', old })
    } else {
      const userToBeDeleted = await User.findOrFail(params.id)
      await userToBeDeleted.related('clubRole').detach()
      await userToBeDeleted.delete()
      return response.json({ Deleted: 'old user below', old })
    }
  }
}
