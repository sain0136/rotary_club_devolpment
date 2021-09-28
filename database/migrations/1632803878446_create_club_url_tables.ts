import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ClubUrl extends BaseSchema {
  protected tableName = 'club_url'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {})
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {})
  }
}
