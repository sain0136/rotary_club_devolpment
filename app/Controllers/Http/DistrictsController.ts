import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import District from 'App/Models/District'

export default class DistrictsController {
  public async index({ response }: HttpContextContract) {
    const districts = await District.all()
    return response.json({ districts })
  }

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    const name = request.input('name')
    const email = request.input('email')
    const location = request.input('location')
    const meeting = request.input('meeting')
    const charterdate = request.input('charterdate')
    const president = request.input('president')
    const description = request.input('description')

    const newDistrict = await District.create({
      districtName: name,
      districtEmail: email,
      meetingLocation: location,
      meetingFrequency: meeting,
      charterDate: charterdate,
      districtPresident: president,
      districtDescription: description,
    })
    return response.json({ newDistrict })
  }

  public async show({ params, response }: HttpContextContract) {
    const districtById = await District.findOrFail(params.id)

    return response.json({ districtById })
  }

  public async edit({}: HttpContextContract) {}

  public async update({ response, params, request }: HttpContextContract) {
    let old = await District.findOrFail(params.id)
    const districtToBeUpdated = await District.findOrFail(params.id)
    const name = request.input('name')
    const email = request.input('email')
    const location = request.input('location')
    const meeting = request.input('meeting')
    const charterdate = request.input('charterdate')
    const president = request.input('president')
    const description = request.input('description')

    const updated = await districtToBeUpdated
      .merge({
        districtName: name,
        districtEmail: email,
        meetingLocation: location,
        meetingFrequency: meeting,
        charterDate: charterdate,
        districtPresident: president,
        districtDescription: description,
      })
      .save()
    return response.json({ updated, Hello: 'old file below', old })
  }

  public async destroy({ response, params }: HttpContextContract) {
    let old = await District.findOrFail(params.id)
    const districtToBeDeleted = await District.findOrFail(params.id)
    await districtToBeDeleted.delete()

    return response.json({ Deleted: 'old file below', old })
  }
}
