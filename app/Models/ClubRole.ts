import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ClubRole extends BaseModel {
  @column({ isPrimary: true })
  public roleId: number

  @column()
  public clubRole: string

  @column()
  public userId: number

  @column()
  public clubId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
