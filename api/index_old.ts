const app = require("express")()
const cors = require('cors')
const consign = require("consign")
const bodyParser = require("body-parser")

app.use(cors())
app.use(bodyParser.json())

consign()
    .then("start/routes.ts")
    .into(app)


app.listen(3333, () => { 
    console.log("Servidor rodando na porta 3333") 
})