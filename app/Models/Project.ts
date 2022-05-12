import { DateTime } from 'luxon'
import { BaseModel, column, computed, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import { NonPlurizeNamingStrategy } from 'Contracts/NonPlurizeNamingStrategy'


export default class Project extends BaseModel {
  public static namingStrategy = new NonPlurizeNamingStrategy()
  @computed()
  public grantString: String

  @computed()
  public pledgesAssociated: object

  @computed()
  public extraDescriptionsObject: object

  @computed()
  public itemisedBudgetArray: object

  @computed()
  public attachedLetters: object

  @computed()
  public projectFunding: object


  @column({ isPrimary: true })
  public projectId: number

  @column()
  public projectName: string

  @column()
  public projectTheme: string

  @column()
  public areaFocus: any

  @column()
  public grantType: any

  @column.date()
  public startDate: DateTime

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
  public region: any

 @column()
  public rotaryYear: number

  @column()
  public projectStatus: any


  @column()
  public country: string


  @column()
  public currency: string

  @column()
  public imageLink: string

  @column({ serializeAs: null })
  public attached_letters: string

  @column({ serializeAs: null })
  public extraDescriptions: string

    @column({ serializeAs: null })
  public itemisedBudget: string

  @column({ serializeAs: null })
  public project_funding: string

  @column({ serializeAs: null })
  public hostclub_information: string


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
