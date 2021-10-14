import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class DistrictRole extends BaseSchema {
  protected tableName = 'district_role'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('role_id').primary().unsigned()
      table.string('district_role', 50).notNullable()
      table.integer('role_type', 5).nullable()
      table.integer('user_id', 50).unsigned().references('user_id').inTable('user')
      table.integer('district_id', 50).unsigned().references('district_id').inTable('district')
      table.timestamps(true, true)
    })
  }

  public async down() {}
}
