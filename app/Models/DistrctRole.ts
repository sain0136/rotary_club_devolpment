import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class DistrctRole extends BaseModel {
  @column({ isPrimary: true })
  public roleId: number

  @column()
  public districtRole: string

  @column()
  public userId: number

  @column()
  public districtId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
