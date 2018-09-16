const fs     = require('fs')
const gm     = require('gm')
const rimraf = require('rimraf')

move = (req, imovelId, callback) => {
    var pathIn = './tmp/' + req.sessao.userId + '/'
    var pathOut = './public/img/' + imovelId + '/'
    fs.mkdir(pathOut, (err) => {
        if (err) callback(err)
        fs.readdir(pathIn, (err, files) => {
            if(err) callback(err)
            for(let i = 0; i < files.length; i++) {
                fs.copyFile(pathIn + files[i], pathOut + i + '.jpg', () => {
                    if(err) callback(err)
                })
            }
            gm(pathIn + 'principal.jpg')
            .resize('200', '200', '^')
            .gravity('Center')
            .crop('200', '200')
            .write(pathOut + 'thumb.jpg', function (err) {
                if (err) callback(err)
                rimraf(pathIn, (err) => {
                    if(err) callback(err)
                    console.log(' hooray! ')
                    callback()
                })
            }); 
        })  
    })
}

module.exports = move