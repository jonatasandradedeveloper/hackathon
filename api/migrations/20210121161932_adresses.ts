import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('adresses', table => {
    table.increments('id').notNullable();
    table.timestamp('DateTimeInsert').defaultTo(knex.fn.now());
    table.integer('id_client').unsigned();
    table.string('Address').notNullable();
    table.string('Number', 5).notNullable();
    table.string('Neighborhood', 60).notNullable()
    table.string('City').notNullable()
    table.string('Complement').notNullable()
    table.string('UF').notNullable()
    table.enum('TypeAddress', ['Entrega', 'Cobranca'], {useNative: true, enumName: 'Entrega'}).notNullable();
    table.foreign('id_client').references('id').inTable('clients')
})
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('adresses')
}