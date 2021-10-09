import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class District extends BaseSchema {
  protected tableName = 'district'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('district_id').primary().unsigned()
      //table.integer('admin_id', 50).unsigned().references('user_id').inTable('user')
      table.string('district_name', 50).unique().notNullable()
      table.string('district_email', 50).notNullable().unique()
      table.string('meeting_location', 50).nullable()
      table.string('meeting_frequency', 255).nullable()
      table.string('charter_date', 180).nullable()
      table.string('district_president', 50).nullable()
      table.string('district_description', 1000).nullable()
      table.string('districtlogo_filepath', 255).nullable()
      table.timestamps(true, true)
    })
  }

  public async down() {}
}
