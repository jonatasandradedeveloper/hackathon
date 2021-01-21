import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('sales_order', table => {
    table.increments('id');
    table.timestamp('DateTimeInsert').defaultTo(knex.fn.now());
    table.integer('id_client').unsigned();
    table.string('OrderCode', 15).notNullable();
    table.string('OrderDate').notNullable();
    table.enum('Status', ['Pendente', 'Confirmado', 'Cancelado'], {useNative: true, enumName: 'Pendente'}).notNullable();
    table.decimal('Discount').notNullable().defaultTo('0.00');
    table.decimal('Addition').notNullable().defaultTo('0.00');
    table.decimal('Amount').notNullable();
    table.foreign('id_client').references('id').inTable('clients')
})
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('sales_order')
}

