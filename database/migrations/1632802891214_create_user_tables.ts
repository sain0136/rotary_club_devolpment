import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class User extends BaseSchema {
  protected tableName = 'user'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('user_id').primary().unsigned()
      table.string('membership_id', 50).nullable()
      table.string('firstname', 50).notNullable()
      table.string('lastname', 50).notNullable()
      table.string('address', 255).nullable()
      table.string('user_city', 255).nullable()
      table.string('user_postal', 255).nullable()
      table.string('user_province', 255).nullable()
      table.string('user_country', 255).nullable()
      table.string('phone', 180).nullable()
      table.string('email', 50).notNullable().unique()
      table.string('password', 255).notNullable()
      table
        .integer('club_id', 50)
        .nullable()
        .unsigned()
        .references('club_id')
        .inTable('club')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('district_id', 50)
        .nullable()
        .unsigned()
        .references('district_id')
        .inTable('district')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps(true, true)
    })
  }

  public async down() {}
}
