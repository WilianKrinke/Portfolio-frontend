

const crudRoute = (app) => {
    app.route("/users/:id?")
        .get((req, res) => {
            res.status(200).send("ROTA GET USERS")
        })
        .put((req, res) => {
            res.send("ROTA PUT USERS")
        })
        .delete((req, res) => {
            res.send("ROTA Delete USERS")
        })
}

module.exports = crudRoute;
