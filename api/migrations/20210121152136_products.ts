import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('products', table => {
    table.increments('id')
    table.string('name').notNullable();
    table.timestamp('date_time_insert').defaultTo(knex.fn.now());
    table.integer('idcategorie').unsigned();
    table.string('description').notNullable();
    table.string('url').notNullable();
    table.string('unit', 5).notNullable();
    table.string('code', 15).notNullable();
    table.decimal('unitaryvalue').notNullable()
    table.foreign('idcategorie').references('id').inTable('categories')
})
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('products')
}

