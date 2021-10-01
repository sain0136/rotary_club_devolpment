import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class DistrictUrl extends BaseSchema {
  protected tableName = 'district_url'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('district_id').unsigned().references('district_id').inTable('district')
      table.integer('districturl_id').unsigned().references('url_id').inTable('url')
      table.timestamps(true, true)
    })
  }

  public async down() {}
}
