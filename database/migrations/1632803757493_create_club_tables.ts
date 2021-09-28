import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Clubs extends BaseSchema {
  protected tableName = 'clubs'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
    })
  }
}
