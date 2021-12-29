import { DateTime } from 'luxon'
import { BaseModel, column, computed, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import GrantType from 'Contracts/Enums/GrantType'
import User from './User'
import { NonPlurizeNamingStrategy } from 'Contracts/NonPlurizeNamingStrategy'
import AreaFocus from 'Contracts/Enums/AreaFocus'

export default class Project extends BaseModel {
  public static namingStrategy = new NonPlurizeNamingStrategy()

  @computed()
  public pledgesAssociated: object

  @computed()
  public extraDescriptionsObject: object

  @computed()
  public itemisedBudgetArray: object

  @column({ isPrimary: true })
  public projectId: number

  @column()
  public projectName: string

  @column()
  public projectTheme: string

  @column()
  public areaFocus: AreaFocus

  @column()
  public grantType: GrantType

  @column.date()
  public estimatedCompletion: DateTime

  @column()
  public fundingGoal: number

  @column()
  public currentFunds: number

  @column()
  public anticipatedFunding: number

  @column()
  public createdBy: number

  @column()
  public region: string

  @column()
  public rotaryYear: number

  @column()
  public currency: string

  @column({ serializeAs: null })
  public extraDescriptions: string

  @column({ serializeAs: null })
  public itemisedBudget: string

  @column()
  public clubId: number

  @column()
  public districtId: number

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
