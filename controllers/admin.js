const Imovel    = require('../models/imovel')
const Admin     = require('../models/admin')
const Cliente   = require('../models/cliente')
const Boleto    = require('../models/boleto')
const moveTo    = require('../helpers/moveToTmp')
const moveFrom  = require('../helpers/moveImgFromTmp')
const moveBFrom = require('../helpers/moveBoletoFromTmp')
var util = require("util");

module.exports = (app) => {
    app.get('/admin/painel', (req, res, next) => {
        res.render('admin/painel')
    })

    app.post('/admin/media', (req, res, next) => {
        if(req.files.qqfile) {
            moveTo(req, (err) => {
                if(err) res.send({'success': false})
                else res.send({'success': true})
            })
        } else {
            res.send('Erro, nenhum arquivo no body da request')
        }
    })

    app.post('/admin/uploadBoleto', (req, res, next) => {
        if(req.files.qqfile) {
            moveTo(req, (err) => {
                if(err) res.send({'success': false})
                else res.send({'success': true})
            })
        } else {
            res.send('Erro, nenhum arquivo no body da request')
        }
    })

    /********** CRUD Imoveis **********/

    app.get('/admin/imoveis', (req, res, next) => {
        Imovel.find({}, (err, imovels) => {
            if(err) return next(err)
            res.render('admin/imoveis', {imovels : imovels})
        })
    })

    app.get('/admin/imoveis/search/:id', (req, res, next) => {
        let id = req.params.id
        Imovel.findById(id, (err, imovel) => {
            if(err) return next(err)
            if(!imovel) return next()
            res.render('admin/imovel', {imovel : imovel})
        })
    })

    app.get('/admin/imoveis/newLocacaoC', (req, res, next) => {
        res.render('admin/imovel-formLC')
    })

    app.get('/admin/imoveis/newLocacaoR', (req, res, next) => {
        res.render('admin/imovel-formLR')
    })

    app.get('/admin/imoveis/newVenda', (req, res, next) => {
        res.render('admin/imovel-formV')
    })

    app.post('/admin/imoveis/new', (req, res, next) => {
        let imovel = new Imovel(req.body)
        console.log(req.body)
        imovel.save((err) => {
            if(err) return next(err)
            moveFrom(req, imovel._id, (err) => {
                if(err) return next(err)
            })
            res.redirect('/admin/imoveis')
        })
    })

    app.get('/admin/imoveis/delete/:id', (req, res, next) => {
        let id = req.params.id
        Imovel.findById(id, (err, imovel) => {
            if(err) return next(err)
            if(!imovel) return next()
            imovel.remove((err) => {
                if(err) return next(err)
                res.redirect('/admin/imoveis')
            })
        })
    })

    app.post('/admin/imoveis/update/:id', (req, res, next) => {
        let id = req.params.id
        Imovel.findById(id, (err, imovel) => {
            if(err) return next(err)
            if(!imovel) return next()
            imovel.set(req.body)
            imovel.save((err) => {
                if(err) return next(err)
                moveFrom(req, imovel._id, (err) => {
                    if(err) return next(err)
                })
                res.redirect('/admin/imoveis')
            })
        })
    })

    /********** CRUD Admins **********/

    app.get('/admin/admins', (req, res, next) => {
        Admin.find({}, (err, admins) => {
            if(err) return next(err)
            res.render('admin/admins', {admins : admins})
        })
    })

    app.get('/admin/admins/search/:id', (req, res, next) => {
        let id = req.params.id
        Admin.findById(id, (err, admin) => {
            if(err) return next(err)
            if(!admin) return next()
            res.render('admin/admin', {admin : admin})
        })
    })

    app.get('/admin/admins/new', (req, res, next) => {
        res.render('admin/admin-form')
    })

    app.post('/admin/admins/new', (req, res, next) => {
        let admin = new Admin(req.body)
        admin.save((err) => {
            if(err) return next(err)
            res.redirect('/admin/admins') 
        })
    })

    app.get('/admin/admins/delete/:id', (req, res, next) => {
        let id = req.params.id
        Admin.findById(id, (err, admin) => {
            if(err) return next(err)
            if(!admin) return next()
            admin.remove((err) => {
                if(err) return next(err)
                res.redirect('/admin/admins')
            })
        })
    })

    app.post('/admin/admins/update/:id', (req, res, next) => {
        let id = req.params.id
        Admin.findById(id, (err, admin) => {
            if(err) return next(err)
            if(!admin) return next()
            admin.set(req.body)
            admin.save((err) => {
                if(err) return next(err)
                res.redirect('/admin/admins')
            })
        })
    })

    /********** CRUD Clientes **********/

    app.get('/admin/clientes', (req, res, next) => {
        Cliente.find({}, (err, clientes) => {
            if(err) return next(err)
            res.render('admin/clientes', {clientes : clientes})
        })
    })

    app.get('/admin/clientes/search/:id', (req, res, next) => {
        let id = req.params.id
        Cliente.findById(id, (err, cliente) => {
            if(err) return next(err)
            if(!cliente) return next()
            res.render('admin/cliente', {cliente : cliente})
        })
    })

    app.get('/admin/clientes/new', (req, res, next) => {
        res.render('admin/cliente-form')
    })

    app.post('/admin/clientes/new', (req, res, next) => {
        let cliente = new Cliente(req.body)
        cliente.save((err) => {
            if(err) return next(err)
            res.redirect('/admin/clientes') 
        })
    })

    app.get('/admin/clientes/delete/:id', (req, res, next) => {
        let id = req.params.id
        Cliente.findById(id, (err, cliente) => {
            if(err) return next(err)
            if(!cliente) return next()
            cliente.remove((err) => {
                if(err) return next(err)
                res.redirect('/admin/clientes')
            })
        })
    })

    app.post('/admin/clientes/update/:id', (req, res, next) => {
        let id = req.params.id
        Cliente.findById(id, (err, cliente) => {
            if(err) return next(err)
            if(!cliente) return next()
            cliente.set(req.body)
            cliente.save((err) => {
                if(err) return next(err)
                res.redirect('/admin/clientes')
            })
        })
    })

    /********** CRUD Boletos **********/

    app.get('/admin/boletos', (req, res, next) => {
        Boleto.find({}, (err, boletos) => {
            if(err) return next(err)
            res.render('admin/boletos', {boletos : boletos})
        })
    })

    app.get('/admin/boletos/search/:id', (req, res, next) => {
        let id = req.params.id
        Boleto.findById(id, (err, boleto) => {
            if(err) return next(err)
            if(!boleto) return next()
            res.render('admin/boleto', {boleto : boleto})
        })
    })

    app.get('/admin/boletos/new', (req, res, next) => {
        Cliente.find({}, (err, clientes) => {
            if(err) return next(err)
            res.render('admin/boleto-form', {clientes : clientes})
        })
    })

    app.post('/admin/boletos/new', (req, res, next) => {
        let boleto = new Boleto(req.body)
        boleto.save((err) => {
            if(err) return next(err)
            moveBFrom(req, boleto._id, (err) => {
                if(err) return next(err)
            })
            res.redirect('/admin/boletos') 
        })
    })

    app.get('/admin/boletos/delete/:id', (req, res, next) => {
        let id = req.params.id
        Boleto.findById(id, (err, boleto) => {
            if(err) return next(err)
            if(!boleto) return next()
            boleto.remove((err) => {
                if(err) return next(err)
                res.redirect('/admin/boletos')
            })
        })
    })

    app.post('/admin/boletos/update/:id', (req, res, next) => {
        let id = req.params.id
        Boleto.findById(id, (err, boleto) => {
            if(err) return next(err)
            if(!boleto) return next()
            boleto.set(req.body)
            boleto.save((err) => {
                if(err) return next(err)
                res.redirect('/admin/boletos')
            })
        })
    })
    
    app.get('/admin/boletos/file/:id', (req, res, next) => {
        let tempFile="./public/boletos/"+req.params.id+"/boleto.pdf"
        res.download(tempFile)
    })
}