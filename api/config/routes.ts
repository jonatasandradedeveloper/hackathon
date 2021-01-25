module.exports = (app : any) => {
    app.route("/clients")
        .get(app.app.controllers.clients.index)

    app.route("/categories")
        .get(app.app.controllers.categories.index)
        .post(app.app.controllers.categories.create)

    app.route("/categories/:id")
        .get(app.app.controllers.categories.indexProd)
        .put(app.app.controllers.categories.update)
        .delete(app.app.controllers.categories.delete)

    app.route("/products")
        .get(app.app.controllers.products.index)
        .post(app.app.controllers.products.create)
    
    app.route("/products/:id")
        .put(app.app.controllers.products.update)
        .delete(app.app.controllers.products.delete)
    }
    
