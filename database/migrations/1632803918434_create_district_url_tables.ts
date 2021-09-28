import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class DistrictUrl extends BaseSchema {
  protected tableName = 'district_url'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
    })
  }
}
