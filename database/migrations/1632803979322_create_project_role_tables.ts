import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProjectRole extends BaseSchema {
  protected tableName = 'project_role'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('projectrole_id').primary().unsigned()
      table.integer('project_id', 50).unsigned().references('project_id').inTable('project')
      table.integer('user_id', 50).unsigned().references('user_id').inTable('user')
      table.string('role', 50).notNullable()
      table.timestamps(true, true)
    })
  }

  public async down() {}
}
