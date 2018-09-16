const app    = require('./custom-express')()
const http   = require('http').Server(app)
const config = require('config')

const _HOST = config.get('Server.host')
const _PORT = config.get('Server.port')

const server = http.listen(_PORT, _HOST, (err) => {
    if(err) console.log(err)
    const host = server.address().address
    const port = server.address().port

    console.log('Server running @ %s : %s', host, port)
})