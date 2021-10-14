import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Club from 'App/Models/Club'
import District from 'App/Models/District'
import Url from 'App/Models/Url'

export default class UrlsController {
  public async index({}: HttpContextContract) {}

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    const isThisDistrict: Boolean = request.input('isThisDistrict')
    const objectId = request.input('objectId')
    const socialMediaType = request.input('socialMediaType')
    const linkUrl = request.input('linkUrl')

    const url = await Url.create({
      urlType: socialMediaType,
      url: linkUrl,
    })
    if (isThisDistrict) {
      const district = await District.findOrFail(objectId)
      await url.related('districtUrls').attach([district.districtId])
    } else {
      const club = await Club.findOrFail(objectId)

      await url.related('clubUrls').attach([club.clubId])
    }
    return response.json({ url })
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
