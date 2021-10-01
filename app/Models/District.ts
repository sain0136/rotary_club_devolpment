import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class District extends BaseModel {
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
}
