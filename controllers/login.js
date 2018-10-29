const Admin = require('../models/admin')
const Cliente = require('../models/cliente')

module.exports = (app) => {
    app.get('/areaExclusiva', (req, res, next) => {
        res.render('areaExclusiva', {error : false})
    })


    app.get('/login', (req, res, next) => {
        res.render('login', {error : false})
    })

    app.get('/login/logout', (req, res, next) => {
        req.sessao.userId = null
        res.redirect('/login')
    })

    app.post('/login', (req, res, next) => {
        var username = req.body.username
        var password = req.body.password

        Admin.authenticate(username, password, (err, admin) => {
            if(err === null) {
                req.sessao.userId = admin._id
                res.redirect('admin/painel')
            }
            else {
                Cliente.authenticate(username, password, (err, cliente) => {
                    if(err === null) {
                        req.sessao.userId = cliente._id
                        res.redirect('cliente/painel')
                    }
                    else res.render('login', {error : true})
                })
            }
        })
    })
}