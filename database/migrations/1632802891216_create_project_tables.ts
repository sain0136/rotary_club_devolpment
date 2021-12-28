import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Project extends BaseSchema {
  protected tableName = 'project'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('project_id').primary().unsigned()
      table.string('project_name', 50).notNullable().unique()
      table.string('project_theme', 50).notNullable()
      table.string('area_focus', 50).notNullable()
      table.string('grant_type', 50).notNullable()
      table.date('estimated_completion').notNullable()
      table.double('funding_goal', 180).notNullable()
      table.double('current_funds', 50).notNullable()
      table.integer('created_by', 50).notNullable()
      table.string('region', 50).notNullable()
      table.integer('rotary_year', 50).notNullable()
      table.string('currency', 50).notNullable().defaultTo('USD')
      table.jsonb('extra_descriptions').notNullable()
      table.jsonb('itemised_budget').notNullable()
      table.integer('club_id').notNullable()
      table.integer('district_id').notNullable()

      table.timestamps(true, true)
    })
  }

  public async down() {}
}
