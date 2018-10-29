const Imovel = require('../models/imovel')

module.exports = (app) => {
    app.get('/vendas/:id', (req, res, next) => {
        let id = req.params.id
        Imovel.findById(id, (err, imovel) => {
            if(err) return next(err)
            if(!imovel) return next()
            res.render('infoVenda', {imovel : imovel})
        })
    })

    app.get('/alugueis/:id', (req, res, next) => {
        let id = req.params.id
        Imovel.findById(id, (err, imovel) => {
            if(err) return next(err)
            if(!imovel) return next()
            res.render('infoAluguel', {imovel : imovel})
        })
    })
}