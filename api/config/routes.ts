module.exports = (app : any) => {
    app.route("/")
        .get(app.app.controllers.client.get)
}