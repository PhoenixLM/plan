const express       = require('express')
const load          = require('express-load')
const sessions      = require('client-sessions')
const config        = require('config')
const auth          = require('./middleware/auth')

const _SECRET   = config.get('Session.secret')
const _DURATION = config.get('Session.duration')

module.exports = () => {
    const app = express()

    app.use(sessions({
        cookieName: 'sessao',
        secret: _SECRET,
        duration: _DURATION * 60 * 60 * 1000,
        activeDuration: 5 * 60 * 1000
    }))
    app.use('/admin/*', auth)
    app.use(express.static('./public'))
    app.set('view engine', 'ejs')
    load('controllers').into(app)

    return app
}