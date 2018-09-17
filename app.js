const app    = require('./custom-express')()
const http   = require('http').Server(app)
const config = require('config')

const _HOST = config.get('Server.host')
const _PORT = process.env.PORT || config.get('Server.port')

const server = http.listen(_PORT, (err) => {
    if(err) console.log(err)
    console.log('Server running @ %s', _PORT)
})