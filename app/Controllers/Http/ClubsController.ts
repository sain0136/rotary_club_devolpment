import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Club from 'App/Models/Club'

export default class ClubsController {
  public async index({ response }: HttpContextContract) {
    const clubs = await Club.all()
    return response.json({ clubs })
  }

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    const name = request.input('club_name')
    const address = request.input('club_address')
    const clubCity = request.input('club_city')
    const clubPostal = request.input('club_postal')
    const clubProvince = request.input('club_province')
    const clubCountry = request.input('club_country')
    const clubPhone = request.input('club_phone')
    const clubDescription = request.input('club_description')
    const clubEmail = request.input('club_email')
    const charterDate = request.input('charter_date')
    const motherClub = request.input('mother_club')
    const districtId = request.input('district_id')

    const newClub = await Club.create({
      clubName: name,
      clubAddress: address,
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
    const clubsById = await Club.findOrFail(params.id)

    return response.json({ clubsById })
  }

  public async edit({}: HttpContextContract) {}

  public async update({ request, params, response }: HttpContextContract) {
    let old = await Club.findOrFail(params.id)
    const clubToBeUpdated = await Club.findOrFail(params.id)
    const clubName = request.input('club_name')
    const clubAddress = request.input('club_address')
    const clubCity = request.input('club_city')
    const clubPostal = request.input('club_postal')
    const clubProvince = request.input('club_province')
    const clubCountry = request.input('club_country')
    const clubPhone = request.input('club_phone')
    const clubDescription = request.input('club_description')
    const clubEmail = request.input('club_email')
    const charterDate = request.input('charter_date')
    const motherClub = request.input('mother_club')
    const districtId = request.input('district_id')

    const updatedClub = await clubToBeUpdated
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
    let old = await Club.findOrFail(params.id)
    const clubToBeDeleted = await Club.findOrFail(params.id)
    await clubToBeDeleted.delete()
    return response.json({ Deleted: 'old club below', old })
  }
}
