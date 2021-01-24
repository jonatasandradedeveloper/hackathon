import express from 'express'
const consign = require('consign')
const app = express()
app.use(express.json())

consign()
.include('./config/db')
.then('./app/controllers/clients.ts')
.then('./app/controllers/categories.ts')
.then('./config/routes.ts')
.into(app)

app.listen(3000, () => console.log('Servidor Rodando!'))