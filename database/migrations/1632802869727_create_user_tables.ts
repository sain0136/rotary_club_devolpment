import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class User extends BaseSchema {
  protected tableName = 'user'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('user_id').primary()
      table.string('membership_id', 50).unique().notNullable
      table.string('firstname', 50).notNullable
      table.string('lastname', 50).notNullable
      table.string('address', 255).unique().notNullable
      table.string('phone', 180).notNullable
      table.string('email', 50).nullable
      table.string('password', 50).nullable
      table.string('club_id', 50).nullable
      table.string('district_id', 50).nullable
      table.timestamps(true, true)
    })
  }

  public async down() {}
}
