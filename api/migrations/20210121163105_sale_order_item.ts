import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('sales_order_item', table => {
    table.increments('id')
    table.timestamp('DateTimeInsert').defaultTo(knex.fn.now());
    table.integer('id_sale_order').unsigned();
    table.integer('id_product').unsigned();
    table.decimal('Quantity').notNullable();
    table.decimal('ProductValue').notNullable();
    table.foreign('id_sale_order').references('id').inTable('sales_order')
    table.foreign('id_product').references('id').inTable('products')
})
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('sales_order_item')
}

