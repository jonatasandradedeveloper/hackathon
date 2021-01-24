module.exports = (app : any) => {
    app.route("/clients")
        .get(app.app.controllers.clients.index)

    app.route("/categories")
        .get(app.app.controllers.categories.index)
        .post(app.app.controllers.categories.create)
    }