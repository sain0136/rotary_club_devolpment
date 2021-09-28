import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Pledge extends BaseSchema {
  protected tableName = 'pledge'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('pledge_id').primary()
      table.string('pledge_amount', 50).unique().notNullable
      table.string('user_id', 50).notNullable
      table.string('project_id', 50).notNullable
      table.timestamps(true, true)
    })
  }

  public async down() {}
}
