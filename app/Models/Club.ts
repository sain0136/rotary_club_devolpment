import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Club extends BaseModel {
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
}
