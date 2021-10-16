import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Pledge extends BaseSchema {
  protected tableName = 'pledge'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('pledge_id').primary().unsigned()
      table.integer('pledge_amount', 50).unique().notNullable()
      table.integer('user_id', 50).notNullable().unsigned().references('user_id').inTable('user')
      table
        .integer('project_id', 50)
        .notNullable()
        .unsigned()
        .references('project_id')
        .inTable('project')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps(true, true)
    })
  }

  public async down() {}
}
