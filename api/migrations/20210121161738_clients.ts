import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('clients', table => {
    table.increments('id');
    table.timestamp('DateTimeInsert').defaultTo(knex.fn.now());
    table.string('FirstName', 30).notNullable();
    table.string('LastName', 50).notNullable();
    table.string('Genre', 1).notNullable();
    table.string('BirthDate').notNullable()
})
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('clients')
}

