const express = require("express")
const res = require("express/lib/response")
const routes = express.Router()

let db = [
    {'1': {nome: 'cliente1', idade: 20}},
    {'2': {nome: 'cliente2', idade: 20}},
    {'3': {nome: 'cliente3', idade: 20}}
]

//buscar dados
routes.get('/', (req, res) => {
    return res.json(db)
})

//inserir dados
routes.post('/add', (req, res) => {
    const body = req.body
    if (!body){
        res.status(400).end()
    }
    db.push(body)
    return res.json(body)
})

routes.post('/login', (req, res) => {
    const body = req.body
    if(db.includes(req.body)){
        return(res.json(db))
    }else{
        return(res.json(db))
    }
})

module.exports = routes