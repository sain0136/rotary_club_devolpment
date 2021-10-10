import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import GrantType from 'Contracts/Enums/ProjectType'
import User from './User'
import { NonPlurizeNamingStrategy } from 'Contracts/NonPlurizeNamingStrategy'

export default class Project extends BaseModel {
  public static namingStrategy = new NonPlurizeNamingStrategy()
  @column({ isPrimary: true })
  public projectId: number

  @column()
  public project_name: string

  @column()
  public project_theme: string

  @column()
  public grant_type: GrantType

  @column()
  public pdf_label?: string

  @column()
  public funding_goal: number

  @column()
  public current_funds: number

  @column()
  public created_by: string

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

  @manyToMany(() => User, {
    pivotTable: 'project_role',
    pivotColumns: ['role', 'projectrole_id'],
  })
  public projectRole: ManyToMany<typeof User>

  @manyToMany(() => User, {
    pivotTable: 'pledge',
    pivotColumns: ['pledge_id', 'pledge_amount'],
  })
  public pledges: ManyToMany<typeof User>
}
