import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Project extends BaseSchema {
  protected tableName = 'project'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('project_id').primary().unsigned()
      table.string('project_name', 50).notNullable().unique()
      table.string('project_theme', 50).notNullable()
      table.string('grant_type', 50).notNullable()
      table.string('pdf_label', 255).notNullable()
      table.integer('funding_goal', 180).notNullable()
      table.integer('current_funds', 50).notNullable()
      table.integer('created_by', 50).unsigned().references('user_id').inTable('user')
      table.string('region', 50).notNullable()
      table.string('rotary_year', 50).notNullable()
      table.string('currency', 50).notNullable().defaultTo('CAD')
      table.timestamps(true, true)
    })
  }

  public async down() {}
}
