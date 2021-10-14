import { DateTime } from 'luxon'
import {
  BaseModel,
  belongsTo,
  beforeSave,
  BelongsTo,
  column,
  manyToMany,
  ManyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'
import Club from './Club'
import District from './District'
import Project from './Project'
import { NonPlurizeNamingStrategy } from 'Contracts/NonPlurizeNamingStrategy'

export default class User extends BaseModel {
  public static namingStrategy = new NonPlurizeNamingStrategy()
  @column({ isPrimary: true })
  public userId: number

  @column()
  public membershipId: string

  @column()
  public firstname: string

  @column()
  public lastname: string

  @column()
  public address?: string

  @column()
  public userCity?: string

  @column()
  public userPostal?: string

  @column()
  public userProvince?: string

  @column()
  public userCountry?: string

  @column()
  public phone?: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public clubId?: number

  @column()
  public districtId?: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => District, {
    localKey: 'districtId',
  })
  public districts: BelongsTo<typeof District>

  @belongsTo(() => Club, {
    localKey: 'clubId',
  })
  public clubs: BelongsTo<typeof Club>

  @manyToMany(() => Club, {
    pivotTable: 'club_role',
    pivotColumns: ['club_role', 'role_type'],
    localKey: 'userId',
    relatedKey: 'clubId',
    pivotForeignKey: 'user_id',
    pivotRelatedForeignKey: 'club_id',
    pivotTimestamps: true,
  })
  public clubRole: ManyToMany<typeof Club>

  @manyToMany(() => District, {
    pivotTable: 'district_role',
    pivotColumns: ['district_role', 'role_id'],
  })
  public districtRole: ManyToMany<typeof District>

  @manyToMany(() => Project, {
    pivotTable: 'project_role',
    pivotColumns: ['role', 'projectrole_id'],
  })
  public projectRole: ManyToMany<typeof Project>

  @manyToMany(() => Project, {
    pivotTable: 'pledge',
    pivotColumns: ['pledge_id', 'pledge_amount'],
  })
  public pledges: ManyToMany<typeof Project>

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
