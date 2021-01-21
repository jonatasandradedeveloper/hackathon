import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('contacts', table => {
    table.increments('id').notNullable();
    table.timestamp('DateTimeInsert').defaultTo(knex.fn.now());
    table.integer('id_client').unsigned();
    table.string('ContactName', 60).notNullable();
    table.string('Phone', 15).notNullable();
    table.string('Email', 100).notNullable()
    table.foreign('id_client').references('id').inTable('clients')
})
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('contacts')
}

