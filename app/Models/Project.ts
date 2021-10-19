import { DateTime } from 'luxon'
import { BaseModel, column, computed, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import GrantType from 'Contracts/Enums/GrantType'
import User from './User'
import { NonPlurizeNamingStrategy } from 'Contracts/NonPlurizeNamingStrategy'

export default class Project extends BaseModel {
  public static namingStrategy = new NonPlurizeNamingStrategy()

  @computed()
  public pledgesAssociated: object

  @column({ isPrimary: true })
  public projectId: number

  @column()
  public projectName: string

  @column()
  public projectTheme: string

  @column()
  public grantType: GrantType

  @column()
  public pdfLabel?: string

  @column()
  public fundingGoal: number

  @column()
  public currentFunds: number

  @column()
  public createdBy: number

  @column()
  public region: string

  @column()
  public rotaryYear: string

  @column()
  public currency: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => User, {
    pivotTable: 'project_role',
    pivotColumns: ['role', 'projectrole_id'],
    localKey: 'projectId',
    relatedKey: 'userId',
    pivotForeignKey: 'project_id',
    pivotRelatedForeignKey: 'user_id',
    pivotTimestamps: true,
  })
  public projectRole: ManyToMany<typeof User>

  @manyToMany(() => User, {
    pivotTable: 'pledge',
    pivotColumns: ['pledge_id', 'pledge_amount'],
    localKey: 'projectId',
    relatedKey: 'userId',
    pivotForeignKey: 'project_id',
    pivotRelatedForeignKey: 'user_id',
    pivotTimestamps: true,
  })
  public pledges: ManyToMany<typeof User>
}
