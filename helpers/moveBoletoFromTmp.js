const fs     = require('fs')
const gm     = require('gm')
const rimraf = require('rimraf')

move = (req, boletoId, callback) => {
    var pathIn = './tmp/' + req.sessao.userId + '/'
    var pathOut = './public/boletos/' + boletoId + '/'
    fs.mkdir(pathOut, (err) => {
        if (err) callback(err)
        fs.readdir(pathIn, (err, files) => {
            if(err) callback(err)
            for(let i = 0; i < files.length; i++) {
                fs.copyFile(pathIn + files[i], pathOut + "boleto.pdf", () => {
                    if(err) callback(err)
                    rimraf(pathIn, (err) => {
                        if(err) callback(err)
                        else callback()
                    })
                })
            }
        })
    })
}

module.exports = move