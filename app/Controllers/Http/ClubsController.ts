import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Club from 'App/Models/Club'

export default class ClubsController {
  public async index({ response }: HttpContextContract) {
    const clubs = await Club.all()
    return response.json({ clubs })
  }

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    const name = request.input('name')
    const address = request.input('address')
    const clubCity = request.input('clubCity')
    const clubPostal = request.input('clubPostal')
    const clubProvince = request.input('clubProvince')
    const clubCountry = request.input('clubCountry')
    const clubPhone = request.input('clubPhone')
    const clubDescription = request.input('clubDescription')
    const clubEmail = request.input('clubEmail')
    const charterDate = request.input('charterDate')
    const motherClub = request.input('motherClub')
    const districtId = request.input('districtId')

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
    const clubName = request.input('clubName')
    const clubAddress = request.input('clubAddress')
    const clubCity = request.input('clubCity')
    const clubPostal = request.input('clubPostal')
    const clubProvince = request.input('clubProvince')
    const clubCountry = request.input('clubCountry')
    const clubPhone = request.input('clubPhone')
    const clubDescription = request.input('clubDescription')
    const clubEmail = request.input('clubEmail')
    const charterDate = request.input('charterDate')
    const motherClub = request.input('motherClub')
    const districtId = request.input('districtId')

    const updatedClub = await clubToBeUpdated.merge({
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

    return response.json({ updatedClub, Hello: 'pre-update club below', old })
  }

  public async destroy({ params, response }: HttpContextContract) {
    let old = await Club.findOrFail(params.id)
    const clubToBeDeleted = await Club.findOrFail(params.id)
    await clubToBeDeleted.delete()
    return response.json({ Deleted: 'old club below', old })
  }
}
