import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Project extends BaseSchema {
  protected tableName = 'project'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('project_id').primary().unsigned()
      table.string('project_name', 50).notNullable().unique()
      table.string('project_theme', 50).nullable()
      table.string('area_focus', 50).notNullable()
      table.string('grant_type', 50).notNullable()
      table.date('start_date').nullable()
      table.date('estimated_completion').nullable()
      table.double('funding_goal', 180).notNullable()
      table.double('current_funds', 50).notNullable()
      table.double('anticipated_funding', 50).nullable()
      table.integer('created_by', 50).notNullable()
      table.string('region', 50).notNullable()
      table.integer('rotary_year', 50).notNullable()
      table.string('project_status', 50).notNullable()
      table.string('country', 50).notNullable()
      table.string('currency', 50).notNullable().defaultTo('USD')
      table.string('image_link', 50).nullable()
      table.jsonb('attached_letters').nullable()
      table.jsonb('extra_descriptions').nullable()
      table.jsonb('itemised_budget').nullable()
      table.jsonb('project_funding').nullable()
      table.jsonb('hostclub_information').nullable()
      table
        .integer('club_id')
        .nullable()
        .unsigned()
        .references('club_id')
        .inTable('club')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      table
        .integer('district_id')
        .notNullable()
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
