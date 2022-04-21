import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ModelPaginatorContract } from '@ioc:Adonis/Lucid/Orm'
import Club from 'App/Models/Club'
import District from 'App/Models/District'
import User from 'App/Models/User'

export default class DistrictsController {
  public async index({ response }: HttpContextContract) {
    const districts: District[] = await District.all()
    return response.json({ districts })
  }

  public async paginationIndex({ request, response }: HttpContextContract) {
    const currentPage: number = request.input('current_page')
    const limit: number = request.input('limit')
    const districts: ModelPaginatorContract<District> = await District.query()
      .select('*')
      .paginate(currentPage, limit)
    return response.json({ districts })
  }

  public async create({}: HttpContextContract) {}

  public async allClubsInDistrict({ request, response }: HttpContextContract) {
    const districtID: number = request.input('district_id')
    const allClubsForDistrict: Club[] = await Club.query().where({ district_id: districtID })
    return response.json({ allClubs: allClubsForDistrict })
  }

  public async getDistictAdmins({ response }: HttpContextContract) {
    const allAdmins: User[] = await User.query().where('district_id', '>', 0)
    for await (const user of allAdmins) {
      user.role = await user.related('districtRole').pivotQuery().where({ user_id: user.userId })
    }
    return response.json({ allAdmins })
  }

  public async store({ request, response }: HttpContextContract) {
    const name: string = request.input('district_name')
    const email: string = request.input('district_email')
    const location: string = request.input('meeting_location')
    const meeting: string = request.input('meeting_frequency')
    const charterdate: string = request.input('charter_date')
    const president: string = request.input('district_president')
    const description: string = request.input('district_description')

    const newDistrict: District = await District.create({
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
    const districtId: number = parseInt(params.id)
    const districtById: District = await District.findOrFail(districtId)
    return response.json({ districtById })
  }

  public async edit({}: HttpContextContract) {}

  public async update({ response, params, request }: HttpContextContract) {
    const districtId: number = parseInt(params.id)
    let old = await District.findOrFail(districtId)
    const districtToBeUpdated: District = await District.findOrFail(params.id)
    const name: string = request.input('district_name')
    const email: string = request.input('district_email')
    const location: string = request.input('meeting_location')
    const meeting: string = request.input('meeting_frequency')
    const charterdate: string = request.input('charter_date')
    const president: string = request.input('district_president')
    const description: string = request.input('district_description')

    const updated: District = await districtToBeUpdated
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
    const districtId: number = parseInt(params.id)
    const old: District = await District.findOrFail(districtId)
    const districtToBeDeleted: District = await District.findOrFail(params.id)
    await districtToBeDeleted.delete()
    return response.json({ Deleted: 'old file below', old })
  }
}
