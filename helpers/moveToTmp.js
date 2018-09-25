const fs = require('fs')

var move = (req, callback)  => {
    const filePath = './tmp/' + req.sessao.userId + '/'
    fs.mkdir(filePath, (err) => {
        let qqfile = req.files.qqfile
        qqfile.mv(filePath + qqfile.name, (err) => {
            if(err) return callback(err)
            else return callback()
        })
    })
}

module.exports = move