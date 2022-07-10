import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Project extends BaseSchema {
  protected tableName = 'project'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('project_id').primary().unsigned()

      table.string('project_name', 50).notNullable().unique()
      table.string('project_theme', 2000).nullable()
      table.string('country', 30).notNullable()
      table.string('region', 30).notNullable()
      table.date('start_date').nullable()
      table.date('estimated_completion').notNullable()
      table.date('exchange_date').nullable()

      table.jsonb('area_focus').notNullable()

      table.double('funding_goal', 20).notNullable()
      table.double('current_funds', 20).nullable()
      table.double('anticipated_funding', 20).nullable()
      table.double('intial_sponsor_club_contribution', 20).nullable()
      table.double('co_operating_organisation_contribution', 20).nullable()
      table.double('district_simplified_grant_request', 20).nullable()
      table.double('district_matching_grant_request', 20).nullable()

      table.string('currency', 5).notNullable().defaultTo('USD')

      table.jsonb('attached_letters').nullable()
      table.jsonb('extra_descriptions').nullable()
      table.jsonb('itemised_budget').nullable()
      table.jsonb('project_funding').nullable()
      table.jsonb('hostclub_information').nullable()

      table.integer('rotary_year', 10).notNullable()
      table.string('project_status', 50).notNullable()
      table.string('image_link', 250).nullable()
      table.integer('created_by', 50).notNullable()
      table.string('grant_type', 50).notNullable()
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
