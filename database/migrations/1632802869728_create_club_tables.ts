import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Clubs extends BaseSchema {
  protected tableName = 'club'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('club_id').primary().unsigned()
      table.string('club_name', 50).notNullable()
      table.string('club_address', 255).notNullable()
      table.string('club_city', 255).notNullable()
      table.string('club_postal', 255).notNullable()
      table.string('club_province', 255).notNullable()
      table.string('club_country', 255).notNullable()
      table.string('club_phone', 50).nullable()
      table.string('club_email', 180).nullable()
      table.string('club_description', 1000).nullable()
      table.string('charter_date').nullable()
      table.string('mother_club', 50).nullable()
      table.integer('district_id', 50).unsigned().references('district_id').inTable('district')
      table.timestamps(true, true)
    })
  }

  public async down() {}
}
