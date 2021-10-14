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
    const id = request.input('id')
    const userById = await User.findOrFail(id)
    return response.json({ userById })
  }

  public async store({ request, response }: HttpContextContract) {
    const membershipId = request.input('membershipId')
    const firstname = request.input('firstname')
    const lastname = request.input('lastname')
    const address = request.input('address')
    const userCity = request.input('userCity')
    const userPostal = request.input('userPostal')
    const userProvince = request.input('userProvince')
    const userCountry = request.input('userCountry')
    const phone = request.input('phone')
    const email = request.input('email')
    const password = request.input('password')
    const clubId = request.input('clubId')
    const districtId = request.input('districtId')

    const clubRole = request.input('clubRole')
    const role: RoleType = request.input('roleType')

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

    if (clubId !== null) {
      let club = await Club.findOrFail(clubId)
      await newUser.related('clubRole').attach({
        [club.clubId]: {
          club_role: clubRole,
          role_type: role,
        },
      })
    } else {
      let district = await District.findOrFail(districtId)

      await newUser.related('districtRole').attach({
        [district.districtId]: {
          club_role: clubRole,
          role_type: role,
        },
      })
    }
    return response.json({ created: 'a new user', newUser })
  }

  public async show({ params, response }: HttpContextContract) {
    const userById = await User.findOrFail(params.id)

    return response.json({ userById })
  }

  public async edit({}: HttpContextContract) {}

  public async update({ request, params, response }: HttpContextContract) {
    let old = await User.findOrFail(params.id)
    const userToBeUpdated = await User.findOrFail(params.id)
    const membershipId = request.input('membershipId')
    const firstname = request.input('firstname')
    const lastname = request.input('lastname')
    const address = request.input('address')
    const userCity = request.input('userCity')
    const userPostal = request.input('userPostal')
    const userProvince = request.input('userProvince')
    const userCountry = request.input('userCountry')
    const phone = request.input('phone')
    const email = request.input('email')
    const password = request.input('password')
    const clubId = request.input('clubId')
    const districtId = request.input('districtId')

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

  public async destroy({ params, response }: HttpContextContract) {
    let old = await User.findOrFail(params.id)
    const userToBeDeleted = await User.findOrFail(params.id)
    await userToBeDeleted.related('clubRole').detach()
    await userToBeDeleted.delete()
    return response.json({ Deleted: 'old user below', old })
  }
}
