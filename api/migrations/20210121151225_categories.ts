import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('categories', (table: Knex.TableBuilder) => {
    table.increments('id').primary()
    table.string('name').notNullable();
    table.string('description').notNullable();
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('categories');
}

