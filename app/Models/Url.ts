import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import District from './District'
import Club from './Club'
import SocialMedia from 'Contracts/Enums/SocialMedia'
import { NonPlurizeNamingStrategy } from 'Contracts/NonPlurizeNamingStrategy'

export default class Url extends BaseModel {
  public static namingStrategy = new NonPlurizeNamingStrategy()
  @column({ isPrimary: true })
  public urlId: number

  @column()
  public urlType: SocialMedia

  @column()
  public url: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => District, {
    pivotTable: 'district_url',
    localKey: 'urlId',
    relatedKey: 'districtId',
    pivotForeignKey: 'districturl_id',
    pivotRelatedForeignKey: 'district_id',
    pivotTimestamps: true,
  })
  public districtUrls: ManyToMany<typeof District>

  @manyToMany(() => Club, {
    pivotTable: 'club_url',
    localKey: 'urlId',
    relatedKey: 'clubId',
    pivotForeignKey: 'url_id',
    pivotRelatedForeignKey: 'club_id',
    pivotTimestamps: true,
  })
  public clubUrls: ManyToMany<typeof Club>
}
