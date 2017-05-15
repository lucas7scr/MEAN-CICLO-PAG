const express = require('express')
const router = express.Router()
const cicloPagamentoServico = require('../api/ciclopagamento/cicloPagamentoServicos.js')

module.exports = function(server) {

    //routers da API
    server.use('/api', router)
    cicloPagamentoServico.register(router, '/cicloPagamentos')
}