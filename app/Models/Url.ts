import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import District from './District'
import Club from './Club'
import SocialMedia from 'Contracts/Enums/SocialMedia'

export default class Url extends BaseModel {
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
  })
  public districtUrls: ManyToMany<typeof District>

  @manyToMany(() => Club, {
    pivotTable: 'club_url',
  })
  public clubUrls: ManyToMany<typeof Club>
}
