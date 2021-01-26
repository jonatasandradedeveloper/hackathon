module.exports = (app : any) => {
    app.route("/clients")
        .get(app.app.controllers.clients.index)
        .post(app.app.controllers.clients.create)
    
    app.route("/clients/:id")
        .get(app.app.controllers.clients.loadClient)
        .put(app.app.controllers.clients.update)
        .delete(app.app.controllers.clients.remove)

    app.route("/clients/adresses/:id")
        .get(app.app.controllers.adresses.loadByClient)
        .post(app.app.controllers.adresses.create)

    app.route("/clients/contacts/:id")
        .get(app.app.controllers.contacts.loadByClient)
        .post(app.app.controllers.contacts.create)
    
    app.route("/adresses/:id")
        .get(app.app.controllers.adresses.index)
        .put(app.app.controllers.adresses.update)
        .delete(app.app.controllers.adresses.remove)

    app.route("/contacts/:id")
        .get(app.app.controllers.contacts.index)
        .put(app.app.controllers.contacts.update)
        .delete(app.app.controllers.contacts.remove)

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
    
