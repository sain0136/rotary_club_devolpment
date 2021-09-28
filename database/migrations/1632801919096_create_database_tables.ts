import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class District extends BaseSchema {
  protected tableName = 'district'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('district_id').primary()
      table.string('district_name', 50).unique().notNullable
      table.string('district_email', 50).notNullable
      table.string('meeting_location', 50).notNullable
      table.string('meeting_frequency', 255).unique().notNullable
      table.string('charter_date', 180).notNullable
      table.string('district_president', 50).nullable
      table.string('district_description', 50).nullable
      table.string('districtimage_filepath').nullable
      table.timestamps(true, true)
    })
  }

  public async down() {}
}
