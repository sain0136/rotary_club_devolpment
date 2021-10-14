import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Club from './Club'
import User from './User'
import Url from './Url'
import { NonPlurizeNamingStrategy } from 'Contracts/NonPlurizeNamingStrategy'

export default class District extends BaseModel {
  public static namingStrategy = new NonPlurizeNamingStrategy()

  @column({ isPrimary: true })
  public districtId: number

  @column()
  public districtName: string

  @column()
  public districtEmail: string

  @column()
  public meetingLocation?: string

  @column()
  public meetingFrequency?: string

  @column()
  public charterDate?: string

  @column()
  public districtPresident?: string

  @column()
  public districtDescription?: string

  @column()
  public districtlogoFilepath?: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Club, { foreignKey: 'districtId' })
  public clubs: HasMany<typeof Club>

  @hasMany(() => User, { foreignKey: 'districtId' })
  public users: HasMany<typeof User>

  @manyToMany(() => User, {
    pivotTable: 'district_role',
    pivotColumns: ['district_role', 'role_id'],
  })
  public districtRole: ManyToMany<typeof User>

  @manyToMany(() => Url, {
    pivotTable: 'district_url',
    localKey: 'districtId',
    relatedKey: 'urlId',
    pivotForeignKey: 'district_id',
    pivotRelatedForeignKey: 'districturl_id',
    pivotTimestamps: true,
  })
  public districtUrls: ManyToMany<typeof Url>
}
