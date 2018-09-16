module.exports = (app) => {
    app.get('/', (req, res, next) => {
        res.render('index')
    })

    app.get('/vendas', (req, res, next) => {
        res.render('vendas')
    })

    app.get('/alugueisr', (req, res, next) => {
        res.render('alugueisr')
    })

    app.get('/alugueisc', (req, res, next) => {
        res.render('alugueisc')
    })

    app.get('/locacao', (req, res, next) => {
        res.render('locacao')
    })

    app.get('/textpesquisa', (req, res, next) => {
        res.render('textpesquisa')
    })
}