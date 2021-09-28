import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ClubRole extends BaseSchema {
  protected tableName = 'club_role'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
    })
  }
}
