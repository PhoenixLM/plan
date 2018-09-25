const Boleto   = require('../models/boleto')

module.exports = (app) => {
    app.get('/cliente/painel', (req, res, next) => {
        res.render('cliente/painel')
    })

    app.get('/cliente/boletos', (req, res, next) => {
        Boleto.find({id_cliente : req.sessao.userId}, (err, boletos) => {
            if(err) return next(err)
            res.render('cliente/boletos', {boletos : boletos})
        })
    })

    app.get('/cliente/boletos/file/:id', (req, res, next) => {
        let tempFile="./public/boletos/"+req.params.id+"/boleto.pdf"
        res.download(tempFile)
    })
}

