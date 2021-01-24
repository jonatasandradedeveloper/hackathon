module.exports = (app : any) => {
    app.route("/clients")
        .get(app.app.controllers.clients.index)

    app.route("/categories")
        .get(app.app.controllers.categories.index)
        .post(app.app.controllers.categories.create)

    app.route("/categories/:id")
        .put(app.app.controllers.categories.update)
        .delete(app.app.controllers.categories.delete)

    app.route("/products")
        .get(app.app.controllers.products.index)
    }