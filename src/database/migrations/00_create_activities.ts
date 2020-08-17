import Knex from 'knex'

export async function up (knex: Knex) {
  return knex.schema.createTable('activities', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.integer('day').notNullable();
    table.integer('time').notNullable();
  })
}

export async function down (knex: Knex) {
  return knex.schema.dropTable('activities');
}