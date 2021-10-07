import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Url extends BaseSchema {
  protected tableName = 'url'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('url_id').primary().unsigned()
      table.integer('url_type', 10).notNullable()
      table.string('url', 50).notNullable()
      table.timestamps(true, true)
    })
  }

  public async down() {}
}
