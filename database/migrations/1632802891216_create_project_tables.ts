import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Project extends BaseSchema {
  protected tableName = 'project'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('project_id').primary()
      table.string('project_name', 50).unique().notNullable
      table.string('project_theme', 50).notNullable
      table.string('grant_type', 50).notNullable
      table.string('pdf_label', 255).unique().notNullable
      table.string('funding_goal', 180).notNullable
      table.string('current_funds', 50).nullable
      table.string('admin_user', 50).nullable
      table.string('region', 50).nullable
      table.string('rotary_year', 50).nullable
      table.string('currency', 50).nullable
      table.timestamps(true, true)
    })
  }

  public async down() {}
}
