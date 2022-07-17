import { DateTime } from 'luxon'
import {
  BaseModel,
  belongsTo,
  hasMany,
  HasMany,
  BelongsTo,
  column,
  manyToMany,
  ManyToMany,
  computed,
} from '@ioc:Adonis/Lucid/Orm'
import District from './District'
import User from './User'
import Url from './Url'
import { NonPlurizeNamingStrategy } from 'Contracts/NonPlurizeNamingStrategy'
export default class Club extends BaseModel {
  public static namingStrategy = new NonPlurizeNamingStrategy()

  @computed()
  public titledRoles: any[]

  @computed()
  public socialmedia: Url[]

  @column({ isPrimary: true })
  public clubId: number

  @column()
  public clubName: string

  @column()
  public clubAddress: string

  @column()
  public clubCity: string

  @column()
  public clubPostal: string

  @column()
  public clubProvince: string

  @column()
  public clubCountry: string

  @column()
  public clubPhone?: string

  @column()
  public clubDescription?: string

  @column()
  public clubEmail?: string

  @column()
  public charterDate?: string

  @column()
  public motherClub?: string

  @column()
  public districtId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => User, { foreignKey: 'clubId' })
  public users: HasMany<typeof User>

  @manyToMany(() => User, {
    pivotTable: 'club_role',
    pivotColumns: ['club_role', 'role_type'],
    localKey: 'clubId',
    relatedKey: 'userId',
    pivotForeignKey: 'club_id',
    pivotRelatedForeignKey: 'user_id',
    pivotTimestamps: true,
  })
  public clubRole: ManyToMany<typeof User>

  @manyToMany(() => Url, {
    pivotTable: 'club_url',
    localKey: 'clubId',
    relatedKey: 'urlId',
    pivotForeignKey: 'club_id',
    pivotRelatedForeignKey: 'url_id',
    pivotTimestamps: true,
  })
  public clubUrls: ManyToMany<typeof Url>

  @belongsTo(() => District, {
    localKey: 'districtId',
  })
  public district: BelongsTo<typeof District>
}
