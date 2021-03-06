const fs     = require('fs')
const gm     = require('gm')
const rimraf = require('rimraf')

move = (req, imovelId, callback) => {
    var pathIn = './tmp/' + req.sessao.userId + '/'
    var pathOut = './public/img/' + imovelId + '/'
    try {
        fs.mkdirSync(pathOut);
    } catch (err) {
        if (err.code !== 'EEXIST') throw callback(err)
    }
    fs.readdir(pathIn, (err, files) => {
        if(err) callback(err)
        try {
            fs.copyFile(pathIn + files[0], pathOut + 'principal.jpg', () => {
                if(err) callback(err)
            })
            for(let i = 0; i < files.length; i++) {
                fs.copyFile(pathIn + files[i], pathOut + i + '.jpg', () => {
                    if(err) callback(err)
                })
            }
            gm(pathIn + 'principal.jpg')
            .resize('200', '200', '^')
            .gravity('Center')
            .write(pathOut + 'thumb.jpg', function (err) {
                if (err) callback(err)
                rimraf(pathIn, (err) => {
                    if(err) callback(err)
                    callback()
                })
            });
        } catch(e) {
            console.log("undefined",e);
        }
    })
}

module.exports = move