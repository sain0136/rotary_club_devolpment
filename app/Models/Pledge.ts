import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Pledge extends BaseModel {
  @column({ isPrimary: true })
  public pledgeId: number

  @column()
  public pledgeAmount: number

  @column()
  public userId: number

  @column()
  public projectId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
