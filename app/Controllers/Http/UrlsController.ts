import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Club from 'App/Models/Club'
import District from 'App/Models/District'
import Url from 'App/Models/Url'
import SocialMedia from 'Contracts/Enums/SocialMedia'

export default class UrlsController {
  public async index({}: HttpContextContract) {}

  public async create({}: HttpContextContract) {}

  public async getAllUrls({ request, response }: HttpContextContract) {
    const isThisDistrict: Boolean = request.input('isThisDistrict')
    const objectId: number = request.input('object_id')
    if (isThisDistrict) {
      const district: District = await District.findOrFail(objectId)
      const allUrls: Url[] = await Database.from('district_url')
        .select('url.*')
        .rightJoin('url', 'district_url.districturl_id', 'url.url_id')
        .where({ district_id: objectId })
      district.socialmedia = allUrls
      return response.json({ district })
    } else {
      const club: Club = await Club.findOrFail(objectId)
      const allUrls: Url[] = await Database.from('club_url')
        .select('url.*')
        .rightJoin('url', 'club_url.url_id', 'url.url_id')
        .where({ club_id: objectId })
      club.socialmedia = allUrls
      return response.json({ club })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const isThisDistrict: Boolean = request.input('isThisDistrict')
    const objectId: number = request.input('object_id')
    const socialMediaType: SocialMedia = request.input('url_type')
    const linkUrl: string = request.input('url')

    const url: Url = await Url.create({
      urlType: socialMediaType,
      url: linkUrl,
    })
    if (isThisDistrict) {
      const district: District = await District.findOrFail(objectId)
      await url.related('districtUrls').attach([district.districtId])
    } else {
      const club: Club = await Club.findOrFail(objectId)

      await url.related('clubUrls').attach([club.clubId])
    }
    const urlTitle = async (socialMediaType: number) => {
      return SocialMedia[socialMediaType]
    }
    return response.json({ url, RELTYPE: (await urlTitle(socialMediaType)) + ' link' })
  }

  public async show({ params, response }: HttpContextContract) {
    const urlId: number = parseInt(params.id)
    const urlById: Url = await Url.findOrFail(urlId)
    return response.json({ urlById })
  }

  public async edit({}: HttpContextContract) {}

  public async update({ request, params, response }: HttpContextContract) {
    const urlId: number = parseInt(params.id)
    const socialMediaType: SocialMedia = request.input('url_type')
    const linkUrl: string = request.input('url')
    const old: Url = await Url.findOrFail(urlId)

    const urlToBeUpdated: Url = await Url.findOrFail(urlId)
    const updatedUrl: Url = await urlToBeUpdated
      .merge({
        url: linkUrl,
        urlType: socialMediaType,
      })
      .save()
    return response.json({ updatedUrl: updatedUrl, Hello: 'old file below', old })
  }

  public async destroy({ request, params, response }: HttpContextContract) {
    const urlId: number = parseInt(params.id)
    const oldUrl: Url = await Url.findOrFail(urlId)
    const isThisDistrict: string = request.input('isThisDistrict')
    if (!isThisDistrict) {
      const urlToBeDeleted: Url = await Url.findOrFail(urlId)
      await urlToBeDeleted.related('clubUrls').detach()
      await urlToBeDeleted.delete()
      return response.json({ Deleted: 'old url below', oldUrl })
    } else {
      const urlToBeDeleted: Url = await Url.findOrFail(urlId)
      await urlToBeDeleted.related('districtUrls').detach()
      await urlToBeDeleted.delete()
      return response.json({ Deleted: 'old url below', oldUrl })
    }
  }
}
