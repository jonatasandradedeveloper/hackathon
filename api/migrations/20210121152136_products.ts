import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('products', table => {
    table.increments('id')
    table.timestamp('DateTimeInsert').defaultTo(knex.fn.now());
    table.integer('id_categorie').unsigned();
    table.string('Description').notNullable();
    table.string('Unit', 5).notNullable();
    table.string('BarCode', 15).notNullable();
    table.decimal('UnitaryValue').notNullable()
    table.foreign('id_categorie').references('id').inTable('categories')
})
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('products')
}

