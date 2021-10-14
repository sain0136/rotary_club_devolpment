import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ClubRole extends BaseSchema {
  protected tableName = 'club_role'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('role_id').primary().unsigned()
      table.string('club_role', 50).notNullable()
      table.integer('role_type', 5).nullable()
      table.integer('user_id', 50).unsigned().references('user_id').inTable('user')
      table.integer('club_id', 50).unsigned().references('club_id').inTable('club')
      table.timestamps(true, true)
    })
  }

  public async down() {}
}
