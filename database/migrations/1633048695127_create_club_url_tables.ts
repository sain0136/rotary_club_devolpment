import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ClubUrl extends BaseSchema {
  protected tableName = 'club_url'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('club_id').unsigned().references('club_id').inTable('club')
      table.integer('url_id').unsigned().references('url_id').inTable('url')
      table.timestamps(true, true)
    })
  }

  public async down() {}
}
