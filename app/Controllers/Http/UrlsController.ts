import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Club from 'App/Models/Club'
import District from 'App/Models/District'
import Url from 'App/Models/Url'
import SocialMedia from 'Contracts/Enums/SocialMedia'

export default class UrlsController {
  public async index({}: HttpContextContract) {}

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    const isThisDistrict: Boolean = request.input('isThisDistrict')
    const objectId: number = request.input('object_id')
    const socialMediaType: SocialMedia = request.input('url_type')
    const linkUrl = request.input('url')

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
    const urlTitle = async (socialMediaType: number) => {
      return SocialMedia[socialMediaType]
    }
    return response.json({ url, RELTYPE: (await urlTitle(socialMediaType)) + ' link' })
  }

  public async show({ params, response }: HttpContextContract) {
    const urlById = await Url.findOrFail(params.id)
    return response.json({ urlById })
  }

  public async edit({}: HttpContextContract) {}

  public async update({ request, params, response }: HttpContextContract) {
    const socialMediaType = request.input('url_type')
    const linkUrl = request.input('url')
    let old = await Url.findOrFail(params.id)

    const urlToBeUpdated = await Url.findOrFail(params.id)
    const updatedUser = await urlToBeUpdated
      .merge({
        url: linkUrl,
        urlType: socialMediaType,
      })
      .save()
    return response.json({ updatedUser, Hello: 'old file below', old })
  }

  public async destroy({ request, params, response }: HttpContextContract) {
    let oldUrl = await Url.findOrFail(params.id)
    const isThisDistrict = request.input('isThisDistrict')
    if (!isThisDistrict) {
      const urlToBeDeleted = await Url.findOrFail(params.id)
      await urlToBeDeleted.related('clubUrls').detach()
      await urlToBeDeleted.delete()
      return response.json({ Deleted: 'old url below', oldUrl })
    } else {
      const urlToBeDeleted = await Url.findOrFail(params.id)
      await urlToBeDeleted.related('districtUrls').detach()
      await urlToBeDeleted.delete()
      return response.json({ Deleted: 'old url below', oldUrl })
    }
  }
}
