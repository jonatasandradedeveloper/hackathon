module.exports = (app: any) => {
  app.route("/")
    .get((req: any, res: any) => res.json({"success": "Sucesso"}))

  app.route("/clients")
    .get(app.controllers.api.clients.get)
    .post(app.controllers.clients.post)
  
  app.route("/categories")
  .get(app.controllers.api.categories.get)
  .post(app.controllers.categories.post)

  app.route("/products")
  .get(app.controllers.api.products.get)
  .post(app.controllers.products.post)

  app.route("/products/categoteries/:id")
  .get(app.controllers.api.products.get)
  
  app.route("/sales_order")
  .get(app.controllers.api.sales_order.get)
  .delete(app.controllers.sales_order.delete)

  app.route("/sales_order_item")
  .get(app.controllers.api.sales_order_item.get)
  .delete(app.controllers.sales_order_item.delete)

  app.route("/adresses")
    .get(app.controllers.api.adresses.get)

  app.route("/contacts")
  .get(app.controllers.api.contacts.get)
}