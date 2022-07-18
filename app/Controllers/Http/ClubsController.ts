import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Club from 'App/Models/Club'
import User from 'App/Models/User'

export default class ClubsController {
  public async index({ response }: HttpContextContract) {
    const clubs: Club[] = await Club.all()
    return response.json({ clubs })
  }

  public async getAllClubMembers({ request, response }: HttpContextContract) {
    const clubID: number = request.input('club_id')
    const allMembers: User[] = await User.query().where({ clubId: clubID })
    for await (const user of allMembers) {
      user.role = await user.related('clubRole').pivotQuery().where({ user_id: user.userId })
    }

    return response.json({ allMembers })
  }

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    const clubName: string = request.input('club_name')
    const clubAddress: string = request.input('club_address')
    const clubCity: string = request.input('club_city')
    const clubPostal: string = request.input('club_postal')
    const clubProvince: string = request.input('club_province')
    const clubCountry: string = request.input('club_country')
    const clubPhone: string = request.input('club_phone')
    const clubDescription: string = request.input('club_description')
    const clubEmail: string = request.input('club_email')
    const charterDate: string = request.input('charter_date')
    const motherClub: string = request.input('mother_club')
    const districtId: number = request.input('district_id')

    const newClub: Club = await Club.create({
      clubName: clubName,
      clubAddress: clubAddress,
      clubCity: clubCity,
      clubPostal: clubPostal,
      clubProvince: clubProvince,
      clubCountry: clubCountry,
      clubPhone: clubPhone,
      clubDescription: clubDescription,
      clubEmail: clubEmail,
      charterDate: charterDate,
      motherClub: motherClub,
      districtId: districtId,
    })
    return response.json({ newClubs: newClub })
  }

  public async show({ response, params }: HttpContextContract) {
    const clubID: number = parseInt(params.id)
    let clubById: Club = await Club.findOrFail(clubID)
    clubById.titledRoles = []

    const allMembers: User[] = await User.query().where({ clubId: clubID })
    for await (const user of allMembers) {
      const role = await user.related('clubRole').pivotQuery().where({ user_id: user.userId })
      if (role[0].role_type == 6) {
        clubById.titledRoles.push({
          name: user.firstname + ' ' + user.lastname,
          title: role[0].club_role,
        })
      }
    }

    return response.json({ clubsById: clubById })
  }

  public async edit({}: HttpContextContract) {}

  public async update({ request, params, response }: HttpContextContract) {
    const clubID: number = parseInt(params.id)
    const old: Club = await Club.findOrFail(clubID)
    const clubToBeUpdated = await Club.findOrFail(clubID)
    const clubName: string = request.input('club_name')
    const clubAddress: string = request.input('club_address')
    const clubCity: string = request.input('club_city')
    const clubPostal: string = request.input('club_postal')
    const clubProvince: string = request.input('club_province')
    const clubCountry: string = request.input('club_country')
    const clubPhone: string = request.input('club_phone')
    const clubDescription: string = request.input('club_description')
    const clubEmail: string = request.input('club_email')
    const charterDate: string = request.input('charter_date')
    const motherClub: string = request.input('mother_club')
    const districtId: number = request.input('district_id')

    const updatedClub: Club = await clubToBeUpdated
      .merge({
        clubName: clubName,
        clubAddress: clubAddress,
        clubCity: clubCity,
        clubPostal: clubPostal,
        clubProvince: clubProvince,
        clubCountry: clubCountry,
        clubPhone: clubPhone,
        clubDescription: clubDescription,
        clubEmail: clubEmail,
        charterDate: charterDate,
        motherClub: motherClub,
        districtId: districtId,
      })
      .save()

    return response.json({ updatedClub, Hello: 'pre-update club below', old })
  }

  public async destroy({ params, response }: HttpContextContract) {
    const clubID: number = parseInt(params.id)
    const old: Club = await Club.findOrFail(clubID)
    const clubToBeDeleted: Club = await Club.findOrFail(clubID)
    const districtId = old.districtId
    await clubToBeDeleted.delete()
    const allClubsInDistrict: Club[] = await Club.query().where({ districtId: districtId })
    return response.json({ allClubs: allClubsInDistrict, Deleted: 'old club below', old })
  }
}
