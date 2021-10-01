import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Project extends BaseModel {
  @column({ isPrimary: true })
  public projectId: number

  @column()
  public project_name: string

  @column()
  public districtName: string

  @column()
  public project_theme: string

  @column()
  public grant_type: string

  @column()
  public pdf_label: string

  @column()
  public funding_goal: number

  @column()
  public current_funds: number

  @column()
  public created_by: number

  @column()
  public region: string

  @column()
  public rotary_year: string

  @column()
  public currency: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
