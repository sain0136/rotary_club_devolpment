import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProjectRole extends BaseSchema {
  protected tableName = 'project_role'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
    })
  }
}
