

const crudRoute = (app) => {
    app.route("users/:id?")
        .get((req, res) => {
            res.send("ROTA GET USERS")
        })
        .post((req, res) =>{
            res.send("ROTA POST USERS")
        })
        .put((req, res) => {
            res.send("ROTA PUT USERS")
        })
        .delete((req, res) => {
            res.send("ROTA POST USERS")
        })
}

module.exports = crudRoute;
