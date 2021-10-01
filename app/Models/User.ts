import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public userId: number

  @column()
  public clubCity: string

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

  @column()
  public password: string

  @column()
  public clubId?: number

  @column()
  public districtId?: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
