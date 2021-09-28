import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Url extends BaseSchema {
  protected tableName = 'url'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
    })
  }
}
